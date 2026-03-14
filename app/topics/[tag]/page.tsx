import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getAllTags, getPostsByTag, formatDate } from '@/lib/posts'

interface Props {
  params: { tag: string }
}

export async function generateStaticParams() {
  return getAllTags().map((tag) => ({ tag: encodeURIComponent(tag) }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const tag = decodeURIComponent(params.tag)
  return {
    title: tag,
    description: `Writing on ${tag}.`,
  }
}

export default function TagPage({ params }: Props) {
  const tag = decodeURIComponent(params.tag)
  const posts = getPostsByTag(tag)

  if (posts.length === 0) notFound()

  return (
    <main className="max-w-3xl mx-auto px-6 py-24">
      {/* Back */}
      <div className="mb-16">
        <Link
          href="/topics"
          className="text-xs text-warmstone hover:text-charcoal transition-colors duration-200 uppercase tracking-widest"
        >
          &larr; Topics
        </Link>
      </div>

      <h1 className="font-headline text-4xl text-charcoal mb-16">{tag}</h1>

      <ul className="divide-y divide-warmstone-lighter">
        {posts.map((post) => (
          <li key={post.slug} className="py-10 first:pt-0">
            <Link href={`/journal/${post.slug}`} className="group flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-8">
              <span className="text-xs text-warmstone tabular-nums shrink-0 sm:w-36 sm:pt-1.5">
                {formatDate(post.date)}
              </span>
              <div>
                <h2 className="font-headline text-2xl sm:text-3xl text-charcoal group-hover:text-navy transition-colors duration-200 mb-2 leading-snug">
                  {post.title}
                </h2>
                <p className="text-sm text-charcoal/60 leading-relaxed">{post.excerpt}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
