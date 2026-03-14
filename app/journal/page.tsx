import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts, formatDate } from '@/lib/posts'

export const metadata: Metadata = {
  title: 'Journal',
  description: 'All writing, in reverse chronological order.',
}

export default function JournalPage() {
  const posts = getAllPosts()

  return (
    <main className="max-w-3xl mx-auto px-6 py-24">
      <h1 className="font-headline text-4xl text-charcoal mb-16">Journal</h1>

      {posts.length === 0 ? (
        <p className="text-warmstone">No posts yet.</p>
      ) : (
        <ul className="divide-y divide-warmstone-lighter">
          {posts.map((post) => (
            <li key={post.slug} className="py-10 first:pt-0">
              <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-8">
                <span className="text-xs text-warmstone tabular-nums shrink-0 sm:w-36 sm:pt-1.5">
                  {formatDate(post.date)}
                </span>
                <div>
                  <Link href={`/journal/${post.slug}`} className="group block mb-1">
                    <h2 className="font-headline text-2xl sm:text-3xl text-charcoal group-hover:text-navy transition-colors duration-200 leading-snug">
                      {post.title}
                    </h2>
                  </Link>
                  <p className="text-sm text-charcoal/60 leading-relaxed mb-3">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Link
                        key={tag}
                        href={`/topics/${encodeURIComponent(tag)}`}
                        className="text-xs text-warmstone hover:text-navy transition-colors duration-200"
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </main>
  )
}
