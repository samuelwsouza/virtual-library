import { Star, StarHalf } from 'phosphor-react'
import Avatar from '../assets/Avatar.png'
import Book from '../assets/Book.png'
export function Comment() {
  return (
    <div className="flex w-[608px] h-72 bg-gray-700 rounded-lg flex-col">
      <header className="w-full h-16 flex justify-between items-center px-6 pt-7">
        <div className="flex items-center">
          <img
            src={Avatar}
            alt="Foto do usuário"
            className="w-10 h-10 rounded-full"
          />
          <div className="flex flex-col pl-4">
            <span className="text-base text-gray-100">Jaxson Dias</span>
            <span className="text-sm text-gray-400">Hoje</span>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <Star color="purple" weight="fill" height={14} width={14} />
          <Star color="purple" weight="fill" height={14} width={14} />
          <Star color="purple" weight="fill" height={14} width={14} />
          <Star color="purple" weight="fill" height={14} width={14} />
          <StarHalf color="purple" weight="fill" height={14} width={14} />
        </div>
      </header>

      <div className="flex flex-grow pt-7 pr-6 pl-6">
        <div className="w-32 pt-3">
          <img
            src={Book}
            alt="Imagem do Livro"
            className="w-[108px] h-[152px] rounded-md"
          />
        </div>

        <div className="w-full flex flex-col px-5 pt-2">
          <div className="mb-2">
            <span className="block font-bold text-lg">O Hobbit</span>
            <span className="block text-gray-500">J.R.R Tolkien</span>
          </div>
          <p className="flex-wrap text-gray-300 text-justify text-sm pt-4">
            Semper et sapien proin vitae nisi. Feugiat neque integer donec et
            aenean posuere amet ultrices. Cras fermentum id pulvinar varius leo
            a in. Amet libero pharetra nunc elementum fringilla velit ipsum. Sed
            vulputate massa velit nibh...
          </p>
        </div>
      </div>
    </div>
  )
}
