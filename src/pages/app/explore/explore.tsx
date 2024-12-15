import { Binoculars, MagnifyingGlass } from 'phosphor-react'
import { useState } from 'react'
import Livro14Habitos from '../../../assets/livro_14habitosdedesenvolvedores.svg'
import LivroRevdosBich from '../../../assets/livro_arevolucaodosbichos.svg'
import LivroArquitetura from '../../../assets/livro_arquitetura.svg'
import LivroCodigo from '../../../assets/livro_codigolimpo.svg'
import LivroDomain from '../../../assets/livro_domain-drive.svg'
import LivroFragmentos from '../../../assets/livro_fragmentosdohorror.svg'
import LivrosHistorias from '../../../assets/livro_historiasextraordinarias.svg'
import LivroOFim from '../../../assets/livro_ofimdaeternidade.svg'
import LivroEntendendo from '../../../assets/livro_ofimdaeternidade.svg'
import LivroGuia from '../../../assets/livro_oguiadomochileirodasgalaxias.svg'
import LivroHobbit from '../../../assets/livro_ohobbit.svg'
import LivroPoderDoHabito from '../../../assets/livro_opoderdohabito.svg'
import LivroProgramadorPrag from '../../../assets/livro_oprogramadorpragmatico.svg'
import LivroRefat from '../../../assets/livro_refatoracao.svg'
import LivroViagemCentro from '../../../assets/livro_viagemaocentrodaterra.svg'
import { BookCardExplore } from './bookCard'
import { Categories } from './categories'

// componente lido, botão Tudo pré-selecionado no filtro, melhores cores

export function Explore() {
  const [selectedCategory, setSelectedCategory] = useState('Tudo')

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

  const books = [
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

  const filteredBooks =
    selectedCategory === 'Tudo'
      ? books
      : books.filter(book => book.gender === selectedCategory)

  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Binoculars color="aqua" className="w-9 h-9" />
          <span className="text-2xl font-semibold">Explorar</span>
        </div>

        <div className="flex items-center">
          <input
            className="w-[433px] h-12 bg-transparent border border-gray-300 px-4 rounded outline-0 placeholder:text-gray-400"
            placeholder="Buscar livro ou autor"
            type="text"
          />
          <MagnifyingGlass color="white" className="-m-7" />
        </div>
      </div>

      <div className="flex flex-wrap gap-3 mt-5">
        {categories.map(category => (
          <Categories
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`${selectedCategory === category ? 'bg-purple-100 text-purple-500' : 'bg-transparent text-purple-100'}`}
          >
            {category}
          </Categories>
        ))}
      </div>

      <div className="flex flex-wrap gap-4 pb-10">
        {filteredBooks.map(book => (
          <BookCardExplore
            image={book.image}
            author={book.author}
            stars={book.stars}
            title={book.title}
            key={book.title}
          />
        ))}
      </div>
    </>
  )
}
