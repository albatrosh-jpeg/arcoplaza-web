const modules = import.meta.glob('/src/content/blog/*.md', {
  eager: true,
  query: '?raw',
  import: 'default'
})

function parseValue(value) {
  const trimmed = value.trim()

  if (trimmed === 'true') return true
  if (trimmed === 'false') return false

  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    return trimmed.slice(1, -1)
  }

  const number = Number(trimmed)

  if (!Number.isNaN(number) && trimmed !== '') {
    return number
  }

  return trimmed
}

function parseFrontmatter(source) {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/)

  if (!match) {
    throw new Error('Blog post Markdown file is missing frontmatter.')
  }

  const [, frontmatter, content] = match
  const data = {}

  frontmatter
    .split(/\r?\n/)
    .filter(Boolean)
    .forEach(line => {
      const separatorIndex = line.indexOf(':')

      if (separatorIndex === -1) return

      const key = line.slice(0, separatorIndex).trim()
      const value = line.slice(separatorIndex + 1)

      data[key] = parseValue(value)
    })

  return {
    ...data,
    content: content.trim()
  }
}

const parsedPosts = Object.values(modules)
  .map(parseFrontmatter)
  .sort((first, second) => first.order - second.order)

export const articles = parsedPosts.map(
  ({
    content,
    datePublished,
    seoTitle,
    seoDescription,
    order,
    ...article
  }) => article
)

export const posts = parsedPosts.reduce((accumulator, post) => {
  accumulator[post.slug] = post
  return accumulator
}, {})
