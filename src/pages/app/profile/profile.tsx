import {
  BookOpen,
  BookmarkSimple,
  Books,
  Star,
  User,
  UserList,
} from 'phosphor-react'
import { useEffect, useState } from 'react'
import LivroEntendendo from '../../../assets/livro_entendendoalgoritmos.svg'
import LivroFragmentos from '../../../assets/livro_fragmentosdohorror.svg'
import LivroExtraordinarias from '../../../assets/livro_historiasextraordinarias.svg'
import { SearchInput } from '../../../components/SearchInput'

interface UserData {
  name?: string
  picture?: string
}

export function Profile() {
  const [searchTerm, setSearchTerm] = useState('')
  const [user, setUser] = useState<UserData | null>(null)
  const [_, setLoginType] = useState<string>('')

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
          <span className="text-sm text-gray-300">Há 2 dias</span>
          <div className="w-[700px] bg-gray-800 p-4 rounded-lg text-white">
            <div className="flex">
              <img
                src={LivroEntendendo}
                alt="Livro chamado Entendendo Algoritmos"
              />
              <div className="flex flex-col justify-between">
                <div className="flex flex-col gap-1 ml-5">
                  <h3 className="font-semibold text-lg">
                    Entendendo Algoritmos
                  </h3>
                  <span className="text-sm text-gray-400">Aditya Bhargava</span>
                </div>

                <div className="flex items-start gap-1 ml-5">
                  <Star weight="fill" color="white" />
                  <Star weight="fill" color="white" />
                  <Star weight="fill" color="white" />
                  <Star weight="fill" color="white" />
                  <Star />
                </div>
              </div>
            </div>

            <div className="mt-6">
              <span className="text-sm text-gray-300">
                Tristique massa sed enim lacinia odio. Congue ut faucibus nunc
                vitae non. Nam feugiat vel morbi viverra vitae mi. Vitae
                fringilla ut et suspendisse enim suspendisse vitae. Leo non eget
                lacus sollicitudin tristique pretium quam. Mollis et luctus amet
                sed convallis varius massa sagittis. Proin sed proin at leo quis
                ac sem. Nam donec accumsan curabitur amet tortor quam sit.
                Bibendum enim sit dui lorem urna amet elit rhoncus ut. Aliquet
                euismod vitae ut turpis. Aliquam amet integer pellentesque.
              </span>
            </div>
          </div>

          <div className="mt-5">
            <span className="text-sm text-gray-300">Há 5 dias</span>
          </div>
          <div className="w-[700px] bg-gray-800 p-4 rounded-lg text-white">
            <div className="flex">
              <img
                src={LivroFragmentos}
                alt="Livro chamado Fragmentos do Horror"
              />
              <div className="flex flex-col justify-between">
                <div className="flex flex-col gap-1 ml-5">
                  <h3 className="font-semibold text-lg">
                    Fragmentos do Horror
                  </h3>
                  <span className="text-sm text-gray-400">Junti Ito</span>
                </div>

                <div className="flex items-start gap-1 ml-5">
                  <Star weight="fill" color="white" />
                  <Star weight="fill" color="white" />
                  <Star weight="fill" color="white" />
                  <Star weight="fill" color="white" />
                  <Star />
                </div>
              </div>
            </div>

            <div className="mt-6">
              <span className="text-sm text-gray-300">
                Ornare amet scelerisque eget sit in donec dui. Tempus eget
                porttitor hendrerit eros viverra. Sit eget ipsum purus morbi
                curabitur cras gravida adipiscing dictum. Dui duis ut auctor
                dolor et mattis ultrices. Convallis quis in tortor pretium
                hendrerit sed. Vel et nibh sodales blandit egestas a quis
                bibendum.
              </span>
            </div>
          </div>

          <div className="mt-5">
            <span className="text-sm text-gray-300">Há 7 dias</span>
          </div>
          <div className="w-[700px] bg-gray-800 p-4 rounded-lg text-white">
            <div className="flex">
              <img
                src={LivroExtraordinarias}
                alt="Livro chamado Fragmentos do Horror"
              />
              <div className="flex flex-col justify-between">
                <div className="flex flex-col gap-1 ml-5">
                  <h3 className="font-semibold text-lg">
                    Histórias extraordinárias
                  </h3>
                  <span className="text-sm text-gray-400">Edgar Allan Poe</span>
                </div>

                <div className="flex items-start gap-1 ml-5">
                  <Star weight="fill" color="white" />
                  <Star weight="fill" color="white" />
                  <Star weight="fill" color="white" />
                  <Star weight="fill" color="white" />
                  <Star />
                </div>
              </div>
            </div>

            <div className="mt-6">
              <span className="text-sm text-gray-300">
                Nunc iaculis adipiscing ut sem a ut risus vel facilisi. Posuere
                pharetra sollicitudin sem velit sodales. Diam semper arcu nulla
                quis sapien nibh. Ut eget orci ipsum sed quis cras morbi
                placerat. Nec non at arcu adipiscing. Aenean cras ultrices
                cursus congue. Diam quis est proin id facilisi. Ac cras iaculis
                quam lectus eros orci semper fames amet. Id consequat purus
                faucibus pulvinar nisl molestie semper.
              </span>
            </div>
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
