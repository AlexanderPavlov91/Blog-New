import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getAllPosts, getPostBySlug, formatDate } from '@/lib/posts'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostBySlug(params.slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
    },
  }
}

export default async function PostPage({ params }: Props) {
  const post = await getPostBySlug(params.slug)
  if (!post) notFound()

  return (
    <article className="max-w-2xl mx-auto px-6 py-24">

      {/* Back link */}
      <div className="mb-16">
        <Link
          href="/journal"
          className="text-xs text-warmstone hover:text-charcoal transition-colors duration-200 uppercase tracking-widest"
        >
          &larr; Journal
        </Link>
      </div>

      {/* Header */}
      <header className="mb-16">
        <h1 className="font-headline text-4xl sm:text-5xl text-charcoal leading-tight mb-6">
          {post.title}
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-xs text-warmstone">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          {post.tags.length > 0 && (
            <>
              <span className="text-warmstone-light">&middot;</span>
              <div className="flex flex-wrap gap-3">
                {post.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/topics/${encodeURIComponent(tag)}`}
                    className="hover:text-charcoal transition-colors duration-200"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </header>

      {/* Body */}
      <div
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />

      {/* Footer nav */}
      <div className="mt-20 pt-10 border-t border-warmstone-lighter">
        <Link
          href="/journal"
          className="text-sm text-navy hover:text-charcoal transition-colors duration-200 underline underline-offset-4"
        >
          &larr; All writing
        </Link>
      </div>
    </article>
  )
}
