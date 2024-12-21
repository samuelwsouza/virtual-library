import { Star } from 'phosphor-react'

interface UserProps {
  id: string
  image: string
  name: string
  answer: string
}

export function UserReview({ image, answer, name, id }: UserProps) {
  return (
    <div id={id} className="w-full h-48 bg-gray-900 rounded-lg mt-4 p-6">
      <header className="flex items-start justify-between">
        <div className="flex items-center">
          <img
            className="rounded-[999px] w-10 h-10 object-cover border border-purple-100"
            src={image}
            alt=""
          />
          <div className="flex flex-col pl-4">
            <span className="text-md text-gray-100 font-semibold">{name}</span>
            <span className="text-sm text-gray-400">Há 2 dias</span>
          </div>
        </div>

        <div className="flex gap-1">
          <Star weight="fill" />
          <Star weight="fill" />
          <Star weight="fill" />
          <Star weight="fill" />
          <Star />
        </div>
      </header>

      <div className="flex-1 mt-5">
        <span className="text-sm text-gray-300">{answer}</span>
      </div>
    </div>
  )
}
