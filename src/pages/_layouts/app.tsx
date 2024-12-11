// AppLayout.jsx
import { Outlet } from 'react-router'
import { Aside } from '../../components/Aside'

export function AppLayout() {
  return (
    <div className="flex min-h-screen relative">
      {/* Sidebar fixa com largura definida */}
      <Aside className="w-64 h-full fixed top-0 left-0 flex-shrink-0 z-10" />

      {/* Conteúdo principal, ocupando o restante do espaço */}
      <div className="flex-1 flex flex-col gap-6 pl-24 p-8 pt-14 bg-gray-950 overflow-hidden ml-64">
        <Outlet />
      </div>
    </div>
  )
}
