import { Pause, Play, Settings as SettingsIcon, Zap } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import toast from 'react-hot-toast'
import { detenerSimulador, iniciarSimulador } from '../../services/simulador'
import { supabase } from '../../services/supabase'

const DEFAULT_CONFIG = {
  umbral_humedad_min: 15,
  tiempo_riego_segundos: 180,
  modo_automatico: true,
}

const normalizeConfig = (config) => ({
  ...DEFAULT_CONFIG,
  ...(config || {}),
})

export function ControlRiego({ zonaId, session }) {
  const [config, setConfig] = useState(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [riegoActivo, setRiegoActivo] = useState(false)
  const [ultimaMedicion, setUltimaMedicion] = useState(null)
  const timeoutRef = useRef(null)

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (!zonaId) {
      setConfig(DEFAULT_CONFIG)
      setUltimaMedicion(null)
      setRiegoActivo(false)
      setLoading(false)
      detenerSimulador()
      return undefined
    }

    const cargarDatos = async () => {
      setLoading(true)
      setConfig(DEFAULT_CONFIG)
      setUltimaMedicion(null)
      setRiegoActivo(false)
      
      const { data: configData, error: configError } = await supabase
        .from('configuracion_zona')
        .select('*')
        .eq('zona_id', zonaId)
        .maybeSingle()
      
      let nextConfig = normalizeConfig(configData)

      if (!configData && !configError) {
        const { data: nuevaConfig } = await supabase
          .from('configuracion_zona')
          .upsert({ zona_id: zonaId, ...DEFAULT_CONFIG }, { onConflict: 'zona_id' })
          .select()
          .maybeSingle()

        nextConfig = normalizeConfig(nuevaConfig)
      }

      setConfig(nextConfig)

      if (zonaId && session?.user?.id) {
        await iniciarSimulador(zonaId, session.user.id)
      }
      
      const { data: medicionData } = await supabase
        .from('mediciones')
        .select('*')
        .eq('zona_id', zonaId)
        .order('created_at', { ascending: false })
        .limit(1)
      
      if (medicionData && medicionData.length > 0) {
        setUltimaMedicion(medicionData[0])
        setRiegoActivo(medicionData[0].riego_activo || false)
      }
      
      setLoading(false)
    }
    
    cargarDatos()

    return () => {
      detenerSimulador()
    }
  }, [zonaId, session?.user?.id])

  const guardarConfiguracion = async () => {
    if (!zonaId || !config) return

    setSaving(true)
    
    const payload = {
      zona_id: zonaId,
      umbral_humedad_min: config.umbral_humedad_min,
      tiempo_riego_segundos: config.tiempo_riego_segundos,
      modo_automatico: config.modo_automatico,
      updated_at: new Date().toISOString()
    }

    const { error, data } = await supabase
      .from('configuracion_zona')
      .upsert(payload, { onConflict: 'zona_id' })
      .select()
      .maybeSingle()
    
    if (!error) {
      setConfig(normalizeConfig(data || payload))
      toast.success('Configuracion guardada', {
        icon: '💾',
        duration: 3000
      })
    } else {
      toast.error('Error al guardar')
    }
    
    setSaving(false)
  }

  const activarRiegoManual = async () => {
    if (riegoActivo) {
      toast.info('El riego ya esta activo')
      return
    }
    
    const { data: medicionData } = await supabase
      .from('mediciones')
      .select('id')
      .eq('zona_id', zonaId)
      .order('created_at', { ascending: false })
      .limit(1)
    
    if (!medicionData || medicionData.length === 0) {
      toast.error('Aun no hay mediciones para esta zona')
      return
    }

    const medicionId = medicionData[0].id
    const duracion = config?.tiempo_riego_segundos ?? 180
    
    const { error } = await supabase
      .from('mediciones')
      .update({ riego_activo: true })
      .eq('id', medicionId)

    if (error) {
      toast.error('Error al activar el riego')
      return
    }
    
    setRiegoActivo(true)
    setUltimaMedicion((medicion) => (
      medicion?.id === medicionId ? { ...medicion, riego_activo: true } : medicion
    ))
    
    toast.success(`Riego activado por ${duracion}s`, {
      icon: '💧',
      duration: 4000
    })
    
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    
    timeoutRef.current = setTimeout(async () => {
      await supabase
        .from('mediciones')
        .update({ riego_activo: false })
        .eq('id', medicionId)
      
      setRiegoActivo(false)
      setUltimaMedicion((medicion) => (
        medicion?.id === medicionId ? { ...medicion, riego_activo: false } : medicion
      ))
      
      toast.success('Riego finalizado', {
        icon: '🌱',
        duration: 3000
      })
      
      timeoutRef.current = null
    }, duracion * 1000)
  }

  if (!zonaId) {
    return (
      <div className="card-modern p-12 text-center">
        <Zap className="w-16 h-16 mx-auto text-gray-300 dark:text-gray-600 mb-4" />
        <p className="text-gray-500 dark:text-gray-400">Selecciona una zona para controlar el riego</p>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="card-modern p-12 text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-500 mx-auto"></div>
      </div>
    )
  }

  // Valores realistas para La Paz
  const humedadActual = ultimaMedicion?.humedad_suelo ?? 18
  const umbralActual = config?.umbral_humedad_min ?? 15
  const necesitaRiego = humedadActual < umbralActual

  return (
    <div className="card-modern overflow-hidden">
      <div className="gradient-primary px-6 py-4">
        <h3 className="text-white font-semibold flex items-center gap-2">
          <Zap className="w-5 h-5" />
          Panel de Control Inteligente
        </h3>
        <p className="text-white/80 text-sm mt-1">Gestion avanzada del sistema de riego</p>
      </div>
      
      <div className="p-6">
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="text-center">
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Humedad</p>
            <p className={`text-2xl font-bold ${necesitaRiego ? 'text-red-500' : 'text-emerald-500'}`}>
              {humedadActual}%
            </p>
            {necesitaRiego && <p className="text-xs text-red-500">Critica</p>}
          </div>
          <div className="text-center">
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Riego</p>
            <p className={`text-2xl font-bold ${riegoActivo ? 'text-emerald-500' : 'text-gray-500'}`}>
              {riegoActivo ? 'ON' : 'OFF'}
            </p>
          </div>
          <div className="text-center">
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Modo</p>
            <p className="text-2xl font-bold text-blue-500">
              {config?.modo_automatico ? '🤖' : '👆'}
            </p>
          </div>
        </div>
        
        {necesitaRiego && !riegoActivo && config?.modo_automatico && (
          <div className="mb-4 p-3 bg-amber-50 dark:bg-amber-900/30 rounded-xl border-l-4 border-amber-500">
            <p className="text-sm text-amber-700 dark:text-amber-400">
              ⚠️ Humedad baja ({humedadActual}%). El sistema activara el riego.
            </p>
          </div>
        )}
        
        <button
          onClick={activarRiegoManual}
          disabled={riegoActivo}
          className={`w-full mb-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
            riegoActivo 
              ? 'bg-gray-200 dark:bg-gray-700 text-gray-500 cursor-not-allowed' 
              : 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white hover:shadow-lg hover:scale-105'
          }`}
        >
          {riegoActivo ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
          {riegoActivo ? 'RIEGO ACTIVO' : 'ACTIVAR RIEGO MANUAL'}
        </button>
        
        <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
          <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-4 flex items-center gap-2">
            <SettingsIcon className="w-4 h-4" />
            Configuracion Avanzada
          </h4>
          
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-600 dark:text-gray-400">Umbral de humedad</span>
                <span className="font-medium text-emerald-600 dark:text-emerald-400">
                  {config?.umbral_humedad_min}%
                </span>
              </div>
              <input
                type="range"
                min="8"
                max="25"
                step="1"
                value={config?.umbral_humedad_min ?? 15}
                onChange={(e) => setConfig({ ...config, umbral_humedad_min: parseInt(e.target.value) })}
                className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
              <p className="text-xs text-gray-400 mt-1">Recomendado: 12-18% para La Paz</p>
            </div>
            
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-600 dark:text-gray-400">Duracion del riego</span>
                <span className="font-medium text-emerald-600 dark:text-emerald-400">
                  {config?.tiempo_riego_segundos}s
                </span>
              </div>
              <input
                type="range"
                min="60"
                max="300"
                step="10"
                value={config?.tiempo_riego_segundos ?? 180}
                onChange={(e) => setConfig({ ...config, tiempo_riego_segundos: parseInt(e.target.value) })}
                className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
            </div>
            
            <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
              <div>
                <p className="font-medium text-gray-700 dark:text-gray-300">Modo Automatico</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {config?.modo_automatico ? 'Control IA activado' : 'Control manual requerido'}
                </p>
              </div>
              <button
                onClick={() => setConfig({ ...config, modo_automatico: !config?.modo_automatico })}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-all duration-300 ${
                  config?.modo_automatico ? 'bg-emerald-500' : 'bg-gray-400'
                }`}
              >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-all duration-300 ${
                  config?.modo_automatico ? 'translate-x-6' : 'translate-x-1'
                }`} />
              </button>
            </div>
            
            <button
              onClick={guardarConfiguracion}
              disabled={saving}
              className="w-full mt-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 py-2 rounded-xl font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 disabled:opacity-50"
            >
              {saving ? 'Guardando...' : '💾 Guardar Cambios'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
