import { Binoculars, MagnifyingGlass } from 'phosphor-react'
import { useEffect, useState } from 'react'
import Livro14Habitos from '../../../assets/livro_14habitosdedesenvolvedores.svg'
import LivroRevdosBich from '../../../assets/livro_arevolucaodosbichos.svg'
import LivroArquitetura from '../../../assets/livro_arquitetura.svg'
import LivroCodigo from '../../../assets/livro_codigolimpo.svg'
import LivroDomain from '../../../assets/livro_domain-drive.svg'
import LivroEntendendo from '../../../assets/livro_entendendoalgoritmos.svg'
import LivroFragmentos from '../../../assets/livro_fragmentosdohorror.svg'
import LivrosHistorias from '../../../assets/livro_historiasextraordinarias.svg'
import LivroOFim from '../../../assets/livro_ofimdaeternidade.svg'
import LivroGuia from '../../../assets/livro_oguiadomochileirodasgalaxias.svg'
import LivroHobbit from '../../../assets/livro_ohobbit.svg'
import LivroPoderDoHabito from '../../../assets/livro_opoderdohabito.svg'
import LivroProgramadorPrag from '../../../assets/livro_oprogramadorpragmatico.svg'
import LivroRefat from '../../../assets/livro_refatoracao.svg'
import LivroViagemCentro from '../../../assets/livro_viagemaocentrodaterra.svg'
import { BookCardExplore } from './bookCard'
import { BookDetailsAside } from './bookDetailsAside'
import { Categories } from './categories'

interface Book {
  image: string
  title: string
  author: string
  stars: number
  gender: string
  read?: boolean
}

export function Explore() {
  const books: Book[] = [
    {
      image: LivroRevdosBich,
      title: 'A revolução dos bichos',
      author: 'George Orwell',
      stars: 4,
      gender: 'Educação',
    },
    {
      image: Livro14Habitos,
      title: '14 Hábitos de Desenvolvedores Altamente Produtivos',
      author: 'Zeno Rocha',
      stars: 4,
      gender: 'Computação',
      read: true,
    },
    {
      image: LivroOFim,
      title: 'O fim da eternidade',
      author: 'Isaac Asimov',
      stars: 4,
      gender: 'Fantasia',
    },
    {
      image: LivroEntendendo,
      title: 'Entendendo Algoritmos',
      author: 'Aditya Y. Bhargava',
      stars: 4,
      gender: 'Ficção Científica',
    },
    {
      image: LivroCodigo,
      title: 'Código limpo',
      author: 'Robert C. Martin',
      stars: 4,
      gender: 'Horror',
    },
    {
      image: LivroPoderDoHabito,
      title: 'O poder do hábito',
      author: 'Charles Duhigg',
      stars: 4,
      gender: 'HQs',
      read: true,
    },
    {
      image: LivroArquitetura,
      title: 'Arquitetura limpa',
      author: 'Robert C. Martin',
      stars: 4,
      gender: 'Suspense',
    },
    {
      image: LivroHobbit,
      title: 'O Hobbit',
      author: 'J.R.R Tolkien',
      stars: 4,
      gender: 'Suspense',
    },
    {
      image: LivrosHistorias,
      title: 'Histórias extraordinárias',
      author: 'Edgar Allan Poe',
      stars: 4,
      gender: 'HQs',
    },
    {
      image: LivroRefat,
      title: 'Refatoração',
      author: 'Martin Fowler',
      stars: 4,
      gender: 'Ficção Científica',
    },
    {
      image: LivroDomain,
      title: 'Domain-Driven Design',
      author: 'Eric Evans',
      stars: 4,
      gender: 'Computação',
    },
    {
      image: LivroViagemCentro,
      title: 'Viagem ao Centro da Terra',
      author: 'Julio Verne',
      stars: 4,
      gender: 'Fantasia',
      read: true,
    },
    {
      image: LivroGuia,
      title: 'O guia do mochileiro das galáxias',
      author: 'Douglas Adams',
      stars: 4,
      gender: 'Ficção Científica',
    },
    {
      image: LivroFragmentos,
      title: 'Fragmentos do Horror',
      author: 'Junji Ito',
      stars: 4,
      gender: 'Educação',
    },
    {
      image: LivroProgramadorPrag,
      title: 'O Programador Pragmático',
      author: 'Andrew Hunt',
      stars: 4,
      gender: 'Educação',
    },
  ]

  const [selectedCategory, setSelectedCategory] = useState('Tudo')
  const [searchTerm, setSearchTerm] = useState('')
  const [loading, setLoading] = useState(true)
  const [isAsideOpen, setIsAsideOpen] = useState(false)
  const [selectedBook, setSelectedBook] = useState<Book | null>(null)

  useEffect(() => {
    // Simulando carregamento
    const timer = setTimeout(() => setLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (isAsideOpen) {
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    }

    return () => {
      document.body.classList.remove('no-scroll')
    }
  }, [isAsideOpen])

  const categories = [
    'Tudo',
    'Computação',
    'Educação',
    'Fantasia',
    'Ficção Científica',
    'Horror',
    'HQs',
    'Suspense',
  ]

  const filteredBooks = books.filter(book => {
    const matchesCategory =
      selectedCategory === 'Tudo' || book.gender === selectedCategory
    const matchesSearch =
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const handleBookClick = (book: Book) => {
    setSelectedBook(book)
    setIsAsideOpen(true)
  }

  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Binoculars color="aqua" className="w-9 h-9" />
          <span className="text-2xl font-semibold">Explorar</span>
        </div>
        <div className="relative">
          <input
            className="w-[433px] h-12 bg-transparent border border-gray-300 px-4 rounded outline-0 placeholder:text-gray-400"
            placeholder="Buscar livro ou autor"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
          <MagnifyingGlass
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white cursor-pointer"
            size={24}
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-3 mt-5">
        {categories.map(category => (
          <Categories
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`cursor-pointer px-3 py-1 rounded ${
              selectedCategory === category
                ? 'bg-purple-200 text-purple-800'
                : 'bg-gray-800 text-gray-200'
            }`}
          >
            {category}
          </Categories>
        ))}
      </div>

      <div className="flex flex-wrap gap-4 mt-5 mb-8">
        {loading
          ? Array.from({ length: 12 }).map((_, index) => (
              // biome-ignore lint/style/useSelfClosingElements: <explanation>
              <div
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                key={index}
                className="w-[300px] h-[280px] bg-gray-800 animate-pulse rounded-lg"
              ></div>
            ))
          : filteredBooks.map(book => (
              <BookCardExplore
                key={book.title}
                image={book.image}
                author={book.author}
                stars={book.stars}
                title={book.title}
                onClick={() => handleBookClick(book)}
              />
            ))}

        {isAsideOpen && selectedBook && (
          <BookDetailsAside
            book={selectedBook}
            onClose={() => setIsAsideOpen(false)}
            isOpen={isAsideOpen}
          />
        )}
      </div>
    </>
  )
}
