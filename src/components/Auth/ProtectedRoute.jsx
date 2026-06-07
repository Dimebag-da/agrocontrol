import { useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { LandingPage } from './LandingPage'
import { Login } from './Login'
import { Register } from './Register'

export function ProtectedRoute({ children }) {
  const { user, loading } = useAuth()
  const [isLogin, setIsLogin] = useState(true)
  const [showAuth, setShowAuth] = useState(false)

  console.log('ProtectedRoute - user:', user, 'loading:', loading, 'showAuth:', showAuth)

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-emerald-500 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Cargando...</p>
        </div>
      </div>
    )
  }

  // Si NO hay usuario autenticado
  if (!user) {
    // Si no está mostrando el formulario, mostrar landing page
    if (!showAuth) {
      return (
        <LandingPage 
          onLoginClick={() => {
            console.log('Click en Iniciar Sesión')
            setShowAuth(true)
            setIsLogin(true)
          }}
          onRegisterClick={() => {
            console.log('Click en Registrarse')
            setShowAuth(true)
            setIsLogin(false)
          }}
        />
      )
    }
    
    // Mostrar formulario de login o registro
    return isLogin ? (
      <Login 
        onBack={() => setShowAuth(false)}
        onToggleForm={() => setIsLogin(false)} 
      />
    ) : (
      <Register 
        onBack={() => setShowAuth(false)}
        onToggleForm={() => setIsLogin(true)} 
      />
    )
  }

  // Si hay usuario autenticado, mostrar el dashboard
  return children
}