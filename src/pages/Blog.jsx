import {
  LayoutGrid,
  FileText,
  Zap,
  TrendingUp,
  Building2,
  Users,
  BookOpen
} from 'lucide-react'
import Navbar from '../components/sections/Navbar'
import Footer from '../components/sections/Footer'
import { articles } from '../data/blog/articles'


export default function Blog() {

const featured =
  articles.find(article => article.featured) ||
  articles[0]

  return (

    <div className="min-h-screen bg-white">

      <Navbar />

      <section
        className="
          relative
          overflow-hidden
          text-white
        "
       style={{
          background:
            'linear-gradient(135deg,#214B6D 0%,#123552 46%,#091C2E 100%)'
        }}
      >

        <img
          src="/hero-blueprint.png"
          alt=""
          className="
            absolute
            inset-0
            w-full
            h-full
            object-cover
            opacity-20
            pointer-events-none
          "
        />

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
              "
            >
              BLOG
            </div>

            <h1
            className="
                font-editorial

                text-[46px]
                lg:text-[60px]

                leading-[0.92]
                tracking-tight

                max-w-[900px]
            "
            >
                  Información que ayuda a tomar mejores decisiones energéticas
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
              Análisis, guías y casos reales para optimizar contratos,
              suministros y costes energéticos.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">

            <button
                className="
                px-16
                py-3
                rounded-xl
                border
                border-white/30
                text-white
                backdrop-blur-sm
                "
            >
                Solicitar revisión
            </button>

          </div>

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
            {[
            { name: 'Todos', icon: LayoutGrid },
            { name: 'Facturas', icon: FileText },
            { name: 'Potencia', icon: Zap },
            { name: 'Mercado', icon: TrendingUp },
            { name: 'Empresas', icon: Building2 },
            { name: 'Comunidades', icon: Users },
            { name: 'Casos reales', icon: BookOpen }
            ].map(category => {

            const Icon = category.icon

            return (

                <button
                key={category.name}
                className="
                    flex
                    gap-2
                    text-sm
                    text-[#556274]
                    hover:text-[#18375D]
                    transition-colors
                "
                >
                <Icon size={16} />

                {category.name}

                </button>

            )

            })}

        </div>

      </section>

    <section>
        <div className="container-content py-20">

        <div
          className="
            grid
            lg:grid-cols-2
            gap-12
            items-center
          "
        >
        <img
        src="/blog/destacado.jpg"
        alt="La noticia de la semana"
        className="
            w-full
            h-[420px]
            object-cover
            rounded-[28px]
            border
            border-[#ECE7DD]
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
                text-[40px]
                lg:text-[48px]

                font-editorial

                leading-[0.95]
                tracking-tight

                mb-6
                text-[#18375D]
            "
            >
                  {featured.title}     
            </h2>

            {/* Article Meta Fecha y Tiempo de lectura hasta final del div */}
            <div
            className="
                flex
                text-corporateGreen
                items-center
                gap-3
                text-sm
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
                mb-8
              "
            >
              {featured.excerpt}
            </p>

          </div>

        </div>
        </div>
      </section>

        <section>
        <div className="container-content pb-24">

        <div
          className="
            grid
            md:grid-cols-2
            xl:grid-cols-4
            gap-8
          "
        >

          {articles.map(article => (

                <article
                  key={article.title}
                  className="
                    group

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
                <img
                  src={article.image}
                  alt={article.title}
                  className="
                    w-full
                    h-56
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-[1.03]
                  "
                />

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
                    font-editorial

                    text-[28px]

                    leading-[1]

                    tracking-tight

                    text-[#18375D]

                    mb-4
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

          ))}

        </div>
        </div>
      </section>

      <Footer />

    </div>

  )

}