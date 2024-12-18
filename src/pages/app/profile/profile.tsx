import { BookOpen, BookmarkSimple, Books, User, UserList } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { SearchInput } from '../../../components/SearchInput'

interface UserData {
  name?: string
  picture?: string
}

export function Profile() {
  const [searchTerm, setSearchTerm] = useState('')
  const [user, setUser] = useState<UserData | null>(null)
  const [loginType, setLoginType] = useState<string>('')

  useEffect(() => {
    const storedLoginType = localStorage.getItem('loginType')
    const storedUser = localStorage.getItem('user')

    if (storedLoginType) {
      setLoginType(storedLoginType)

      if (storedLoginType === 'google' && storedUser) {
        setUser(JSON.parse(storedUser))
      }
    }
  }, [])

  return (
    <div className="grid grid-cols-[800px_1px_300px] gap-8 px-6 py-8">
      <div className="space-y-10">
        <div className="flex items-center gap-2">
          <User color="aqua" className="w-9 h-9" />
          <span className="text-2xl font-semibold text-white">Perfil</span>
        </div>

        <SearchInput
          value={searchTerm}
          onChange={setSearchTerm}
          placeholder="Buscar livro avaliado"
          className="w-[700px]"
        />

        <div className="space-y-6">
          <div className="w-[700px] bg-gray-800 p-4 rounded-lg text-white">
            <h3 className="font-semibold text-lg">Entendendo Algoritmos</h3>
            <p className="text-sm text-gray-400">Aditya Bhargava</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-700 h-full" />

      <div className="text-white space-y-4">
        <div className="flex flex-col items-center">
          <img src={user?.picture} alt="Avatar" className="rounded-full" />
          <h2 className="text-lg font-bold mt-2">{user?.name}</h2>
          <p className="text-gray-400 text-sm">Membro desde 2019</p>
        </div>

        <div className="flex items-center justify-center pt-8">
          <div className="w-8 h-1 items-center  rounded-[999px] bg-gradient-to-r from-emerald-300 to-purple-400" />
        </div>

        <div className="flex flex-col items-start ml-10 pt-8 space-y-4">
          <div className="flex items-center gap-2">
            <BookOpen color="aqua" className="w-8 h-8" size={20} />
            <div className="flex flex-col ml-5">
              <span className="text-gray-200 font-semibold">3853</span>
              <span className="text-gray-300">Páginas lidas</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Books color="aqua" className="w-8 h-8" size={20} />
            <div className="flex flex-col ml-5">
              <span className="text-gray-200 font-semibold">10</span>
              <span className="text-gray-300">Livros avaliados</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <UserList color="aqua" className="w-8 h-8" size={20} />
            <div className="flex flex-col ml-5">
              <span className="text-gray-200 font-semibold">8</span>
              <span className="text-gray-300">Autores lidos</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <BookmarkSimple color="aqua" className="w-8 h-8" size={20} />
            <div className="flex flex-col ml-5">
              <span className="text-gray-200 font-semibold">Computação</span>
              <span className="text-gray-300">Categoria mais lida</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
