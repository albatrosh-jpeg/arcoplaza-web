import React from 'react'
import Navbar from '../components/sections/Navbar'
import Footer from '../components/sections/Footer'
import { articles, posts } from '../data/blog'
import { Link, useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import ReactMarkdown from 'react-markdown'
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Clock3,
  Tag
} from 'lucide-react'
import { absoluteUrl } from '../components/seo/Seo'

function countWords(content) {
  const text = Array.isArray(content)
    ? content.map(block => block.text || '').join(' ')
    : String(content || '')

  return text
    .replace(/[#*_>`-]/g, ' ')
    .trim()
    .split(/\s+/)
    .filter(Boolean).length
}

function getRelatedArticles(article, allArticles) {
  return allArticles
    .filter(item => item.slug !== article.slug)
    .sort((a, b) => {
      const categoryScore =
        Number(b.category === article.category) -
        Number(a.category === article.category)

      if (categoryScore !== 0) return categoryScore

      return 0
    })
    .slice(0, 3)
}

function MarkdownImage({ src, alt, title }) {
  return (
    <figure className="my-12 overflow-hidden rounded-[26px] border border-[#ECE7DD] bg-white shadow-[0_18px_48px_rgba(16,37,66,0.07)]">
      <img
        src={src}
        alt={alt || ''}
        className="w-full"
      />

      {title && (
        <figcaption className="border-t border-[#ECE7DD] px-5 py-4 text-sm leading-relaxed text-[#6B7280]">
          {title}
        </figcaption>
      )}
    </figure>
  )
}

function MarkdownParagraph({ children, isLead }) {
  const childArray = React.Children.toArray(children)

  if (childArray.length === 1 && childArray[0]?.type === MarkdownImage) {
    return childArray[0]
  }

  return (
    <p
      className={
        isLead
          ? 'text-[1.22rem] leading-10 text-[#21384F] font-medium mb-8'
          : 'text-[1.24rem] leading-[1.85] text-[#26384C] mb-5'
      }
    >
      {children}
    </p>
  )
}

function ArticleHeading({ children }) {
  return (
    <h2
      className="
        relative
        blog-article-heading
        text-[#18375D]

        mt-16
        mb-7
        pl-5
        before:absolute
        before:left-0
        before:top-[0.18em]
        before:h-[0.9em]
        before:w-1
        before:rounded-full
        before:bg-corporateGreen
      "
    >
      {children}
    </h2>
  )
}

function InlineMarkdown({ children }) {
  return (
    <ReactMarkdown
      components={{
        p: ({ children }) => <>{children}</>
      }}
    >
      {children}
    </ReactMarkdown>
  )
}

function getParagraphGroups(content) {
  const groups = []
  let paragraphBuffer = []

  const flushParagraphs = () => {
    if (!paragraphBuffer.length) return

    for (let index = 0; index < paragraphBuffer.length; index += 3) {
      groups.push({
        type: 'paragraphGroup',
        text: paragraphBuffer
          .slice(index, index + 3)
          .map(block => block.text)
          .filter(Boolean)
          .join(' ')
      })
    }

    paragraphBuffer = []
  }

  content.forEach(block => {
    if (block.type === 'paragraph') {
      paragraphBuffer.push(block)
      return
    }

    flushParagraphs()
    groups.push(block)
  })

  flushParagraphs()

  return groups
}

function ArticleContent({ content }) {
  if (typeof content === 'string') {
    let firstParagraphRendered = false

    return (
      <ReactMarkdown
        components={{
          h2: ArticleHeading,
          img: MarkdownImage,
          p: ({ children }) => {
            const childArray = React.Children.toArray(children)
            const isImageParagraph =
              childArray.length === 1 && childArray[0]?.type === MarkdownImage
            const isLead = !firstParagraphRendered && !isImageParagraph

            if (isLead) {
              firstParagraphRendered = true
            }

            return (
              <MarkdownParagraph isLead={isLead}>
                {children}
              </MarkdownParagraph>
            )
          }
        }}
      >
        {content}
      </ReactMarkdown>
    )
  }

  if (!Array.isArray(content)) return null

  const firstParagraphIndex = content.findIndex(
    block => block.type === 'paragraph'
  )

  const firstParagraphGroupIndex = (() => {
    if (firstParagraphIndex === -1) return -1

    let groups = 0
    let paragraphBuffer = []

    for (let i = 0; i < content.length; i += 1) {
      const block = content[i]

      if (block.type === 'paragraph') {
        paragraphBuffer.push(block)

        if (i === firstParagraphIndex) {
          return groups + Math.floor((paragraphBuffer.length - 1) / 3)
        }

        continue
      }

      if (paragraphBuffer.length) {
        groups += Math.ceil(paragraphBuffer.length / 3)
        paragraphBuffer = []
      }

      groups += 1
    }

    if (paragraphBuffer.length) {
      groups += Math.ceil(paragraphBuffer.length / 3)
    }

    return groups
  })()

  return getParagraphGroups(content).map((block, index) => {
    if (block.type === 'heading') {
      return (
        <ArticleHeading key={index}>
          {block.text}
        </ArticleHeading>
      )
    }

    if (block.type === 'image') {
      return (
        <MarkdownImage
          key={index}
          src={block.src}
          alt={block.alt}
          title={block.caption}
        />
      )
    }

    const isFirstParagraph = index === firstParagraphGroupIndex

    return (
      <p
        key={index}
        className={
          isFirstParagraph
            ? 'text-[1.22rem] leading-10 text-[#21384F] font-medium mb-8'
            : 'text-[1.24rem] leading-[1.85] text-[#26384C] mb-5'
        }
      >
        <InlineMarkdown>
          {block.text || ''}
        </InlineMarkdown>
      </p>
    )
  })
}

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

        <h1 className="heading-h1 text-[#18375D]">
          Artículo no encontrado
        </h1>

      </main>

      <Footer />

    </>

  )

}

const articleImage =
  article.image || post.image

const hasArticleImage =
  Boolean(articleImage)

const articleExcerpt =
  article.excerpt || post.excerpt || post.seoDescription
const articleUrl =
  absoluteUrl(`/blog/${post.slug}`)
const articleImageUrl =
  hasArticleImage ? absoluteUrl(articleImage) : null
const articleImageAlt =
  article.imageAlt || post.imageAlt || article.title
const wordCount =
  countWords(post.content)
const relatedArticles =
  getRelatedArticles(article, articles)

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

      <link
        rel="canonical"
        href={articleUrl}
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

      {hasArticleImage && (
        <meta
          property="og:image"
          content={articleImageUrl}
        />
      )}

      {hasArticleImage && (
        <meta
          property="og:image:alt"
          content={articleImageAlt}
        />
      )}

      <meta
        property="og:url"
        content={articleUrl}
      />

      <meta
        property="article:published_time"
        content={post.datePublished}
      />

      <meta
        property="article:modified_time"
        content={post.dateModified ?? post.datePublished}
      />

      <meta
        property="article:section"
        content={article.category}
      />

      <meta
        name="twitter:card"
        content={hasArticleImage ? 'summary_large_image' : 'summary'}
      />

      <meta
        name="twitter:title"
        content={post.seoTitle}
      />

      <meta
        name="twitter:description"
        content={post.seoDescription}
      />

      {hasArticleImage && (
        <meta
          name="twitter:image"
          content={articleImageUrl}
        />
      )}

      {hasArticleImage && (
        <meta
          name="twitter:image:alt"
          content={articleImageAlt}
        />
      )}

      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Article',

          headline: post.title,

          description: post.seoDescription,
          articleSection: article.category,
          wordCount,
          inLanguage: 'es-ES',

          ...(hasArticleImage
            ? {
                image: [
                  articleImageUrl
                ]
              }
            : {}),

          author: {
            '@type': 'Organization',
            name: 'Arcoplaza Asesores'
          },

          publisher: {
            '@type': 'Organization',
            name: 'Arcoplaza Asesores',

            logo: {
              '@type': 'ImageObject',
              url: absoluteUrl('/logo-arcoplaza.png')
            }
          },

          datePublished: post.datePublished,
          dateModified: post.dateModified ?? post.datePublished,

          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': articleUrl
          }
        })}
      </script>

      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Inicio',
              item: absoluteUrl('/')
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Blog',
              item: absoluteUrl('/blog')
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: article.category,
              item: absoluteUrl('/blog')
            },
            {
              '@type': 'ListItem',
              position: 4,
              name: article.title,
              item: articleUrl
            }
          ]
        })}
      </script>

    </Helmet>

    <Navbar />
    
      <article>

        <section
          className="
            relative
            overflow-hidden
            bg-corporate-gradient
            text-white
            pt-24
            pb-28
            lg:pb-36
          "
        >
 
          <div className="pointer-events-none absolute inset-0">
            {hasArticleImage ? (
              <>
                <img
                  src={articleImage}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(90deg, rgba(13,59,116,0.94) 0%, rgba(13,59,116,0.82) 35%, rgba(13,59,116,0.50) 65%, rgba(13,59,116,0.25) 100%)'
                  }}
                />
              </>
            ) : (
              <img
                src="/hero-blueprint.webp"
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-10"
              />
            )}
          </div>

          <div className="pointer-events-none absolute -right-24 top-10 hidden h-80 w-80 rounded-full border border-white/10 lg:block" />
          <div className="pointer-events-none absolute bottom-10 right-16 hidden h-36 w-36 rounded-full border border-dashed border-white/10 lg:block" />

          <div className="container-content relative z-10">
          <nav
          aria-label="Breadcrumb"
          className="
            flex
            flex-wrap
            gap-2
            min-w-0
            overflow-hidden

            text-sm

            text-white/72

            mb-8
          "
        >
          <ol className="flex min-w-0 flex-wrap gap-2">
            <li>
              <Link
                to="/"
                className="hover:text-white transition-colors"
              >
                Inicio
              </Link>
            </li>

            <li>/</li>

            <li>
              <Link
                to="/blog"
                className="hover:text-white transition-colors"
              >
                Blog
              </Link>
            </li>

            <li>/</li>

            <li>{article.category}</li>

            <li>/</li>

            <li
              className="hidden min-w-0 max-w-[420px] truncate text-white sm:inline-block"
              aria-current="page"
            >
              {article.title}
            </li>
          </ol>

        </nav>
            <div
              className="
                text-xs
                uppercase
                tracking-[0.18em]
                text-corporateGreen
                mb-6
              "
            >
              {article.category}
            </div>

            <h1
              className="
                heading-h1
                w-full
                !max-w-full
                !text-[34px]
                !leading-[1.05]
                sm:!max-w-[980px]
                sm:!text-[48px]
                lg:!text-[64px]
                break-words
                text-balance
                [overflow-wrap:anywhere]
              "
            >
              {article.title}
            </h1>

            {articleExcerpt && (
              <p className="mt-6 max-w-[680px] text-xl leading-9 text-white/85">
                {articleExcerpt}
              </p>
            )}

        <div
          className="
            flex
            flex-wrap
            gap-4

            mt-8

            text-white/72
          "
        >
          <span className="inline-flex items-center gap-2">
            <CalendarDays size={16} />
            {article.date}
          </span>

          <span className="inline-flex items-center gap-2">
            <Clock3 size={16} />
            {article.readTime} lectura
          </span>

          <span className="inline-flex items-center gap-2">
            <Tag size={16} />
            {article.category}
          </span>

        </div>
        </div>
        </section>

        <section className="bg-[#FCFBF8]">

          <div className="container-content pb-20 pt-12 lg:pt-16">

        <div className="mx-auto max-w-[680px]">

          <ArticleContent content={post.content} />

        </div>

        <div
          className="
            card-top-accent
            mt-20

            p-7
            sm:p-10

            rounded-[28px]

            border
            border-[#E7E1D7]
            bg-white

            max-w-3xl
            mx-auto
            shadow-[0_20px_60px_rgba(16,37,66,0.08)]
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
              heading-h2
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
            href="/#formulario"
            className="
              inline-flex
              items-center
              gap-3

              px-8
              py-4

              rounded-[18px]

              bg-[linear-gradient(135deg,#43B886_0%,#0657B7_100%)]

              text-white
              font-semibold
              shadow-[0_16px_34px_rgba(6,87,183,0.22)]
              transition-transform
              hover:-translate-y-[1px]
            "
          >
            Solicitar revisión
          </a>

        </div>

        {relatedArticles.length > 0 && (
          <section className="mt-16 max-w-5xl mx-auto">
            <div className="mb-6 text-xs uppercase tracking-[0.18em] text-corporateGreen">
              Artículos relacionados
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {relatedArticles.map(related => (
                <Link
                  key={related.slug}
                  to={`/blog/${related.slug}`}
                  className="card-top-accent rounded-[22px] border border-[#E7E1D7] bg-white p-5 text-[#18375D] transition-all hover:-translate-y-1 hover:text-corporateGreen hover:shadow-[0_14px_34px_rgba(16,37,66,0.08)]"
                >
                  <div className="text-[11px] uppercase tracking-[0.18em] text-corporateGreen">
                    {related.category}
                  </div>

                  <h2 className="mt-4 font-editorial text-[21px] font-semibold leading-tight">
                    {related.title}
                  </h2>

                  <p className="mt-4 text-sm leading-relaxed text-[#556274]">
                    {related.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}

          <div
      className="
        mt-16
        max-w-3xl
        mx-auto

        rounded-[28px]
        border
        border-[#E7E1D7]
        bg-white/70
        p-6
        sm:p-8
      "
    >

{nextArticle && (

  <>

    <div
      className="
        text-xs
        uppercase
        tracking-[0.18em]

        text-corporateGreen

        mb-4
      "
    >
      SIGUIENTE ARTÍCULO
    </div>

    <Link
      to={`/blog/${nextArticle.slug}`}
      className="
        group
        flex
        items-center
        justify-between
        gap-6

        rounded-[20px]
        border
        border-[#E7E1D7]
        bg-white
        p-5

        text-[22px]
        font-editorial
        font-semibold
        leading-tight
        text-[#18375D]

        hover:text-corporateGreen
        hover:shadow-[0_14px_34px_rgba(16,37,66,0.08)]

        transition-all

        mb-8
      "
    >
      <span>{nextArticle.title}</span>
      <ArrowRight className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1" />
    </Link>

  </>

)}

      <Link
        to="/blog"
        className="
          inline-flex
          items-center
          gap-2
          rounded-full
          border
          border-[#E7E1D7]
          bg-white
          px-4
          py-2
          text-[#18375D]

          hover:text-corporateGreen
          hover:border-corporateGreen/30

          transition-colors
        "
      >
        ← Volver al blog
      </Link>
    </div>    

          </div>
 
        </section>

      </article>

      <Footer />

    </>
  )

}
