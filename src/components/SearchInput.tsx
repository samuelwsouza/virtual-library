import { MagnifyingGlass } from 'phosphor-react'

interface SearchInputProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  className?: string
}

export function SearchInput({
  value,
  onChange,
  placeholder = 'Buscar...',
  className = '',
}: SearchInputProps) {
  return (
    <div className={`relative ${className}`}>
      <input
        className="w-full h-12 bg-transparent border border-gray-300 px-4 rounded outline-0 placeholder:text-gray-400"
        placeholder={placeholder}
        value={value}
        onChange={e => onChange(e.target.value)}
      />
      <MagnifyingGlass
        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white cursor-pointer"
        size={24}
      />
    </div>
  )
}
