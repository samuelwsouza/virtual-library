import { Binoculars, ChartLineUp, SignIn, SignOut, User } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import logoSidebar from '../assets/Logo.svg'
import DefaultProfile from '../assets/defaultphoto.png'

interface ClassNameProps {
  className: string
}

export function Aside({ className }: ClassNameProps) {
  const navigate = useNavigate()

  // Estado inicial com valores do localStorage
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user')
    return savedUser ? JSON.parse(savedUser) : null
  })
  const [loginType, setLoginType] = useState<'google' | 'guest'>(() => {
    const savedLoginType = localStorage.getItem('loginType')
    return (savedLoginType as 'google' | 'guest') || 'guest'
  })

  const isLoggedIn = loginType === 'google' && user

  // Função para logout
  const handleLogout = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('loginType')
    setUser(null)
    setLoginType('guest')
    navigate('/sign-in')
  }

  // Atualizar estado quando o localStorage mudar
  useEffect(() => {
    const handleUserLogin = () => {
      const savedUser = localStorage.getItem('user')
      const savedLoginType = localStorage.getItem('loginType')

      setUser(savedUser ? JSON.parse(savedUser) : null)
      setLoginType((savedLoginType as 'google' | 'guest') || 'guest')
    }

    // Escuta o evento personalizado
    window.addEventListener('user-login', handleUserLogin)

    // Limpa o evento ao desmontar
    return () => {
      window.removeEventListener('user-login', handleUserLogin)
    }
  }, [])

  return (
    <aside
      className={`h-auto bg-gradient-to-b from-gray-900 from-10% via-slate-900 via-80% to-gray-800 to-95% text-white p-4 shadow-lg ${className} flex flex-col justify-between`}
    >
      <div className="flex flex-col items-center mb-8 mt-5">
        <img className="w-32" src={logoSidebar} alt="Logo" />
      </div>

      <nav className="flex flex-col mt-8 gap-2 flex-grow">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center gap-3 w-full px-4 py-2 rounded-md relative ${
              isActive ? 'text-gray-100 font-semibold' : 'text-gray-400'
            }`
          }
        >
          {({ isActive }) => (
            <>
              <div
                className={`absolute left-0 h-7 w-1 bg-gradient-to-b from-emerald-300 to-purple-500 rounded-md transition-transform duration-200 ${
                  isActive ? 'scale-y-100' : 'scale-y-0'
                }`}
              />
              <ChartLineUp size={20} weight="bold" />
              <span>Início</span>
            </>
          )}
        </NavLink>

        <NavLink
          to="/explore"
          className={({ isActive }) =>
            `flex items-center gap-3 w-full px-4 py-2 rounded-md relative ${
              isActive ? 'text-gray-100 font-semibold' : 'text-gray-400'
            }`
          }
        >
          {({ isActive }) => (
            <>
              <div
                className={`absolute left-0 h-7 w-1 bg-gradient-to-b from-emerald-300 to-purple-500 rounded-md transition-transform duration-200 ${
                  isActive ? 'scale-y-100' : 'scale-y-0'
                }`}
              />
              <Binoculars size={20} weight="bold" />
              <span>Explorar</span>
            </>
          )}
        </NavLink>

        {isLoggedIn && (
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              `flex items-center gap-3 w-full px-4 py-2 rounded-md relative ${
                isActive ? 'text-gray-100 font-semibold' : 'text-gray-400'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <div
                  className={`absolute left-0 h-7 w-1 bg-gradient-to-b from-emerald-300 to-purple-500 rounded-md transition-transform duration-200 ${
                    isActive ? 'scale-y-100' : 'scale-y-0'
                  }`}
                />
                <User size={20} weight="bold" />
                <span>Perfil</span>
              </>
            )}
          </NavLink>
        )}
      </nav>

      <div className="mt-auto ml-14">
        {isLoggedIn ? (
          <div className="flex items-center gap-3 -ml-4">
            <img
              src={user?.picture || DefaultProfile}
              onError={e => {
                e.currentTarget.src = DefaultProfile
              }}
              className="rounded-[999px] w-8 h-8 border border-purple-100"
              alt="Foto do perfil"
            />
            <span className="text-gray-200 font-semibold">{user?.name}</span>
            <button
              type="button"
              onClick={handleLogout}
              title="Sair"
              className="hover:opacity-80"
            >
              <SignOut className="w-6 h-6" color="red" />
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => navigate('/sign-in')}
            className="flex items-center gap-2 text-cyan-500"
          >
            <span className="text-gray-200 font-semibold hover:text-gray-400 transition-all">
              Fazer login
            </span>
            <SignIn size={20} weight="bold" color="aqua" />
          </button>
        )}
      </div>
    </aside>
  )
}
