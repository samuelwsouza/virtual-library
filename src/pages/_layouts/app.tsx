// AppLayout.jsx
import { Outlet } from 'react-router'
import { Aside } from '../../components/Aside'

export function AppLayout() {
  return (
    <div className="flex min-h-screen bg-gray-900">
      {/* Sidebar fixa com largura definida */}
      <Aside className="w-64 flex-shrink-0" />

      {/* Conteúdo principal, ocupando o restante do espaço */}
      <div className="flex-1 flex flex-col gap-6 p-8 pt-6 bg-gray-800 overflow-hidden">
        <Outlet />
      </div>
    </div>
  )
}
