import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import Link from 'next/link'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-cormorant',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    template: '%s | The Long View',
    default: 'The Long View',
  },
  description: 'Measured thinking on markets, capital, and the long view.',
  openGraph: {
    type: 'website',
    siteName: 'The Long View',
    title: 'The Long View',
    description: 'Measured thinking on markets, capital, and the long view.',
  },
}

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/journal', label: 'Journal' },
  { href: '/topics', label: 'Topics' },
  { href: '/archive', label: 'Archive' },
  { href: '/about', label: 'About' },
]

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="bg-ivory text-charcoal">
        <header className="border-b border-warmstone-lighter">
          <div className="max-w-4xl mx-auto px-6 py-5 flex items-center justify-between gap-6">
            <Link
              href="/"
              className="font-headline text-xl text-charcoal hover:text-navy transition-colors duration-200 tracking-wide shrink-0"
            >
              The Long View
            </Link>
            <nav>
              <ul className="flex gap-6 sm:gap-8">
                {navLinks.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-xs sm:text-sm text-warmstone hover:text-charcoal transition-colors duration-200 tracking-wide"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </header>

        <div className="min-h-screen">{children}</div>

        <footer className="border-t border-warmstone-lighter mt-24">
          <div className="max-w-4xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="font-headline text-warmstone text-sm tracking-wide">
              The Long View
            </span>
            <span className="text-xs text-warmstone-light">
              {new Date().getFullYear()} &middot; Written with care
            </span>
          </div>
        </footer>
      </body>
    </html>
  )
}
