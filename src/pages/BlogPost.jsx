import Navbar from '../components/sections/Navbar'
import Footer from '../components/sections/Footer'
import { articles } from '../data/blog/articles'
import { posts } from '../data/blog/posts'
import { Link, useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import ReactMarkdown from 'react-markdown'

export default function BlogPost() {

  const { slug } = useParams()

  const article = articles.find(
    article => article.slug === slug
  )

  const post = posts[slug]
  const currentIndex = articles.findIndex(
  article => article.slug === slug
)

  const nextArticle =
    articles[currentIndex + 1]

if (!article || !post) {

  return (

    <>
      <Navbar />

      <main className="container-content py-32">

        <h1 className="font-editorial text-5xl text-[#18375D]">
          Artículo no encontrado
        </h1>

      </main>

      <Footer />

    </>

  )

}

return (

  <>

    <Helmet>

      <title>
        {post.seoTitle}
      </title>

      <meta
        name="description"
        content={post.seoDescription}
      />

      <meta
        property="og:title"
        content={post.seoTitle}
      />

      <meta
        property="og:description"
        content={post.seoDescription}
      />

      <meta
        property="og:type"
        content="article"
      />

      <meta
        property="og:image"
        content={post.image}
      />

      <meta
        property="og:url"
        content={`https://www.arcoplazaasesores.com/blog/${post.slug}`}
      />

      <meta
        name="twitter:card"
        content="summary_large_image"
      />

      <meta
        name="twitter:title"
        content={post.seoTitle}
      />

      <meta
        name="twitter:description"
        content={post.seoDescription}
      />

      <meta
        name="twitter:image"
        content={post.image}
      />

      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Article',

          headline: post.title,

          description: post.seoDescription,

          image: [
            `https://www.arcoplazaasesores.com${post.image}`
          ],

          author: {
            '@type': 'Organization',
            name: 'Arcoplaza Asesores'
          },

          publisher: {
            '@type': 'Organization',
            name: 'Arcoplaza Asesores',

            logo: {
              '@type': 'ImageObject',
              url: 'https://www.arcoplazaasesores.com/logo.png'
            }
          },

          datePublished: post.datePublished,

          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `https://www.arcoplazaasesores.com/blog/${post.slug}`
          }
        })}
      </script>

    </Helmet>

    <Navbar />
    
      <article>

        <section
          className="
            bg-corporate-gradient
            text-white
            pt-24
            pb-20
          "
        >

          <div className="container-content">
          <div
          className="
            flex
            flex-wrap
            gap-2

            text-sm

            text-slate-300

            mb-8
          "
        >

          <Link
            to="/blog"
            className="hover:text-white transition-colors"
          >
            Blog
          </Link>

          <span>/</span>

          <span>{article.category}</span>

          <span>/</span>

          <span className="text-white">
            {article.title}
          </span>

        </div>
            <div
              className="
                text-xs
                uppercase
                tracking-[0.22em]
                text-corporateGreen
                mb-6
              "
            >
              {article.category}
            </div>

            <h1
              className="
                font-editorial
                text-[54px]
                lg:text-[78px]
                leading-[0.92]
                tracking-tight
                max-w-[900px]
              "
            >
              {article.title}
            </h1>

        <div
          className="
            flex
            flex-wrap
            gap-4

            mt-8

            text-slate-300
          "
        >
          <span>{article.date}</span>

          <span>•</span>

          <span>{article.readTime} lectura</span>

          <span>•</span>

          <span>{article.category}</span>

        </div>
        </div>
        </section>

        <section className="container-content py-16">

          <img
            src={article.image}
            alt={article.title}
            className="
              w-full
              max-w-[700px]

              rounded-[28px]
              mb-16
            "
          />

        <div className="max-w-3xl">

          {post.content.map((block, index) => {

            if (block.type === 'heading') {

              return (

                <h2
                  key={index}
                  className="
                    font-editorial

                    text-[38px]

                    leading-[1]

                    tracking-tight

                    text-[#18375D]

                    mt-16
                    mb-6
                  "
                >
                  {block.text}
                </h2>

              )

            }

            return (

        <div
          key={index}
          className="
            text-lg
            leading-9
            text-[#556274]

            mb-8
          "
        >
          <ReactMarkdown>
            {block.text}
          </ReactMarkdown>
        </div>
            )

          })}

        </div>

        <div
          className="
            mt-24

            p-10

            rounded-[28px]

            bg-[#F7F5F0]

            max-w-3xl
          "
        >

          <div
            className="
              text-xs
              uppercase
              tracking-[0.18em]

              text-corporateGreen

              mb-4
            "
          >
            REVISIÓN ENERGÉTICA
          </div>

          <h2
            className="
              font-editorial

              text-[42px]

              leading-[0.95]

              text-[#18375D]

              mb-6
            "
          >
            ¿Quieres saber si estás pagando más de lo necesario?
          </h2>

          <p
            className="
              text-[#556274]

              text-lg

              leading-8

              mb-8
            "
          >
            Revisamos contratos, tarifas y facturas para detectar posibles
            oportunidades de ahorro y optimización.
          </p>

          <a
            href="/#contacto"
            className="
              inline-flex

              px-8
              py-4

              rounded-xl

              bg-corporate

              text-white
            "
          >
            Solicitar revisión
          </a>

        </div>

          <div
      className="
        border-t
        border-[#ECE7DD]

        mt-24
        pt-16

        max-w-3xl
      "
    >

{nextArticle && (

  <>

    <h3
      className="
        text-xs
        uppercase
        tracking-[0.18em]

        text-corporateGreen

        mb-4
      "
    >
      SIGUIENTE ARTÍCULO
    </h3>

    <Link
      to={`/blog/${nextArticle.slug}`}
      className="
        block

        font-editorial

        text-[34px]

        leading-[1]

        text-[#18375D]

        hover:text-corporateGreen

        transition-colors

        mb-8
      "
    >
      {nextArticle.title}
    </Link>

  </>

)}

      <Link
        to="/blog"
        className="
          text-[#18375D]

          hover:text-corporateGreen

          transition-colors
        "
      >
        ← Volver al blog
      </Link>
    </div>    

        </section>

      </article>

      <Footer />

    </>
  )

}