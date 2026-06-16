import { Helmet } from 'react-helmet-async'

export const SITE_URL = 'https://www.arcoplazaasesores.com'

export function absoluteUrl(path = '/') {
  if (!path) return SITE_URL
  if (/^https?:\/\//i.test(path)) return path

  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
}

export default function Seo({
  title,
  description,
  path = '/',
  image = '/og-cover.jpg',
  imageAlt = 'Arcoplaza Asesores',
  type = 'website',
  robots = 'index, follow'
}) {
  const url = absoluteUrl(path)
  const imageUrl = absoluteUrl(image)

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Arcoplaza Asesores" />
      <meta property="og:locale" content="es_ES" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:alt" content={imageAlt} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:image:alt" content={imageAlt} />
    </Helmet>
  )
}
