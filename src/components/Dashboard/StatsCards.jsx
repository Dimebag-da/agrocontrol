export default function StatsCards({ humedad, temperatura, riegoActivo, modoAutomatico, umbral }) {
  const formatValue = (value, suffix = '') => (
    Number.isFinite(value) ? `${value}${suffix}` : 'Sin datos'
  )
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mb-8">
      <h2 className="text-xl font-bold mb-4">Panel de Estadísticas</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div>
          <p className="text-gray-500 text-sm">Humedad</p>
          <p className="text-2xl font-bold">{formatValue(humedad, '%')}</p>
        </div>
        <div>
          <p className="text-gray-500 text-sm">Temperatura</p>
          <p className="text-2xl font-bold">{formatValue(temperatura, '°C')}</p>
        </div>
        <div>
          <p className="text-gray-500 text-sm">Riego</p>
          <p className="text-2xl font-bold">{riegoActivo ? 'ON' : 'OFF'}</p>
        </div>
        <div>
          <p className="text-gray-500 text-sm">Modo</p>
          <p className="text-2xl font-bold">{modoAutomatico ? 'Auto' : 'Manual'}</p>
        </div>
      </div>
    </div>
  )
}
