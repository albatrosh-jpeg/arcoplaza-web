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
import Seo from '../components/seo/Seo'

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

const editorialSectionDefinitions = [
  {
    category: 'Mercado',
    title: 'Mercado',
    intro: 'Te explicamos con claridad cómo funciona el mercado energético.'
  },
  {
    category: 'Facturas',
    title: 'Facturas y consumo',
    intro: 'Para entender mejor tu factura y por qué pagas lo que pagas.'
  },
  {
    category: 'Empresas',
    title: 'Empresas',
    intro: 'Lecturas pensadas para revisar contratos, suministros y decisiones energéticas en negocios y organizaciones.'
  },
  {
    category: 'Comunidades',
    title: 'Comunidades',
    intro: 'Contenidos útiles para comunidades de propietarios y administradores de fincas.'
  },
  {
    category: 'Casos reales',
    title: 'Casos reales',
    intro: 'Aprendizajes extraídos de revisar contratos, facturas y situaciones habituales.'
  }
]

const featuredArticleSlugs = [
  'lo-que-hemos-aprendido-revisando-cientos-de-contratos-energeticos',
  'cuanto-cuesta-tener-un-aire-acondicionado-encendido-toda-la-noche',
  'precio-fijo-o-indexado'
]

export default function Blog() {

const [activeCategory, setActiveCategory] = useState('Todos')

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

const featuredArticles =
  showFeatured
    ? featuredArticleSlugs
        .map(slug => articles.find(article => article.slug === slug))
        .filter(Boolean)
    : []

const mainEditorialArticle = featuredArticles[0]

const recommendedArticles = featuredArticles.slice(1, 3)

const featuredSlugs = new Set(
  featuredArticles.map(article => article.slug)
)

const editorialSections =
  editorialSectionDefinitions
    .map(section => ({
      ...section,
      articles: articles
        .filter(article =>
          article.category === section.category &&
          !featuredSlugs.has(article.slug)
        )
        .slice(0, 3)
    }))
    .filter(section => section.articles.length > 0)

  return (

    <div className="min-h-screen bg-white">

      <Seo
        title="Observatorio Arcoplaza | Análisis del mercado energético"
        description="Artículos sobre mercado eléctrico, contratación energética, facturación, potencia contratada y comunidades de propietarios."
        path="/blog"
        image="/blog-observatorio-arcoplaza.webp"
      />

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
      <main>
        <section>
          <div className="container-content py-20">
            <div className="mb-10 max-w-[780px]">
              <h2 className="heading-h2 text-[#18375D]">
                Artículos destacados
              </h2>
            </div>

            <div className="grid gap-8 lg:grid-cols-[1.35fr_0.85fr] lg:items-start">
              {mainEditorialArticle && (
                <Link
                  to={`/blog/${mainEditorialArticle.slug}`}
                  className="block group"
                >
                  <article
                    className="
                      card-top-accent
                      overflow-hidden
                      rounded-[24px]
                      border
                      border-[#ECE7DD]
                      bg-white
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:shadow-lg
                    "
                  >
                    <img
                      src={mainEditorialArticle.image}
                      alt={mainEditorialArticle.imageAlt || mainEditorialArticle.title}
                      className="
                        h-52
                        w-full
                        object-cover
                        transition-transform
                        duration-500
                        md:h-60
                        group-hover:scale-[1.02]
                      "
                    />

                    <div className="p-6 md:p-7">
                      <div className="mb-3 text-xs uppercase tracking-[0.18em] text-corporateGreen">
                        {mainEditorialArticle.category}
                      </div>

                      <h2
                        className="
                          heading-h2
                          mb-4
                          text-[#18375D]
                          transition-colors
                          duration-300
                          group-hover:text-corporateGreen
                        "
                      >
                        {mainEditorialArticle.title}
                      </h2>

                      <p className="mb-5 text-lg leading-8 text-[#556274]">
                        {mainEditorialArticle.excerpt}
                      </p>

                      <span className="text-sm text-[#7C8795]">
                        {mainEditorialArticle.readTime}
                      </span>
                    </div>
                  </article>
                </Link>
              )}

              <aside
                className="
                  rounded-[24px]
                  border
                  border-[#ECE7DD]
                  bg-[#F8F6F1]
                  p-6
                  md:p-7
                "
              >
                <div className="mb-6 text-sm uppercase tracking-[0.18em] text-corporateGreen">
                  Recomendamos
                </div>

                <div className="divide-y divide-[#ECE7DD]">
                  {recommendedArticles.map(article => (
                    <Link
                      key={article.slug}
                      to={`/blog/${article.slug}`}
                      className="block group py-5 first:pt-0 last:pb-0"
                    >
                      <article>
                        <img
                          src={article.image}
                          alt={article.imageAlt || article.title}
                          className="
                            mb-4
                            h-28
                            w-full
                            rounded-[16px]
                            object-cover
                            transition-transform
                            duration-500
                            group-hover:scale-[1.02]
                          "
                        />

                        <div className="mb-3 text-xs uppercase tracking-[0.18em] text-corporateGreen">
                          {article.category}
                        </div>

                        <h3
                          className="
                            heading-h3
                            mb-3
                            text-[#18375D]
                            transition-colors
                            duration-300
                            group-hover:text-corporateGreen
                          "
                        >
                          {article.title}
                        </h3>

                        <p className="mb-4 leading-7 text-[#556274]">
                          {article.excerpt}
                        </p>

                        <span className="text-sm text-[#7C8795]">
                          {article.readTime}
                        </span>
                      </article>
                    </Link>
                  ))}
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section>
          <div className="container-content pb-24">
            <div className="space-y-20">
              {editorialSections.map(section => (
                <section key={section.category}>
                  <div className="mb-8 max-w-[760px]">
                    <div className="text-sm uppercase tracking-[0.18em] text-corporateGreen">
                      {section.category}
                    </div>

                    <h2 className="heading-h2 mt-3 text-[#18375D]">
                      {section.title}
                    </h2>

                    <p className="mt-4 leading-7 text-[#556274]">
                      {section.intro}
                    </p>
                  </div>

                  <div className="grid gap-5 lg:grid-cols-3">
                    {section.articles.map((article, index) => (
                      <Link
                        key={article.slug}
                        to={`/blog/${article.slug}`}
                        className="block group"
                      >
                        <article
                          className="
                            card-top-accent
                            h-full
                            overflow-hidden
                            rounded-[24px]
                            border
                            border-[#ECE7DD]
                            bg-white
                            transition-all
                            duration-300
                            hover:-translate-y-1
                            hover:shadow-lg
                          "
                        >
                          <img
                            src={article.image}
                            alt={article.imageAlt || article.title}
                            className="
                              h-36
                              w-full
                              object-cover
                              transition-transform
                              duration-500
                              group-hover:scale-[1.03]
                            "
                          />

                          <div className="flex h-full flex-col p-6">
                            <div className="mb-5 flex items-center justify-between gap-4">
                              <div className="text-xs uppercase tracking-[0.18em] text-corporateGreen">
                                {article.category}
                              </div>

                              <span className="text-sm font-semibold text-[#18375D]">
                                {String(index + 1).padStart(2, '0')}
                              </span>
                            </div>

                            <h3
                              className="
                                heading-h3
                                mb-4
                                text-[#18375D]
                                transition-colors
                                duration-300
                                group-hover:text-corporateGreen
                              "
                            >
                              {article.title}
                            </h3>

                            <p className="mb-6 leading-7 text-[#556274]">
                              {article.excerpt}
                            </p>

                            <span className="mt-auto text-sm text-[#7C8795]">
                              {article.readTime}
                            </span>
                          </div>
                        </article>
                      </Link>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </section>
      </main>
      )}

      {!showFeatured && (
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
            mx-auto
            flex
            max-w-[1120px]
            flex-col
            gap-8
          "
        >

          {visibleArticles.map((article, index) => {

            const imageOnRight = index % 2 === 1

            return (

              <Link
                key={article.slug}
                to={`/blog/${article.slug}`}
                className="block group"
              >

                <article
                  className={`
                    card-top-accent
                    border
                    border-[#ECE7DD]

                    rounded-[24px]

                    overflow-hidden

                    bg-white

                    md:grid
                    md:items-center
                    ${
                      imageOnRight
                        ? 'md:grid-cols-[1fr_minmax(280px,380px)]'
                        : 'md:grid-cols-[minmax(280px,380px)_1fr]'
                    }

                    transition-all
                    duration-300

                    hover:-translate-y-1
                    hover:shadow-lg
                  `}
                >                
      
              {article.image ? (
                <img
                    src={article.image}
                    alt={article.imageAlt || article.title}
                    className={`
                      w-full
                      h-60
                      md:h-56
                      lg:h-64
                      object-cover
                      transition-transform
                      duration-500
                      group-hover:scale-[1.03]
                      ${imageOnRight ? 'md:order-2' : ''}
                    `}
                  />
              ) : (
                <div
                  aria-hidden="true"
                  className={`
                    h-60
                    md:h-56
                    lg:h-64
                    w-full
                    bg-[#F8F6F1]
                    ${imageOnRight ? 'md:order-2' : ''}
                  `}
                />
              )}

                <div
                  className={`
                    p-6
                    md:p-8
                    lg:p-9
                    flex
                    flex-col
                    ${imageOnRight ? 'md:order-1' : ''}
                  `}
                >
                <div
                  className="
                    text-xs
                    uppercase
                    tracking-[0.18em]
                    text-corporateGreen
                    mb-3
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
                    mt-auto
                  "
                >

                  <span className="text-[#7C8795]">
                    {article.readTime}
                  </span>

                </div>

              </div>

            </article>
          </Link>

            )

          })}

        </div>
        </div>
      </section>
      )}

      <Footer />

    </div>

  )

}
