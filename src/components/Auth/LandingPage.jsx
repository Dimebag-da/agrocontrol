import { BarChart3, Bell, CloudRain, CloudSun, Droplet, Moon, Shield, Sprout, Sun, Thermometer, Zap } from 'lucide-react'

export function LandingPage({ isDark, onLoginClick, onRegisterClick, onThemeToggle }) {
  const caracteristicas = [
    { icon: Droplet, title: 'Control de Humedad', desc: 'Monitoreo en tiempo real de la humedad del suelo' },
    { icon: Sprout, title: 'Riego Inteligente', desc: 'Automatización con IA y predicción de necesidades' },
    { icon: CloudSun, title: 'Clima Integrado', desc: 'Pronóstico meteorológico para optimizar el riego' },
    { icon: BarChart3, title: 'Estadísticas Avanzadas', desc: 'Reportes y análisis de consumo de agua' },
    { icon: Bell, title: 'Alertas Predictivas', desc: 'Notificaciones anticipadas de problemas' },
    { icon: Shield, title: 'Seguridad', desc: 'Tus datos protegidos con encriptación' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Navbar */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Droplet className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
          <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            AgroControl
          </span>
        </div>
        <div className="flex gap-3 items-center">
          <button
            onClick={onThemeToggle}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button
            onClick={onLoginClick}
            className="px-5 py-2 text-emerald-600 dark:text-emerald-400 font-medium hover:bg-emerald-50 dark:hover:bg-emerald-900/20 rounded-lg transition"
          >
            Iniciar Sesión
          </button>
          <button
            onClick={onRegisterClick}
            className="px-5 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-medium rounded-lg hover:from-emerald-600 hover:to-teal-700 transition shadow-lg"
          >
            Comenzar Gratis
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-sm mb-6">
              <Zap className="w-4 h-4" />
              Sistema Inteligente de Riego
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Controla tu riego con{' '}
              <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                Inteligencia Artificial
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Optimiza el consumo de agua, recibe alertas predictivas y automatiza tu sistema de riego.
            </p>
            <div className="flex gap-4 justify-center lg:justify-start">
              <button
                onClick={onRegisterClick}
                className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-xl hover:from-emerald-600 hover:to-teal-700 transition shadow-lg"
              >
                Comenzar Ahora
              </button>
              <button
                onClick={onLoginClick}
                className="px-8 py-3 border-2 border-emerald-500 text-emerald-600 dark:text-emerald-400 font-semibold rounded-xl hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition"
              >
                Ya tengo cuenta
              </button>
            </div>
          </div>
          
          {/* Sección de iconos */}
          <div className="flex-1">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full blur-3xl opacity-20"></div>
              <div className="relative bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-4 text-center shadow-md">
                    <Droplet className="w-12 h-12 mx-auto text-emerald-500" />
                    <p className="text-xs mt-2 text-gray-600 dark:text-gray-400">Humedad</p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-4 text-center shadow-md">
                    <Thermometer className="w-12 h-12 mx-auto text-orange-500" />
                    <p className="text-xs mt-2 text-gray-600 dark:text-gray-400">Temperatura</p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-4 text-center shadow-md">
                    <CloudRain className="w-12 h-12 mx-auto text-blue-500" />
                    <p className="text-xs mt-2 text-gray-600 dark:text-gray-400">Pronóstico</p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-4 text-center shadow-md">
                    <Sprout className="w-12 h-12 mx-auto text-green-500" />
                    <p className="text-xs mt-2 text-gray-600 dark:text-gray-400">Cultivos</p>
                  </div>
                </div>
                <p className="text-center text-gray-500 dark:text-gray-400 text-sm mt-4">
                  Sistema de Riego Inteligente
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Características */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            ¿Por qué elegir AgroControl?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Tecnología avanzada para una agricultura más eficiente
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caracteristicas.map((item, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition group">
              <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition">
                <item.icon className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500 dark:text-gray-400 text-sm">
          <p>© 2024 AgroControl - Sistema Inteligente de Riego. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}