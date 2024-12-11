import { Binoculars, ChartLineUp, SignIn } from 'phosphor-react';
import { NavLink, Link } from 'react-router-dom';
import logoSidebar from '../assets/Logo.svg';

interface ClassNameProps {
  className: string;
}

export function Aside({ className }: ClassNameProps) {
  return (
    <aside
      className={`h-full bg-gradient-to-b from-gray-900 from-10% via-slate-900 via-80% to-gray-800 to-95% text-white p-4 shadow-lg ${className} flex flex-col justify-between`}
    >
      <div className="flex flex-col items-center mb-8 mt-5">
        <img className="w-32" src={logoSidebar} alt="Logo" />
      </div>

      <nav className="flex flex-col mt-8 gap-2 flex-grow">
        {/* Link para "Início" */}
        <NavLink
          to="/"
          className={({ isActive }: { isActive: boolean }) =>
            `flex items-center gap-3 w-full px-4 py-2 rounded-md relative ${
              isActive ? 'text-gray-100 font-semibold' : 'text-gray-400'
            }`
          }
        >
          {({ isActive }) => (
            <>
              {/* Div para destacar o link selecionado */}
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

        {/* Link para "Explorar" */}
        <NavLink
          to="/explore"
          className={({ isActive }: { isActive: boolean }) =>
            `flex items-center gap-3 w-full px-4 py-2 rounded-md relative ${
              isActive ? 'text-gray-100 font-semibold' : 'text-gray-400'
            }`
          }
        >
          {({ isActive }) => (
            <>
              {/* Div para destacar o link selecionado */}
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
      </nav>

      <div className="mt-auto ml-14">
        <Link
          to="/sign-in"
          className="flex items-center gap-2 text-cyan-500 hover:text-cyan-400"
        >
          <span className="text-gray-200 font-semibold hover:text-gray-100">Fazer login</span>
          <SignIn size={20} weight="bold" color="aqua" />
        </Link>
      </div>
    </aside>
  );
}
