import {
  LayoutGrid,
  FileText,
  UserRound,
  TrendingUp,
  Building2,
  Users,
  BookOpen,
  BatteryCharging,
  ClipboardCheck
} from 'lucide-react'
import Navbar from '../components/sections/Navbar'
import Footer from '../components/sections/Footer'
import { articles } from '../data/blog'
import { Link } from 'react-router-dom'
import { useMemo, useState } from 'react'

const categoryFilters = [
  {
    name: 'Todos',
    icon: LayoutGrid,
    matches: () => true
  },
  {
    name: 'Facturas',
    icon: FileText,
    matches: article => article.category === 'Facturas'
  },
  {
    name: 'Particulares',
    icon: UserRound,
    matches: article =>
      ['potencia', 'ventilador', 'aire-acondicionado', 'vivienda']
        .some(term =>
          [article.title, article.excerpt, article.slug]
            .join(' ')
            .toLowerCase()
            .includes(term)
        )
  },
  {
    name: 'Mercado',
    icon: TrendingUp,
    matches: article => article.category === 'Mercado'
  },
  {
    name: 'Empresas',
    icon: Building2,
    matches: article => article.category === 'Empresas'
  },
  {
    name: 'Contratos',
    icon: ClipboardCheck,
    matches: article => article.category === 'Contratos'
  },
  {
    name: 'Autoconsumo',
    icon: BatteryCharging,
    matches: article => article.category === 'Autoconsumo'
  },
  {
    name: 'Comunidades',
    icon: Users,
    matches: article => article.category === 'Comunidades'
  },
  {
    name: 'Casos reales',
    icon: BookOpen,
    matches: article => article.category === 'Casos reales'
  }
]

