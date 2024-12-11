import { Star, StarHalf } from 'phosphor-react'
import Book from '../assets/BooktoCard.png'

export function BookCard() {
  return (
    <div className="w-80 h-32 flex bg-gray-900 px-5 py-4 rounded-lg border-2 border-transparent hover:border-gray-600 hover:cursor-pointer">
      <div>
        <img src={Book} alt="" />
      </div>
      <div className="flex flex-col justify-between px-5">
        <div className="flex flex-col">
          <span className="text-base font-semibold text-gray-100">
            A revolução dos bichos
          </span>
          <span className="text-xs text-gray-400">George Orwell</span>
        </div>

        <div className="flex items-center gap-1">
          <Star color="violet" weight="fill" />
          <Star color="violet" weight="fill" />
          <Star color="violet" weight="fill" />
          <Star color="violet" weight="fill" />
          <StarHalf color="violet" weight="fill" />
        </div>
      </div>
    </div>
  )
}

// ao passar de um certo limite ... sem quebrar linhas e o ui
