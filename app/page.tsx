import Link from 'next/link'
import { getAllPosts, getAllTags, getFeaturedPost, formatDate } from '@/lib/posts'

export default function Home() {
  const featured = getFeaturedPost()
  const posts = getAllPosts().slice(0, 5)
  const tags = getAllTags()

  return (
    <main className="max-w-4xl mx-auto px-6 py-24">

      {/* Manifesto */}
      <section className="mb-28">
        <h1 className="font-headline text-4xl sm:text-5xl text-charcoal leading-tight max-w-2xl">
          Measured thinking on markets, capital, and the long view.
        </h1>
        <p className="mt-5 text-xs text-warmstone uppercase tracking-widest">
          A private finance journal
        </p>
      </section>

      {/* Featured post */}
      {featured && (
        <section className="mb-24 border-t border-warmstone-lighter pt-12">
          <p className="text-xs text-warmstone uppercase tracking-widest mb-8">Featured</p>
          <Link href={`/journal/${featured.slug}`} className="group block max-w-2xl">
            <h2 className="font-headline text-3xl sm:text-4xl text-charcoal group-hover:text-navy transition-colors duration-200 mb-3 leading-snug">
              {featured.title}
            </h2>
            <p className="text-sm text-warmstone mb-4">{formatDate(featured.date)}</p>
            <p className="text-charcoal/70 leading-relaxed">{featured.excerpt}</p>
          </Link>
        </section>
      )}

      {/* Latest posts */}
      <section className="mb-24 border-t border-warmstone-lighter pt-12">
        <p className="text-xs text-warmstone uppercase tracking-widest mb-8">Latest Writing</p>
        <ul className="divide-y divide-warmstone-lighter">
          {posts.map((post) => (
            <li key={post.slug} className="py-8 first:pt-0">
              <Link href={`/journal/${post.slug}`} className="group flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-8">
                <span className="text-xs text-warmstone tabular-nums shrink-0 sm:w-36 sm:pt-1">
                  {formatDate(post.date)}
                </span>
                <div>
                  <h3 className="font-headline text-2xl text-charcoal group-hover:text-navy transition-colors duration-200 mb-1 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-sm text-charcoal/60 leading-relaxed">{post.excerpt}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-10 pt-8 border-t border-warmstone-lighter">
          <Link
            href="/journal"
            className="text-sm text-navy hover:text-charcoal transition-colors duration-200 underline underline-offset-4"
          >
            View all writing &rarr;
          </Link>
        </div>
      </section>

      {/* Topics */}
      {tags.length > 0 && (
        <section className="border-t border-warmstone-lighter pt-12">
          <p className="text-xs text-warmstone uppercase tracking-widest mb-6">Topics</p>
          <div className="flex flex-wrap gap-3">
            {tags.map((tag) => (
              <Link
                key={tag}
                href={`/topics/${encodeURIComponent(tag)}`}
                className="text-sm text-charcoal border border-warmstone-lighter px-4 py-1.5 hover:border-navy hover:text-navy transition-colors duration-200"
              >
                {tag}
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  )
}
