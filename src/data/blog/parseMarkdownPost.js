export function parseFrontmatter(raw) {
  const match = String(raw || '').match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/)

  if (!match) {
    return {
      frontmatter: {},
      body: String(raw || '').trim()
    }
  }

  const frontmatter = {}
  let currentKey = null

  match[1].split(/\r?\n/).forEach(line => {
    if (!line.trim()) return

    if (/^\s+/.test(line) && currentKey) {
      frontmatter[currentKey] = `${frontmatter[currentKey]} ${line.trim()}`
      return
    }

    const separatorIndex = line.indexOf(':')

    if (separatorIndex === -1) return

    const key = line.slice(0, separatorIndex).trim()
    const value = line.slice(separatorIndex + 1).trim()

    currentKey = key
    frontmatter[key] = parseFrontmatterValue(value)
  })

  return {
    frontmatter,
    body: String(raw || '').slice(match[0].length).trim()
  }
}

function parseFrontmatterValue(value) {
  if (value === 'true') return true
  if (value === 'false') return false
  if (/^-?\d+(\.\d+)?$/.test(value)) return Number(value)

  if (
    (value.startsWith('"') && value.endsWith('"')) ||
    (value.startsWith("'") && value.endsWith("'"))
  ) {
    try {
      return JSON.parse(value)
    } catch {
      return value.slice(1, -1)
    }
  }

  return value
}

export function parseMarkdownPost(raw, sourcePath = '') {
  const { frontmatter, body } = parseFrontmatter(raw)
  const slug = frontmatter.slug || sourcePath.split('/').pop()?.replace(/\.md$/, '')

  return {
    ...frontmatter,
    slug,
    title: frontmatter.title || slug,
    excerpt: frontmatter.excerpt || frontmatter.seoDescription || '',
    seoTitle: frontmatter.seoTitle || frontmatter.title || slug,
    seoDescription:
      frontmatter.seoDescription || frontmatter.excerpt || '',
    featured: Boolean(frontmatter.featured),
    content: body,
    sourcePath
  }
}

export function sortPosts(posts) {
  return [...posts].sort((a, b) => {
    const orderA = Number.isFinite(Number(a.order)) ? Number(a.order) : Infinity
    const orderB = Number.isFinite(Number(b.order)) ? Number(b.order) : Infinity

    if (orderA !== orderB) return orderA - orderB

    return String(b.datePublished || '').localeCompare(
      String(a.datePublished || '')
    )
  })
}
