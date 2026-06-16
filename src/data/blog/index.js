import { posts } from './posts'

export { posts }

export const articles = Object.values(posts).map(
  ({
    content,
    datePublished,
    seoTitle,
    seoDescription,
    excerpt,
    ...article
  }) => ({
    ...article,
    excerpt: excerpt || seoDescription
  })
)
