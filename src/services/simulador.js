import { supabase } from './supabase'

let intervaloSimulador = null
let simuladorActivo = false
let humedadBase = 18
let temperaturaBase = 9
let humedadAmbiente = 55
let direccionHumedad = -1
let direccionTemp = 1
let simuladorRiegoActivo = false
let historialHumedad = []
let historialTemp = []
let horaSimulada = 12
let estacionActual = 'seca'

// Configuración de parámetros por cultivo
const parametrosCultivo = {
  'Hortalizas': { humedadIdeal: [15, 25], tempIdeal: [10, 18], consumoDiario: 3.5 },
  'Frutales': { humedadIdeal: [12, 22], tempIdeal: [12, 20], consumoDiario: 4.2 },
  'Cereales': { humedadIdeal: [10, 20], tempIdeal: [8, 16], consumoDiario: 2.8 },
  'Forrajes': { humedadIdeal: [14, 24], tempIdeal: [10, 17], consumoDiario: 3.0 },
  'Flores': { humedadIdeal: [16, 26], tempIdeal: [12, 19], consumoDiario: 2.5 },
  'default': { humedadIdeal: [12, 22], tempIdeal: [8, 18], consumoDiario: 3.0 }
}

const random = (min, max) => {
  return Number((Math.random() * (max - min) + min).toFixed(1))
}

// Determinar estación según fecha
const actualizarEstacion = () => {
  const mes = new Date().getMonth() + 1
  if (mes >= 4 && mes <= 9) {
    estacionActual = 'seca'
  } else {
    estacionActual = 'humeda'
  }
}

// Calcular factor estacional
const getFactorEstacional = () => {
  if (estacionActual === 'seca') {
    return { humedadFactor: 0.7, tempFactor: 1.1, evaporacion: 1.3 }
  } else {
    return { humedadFactor: 1.3, tempFactor: 0.9, evaporacion: 0.8 }
  }
}

// Calcular temperatura según hora del día
const getTemperaturaPorHora = (baseTemp, hora) => {
  const variacion = Math.sin((hora - 14) * Math.PI / 12) * 3
  let temp = baseTemp + variacion
  temp = Math.max(3, Math.min(18, temp))
  return Number(temp.toFixed(1))
}

// Función para predecir próxima humedad (tendencia lineal)
const predecirProximaHumedad = () => {
  if (historialHumedad.length < 5) return null
  
  const ultimos = historialHumedad.slice(-6)
  let suma = 0
  for (let i = 0; i < ultimos.length - 1; i++) {
    suma += ultimos[i + 1] - ultimos[i]
  }
  const tendencia = suma / (ultimos.length - 1)
  
  let prediccion = ultimos[ultimos.length - 1] + tendencia * 1.5
  prediccion = Math.max(8, Math.min(32, Number(prediccion.toFixed(1))))
  
  return {
    valor: prediccion,
    tendencia: tendencia > 0.1 ? 'subiendo' : tendencia < -0.1 ? 'bajando' : 'estable',
    pendiente: Number(tendencia.toFixed(2))
  }
}

// Calcular evapotranspiración (pérdida de agua)
const calcularEvapotranspiracion = (temp, humedadAmb, velocidadViento = 2.5) => {
  const factorTemp = 0.5 + (temp / 20)
  const factorHumedad = 1 - (humedadAmb / 100)
  const eto = 2.0 * factorTemp * factorHumedad * (velocidadViento / 2)
  return Number(eto.toFixed(2))
}

// =============================================
// FUNCIONES DE ALERTAS AGREGADAS
// =============================================

// Generar alerta de humedad baja
const generarAlertaHumedadBaja = async (zonaId, userId, humedad, umbral) => {
  if (!userId) return
  
  if (humedad < umbral) {
    const { data: alertaReciente } = await supabase
      .from('alertas')
      .select('id')
      .eq('zona_id', zonaId)
      .eq('tipo', 'humedad')
      .gte('created_at', new Date(Date.now() - 30 * 60 * 1000).toISOString())
      .limit(1)
    
    if (!alertaReciente || alertaReciente.length === 0) {
      await supabase.from('alertas').insert({
        user_id: userId,
        zona_id: zonaId,
        tipo: 'humedad',
        severidad: humedad < umbral - 5 ? 'alta' : 'media',
        titulo: '⚠️ Humedad Baja',
        mensaje: `La humedad del suelo está en ${humedad}% (umbral: ${umbral}%).`
      })
      console.log(`🔔 Alerta humedad baja: ${humedad}% < ${umbral}%`)
    }
  }
}

