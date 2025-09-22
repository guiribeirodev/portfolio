import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'

export interface BlogPost {
  title: string
  slug: string
  excerpt: string
  content: string
  date: string
  readTime: string
  author: string
  tags: string[]
  coverImage?: string
  published: boolean
}

const postsDirectory = path.join(process.cwd(), 'posts')

export function getAllPosts(): BlogPost[] {
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map((fileName) => {
      // Remove ".md" from file name to get slug
      const slug = fileName.replace(/\.md$/, '')

      // Read markdown file as string
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents)

      // Convert markdown to HTML
      const content = marked(matterResult.content)

      // Combine the data with the slug and content
      return {
        slug,
        content,
        title: matterResult.data.title,
        excerpt: matterResult.data.excerpt,
        date: matterResult.data.date,
        readTime: matterResult.data.readTime,
        author: matterResult.data.author,
        tags: matterResult.data.tags || [],
        coverImage: matterResult.data.coverImage,
        published: matterResult.data.published !== false
      } as BlogPost
    })
    .filter(post => post.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return allPostsData
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  const posts = getAllPosts()
  return posts.find(post => post.slug === slug)
}

export function getPostsByTag(tag: string): BlogPost[] {
  const posts = getAllPosts()
  return posts.filter(post => 
    post.tags.includes(tag)
  ).sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  )
}

export function getAllTags(): string[] {
  const posts = getAllPosts()
  const tags = new Set<string>()
  posts.forEach(post => {
    post.tags.forEach(tag => tags.add(tag))
  })
  return Array.from(tags).sort()
}