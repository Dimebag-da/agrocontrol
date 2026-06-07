import { AlertTriangle, Bell, CheckCircle, Droplet, Thermometer, X, Zap } from 'lucide-react'
import { useEffect, useState } from 'react'
import { supabase } from '../../services/supabase'

const canUseNotifications = () => (
  typeof window !== 'undefined' && 'Notification' in window
)

export function AlertasPanel({ session, zonaId }) {
  const [alertas, setAlertas] = useState([])
  const [loading, setLoading] = useState(true)
  const [showPanel, setShowPanel] = useState(false)

  useEffect(() => {
    if (!session?.user?.id) return

    const cargarAlertas = async () => {
      setLoading(true)
      let query = supabase
        .from('alertas')
        .select('*')
        .eq('user_id', session.user.id)
        .order('created_at', { ascending: false })
        .limit(20)

      if (zonaId) {
        query = query.eq('zona_id', zonaId)
      }

      const { data } = await query
      if (data) setAlertas(data)
      setLoading(false)
    }

    cargarAlertas()

    const subscription = supabase
      .channel('alertas-channel')
      .on('postgres_changes', 
        { 
          event: 'INSERT', 
          schema: 'public', 
          table: 'alertas',
          filter: `user_id=eq.${session.user.id}`
        },
        (payload) => {
          setAlertas(prev => [payload.new, ...prev].slice(0, 20))
          if (canUseNotifications() && Notification.permission === 'granted') {
            new Notification(payload.new.titulo, {
              body: payload.new.mensaje,
              icon: '/vite.svg'
            })
          }
        }
      )
      .subscribe()

    if (canUseNotifications() && Notification.permission === 'default') {
      Notification.requestPermission()
    }

    return () => {
      subscription.unsubscribe()
    }
  }, [session?.user?.id, zonaId])

  const marcarLeida = async (id) => {
    await supabase
      .from('alertas')
      .update({ leida: true })
      .eq('id', id)
    
    setAlertas(alertas.map(a => a.id === id ? { ...a, leida: true } : a))
  }

  const marcarTodasLeidas = async () => {
    const noLeidas = alertas.filter(a => !a.leida).map(a => a.id)

    if (noLeidas.length === 0) return
    
    await supabase
      .from('alertas')
      .update({ leida: true })
      .in('id', noLeidas)
    
    setAlertas(alertas.map(a => ({ ...a, leida: true })))
  }

  const getIcono = (tipo) => {
    switch (tipo) {
      case 'humedad': return <Droplet className="w-5 h-5 text-blue-500" />
      case 'temperatura': return <Thermometer className="w-5 h-5 text-orange-500" />
      case 'riego': return <Zap className="w-5 h-5 text-emerald-500" />
      default: return <AlertTriangle className="w-5 h-5 text-yellow-500" />
    }
  }

  const getColorSeveridad = (severidad) => {
    switch (severidad) {
      case 'alta': return 'border-red-500 bg-red-50 dark:bg-red-900/20'
      case 'media': return 'border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20'
      default: return 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
    }
  }

  const noLeidas = alertas.filter(a => !a.leida).length

  return (
    <>
      <button
        onClick={() => setShowPanel(!showPanel)}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-emerald-500 to-teal-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      >
        <div className="relative">
          <Bell className="w-6 h-6" />
          {noLeidas > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {noLeidas}
            </span>
          )}
        </div>
      </button>

      {showPanel && (
        <div className="fixed bottom-24 right-6 z-50 w-96 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden animate-slide-up">
          <div className="bg-gradient-to-r from-emerald-500 to-teal-600 px-4 py-3 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Bell className="w-5 h-5 text-white" />
              <h3 className="text-white font-semibold">Centro de Alertas</h3>
              {noLeidas > 0 && (
                <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                  {noLeidas} nuevas
                </span>
              )}
            </div>
            <div className="flex gap-2">
              {noLeidas > 0 && (
                <button
                  onClick={marcarTodasLeidas}
                  className="text-white/80 hover:text-white text-xs"
                >
                  Leer todas
                </button>
              )}
              <button
                onClick={() => setShowPanel(false)}
                className="text-white/80 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="max-h-96 overflow-y-auto">
            {loading ? (
              <div className="p-8 text-center text-gray-500">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-500 mx-auto mb-2"></div>
                <p className="text-sm">Cargando alertas...</p>
              </div>
            ) : alertas.length === 0 ? (
              <div className="p-8 text-center text-gray-500">
                <CheckCircle className="w-12 h-12 mx-auto mb-2 text-emerald-500 opacity-50" />
                <p className="text-sm">No hay alertas</p>
                <p className="text-xs mt-1">Las alertas aparecerán aquí</p>
              </div>
            ) : (
              alertas.map(alerta => (
                <div
                  key={alerta.id}
                  className={`p-4 border-l-4 transition-all duration-300 ${
                    alerta.leida ? 'opacity-60' : ''
                  } ${getColorSeveridad(alerta.severidad)}`}
                >
                  <div className="flex justify-between items-start">
                    <div className="flex gap-3 flex-1">
                      {getIcono(alerta.tipo)}
                      <div className="flex-1">
                        <p className="font-semibold text-gray-800 dark:text-gray-200 text-sm">
                          {alerta.titulo}
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 text-xs mt-1">
                          {alerta.mensaje}
                        </p>
                        <p className="text-gray-400 dark:text-gray-500 text-xs mt-2">
                          {new Date(alerta.created_at).toLocaleString()}
                        </p>
                      </div>
                    </div>
                    {!alerta.leida && (
                      <button
                        onClick={() => marcarLeida(alerta.id)}
                        className="text-gray-400 hover:text-emerald-500 text-xs"
                      >
                        ✓ Leer
                      </button>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}

      <style>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
    </>
  )
}
