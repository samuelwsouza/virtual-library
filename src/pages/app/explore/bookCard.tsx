import { Star, StarHalf } from 'phosphor-react'

interface BookProps {
  image: string
  title: string
  author: string
  stars: number
}

export function BookCardExplore({ image, author, stars, title }: BookProps) {
  return (
    <div className="w-full h-48 flex bg-gray-900 rounded-lg border-2 border-transparent hover:border-gray-600 hover:cursor-pointer px-4 py-4">
      <div className="flex items-center">
        <img
          src={image}
          alt={title}
          className="max-w-24 h-36 object-cover rounded"
        />
      </div>
      <div className="flex flex-col justify-between px-5">
        <div className="flex flex-col max-w-40">
          <span className="text-base font-semibold text-gray-100">{title}</span>
          <span className="text-xs text-gray-400">{author}</span>
        </div>

        <div className="flex items-center gap-1">
          {Array.from({ length: Math.floor(stars) }, (_, i) => (
            <Star
              key={`star-${
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                i
              }`}
              weight="fill"
              className="text-purple-500"
            />
          ))}
          {stars % 1 !== 0 && (
            <StarHalf
              key="star-half"
              weight="fill"
              className="text-purple-500"
            />
          )}
        </div>
      </div>
    </div>
  )
}
