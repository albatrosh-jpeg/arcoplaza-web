import { posts } from './posts'

export { posts }

export const articles = Object.values(posts).map(
  ({
    content,
    datePublished,
    seoTitle,
    seoDescription,
    ...article
  }) => article
)
