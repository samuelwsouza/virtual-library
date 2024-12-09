import { Binoculars, ChartLineUp, SignIn } from 'phosphor-react'
import { Link } from 'react-router'
import logoSidebar from '../assets/Logo.svg'

interface ClassNameProps {
  className: string
}

export function Aside({ className }: ClassNameProps) {
  return (
    <aside
      className={`h-full bg-gray-900 text-white p-4 shadow-lg ${className}`}
    >
      <div>
        <img src={logoSidebar} alt="" />
        <nav className="mt-6">
          <Link
            to="/"
            className="flex items-center gap-3 w-full px-4 py-2 rounded-md hover:bg-indigo-900 relative"
          >
            {/* Div de seleção (somente no link ativo) */}
            <div className="absolute left-0 top-0 h-full w-1 bg-cyan-500 rounded-md transition-transform duration-300" />
            <ChartLineUp size={20} weight="bold" />
            <span className="font-medium">Início</span>
          </Link>

          <Link
            to="/explore"
            className="flex items-center gap-3 w-full px-4 py-2 rounded-md hover:bg-indigo-900 opacity-70 relative"
          >
            {/* Div de seleção para o link ativo */}
            <div className="absolute left-0 top-0 h-full w-1 bg-cyan-500 rounded-md transition-transform duration-300" />
            <Binoculars size={20} weight="bold" />
            <span className="font-medium">Explorar</span>
          </Link>
        </nav>

        <div className="mt-auto">
          <Link
            to="/sign-in"
            className="flex items-center gap-2 text-cyan-500 hover:text-cyan-400"
          >
            <span>Fazer login</span>
            <SignIn size={20} weight="bold" />
          </Link>
        </div>
      </div>
    </aside>
  )
}
