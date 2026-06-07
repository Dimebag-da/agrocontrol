import { MapPin, Plus, Trash2 } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { supabase } from '../../services/supabase'
import { AlertasPanel } from './AlertasPanel'
import { Charts } from './Charts'
import { ControlRiego } from './ControlRiego'
import { PrediccionWidget } from './PrediccionWidget'
import StatsCards from './StatsCards'
import { WeatherWidget } from './WeatherWidget'

const DEFAULT_ZONE_CONFIG = {
  umbral_humedad_min: 15,
  tiempo_riego_segundos: 180,
  modo_automatico: true,
}

export function Dashboard({ session }) {
  const [zonas, setZonas] = useState([])
  const [mediciones, setMediciones] = useState([])
  const [loading, setLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const [zonaSeleccionada, setZonaSeleccionada] = useState(null)
  const [nuevaZona, setNuevaZona] = useState({ nombre: '', tipo_cultivo: '', area_metros: '' })

  const cargarZonas = useCallback(async () => {
    setLoading(true)

    const { data: zonasData, error } = await supabase
      .from('zonas')
      .select('*')
      .eq('user_id', session.user.id)
      .order('created_at', { ascending: false })

    if (error) {
      toast.error('Error al cargar las zonas')
      setZonas([])
      setZonaSeleccionada(null)
      setLoading(false)
      return
    }

    const nuevasZonas = zonasData || []
    setZonas(nuevasZonas)
    setZonaSeleccionada((zonaActual) => {
      if (!nuevasZonas.length) return null
      return nuevasZonas.some((zona) => zona.id === zonaActual)
        ? zonaActual
        : nuevasZonas[0].id
    })
    setLoading(false)
  }, [session.user.id])

  const cargarMediciones = useCallback(async () => {
    if (!zonaSeleccionada) {
      setMediciones([])
      return
    }

    const { data: medicionesData, error } = await supabase
      .from('mediciones')
      .select('*')
      .eq('zona_id', zonaSeleccionada)
      .order('created_at', { ascending: false })
      .limit(50)

    if (error) {
      toast.error('Error al cargar las mediciones')
      return
    }

    setMediciones(medicionesData || [])
  }, [zonaSeleccionada])

  useEffect(() => {
    cargarZonas()
  }, [cargarZonas])

  useEffect(() => {
    cargarMediciones()

    const interval = setInterval(cargarMediciones, 30000)
    return () => clearInterval(interval)
  }, [cargarMediciones])

  const crearZona = async (e) => {
    e.preventDefault()
    
    const areaMetros = Number.parseFloat(nuevaZona.area_metros)
    const { error, data } = await supabase
      .from('zonas')
      .insert({
        user_id: session.user.id,
        nombre: nuevaZona.nombre,
        tipo_cultivo: nuevaZona.tipo_cultivo,
        area_metros: Number.isFinite(areaMetros) && areaMetros > 0 ? areaMetros : null
      })
      .select()
      .maybeSingle()
    
    if (!error && data) {
      await supabase
        .from('configuracion_zona')
        .upsert({ zona_id: data.id, ...DEFAULT_ZONE_CONFIG }, { onConflict: 'zona_id' })

      setShowModal(false)
      setNuevaZona({ nombre: '', tipo_cultivo: '', area_metros: '' })
      setZonas((zonasActuales) => [data, ...zonasActuales.filter((zona) => zona.id !== data.id)])
      setZonaSeleccionada(data.id)
      
      toast.success(`🌱 Zona "${nuevaZona.nombre}" creada correctamente`, {
        icon: '✅',
        duration: 3000,
        style: { background: '#10b981', color: '#fff' }
      })
    } else {
      toast.error('❌ Error al crear la zona', {
        duration: 4000,
        style: { background: '#ef4444', color: '#fff' }
      })
    }
  }

  const eliminarZona = async (id, nombre) => {
    if (window.confirm(`¿Eliminar la zona "${nombre}"? Se borrarán todas sus mediciones y configuraciones.`)) {
      const { error } = await supabase.from('zonas').delete().eq('id', id)
      
      if (!error) {
        const zonasRestantes = zonas.filter(z => z.id !== id)
        setZonas(zonasRestantes)
        if (zonaSeleccionada === id) {
          setZonaSeleccionada(zonasRestantes[0]?.id || null)
        }
        
        toast.success(`🗑️ Zona "${nombre}" eliminada correctamente`, {
          icon: '✅',
          duration: 3000,
          style: { background: '#10b981', color: '#fff' }
        })
      } else {
        toast.error('❌ Error al eliminar la zona', {
          duration: 4000,
          style: { background: '#ef4444', color: '#fff' }
        })
      }
    }
  }

  // Obtener última medición para las stats
  const ultimaMedicion = mediciones[0] || null
  const humedadActual = ultimaMedicion?.humedad_suelo ?? ultimaMedicion?.humedad ?? null
  const temperaturaActual = ultimaMedicion?.temperatura_ambiente ?? ultimaMedicion?.temperatura ?? null
  const riegoActivo = ultimaMedicion?.riego_activo || false

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-500"></div>
      </div>
    )
  }

  return (
    <div>
      {/* Stats Cards */}
      <StatsCards 
        humedad={humedadActual}
        temperatura={temperaturaActual}
        riegoActivo={riegoActivo}
        modoAutomatico={true}
        umbral={15}
      />
      
      {/* Widget del Clima */}
      <div className="mb-6">
        <WeatherWidget />
      </div>

      {/* Widget de Predicción IA */}
      <div className="mb-6">
        <PrediccionWidget zonaId={zonaSeleccionada} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Lista de zonas - Sidebar */}
        <div className="card-modern p-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Mis Zonas
            </h3>
            <button
              onClick={() => setShowModal(true)}
              className="p-1.5 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-200 transition"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
          
          <div className="space-y-2 max-h-96 overflow-y-auto">
            {zonas.map(zona => (
              <div
                key={zona.id}
                onClick={() => setZonaSeleccionada(zona.id)}
                className={`p-3 rounded-xl cursor-pointer transition-all duration-200 ${
                  zonaSeleccionada === zona.id
                    ? 'bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border-l-4 border-emerald-500'
                    : 'hover:bg-gray-50 dark:hover:bg-gray-800'
                }`}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium text-gray-800 dark:text-gray-200">{zona.nombre}</p>
                    {zona.tipo_cultivo && (
                      <p className="text-xs text-gray-500 dark:text-gray-400">{zona.tipo_cultivo}</p>
                    )}
                    {zona.area_metros && (
                      <p className="text-xs text-gray-400 dark:text-gray-500">{zona.area_metros} m²</p>
                    )}
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      eliminarZona(zona.id, zona.nombre)
                    }}
                    className="p-1 rounded-lg text-gray-400 hover:text-red-500 transition"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
            
            {zonas.length === 0 && (
              <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                <MapPin className="w-12 h-12 mx-auto mb-2 opacity-50" />
                <p className="text-sm">No hay zonas creadas</p>
                <button
                  onClick={() => setShowModal(true)}
                  className="mt-2 text-emerald-600 text-sm hover:underline"
                >
                  Crear primera zona
                </button>
              </div>
            )}
          </div>

          {/* Indicador del simulador */}
          <div className="mt-4 pt-3 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500 dark:text-gray-400">🤖 Simulador IA:</span>
              <span className="text-xs px-2 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400">
                🟢 Activo
              </span>
            </div>
            <p className="text-xs text-gray-400 mt-1">
              Predicción activa | Datos cada 30s
            </p>
          </div>
        </div>

        {/* Panel de control */}
        <div className="lg:col-span-2">
          <ControlRiego zonaId={zonaSeleccionada} session={session} />
        </div>
      </div>
      
      {/* Gráficas */}
      <Charts mediciones={mediciones} />
      
      {/* Panel de alertas flotante */}
      <AlertasPanel session={session} zonaId={zonaSeleccionada} />

      {/* Modal para nueva zona */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 w-full max-w-md">
            <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Nueva Zona de Riego</h3>
            <form onSubmit={crearZona}>
              <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
                  Nombre *
                </label>
                <input
                  type="text"
                  required
                  value={nuevaZona.nombre}
                  onChange={(e) => setNuevaZona({ ...nuevaZona, nombre: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-gray-700 dark:text-white"
                  placeholder="Ej: Huerta Principal"
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
                  Tipo de Cultivo
                </label>
                <input
                  type="text"
                  value={nuevaZona.tipo_cultivo}
                  onChange={(e) => setNuevaZona({ ...nuevaZona, tipo_cultivo: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-gray-700 dark:text-white"
                  placeholder="Ej: Tomates, Lechugas"
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
                  Área (m²)
                </label>
                <input
                  type="number"
                  step="0.1"
                  value={nuevaZona.area_metros}
                  onChange={(e) => setNuevaZona({ ...nuevaZona, area_metros: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-gray-700 dark:text-white"
                  placeholder="50"
                />
              </div>
              
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-4 py-2 rounded-lg hover:from-emerald-600 hover:to-teal-700 transition"
                >
                  Crear Zona
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
