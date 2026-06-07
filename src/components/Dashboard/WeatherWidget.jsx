import { Cloud, CloudRain, Droplet, Sun, Wind } from 'lucide-react'
import { useEffect, useState } from 'react'

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY
const LAT = -16.5000
const LON = -68.1500

export function WeatherWidget() {
  const [clima, setClima] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const cargarClima = async () => {
      try {
        if (!API_KEY) {
          throw new Error('Clima no configurado')
        }

        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${API_KEY}&units=metric&lang=es`
        const res = await fetch(url)

        if (!res.ok) {
          throw new Error('No se pudo cargar el clima')
        }

        const data = await res.json()

        if (!data?.main || !data?.weather?.length) {
          throw new Error('Respuesta de clima invalida')
        }

        setClima(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    
    cargarClima()
  }, [])

  if (loading) return <div className="card-modern p-4 text-center">Cargando clima...</div>
  if (error) return <div className="card-modern p-4 text-center text-red-500">Error: {error}</div>
  if (!clima) return null

  const vientoKmh = Math.round((clima.wind?.speed || 0) * 3.6)

  const getIcono = () => {
    const desc = clima.weather?.[0]?.main
    if (desc === 'Rain') return <CloudRain className="w-8 h-8 text-blue-500" />
    if (desc === 'Clouds') return <Cloud className="w-8 h-8 text-gray-500" />
    return <Sun className="w-8 h-8 text-yellow-500" />
  }

  return (
    <div className="card-modern p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {getIcono()}
          <div>
            <p className="text-2xl font-bold">{Math.round(clima.main.temp)}°C</p>
            <p className="text-xs text-gray-500 capitalize">{clima.weather?.[0]?.description}</p>
          </div>
        </div>
        <div className="text-right text-xs">
          <p className="flex items-center justify-end gap-1">
            <Droplet className="w-3 h-3" /> {clima.main.humidity}%
          </p>
          <p className="flex items-center justify-end gap-1 mt-1">
            <Wind className="w-3 h-3" /> {vientoKmh} km/h
          </p>
        </div>
      </div>
    </div>
  )
}
