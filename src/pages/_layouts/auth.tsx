import { Outlet } from 'react-router-dom'
import BackgroundImage from '../../assets/ImageLogin.png'
import Title from '../../assets/Logo.svg'

export function AuthLayout() {
  return (
    <div className="flex w-full h-full bg-gray-950">
      <div className="flex h-auto relative">
        <img
          className="w-full max-h-[56rem] p-5 rounded-lg object-cover"
          src={BackgroundImage}
          alt="Marca BookWise"
        />
        <img
          className="w-44 top-[45%] left-[38%] absolute"
          src={Title}
          alt=""
        />
      </div>

      <div className="flex-1 flex items-center justify-center">
        <Outlet />
      </div>
    </div>
  )
}
