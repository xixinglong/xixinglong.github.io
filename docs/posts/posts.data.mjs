import { createContentLoader } from 'vitepress'

export default createContentLoader('posts/*.md', {
  transform(raw) {
    return raw.map(({ url, frontmatter }) => ({
      title: frontmatter.title,
      url,
      date: frontmatter.date,
      category: frontmatter.category,
      tags: frontmatter.tags,
      excerpt: frontmatter.excerpt
    }))
  }
})