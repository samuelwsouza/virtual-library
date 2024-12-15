import { Star, StarHalf } from 'phosphor-react'

interface BookProps {
  image: string
  title: string
  author: string
  stars: number
  onClick: () => void
}

export function BookCardExplore({
  image,
  author,
  stars,
  title,
  onClick,
}: BookProps) {
  return (
    // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
    <div
      onClick={onClick}
      className="w-[20rem] h-48 flex bg-gray-900 rounded-lg border-2 border-transparent hover:border-gray-600 hover:cursor-pointer px-4 py-4"
    >
      <div className="flex items-center">
        <img
          src={image}
          alt={title}
          className="w-[6rem] h-[9rem] object-cover rounded"
        />
      </div>
      <div className="flex flex-col justify-between px-5">
        <div className="flex flex-col max-w-40">
          <span className="truncate-2-lines text-base font-semibold text-gray-100">
            {title}
          </span>
          <span className="text-xs text-gray-400">{author}</span>
        </div>

        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }, (_, i) => {
            if (i < Math.floor(stars)) {
              // Estrela preenchida
              return (
                <Star
                  key={`star-filled-${
                    // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                    i
                  }`}
                  weight="fill"
                  className="text-purple-500"
                />
              )
              // biome-ignore lint/style/noUselessElse: <explanation>
            } else if (i === Math.floor(stars) && stars % 1 !== 0) {
              // Meia estrela
              return (
                <StarHalf
                  key={`star-half-${
                    // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                    i
                  }`}
                  weight="fill"
                  className="text-purple-500"
                />
              )
              // biome-ignore lint/style/noUselessElse: <explanation>
            } else {
              // Estrela vazia
              return (
                <Star
                  key={`star-empty-${
                    // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                    i
                  }`}
                  weight="regular"
                  className="text-gray-500"
                />
              )
            }
          })}
        </div>
      </div>
    </div>
  )
}
