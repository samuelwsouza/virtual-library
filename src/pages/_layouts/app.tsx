import { Outlet } from 'react-router'
import { Aside } from '../../components/Aside'

export function AppLayout() {
  return (
    <div className="flex min-h-screen relative bg-gray-950">
      {/* Sidebar fixa */}
      <Aside className="w-64 h-auto fixed top-5 left-5 bottom-5 flex-shrink-0 z-10 rounded-lg" />

      {/* Conteúdo principal */}
      <div className="flex flex-1 flex-col ml-64">
        <div className="max-w-[1440px] mx-auto w-full flex flex-col gap-6 pl-8 pr-8 pt-14">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
