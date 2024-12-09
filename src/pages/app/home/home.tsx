import { ChartLineUp } from 'phosphor-react'
import { Comment } from '../../../components/Comment'

export function Home() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-3">
        <ChartLineUp color="aqua" size={32} weight="fill" />
        <span className="text-gray-100 text-2xl font-semibold">Início</span>
      </div>

      <div>
        <span className="text-gray-400">Avaliações mais recentes</span>

        <div className="grid grid-cols-1 gap-4 pt-4">
          <Comment />
          <Comment />
          <Comment />
          <Comment />
        </div>
      </div>
    </div>
  )
}
