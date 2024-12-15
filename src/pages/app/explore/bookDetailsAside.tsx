import { AnimatePresence, motion } from 'framer-motion' // Para animações opcionais
import { BookOpen, BookmarkSimple, Star, X } from 'phosphor-react'
import AvatarJaylon from '../../../assets/Avatar_review-2.svg'
import AvatarJessica from '../../../assets/Avatar_review-3.svg'
import AvatarBrandon from '../../../assets/Avatar_review.svg'
import { UserReview } from './userReview'

type Book = {
  image: string
  title: string
  author: string
  stars: number
  // pages: number
  // category: string
}

type BookDetailsAsideProps = {
  book: Book | undefined
  isOpen: boolean
  onClose: () => void
  onClick?: () => void
}

export const BookDetailsAside = ({
  isOpen,
  onClose,
  book,
}: BookDetailsAsideProps) => {
  if (!isOpen) return null

  const users = [
    {
      id: `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
      image: AvatarBrandon,
      name: 'Brandon Botosh',
      answer:
        'Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta eget nec vitae sit vulputate eget',
    },
    {
      id: `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
      image: AvatarJaylon,
      name: 'Jaylon Franci',
      answer:
        'Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta eget nec vitae sit vulputate eget',
    },
    {
      id: `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
      image: AvatarJessica,
      name: 'Jessica Botosh',
      answer:
        'Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta eget nec vitae sit vulputate eget',
    },
  ]

  return (
    <AnimatePresence>
      <motion.aside
        initial={{ x: '100%', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: '100%', opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed right-0 top-0 h-screen w-[40rem] bg-gray-950 text-white shadow-lg z-50 overflow-y-auto"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X size={24} />
        </button>

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

                <div className="mt-4">
                  <div className="flex flex-col">
                    <div className="flex items-center space-x-1 mt-1">
                      {/* Renderizar as estrelas */}
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Star
                          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                          key={index}
                          className={`w-5 h-5 ${
                            index < book?.stars
                              ? 'text-yellow-500 fill-current'
                              : 'text-gray-300'
                          }`}
                          weight={index < book?.stars ? 'fill' : 'regular'} // Define o estilo de preenchimento
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-400 mt-1">
                      3 avaliações
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full h-px bg-gray-700 mt-4" />

            <div className="mt-4 w-full flex flex-row gap-16">
              <div className="flex items-center gap-4">
                <BookmarkSimple className="w-6 h-6" color="aqua" />
                <div className="flex flex-col">
                  <span className="text-sm text-gray-300">Categoria</span>
                  <span className="text-md font-semibold text-gray-200">
                    Computação, educação
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <BookOpen className="w-6 h-6" color="aqua" />
                <div className="flex flex-col">
                  <span className="text-sm text-gray-300">Páginas</span>
                  <span className="text-md font-semibold text-gray-200">
                    160
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col mt-10">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-200">Avaliações</span>

              <button type="button" className="text-purple-300 font-semibold">
                Avaliar
              </button>
            </div>

            {users.map(user => (
              <UserReview
                key={user.id}
                id={user.id}
                image={user.image}
                name={user.name}
                answer={user.answer}
              />
            ))}
          </div>
        </div>
      </motion.aside>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black z-40"
        onClick={onClose}
      />
    </AnimatePresence>
  )
}