// Generar alerta de riego
const generarAlertaRiego = async (zonaId, userId, tipo, duracion = null) => {
  if (!userId) return
  
  const titulo = tipo === 'manual' ? '💧 Riego Manual' : '🤖 Riego Automático'
  const mensaje = tipo === 'manual' 
    ? `Usuario activó el riego manualmente por ${duracion || 180} segundos.`
    : 'Humedad baja. Sistema activó riego automático.'
  
  await supabase.from('alertas').insert({
    user_id: userId,
    zona_id: zonaId,
    tipo: 'riego',
    severidad: 'media',
    titulo: titulo,
    mensaje: mensaje
  })
  console.log(`🔔 Alerta riego ${tipo}: ${titulo}`)
}

// Generar alerta de helada
const generarAlertaHelada = async (zonaId, userId, temperatura, cultivo) => {
  if (!userId) return
  
  const umbralHelada = cultivo === 'Frutales' ? 4 : 2
  if (temperatura < umbralHelada) {
    const { data: alertaReciente } = await supabase
      .from('alertas')
      .select('id')
      .eq('zona_id', zonaId)
      .eq('tipo', 'helada')
      .gte('created_at', new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString())
      .limit(1)
    
    if (!alertaReciente || alertaReciente.length === 0) {
      await supabase.from('alertas').insert({
        user_id: userId,
        zona_id: zonaId,
        tipo: 'helada',
        severidad: 'alta',
        titulo: '❄️ Alerta de Helada',
        mensaje: `Temperatura crítica (${temperatura}°C). Riesgo de daño en cultivos.`
      })
      console.log(`🔔 Alerta helada: ${temperatura}°C`)
    }
  }
}

// Generar alerta de calor extremo
const generarAlertaCalor = async (zonaId, userId, temperatura, cultivo) => {
  if (!userId) return
  
  const umbralCalor = 16
  if (temperatura > umbralCalor) {
    const { data: alertaReciente } = await supabase
      .from('alertas')
      .select('id')
      .eq('zona_id', zonaId)
      .eq('tipo', 'calor')
      .gte('created_at', new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString())
      .limit(1)
    
    if (!alertaReciente || alertaReciente.length === 0) {
      await supabase.from('alertas').insert({
        user_id: userId,
        zona_id: zonaId,
        tipo: 'calor',
        severidad: 'media',
        titulo: '🌡️ Alerta de Calor',
        mensaje: `Temperatura elevada (${temperatura}°C). Incremento de evaporación.`
      })
      console.log(`🔔 Alerta calor: ${temperatura}°C`)
    }
  }
}

// =============================================
// GENERACIÓN DE MEDICIÓN
// =============================================

const generarMedicion = async (zonaId, configuracion) => {
  if (!zonaId) return

  actualizarEstacion()
  const factorEstacional = getFactorEstacional()
  
  horaSimulada = (horaSimulada + 0.5) % 24
  
  const { data: zona } = await supabase
    .from('zonas')
    .select('tipo_cultivo')
    .eq('id', zonaId)
    .single()
  
  const cultivo = zona?.tipo_cultivo || 'default'
  const params = parametrosCultivo[cultivo] || parametrosCultivo.default
  const humedadIdeal = params.humedadIdeal
  
  const evaporacionBase = calcularEvapotranspiracion(temperaturaBase, humedadAmbiente)
  const evaporacion = evaporacionBase * factorEstacional.evaporacion
  
  // Actualizar humedad del suelo
  if (direccionHumedad === -1) {
    humedadBase -= random(0.2, 0.8) * (evaporacion / 2)
  } else {
    humedadBase += random(0.5, 1.2)
  }
  
  humedadBase = Math.max(8, Math.min(32, humedadBase))
  
  if (Math.random() < 0.12) {
    direccionHumedad = direccionHumedad * -1
  }
  
  // Actualizar temperatura según hora
  temperaturaBase = getTemperaturaPorHora(9, horaSimulada)
  temperaturaBase = temperaturaBase * factorEstacional.tempFactor
  temperaturaBase = Math.max(2, Math.min(18, temperaturaBase))
  
  // Actualizar humedad ambiental según estación
  if (estacionActual === 'seca') {
    humedadAmbiente += random(-2, 2)
    humedadAmbiente = Math.max(35, Math.min(65, humedadAmbiente))
  } else {
    humedadAmbiente += random(-1, 3)
    humedadAmbiente = Math.max(55, Math.min(85, humedadAmbiente))
  }
  
  // Guardar en historial
  historialHumedad.push(humedadBase)
  if (historialHumedad.length > 24) historialHumedad.shift()
  
  historialTemp.push(temperaturaBase)
  if (historialTemp.length > 24) historialTemp.shift()
  
  const prediccion = predecirProximaHumedad()
  
  // Generar alertas climáticas
  await generarAlertaHelada(zonaId, configuracion?.user_id, temperaturaBase, cultivo)
  await generarAlertaCalor(zonaId, configuracion?.user_id, temperaturaBase, cultivo)
  
  const umbral = configuracion?.umbral_humedad_min || humedadIdeal[0]
  const modoAuto = configuracion?.modo_automatico !== false
  
  // GENERAR ALERTA DE HUMEDAD BAJA
  await generarAlertaHumedadBaja(zonaId, configuracion?.user_id, humedadBase, umbral)
  
  // Evaluar necesidad de riego automático
  let riegoActivo = false
  const necesitaRiego = humedadBase < umbral
  
  if (modoAuto && necesitaRiego && !simuladorRiegoActivo) {
    riegoActivo = true
    simuladorRiegoActivo = true
    direccionHumedad = 1
    
    // ALERTA DE RIEGO AUTOMÁTICO
    await generarAlertaRiego(zonaId, configuracion?.user_id, 'automatico')
    
    setTimeout(() => {
      simuladorRiegoActivo = false
      direccionHumedad = -1
    }, (configuracion?.tiempo_riego_segundos || 180) * 1000)
  }
  
  // Insertar medición
  const { error } = await supabase.from('mediciones').insert({
    zona_id: zonaId,
    humedad_suelo: humedadBase,
    temperatura_ambiente: temperaturaBase,
    humedad_ambiente: humedadAmbiente,
    riego_activo: riegoActivo || simuladorRiegoActivo
  })
  
  if (!error) {
    const estado = necesitaRiego ? '⚠️ SECO' : '✅ NORMAL'
    const riegoEstado = (riegoActivo || simuladorRiegoActivo) ? '💧 ON' : '⏸️ OFF'
    const prediccionMsg = prediccion ? ` | 🔮 Pred:${prediccion.valor}% (${prediccion.tendencia})` : ''
    console.log(`📊 ${estado} | H:${humedadBase.toFixed(1)}% | T:${temperaturaBase.toFixed(1)}°C | ${riegoEstado} | Cultivo:${cultivo}${prediccionMsg}`)
  }
}

