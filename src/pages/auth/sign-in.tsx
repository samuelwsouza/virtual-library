import { RocketLaunch } from 'phosphor-react'
import GitHubIcon from '../../assets/github-icon-fill.png'
import GoogleIcon from '../../assets/google-icon.svg'

export function SignIn() {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-col">
          <span className="text-2xl font-semibold">Boas vindas!</span>
          <span className="mt-1 text-base text-gray-200">
            Faça seu login ou acesse como visitante.
          </span>
        </div>

        <div className="space-y-4 mt-10">
          <button
            className="w-[330px] h-16 flex items-center gap-5 px-6 py-4 rounded-md bg-slate-800 hover:bg-slate-700 hover:transition-all"
            type="button"
          >
            <img src={GoogleIcon} className="w-8 h-8" alt="ícone do google" />
            <span>Entrar com Google</span>
          </button>

          <button
            className="w-[330px] h-16 flex items-center gap-5 px-6 py-4 rounded-md bg-slate-800 hover:bg-slate-700 hover:transition-all"
            type="button"
          >
            <img src={GitHubIcon} className="w-8 h-8" alt="ícone do github" />
            <span>Entrar com GitHub</span>
          </button>

          <button
            className="w-[330px] h-16 flex items-center gap-5 px-6 py-4 rounded-md bg-slate-800 hover:bg-slate-700 hover:transition-all"
            type="button"
          >
            <RocketLaunch className="w-8 h-8" color="aqua" />
            <span>Entrar como visitante</span>
          </button>
        </div>
      </div>
    </>
  )
}
