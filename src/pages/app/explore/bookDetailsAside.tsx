import { AnimatePresence, motion } from 'framer-motion' // Para animações opcionais
import { BookOpen, BookmarkSimple, X } from 'phosphor-react'

type Book = {
  image: string
  title: string
  author: string
  stars: number
  // pages: number
  // category: string
}

type BookDetailsAsideProps = {
  book: Book | null
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

  return (
    <AnimatePresence>
      <motion.aside
        initial={{ x: '100%', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: '100%', opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed right-0 top-0 h-screen w-[40rem] bg-gray-950 text-white shadow-lg z-50 overflow-hidden"
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
                    <span className="text-sm text-gray-400">
                      {book?.stars} estrelas
                    </span>
                    <span className="text-sm text-gray-400">3 avaliações</span>
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