// =============================================
// FUNCIONES PRINCIPALES
// =============================================

export const iniciarSimulador = async (zonaId, userId) => {
  if (intervaloSimulador) clearInterval(intervaloSimulador)
  if (!zonaId) return

  const { data: config } = await supabase
    .from('configuracion_zona')
    .select('*')
    .eq('zona_id', zonaId)
    .single()
  
  const { data: zona } = await supabase
    .from('zonas')
    .select('tipo_cultivo')
    .eq('id', zonaId)
    .single()
  
  const cultivo = zona?.tipo_cultivo || 'default'
  const params = parametrosCultivo[cultivo] || parametrosCultivo.default
  
  humedadBase = random(params.humedadIdeal[0] - 3, params.humedadIdeal[1] - 3)
  temperaturaBase = random(params.tempIdeal[0] - 2, params.tempIdeal[1] - 2)
  humedadAmbiente = estacionActual === 'seca' ? random(45, 55) : random(65, 75)
  direccionHumedad = -1
  simuladorRiegoActivo = false
  historialHumedad = []
  historialTemp = []
  horaSimulada = 8

  console.log('🤖 Simulador avanzado iniciado')
  console.log(`   Cultivo: ${cultivo} | Humedad ideal: ${params.humedadIdeal[0]}-${params.humedadIdeal[1]}%`)
  console.log(`   Estación: ${estacionActual === 'seca' ? '🌵 Seca' : '🌧️ Húmeda'}`)

  generarMedicion(zonaId, { ...config, user_id: userId })

  intervaloSimulador = setInterval(async () => {
    const { data: newConfig } = await supabase
      .from('configuracion_zona')
      .select('*')
      .eq('zona_id', zonaId)
      .single()
    generarMedicion(zonaId, { ...newConfig, user_id: userId })
  }, 30000)
}

export const detenerSimulador = () => {
  if (intervaloSimulador) {
    clearInterval(intervaloSimulador)
    intervaloSimulador = null
    console.log('⏹️ Simulador avanzado detenido')
  }
}

export const obtenerPrediccion = () => {
  return predecirProximaHumedad()
}

export const obtenerEstadisticas = () => {
  return {
    humedadPromedio: historialHumedad.reduce((a, b) => a + b, 0) / (historialHumedad.length || 1),
    tempPromedio: historialTemp.reduce((a, b) => a + b, 0) / (historialTemp.length || 1),
    ultimaHumedad: historialHumedad[historialHumedad.length - 1] || 0,
    ultimaTemp: historialTemp[historialTemp.length - 1] || 0
  }
}