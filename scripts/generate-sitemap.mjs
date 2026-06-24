import { readdir, readFile, writeFile } from 'node:fs/promises'
import { parseMarkdownPost, sortPosts } from '../src/data/blog/parseMarkdownPost.js'

const SITE_URL = 'https://www.arcoplazaasesores.com'

const staticRoutes = [
  {
    path: '/',
    changefreq: 'weekly',
    priority: '1.0'
  },
  {
    path: '/blog',
    changefreq: 'weekly',
    priority: '0.9'
  },
  {
    path: '/mercado',
    changefreq: 'daily',
    priority: '0.9'
  },
  {
    path: '/analisis-factura-electrica',
    changefreq: 'monthly',
    priority: '0.8'
  },
  {
    path: '/soluciones/optimizacion-potencia-contratada',
    changefreq: 'monthly',
    priority: '0.8'
  },
  {
    path: '/aviso-legal',
    changefreq: 'yearly',
    priority: '0.3'
  },
  {
    path: '/politica-privacidad',
    changefreq: 'yearly',
    priority: '0.3'
  },
  {
    path: '/politica-cookies',
    changefreq: 'yearly',
    priority: '0.3'
  }
]

const contentDir = new URL('../src/content/blog/', import.meta.url)
const markdownFiles = await readdir(contentDir)
const articles = sortPosts(
  await Promise.all(
    markdownFiles
      .filter(file => file.endsWith('.md'))
      .map(async file => {
        const fileUrl = new URL(file, contentDir)
        const raw = await readFile(fileUrl, 'utf8')

        return parseMarkdownPost(raw, file)
      })
  )
)

const blogRoutes = articles.map(article => ({
  path: `/blog/${article.slug}`,
  changefreq: 'monthly',
  priority: '0.8'
}))

const routes = [
  ...staticRoutes,
  ...blogRoutes
]

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>${SITE_URL}${route.path}</loc>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>
`

await writeFile(new URL('../public/sitemap.xml', import.meta.url), xml)