export default function Blog() {

const [activeCategory, setActiveCategory] = useState('Todos')

const featured =
  articles.find(article => article.featured) ||
  articles[0]

const availableFilters = useMemo(
  () =>
    categoryFilters.filter(category =>
      category.name === 'Todos' ||
      articles.some(article => category.matches(article))
    ),
  []
)

const activeFilter =
  availableFilters.find(category => category.name === activeCategory) ||
  availableFilters[0]

const filteredArticles = articles.filter(article =>
  activeFilter.matches(article)
)

const visibleArticles =
  activeFilter.name === 'Todos'
    ? articles.filter(article => !article.featured)
    : filteredArticles

const showFeatured =
  activeFilter.name === 'Todos'

  return (

    <div className="min-h-screen bg-white">

      <Navbar />

      <section
        className="
          relative
          overflow-hidden
          text-white
          bg-cover
          bg-no-repeat
          bg-[position:70%_center]
          md:bg-[position:right_center]
        "
        style={{
          backgroundImage:
            "linear-gradient(rgba(8,25,45,0.25), rgba(8,25,45,0.25)), url('/blog-observatorio-arcoplaza.webp')",
        }}
      >

            <div
              className="
                container-content

                pt-24
                pb-24
              "
            >
            <div
              className="
                text-white
                uppercase
                tracking-[0.22em]
                text-md
                font-bold
                mb-8
                pt-10
              "
            >
              OBSERVATORIO ARCOPLAZA
            </div>

            <h1
            className="
                heading-h1
                text-white
                max-w-[900px]
            "
            >
                  Análisis y conocimiento para entender mejor el mercado energético
            </h1>

            <p
              className="
                mt-8
                text-[20px]
                text-slate-300
                max-w-700px
                leading-8
              "
            >
              Tendencias de mercado, contratación energética,
              facturación, potencia, comunidades de propietarios
              y todo aquello que influye en el coste real de la energía.
            </p>

        </div>

      </section>

      <section
        className="
          border-b
          border-[#ECE7DD]
          bg-white
        "
      >

            <div
            className="
                container-content
                py-6
                flex
                flex-wrap
                gap-8
            "
            >
            {availableFilters.map(category => {

            const Icon = category.icon
            const isActive = category.name === activeFilter.name

            return (

                <button
                key={category.name}
                type="button"
                onClick={() => setActiveCategory(category.name)}
                aria-pressed={isActive}
                className={`
                    flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    px-4
                    py-2
                    text-sm
                    font-medium
                    transition-all
                    ${
                      isActive
                        ? 'border-corporateGreen bg-corporateGreen-soft text-corporateGreen shadow-[0_8px_22px_rgba(54,126,69,0.10)]'
                        : 'border-transparent text-[#556274] hover:border-[#ECE7DD] hover:bg-[#F7F5F0] hover:text-[#18375D]'
                    }
                `}
                >
                <Icon size={16} />

                {category.name}

                </button>

            )

            })}

        </div>

      </section>

      {showFeatured && (
      <section>
        <div className="container-content py-20">

          <Link
            to={`/blog/${featured.slug}`}
            className="block group"
          >

            <div
              className="
                grid
                lg:grid-cols-2
                gap-12
                items-center
              "
            >

              <img
                src={featured.image}
                alt={featured.imageAlt || featured.title}
                className="
                  w-full
                  h-[420px]
                  object-cover
                  rounded-[28px]
                  border
                  border-[#ECE7DD]

                  transition-transform
                  duration-500

                  group-hover:scale-[1.02]
                "
              />

              <div>

                <div
                  className="
                    text-corporateGreen
                    uppercase
                    tracking-[0.18em]
                    text-xs
                    mb-4
                  "
                >
                  ARTÍCULO DESTACADO
                </div>

                <h2
                  className="
                    heading-h2
                    mb-6
                    text-[#18375D]

                    transition-colors
                    duration-300

                    group-hover:text-corporateGreen
                  "
                >
                  {featured.title}
                </h2>

                <div
                  className="
                    flex
                    items-center
                    gap-3

                    text-sm
                    text-corporateGreen

                    mb-6
                  "
                >
                  <span>{featured.date}</span>
                  <span>•</span>
                  <span>{featured.readTime} lectura</span>
                </div>

                <p
                  className="
                    text-[#556274]
                    text-lg
                    leading-8
                  "
                >
                  {featured.excerpt}
                </p>

              </div>

            </div>

          </Link>

        </div>
      </section>
      )}
        <section>
        <div className={`container-content ${showFeatured ? 'pb-24' : 'py-20'}`}>

        {!showFeatured && (
          <div className="mb-10">
            <div className="text-sm uppercase tracking-[0.18em] text-corporateGreen">
              {activeFilter.name}
            </div>

            <h2 className="heading-h2 mt-3 text-[#18375D]">
              {visibleArticles.length === 1
                ? '1 artículo encontrado'
                : `${visibleArticles.length} artículos encontrados`}
            </h2>
          </div>
        )}

        <div
          className="
            grid
            md:grid-cols-2
            xl:grid-cols-4
            gap-8
          "
        >

          {visibleArticles.map(article => (

              <Link
                key={article.slug}
                to={`/blog/${article.slug}`}
                className="block group"
              >

                <article
                  className="
                    card-top-accent
                    border
                    border-[#ECE7DD]

                    rounded-[24px]

                    overflow-hidden

                    bg-white

                    transition-all
                    duration-300

                    hover:-translate-y-1
                    hover:shadow-lg
                  "
                >                
      
              {article.image ? (
                <img
                    src={article.image}
                    alt={article.imageAlt || article.title}
                    className="
                      w-full
                      h-56
                      object-cover
                      transition-transform
                      duration-500
                      group-hover:scale-[1.03]
                    "
                  />
              ) : (
                <div
                  aria-hidden="true"
                  className="
                    h-56
                    w-full
                    bg-[#F8F6F1]
                  "
                />
              )}

                <div className="p-6">
                <div
                  className="
                    text-xs
                    uppercase
                    tracking-[0.18em]
                    text-corporateGreen
                    mb-4
                  "
                >
                  {article.category}
                </div>

              <h3
                className="
                  heading-h3
                  text-[#18375D]

                  mb-4

                  transition-colors
                  duration-300

                  group-hover:text-corporateGreen
                "
              >
                
                  {article.title}
                </h3>

                <p
                  className="
                    text-[#556274]
                    leading-7
                    mb-6
                  "
                >
                  {article.excerpt}
                </p>

                <div
                  className="
                    flex
                    justify-between
                    items-center
                    text-sm
                  "
                >

                  <span className="text-[#7C8795]">
                    {article.readTime}
                  </span>

                </div>

              </div>

            </article>
          </Link>

          ))}

        </div>
        </div>
      </section>

      <Footer />

    </div>

  )

}
