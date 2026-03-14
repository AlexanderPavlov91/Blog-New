import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllTags, getPostsByTag } from '@/lib/posts'

export const metadata: Metadata = {
  title: 'Topics',
  description: 'Browse writing by subject.',
}

export default function TopicsPage() {
  const tags = getAllTags()

  return (
    <main className="max-w-3xl mx-auto px-6 py-24">
      <h1 className="font-headline text-4xl text-charcoal mb-16">Topics</h1>

      {tags.length === 0 ? (
        <p className="text-warmstone">No topics yet.</p>
      ) : (
        <ul className="divide-y divide-warmstone-lighter">
          {tags.map((tag) => {
            const count = getPostsByTag(tag).length
            return (
              <li key={tag} className="py-6 first:pt-0">
                <Link
                  href={`/topics/${encodeURIComponent(tag)}`}
                  className="group flex items-center justify-between"
                >
                  <span className="font-headline text-2xl sm:text-3xl text-charcoal group-hover:text-navy transition-colors duration-200 leading-snug">
                    {tag}
                  </span>
                  <span className="text-xs text-warmstone tabular-nums">
                    {count}&nbsp;{count === 1 ? 'piece' : 'pieces'}
                  </span>
                </Link>
              </li>
            )
          })}
        </ul>
      )}
    </main>
  )
}
