import { parseMarkdownPost, sortPosts } from './parseMarkdownPost'

const markdownFiles = import.meta.glob('../../content/blog/*.md', {
  eager: true,
  import: 'default',
  query: '?raw'
})

const markdownPostList = sortPosts(
  Object.entries(markdownFiles).map(([sourcePath, raw]) =>
    parseMarkdownPost(raw, sourcePath)
  )
)

export const posts = Object.fromEntries(
  markdownPostList.map(post => [post.slug, post])
)

export const articles = markdownPostList.map(
  ({
    content,
    seoTitle,
    seoDescription,
    sourcePath,
    ...article
  }) => ({
    ...article,
    excerpt: article.excerpt || seoDescription
  })
)
