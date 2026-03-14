import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts, formatDate } from '@/lib/posts'

export const metadata: Metadata = {
  title: 'Archive',
  description: 'All writing, grouped by year.',
}

export default function ArchivePage() {
  const posts = getAllPosts()

  const postsByYear = posts.reduce<Record<string, typeof posts>>((acc, post) => {
    const year = post.date.split('-')[0]
    if (!acc[year]) acc[year] = []
    acc[year].push(post)
    return acc
  }, {})

  const years = Object.keys(postsByYear).sort((a, b) => Number(b) - Number(a))

  return (
    <main className="max-w-3xl mx-auto px-6 py-24">
      <h1 className="font-headline text-4xl text-charcoal mb-16">Archive</h1>

      {years.length === 0 ? (
        <p className="text-warmstone">No posts yet.</p>
      ) : (
        <div className="space-y-20">
          {years.map((year) => (
            <section key={year}>
              <h2 className="font-headline text-2xl text-warmstone mb-8 pb-4 border-b border-warmstone-lighter">
                {year}
              </h2>
              <ul className="divide-y divide-warmstone-lighter">
                {postsByYear[year].map((post) => (
                  <li key={post.slug} className="py-6 first:pt-0">
                    <Link href={`/journal/${post.slug}`} className="group flex items-start gap-6 sm:gap-10">
                      <span className="text-xs text-warmstone tabular-nums shrink-0 w-24 pt-1">
                        {formatDate(post.date).replace(`, ${year}`, '')}
                      </span>
                      <h3 className="font-headline text-xl sm:text-2xl text-charcoal group-hover:text-navy transition-colors duration-200 leading-snug">
                        {post.title}
                      </h3>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      )}
    </main>
  )
}
