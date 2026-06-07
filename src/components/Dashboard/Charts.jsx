import { Area, CartesianGrid, ComposedChart, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

export function Charts({ mediciones }) {
  const data = mediciones.slice().reverse().map(m => ({
    time: new Date(m.created_at).toLocaleTimeString(),
    humedad: m.humedad_suelo ?? m.humedad ?? null,
    temperatura: m.temperatura_ambiente ?? m.temperatura ?? null,
  }))

  return (
    <div className="card-modern p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-lg font-semibold">Monitoreo en Tiempo Real</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">Últimas 24 horas</p>
        </div>
        <div className="flex gap-3">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
            <span className="text-xs text-gray-600 dark:text-gray-400">Humedad</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-orange-500"></div>
            <span className="text-xs text-gray-600 dark:text-gray-400">Temperatura</span>
          </div>
        </div>
      </div>

      {data.length === 0 ? (
        <div className="h-80 flex items-center justify-center text-sm text-gray-500 dark:text-gray-400">
          Sin mediciones para esta zona
        </div>
      ) : (
      
        <ResponsiveContainer width="100%" height={320}>
          <ComposedChart data={data}>
            <defs>
              <linearGradient id="humedadGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.1} />
            <XAxis dataKey="time" tick={{ fontSize: 12 }} />
            <YAxis yAxisId="left" tick={{ fontSize: 12 }} domain={[0, 100]} />
            <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 12 }} domain={[0, 50]} />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'rgba(0,0,0,0.8)', 
                borderRadius: '8px',
                border: 'none',
                color: 'white'
              }}
            />
            <Area
              type="monotone"
              dataKey="humedad"
              stroke="#10b981"
              strokeWidth={2}
              fill="url(#humedadGradient)"
              yAxisId="left"
            />
            <Line
              type="monotone"
              dataKey="temperatura"
              stroke="#f97316"
              strokeWidth={2}
              dot={false}
              yAxisId="right"
            />
          </ComposedChart>
        </ResponsiveContainer>
      )}
    </div>
  )
}
