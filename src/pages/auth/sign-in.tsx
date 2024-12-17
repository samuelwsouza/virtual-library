import { useGoogleLogin } from '@react-oauth/google'
import axios from 'axios'
import { RocketLaunch } from 'phosphor-react'
import { useNavigate } from 'react-router-dom'
import GitHubIcon from '../../assets/github-icon-fill.png'
import GoogleIcon from '../../assets/google-icon.svg'

export function SignIn() {
  const navigate = useNavigate()

  const googleLogin = useGoogleLogin({
    onSuccess: async tokenResponse => {
      try {
        const userInfo = await axios.get(
          'https://www.googleapis.com/oauth2/v3/userinfo',
          {
            headers: {
              Authorization: `Bearer ${tokenResponse.access_token}`,
            },
          }
        )

        localStorage.setItem('user', JSON.stringify(userInfo.data))
        localStorage.setItem('loginType', 'google')

        navigate('/')
      } catch (error) {
        console.error('Erro ao buscar dados do Google:', error)
      }
    },
    onError: error => console.log('Erro ao logar com Google:', error),
  })

  const handleGuestLogin = () => {
    localStorage.removeItem('user') // Limpa qualquer dado anterior
    localStorage.setItem('loginType', 'guest')
    navigate('/')
  }

  // Login com GitHub (placeholder para futuro)
  const handleGitHubLogin = () => {
    console.log('Login com GitHub ainda não implementado.')
  }

  return (
    <div className="flex flex-col">
      <span className="text-2xl font-semibold">Boas vindas!</span>
      <span className="mt-1 text-base text-gray-200">
        Faça seu login ou acesse como visitante.
      </span>

      <div className="space-y-4 mt-10">
        <button
          onClick={() => googleLogin()}
          className="w-[330px] h-16 flex items-center gap-5 px-6 py-4 rounded-md bg-slate-800 hover:bg-slate-700"
          type="button"
        >
          <img src={GoogleIcon} className="w-8 h-8" alt="Google Icon" />
          <span>Entrar com Google</span>
        </button>

        <button
          onClick={handleGitHubLogin}
          className="w-[330px] h-16 flex items-center gap-5 px-6 py-4 rounded-md bg-slate-800 hover:bg-slate-700"
          type="button"
        >
          <img src={GitHubIcon} className="w-8 h-8" alt="GitHub Icon" />
          <span>Entrar com GitHub</span>
        </button>

        <button
          onClick={handleGuestLogin}
          className="w-[330px] h-16 flex items-center gap-5 px-6 py-4 rounded-md bg-slate-800 hover:bg-slate-700"
          type="button"
        >
          <RocketLaunch className="w-8 h-8" color="aqua" />
          <span>Entrar como visitante</span>
        </button>
      </div>
    </div>
  )
}
