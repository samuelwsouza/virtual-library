import { CaretRight, ChartLineUp } from 'phosphor-react'
import {} from 'phosphor-react'
import { Link } from 'react-router'
import { BookCard } from '../../../components/BookCard'
import { Comment } from '../../../components/Comment'

export function Home() {
  return (
    <div className="grid grid-cols-2 gap-10">
      <div className="flex flex-col gap-6 w-full">
        <div className="flex items-center gap-3">
          <ChartLineUp color="aqua" size={32} weight="fill" />
          <span className="text-gray-100 text-2xl font-semibold">Início</span>
        </div>

        <div>
          <span className="text-gray-400">Avaliações mais recentes</span>

          <div className="grid grid-cols-1 gap-4 pt-4 pb-5">
            <Comment />
            <Comment />
            <Comment />
            <Comment />
          </div>
        </div>
      </div>

      <div className="w-80 flex flex-col gap-4 pt-16">
        <div className="flex justify-between">
          <span className="text-sm text-gray-100">Livros populares</span>
          <Link to="/explore" className="flex items-center gap-2">
            <span className="text-purple-200 font-semibold">Ver todos</span>{' '}
            <CaretRight color="purple" />
          </Link>
        </div>

        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
      </div>
    </div>
  )
}
