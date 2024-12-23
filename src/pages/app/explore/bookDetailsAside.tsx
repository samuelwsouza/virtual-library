import { useGoogleLogin } from '@react-oauth/google'
import axios from 'axios'
import { BookOpen, BookmarkSimple, Star, X } from 'phosphor-react'
import { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import AvatarBrandon from '../../../assets/Avatar_review.svg'
import GoogleIcon from '../../../assets/google-icon.svg'
import { UserReview } from './userReview'

type Book = {
  image: string
  title: string
  author: string
  stars: number
}

type BookDetailsAsideProps = {
  book: Book
  isOpen: boolean
  onClose: () => void
}

export const BookDetailsAside = ({
  isOpen,
  onClose,
  book,
}: BookDetailsAsideProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [showReviewForm, setShowReviewForm] = useState(false)
  const [newReviewText, setNewReviewText] = useState('')
  const [selectedStars, setSelectedStars] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [userReviews, setUserReviews] = useState([
    {
      id: '1',
      image: AvatarBrandon,
      name: 'Brandon Washington',
      answer: 'Adorei este livro, super recomendo!',
      stars: 5,
      date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 dias atrás
    },
  ])

  useEffect(() => {
    const user = localStorage.getItem('user')
    if (user) {
      setIsLoggedIn(true)
    }

    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

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

        const user = {
          name: userInfo.data.name,
          picture: userInfo.data.picture,
        }

        localStorage.setItem('user', JSON.stringify(user))
        localStorage.setItem('loginType', 'google')
        setIsLoggedIn(true)
        setShowAuthModal(false)

        const event = new Event('user-login')
        window.dispatchEvent(event)
      } catch (error) {
        console.error('Erro ao buscar dados do Google:', error)
      }
    },
    onError: error => console.error('Erro ao logar com Google:', error),
  })

  const handleReviewClick = () => {
    if (isLoggedIn) {
      setShowReviewForm(true)
    } else {
      setShowAuthModal(true)
    }
  }

  const handleAddReview = (newReview: string, stars: number) => {
    const user = JSON.parse(localStorage.getItem('user') || '{}')

    setUserReviews(prev => [
      {
        id: `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
        image: user?.picture || AvatarBrandon,
        name: user?.name || 'Usuário Anônimo',
        answer: newReview,
        stars,
        date: new Date(),
      },
      ...prev,
    ])
    setShowReviewForm(false)
  }

  if (!isOpen) return null

  return (
    <aside
      className={`fixed right-0 top-0 h-screen w-[40rem] bg-gray-950 text-white shadow-lg z-50 overflow-y-auto transition-transform duration-400 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      {isLoading ? (
        <div className="p-6 mt-14 animate-pulse">
          <div className="w-full h-96 bg-gray-800 rounded-lg" />
          <div className="mt-10 h-6 w-32 bg-gray-800 rounded" />
          <div className="mt-14 h-32 w-full bg-gray-800 rounded" />
          <div className="mt-6 h-32 w-full bg-gray-800 rounded" />
          <div className="mt-6 h-32 w-full bg-gray-800 rounded" />
          <div className="mt-6 h-32 w-full bg-gray-800 rounded" />
        </div>
      ) : (
        <>
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white"
          >
            <X size={24} />
          </button>
          {showAuthModal &&
            ReactDOM.createPortal(
              <div className="fixed inset-0 flex items-center justify-center z-50">
                {/* Fundo escuro não clicável */}
                <div className="absolute inset-0 bg-black bg-opacity-50 pointer-events-none" />

                {/* Conteúdo do modal */}
                <div className="relative bg-gray-900 text-white rounded-lg p-6 w-[24rem] shadow-lg z-10">
                  <h2 className="text-xl font-semibold mb-4 text-center">
                    Faça login para avaliação
                  </h2>
                  <p className="text-gray-300 text-sm mb-6 text-center">
                    Para continuar, entre com uma das opções abaixo:
                  </p>
                  <div className="flex flex-col gap-4">
                    {/* Botão de login com Google */}
                    <button
                      type="button"
                      onClick={() => googleLogin()}
                      className="flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-800 text-white py-2 px-4 rounded-md"
                    >
                      <img src={GoogleIcon} alt="Google" className="w-5 h-5" />
                      Continuar com Google
                    </button>
                    {/* Botão de login estilizado com GitHub */}
                    <button
                      type="button"
                      className="flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-800 text-white py-2 px-4 rounded-md"
                    >
                      <img
                        src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                        alt="GitHub"
                        className="w-5 h-5"
                      />
                      Continuar com GitHub
                    </button>
                  </div>
                  {/* Botão de cancelar */}
                  <button
                    type="button"
                    onClick={() => setShowAuthModal(false)}
                    className="mt-4 text-gray-400 hover:text-white text-sm text-center w-full"
                  >
                    Cancelar
                  </button>
                </div>
              </div>,
              document.body // Renderiza no topo do DOM
            )}

          <div className="p-6 mt-14">
            <div className="flex flex-col w-full h-[28rem] bg-gray-900 rounded-xl pt-6 px-8 pb-4">
              <div className="flex flex-1 max-h-[20rem] pb-10">
                <img
                  className="w-56 h-72 object-cover rounded-lg"
                  src={book?.image}
                  alt=""
                />
                <div className="flex flex-col justify-between pl-8 w-full">
                  <div className="flex flex-col w-full">
                    <span className="font-semibold text-xl text-gray-100">
                      {book?.title}
                    </span>
                    <span className="text-gray-300 mt-2">{book?.author}</span>
                  </div>
                  <div className="flex flex-col mt-6">
                    <div className="flex items-center gap-1 text-gray-100">
                      {Array.from({ length: book?.stars || 0 }).map(
                        (_, index) => (
                          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                          <Star key={index} weight="fill" size={16} />
                        )
                      )}
                      {Array.from({ length: 5 - (book?.stars || 0) }).map(
                        (_, index) => (
                          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                          <Star key={index} weight="regular" size={16} />
                        )
                      )}
                    </div>
                    <span className="text-sm text-gray-300 mt-1">
                      Avaliação dos usuários
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 h-16 border-t border-gray-800">
                <button
                  type="button"
                  className="flex items-center gap-2 text-gray-100 text-sm"
                >
                  <BookmarkSimple size={20} />
                  Adicionar à biblioteca
                </button>
                <button
                  type="button"
                  className="flex items-center gap-2 text-gray-100 text-sm"
                >
                  <BookOpen size={20} />
                  Ler agora
                </button>
              </div>
            </div>

            <div className="flex flex-col mt-10">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold text-gray-100">
                  Avaliações
                </h2>
                <button
                  type="button"
                  onClick={handleReviewClick}
                  className="text-sm text-blue-400 hover:underline"
                >
                  Avaliar
                </button>
              </div>
              {showReviewForm && (
                <div className="mt-4">
                  <textarea
                    value={newReviewText}
                    onChange={e => setNewReviewText(e.target.value)}
                    placeholder="Escreva sua avaliação"
                    className="w-full h-24 p-2 bg-gray-800 text-gray-100 rounded-md resize-none"
                  />
                  <div className="flex items-center gap-2 mt-2">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <button
                        type="button"
                        // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                        key={index}
                        onClick={() => setSelectedStars(index + 1)}
                        className={`${
                          selectedStars > index
                            ? 'text-yellow-400'
                            : 'text-gray-500'
                        }`}
                      >
                        <Star size={20} weight="fill" />
                      </button>
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      handleAddReview(newReviewText, selectedStars)
                    }
                    className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                  >
                    Enviar Avaliação
                  </button>
                </div>
              )}
              <div className="mt-6 flex flex-col gap-4">
                {userReviews.map(review => (
                  <UserReview key={review.id} {...review} />
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </aside>
  )
}
