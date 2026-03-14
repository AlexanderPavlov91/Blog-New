import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description: 'About The Long View.',
}

export default function AboutPage() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-24">
      <h1 className="font-headline text-4xl sm:text-5xl text-charcoal mb-16 leading-tight">
        About
      </h1>

      <div className="space-y-8 text-charcoal/80 leading-relaxed text-base sm:text-lg">
        <p>
          The Long View is a private journal of thinking on markets, capital, and the conditions
          that shape wealth over time.
        </p>

        <p>
          The writing here is selective. Each piece is published when it is ready — not to meet a
          schedule, but because it has something worth saying. The result is a body of work intended
          to hold up over years, not days.
        </p>

        <p>
          The audience is financially literate and intellectually serious. The tone is measured,
          direct, and uninterested in performance.
        </p>

        <p>
          Coverage spans private markets, public equities, capital allocation, and the occasional
          broader observation on how money moves and why.
        </p>
      </div>

      <div className="mt-20 pt-10 border-t border-warmstone-lighter">
        <p className="text-xs text-warmstone uppercase tracking-widest">The Long View</p>
      </div>
    </main>
  )
}
