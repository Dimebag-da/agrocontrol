import { useEffect, useState } from 'react'
import { Toaster, toast } from 'react-hot-toast'
import { LandingPage } from './components/Auth/LandingPage'
import { Login } from './components/Auth/Login'
import { Register } from './components/Auth/Register'
import { Dashboard } from './components/Dashboard/Dashboard'
import { supabase } from './services/supabase'

function App() {
  const [session, setSession] = useState(null)
  const [loading, setLoading] = useState(true)
  const [showAuth, setShowAuth] = useState(false)
  const [isLogin, setIsLogin] = useState(true)
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme')
    return saved === 'dark'
  })

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDark])

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
      setLoading(false)
    })

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    toast.success('👋 Sesión cerrada')
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-500 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Cargando...</p>
        </div>
      </div>
    )
  }

  if (session) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <Toaster position="top-right" />
        <nav className="bg-white dark:bg-gray-800 shadow-md p-4 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold text-emerald-600 dark:text-emerald-400">🌱 AgroControl</h1>
            <div className="flex items-center gap-4">
              <button onClick={() => setIsDark(!isDark)} className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700">
                {isDark ? '☀️' : '🌙'}
              </button>
              <span className="text-gray-600 dark:text-gray-300 hidden sm:inline">{session.user.email}</span>
              <button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition">
                Cerrar Sesión
              </button>
            </div>
          </div>
        </nav>
        <main className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
          <Dashboard session={session} />
        </main>
      </div>
    )
  }

  if (!showAuth) {
    return (
      <LandingPage 
        isDark={isDark}
        onLoginClick={() => { setShowAuth(true); setIsLogin(true) }}
        onRegisterClick={() => { setShowAuth(true); setIsLogin(false) }}
        onThemeToggle={() => setIsDark(!isDark)}
      />
    )
  }

  return isLogin ? (
    <Login onBack={() => setShowAuth(false)} onToggleForm={() => setIsLogin(false)} isDark={isDark} onThemeToggle={() => setIsDark(!isDark)} />
  ) : (
    <Register onBack={() => setShowAuth(false)} onToggleForm={() => setIsLogin(true)} isDark={isDark} onThemeToggle={() => setIsDark(!isDark)} />
  )
}

export default App