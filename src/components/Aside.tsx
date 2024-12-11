import { Binoculars, ChartLineUp, SignIn } from 'phosphor-react'
import { Link, NavLink } from 'react-router'
import logoSidebar from '../assets/Logo.svg'

interface ClassNameProps {
  className: string
}

export function Aside({ className }: ClassNameProps) {
  return (
    <aside
      className={`h-full bg-gray-900 text-white p-4 shadow-lg ${className} flex flex-col justify-between`}
    >
      <div className="flex flex-col items-center mb-8 mt-5">
        <img className="w-32" src={logoSidebar} alt="Logo" />
      </div>

      <nav className="flex flex-col mt-8 gap-2 flex-grow">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center gap-3 w-full px-4 py-2 rounded-md ${isActive ? 'bg-indigo-900' : 'hover:bg-indigo-900'} relative`
          }
        >
          <div className="absolute left-0 top-0 h-full w-1 bg-cyan-500 rounded-md transition-transform duration-300" />
          <ChartLineUp size={20} weight="bold" />
          <span className="font-medium">Início</span>
        </NavLink>

        <NavLink
          to="/explore"
          className={({ isActive }) =>
            `flex items-center gap-3 w-full px-4 py-2 rounded-md ${isActive ? 'bg-indigo-900' : 'hover:bg-indigo-900'} opacity-70 relative`
          }
        >
          <div className="absolute left-0 top-0 h-full w-1 bg-cyan-500 rounded-md transition-transform duration-300" />
          <Binoculars size={20} weight="bold" />
          <span className="font-medium">Explorar</span>
        </NavLink>
      </nav>

      <div className="mt-auto ml-14">
        <Link
          to="/sign-in"
          className="flex items-center gap-2 text-cyan-500 hover:text-cyan-400"
        >
          <span className="text-gray-200">Fazer login</span>
          <SignIn size={20} weight="bold" />
        </Link>
      </div>
    </aside>
  )
}
