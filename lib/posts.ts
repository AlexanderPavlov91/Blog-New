import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkGfm from 'remark-gfm'
import remarkHtml from 'remark-html'

const POSTS_DIR = path.join(process.cwd(), 'content', 'posts')

export interface PostMeta {
  slug: string
  title: string
  date: string
  excerpt: string
  tags: string[]
  featured: boolean
}

export interface Post extends PostMeta {
  contentHtml: string
}

function readAllFiles(): { slug: string; raw: string }[] {
  if (!fs.existsSync(POSTS_DIR)) return []
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith('.mdx'))
    .map((filename) => ({
      slug: filename.replace(/\.mdx$/, ''),
      raw: fs.readFileSync(path.join(POSTS_DIR, filename), 'utf8'),
    }))
}

function parseMeta(slug: string, raw: string): PostMeta {
  const { data } = matter(raw)
  return {
    slug,
    title: (data.title as string) ?? 'Untitled',
    date: (data.date as string) ?? '',
    excerpt: (data.excerpt as string) ?? '',
    tags: (data.tags as string[]) ?? [],
    featured: (data.featured as boolean) ?? false,
  }
}

export function getAllPosts(): PostMeta[] {
  const posts = readAllFiles().map(({ slug, raw }) => parseMeta(slug, raw))
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const filepath = path.join(POSTS_DIR, `${slug}.mdx`)
  if (!fs.existsSync(filepath)) return null
  const raw = fs.readFileSync(filepath, 'utf8')
  const { data, content } = matter(raw)
  const processed = await remark().use(remarkGfm).use(remarkHtml, { sanitize: false }).process(content)
  return {
    slug,
    title: (data.title as string) ?? 'Untitled',
    date: (data.date as string) ?? '',
    excerpt: (data.excerpt as string) ?? '',
    tags: (data.tags as string[]) ?? [],
    featured: (data.featured as boolean) ?? false,
    contentHtml: processed.toString(),
  }
}

export function getAllTags(): string[] {
  const posts = getAllPosts()
  const tagSet = new Set<string>()
  posts.forEach((p) => p.tags.forEach((t) => tagSet.add(t)))
  return Array.from(tagSet).sort()
}

export function getPostsByTag(tag: string): PostMeta[] {
  return getAllPosts().filter((p) => p.tags.includes(tag))
}

export function getFeaturedPost(): PostMeta | null {
  const posts = getAllPosts()
  return posts.find((p) => p.featured) ?? posts[0] ?? null
}

export function formatDate(dateStr: string): string {
  if (!dateStr) return ''
  const [year, month, day] = dateStr.split('-').map(Number)
  const date = new Date(year, month - 1, day)
  return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
}
