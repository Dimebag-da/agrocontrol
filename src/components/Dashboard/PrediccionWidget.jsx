import { AlertTriangle, Brain, TrendingDown, TrendingUp } from 'lucide-react'
import { useEffect, useState } from 'react'
import { supabase } from '../../services/supabase'

export function PrediccionWidget({ zonaId }) {
  const [prediccion, setPrediccion] = useState(null)
  const [loading, setLoading] = useState(true)
  const [emptyMessage, setEmptyMessage] = useState('')

  useEffect(() => {
    if (!zonaId) {
      setPrediccion(null)
      setLoading(false)
      setEmptyMessage('')
      return undefined
    }

    const cargarPrediccion = async () => {
      try {
        setLoading(true)
        setEmptyMessage('')

        // Obtener últimas 10 mediciones para calcular tendencia
        const { data: mediciones, error } = await supabase
          .from('mediciones')
          .select('humedad_suelo, created_at')
          .eq('zona_id', zonaId)
          .order('created_at', { ascending: false })
          .limit(10)

        if (error) throw error
        
        const valores = (mediciones || [])
          .map(m => m.humedad_suelo ?? m.humedad)
          .filter(Number.isFinite)
          .reverse()

        if (valores.length >= 3) {
          // Calcular tendencia con los datos reales
          const ultimos = valores.slice(-5)
          
          // Calcular pendiente simple
          const pendiente = (ultimos[ultimos.length - 1] - ultimos[0]) / Math.max(1, ultimos.length - 1)
          
          let tendencia = 'estable'
          if (pendiente > 0.2) tendencia = 'subiendo'
          else if (pendiente < -0.2) tendencia = 'bajando'
          
          const ultimoValor = valores[valores.length - 1]
          let prediccionValor = ultimoValor + pendiente * 2
          prediccionValor = Math.max(8, Math.min(32, prediccionValor))
          
          // Obtener umbral
          const { data: config } = await supabase
            .from('configuracion_zona')
            .select('umbral_humedad_min')
            .eq('zona_id', zonaId)
            .maybeSingle()
          
          const umbral = config?.umbral_humedad_min ?? 15
          
          setPrediccion({
            actual: Number(ultimoValor.toFixed(1)),
            valor: Number(prediccionValor.toFixed(1)),
            tendencia,
            pendiente: Number(pendiente.toFixed(2)),
            esCritica: prediccionValor < umbral,
            confianza: mediciones.length >= 8 ? 'alta' : 'media'
          })
        } else {
          setPrediccion(null)
          setEmptyMessage('Se necesitan al menos 3 mediciones para predecir')
        }
      } catch (error) {
        console.error('Error en predicción:', error)
        setPrediccion(null)
        setEmptyMessage('No se pudo calcular la prediccion')
      } finally {
        setLoading(false)
      }
    }

    cargarPrediccion()
    
    // Actualizar cada 30 segundos
    const interval = setInterval(cargarPrediccion, 30000)
    return () => clearInterval(interval)
  }, [zonaId])

  if (!zonaId) {
    return null
  }

  if (loading) {
    return (
      <div className="card-modern p-4">
        <div className="animate-pulse flex items-center gap-3">
          <Brain className="w-8 h-8 text-gray-300" />
          <div className="flex-1">
            <div className="h-3 bg-gray-200 rounded w-24 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-16"></div>
          </div>
        </div>
      </div>
    )
  }

  if (!prediccion) {
    return (
      <div className="card-modern p-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-purple-100 dark:bg-purple-900/30">
            <Brain className="w-5 h-5 text-purple-600 dark:text-purple-400" />
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Predicción IA
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {emptyMessage || 'Sin datos suficientes'}
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="card-modern p-4 border-l-4 border-purple-500">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-purple-100 dark:bg-purple-900/30">
            <Brain className="w-5 h-5 text-purple-600 dark:text-purple-400" />
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Predicción IA
            </h3>
            <div className="flex items-baseline gap-2">
              <p className="text-2xl font-bold">{prediccion.valor}%</p>
              <span className="text-xs text-gray-400">en 1-2 horas</span>
            </div>
            <div className="flex items-center gap-2 mt-1">
              {prediccion.tendencia === 'subiendo' ? (
                <TrendingUp className="w-3 h-3 text-green-500" />
              ) : prediccion.tendencia === 'bajando' ? (
                <TrendingDown className="w-3 h-3 text-red-500" />
              ) : null}
              <span className="text-xs text-gray-500">
                Tendencia: {prediccion.tendencia} ({prediccion.pendiente > 0 ? '+' : ''}{prediccion.pendiente}%/hora)
              </span>
            </div>
          </div>
        </div>
        
        {prediccion.esCritica && (
          <div className="flex items-center gap-1 px-2 py-1 rounded-lg bg-red-100 dark:bg-red-900/30">
            <AlertTriangle className="w-3 h-3 text-red-500" />
            <span className="text-xs font-medium text-red-600 dark:text-red-400">
              Alerta preventiva
            </span>
          </div>
        )}
        
        <div className="text-right">
          <span className={`text-xs px-2 py-1 rounded-full ${
            prediccion.confianza === 'alta' 
              ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
              : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
          }`}>
            Confianza: {prediccion.confianza}
          </span>
        </div>
      </div>
      
      {prediccion.esCritica && (
        <div className="mt-3 p-2 rounded-lg bg-amber-50 dark:bg-amber-900/20 text-xs text-amber-700 dark:text-amber-400">
          ⚠️ Se recomienda preparar el riego. La humedad podría bajar del umbral crítico.
        </div>
      )}
    </div>
  )
}
