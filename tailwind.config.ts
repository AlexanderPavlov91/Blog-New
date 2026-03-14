import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.mdx',
    './lib/**/*.ts',
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#F8F5F0',
        charcoal: '#2A2A2A',
        navy: '#1C2B3A',
        warmstone: {
          DEFAULT: '#9E9589',
          light: '#C8C3BB',
          lighter: '#E8E4DF',
        },
      },
      fontFamily: {
        headline: ['var(--font-cormorant)', 'Georgia', 'serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      typography: (theme: (path: string) => string) => ({
        DEFAULT: {
          css: {
            color: theme('colors.charcoal'),
            maxWidth: 'none',
            lineHeight: '1.85',
            a: {
              color: theme('colors.navy'),
              textDecoration: 'underline',
              textUnderlineOffset: '3px',
              '&:hover': { color: theme('colors.charcoal') },
            },
            'h1, h2, h3, h4': {
              fontFamily: 'var(--font-cormorant), Georgia, serif',
              color: theme('colors.charcoal'),
              fontWeight: '500',
            },
            blockquote: {
              borderLeftColor: theme('colors.warmstone.light'),
              color: theme('colors.warmstone.DEFAULT'),
              fontStyle: 'italic',
            },
            'code, pre': {
              fontFamily: 'ui-monospace, monospace',
              fontSize: '0.9em',
            },
            hr: {
              borderColor: theme('colors.warmstone.lighter'),
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

export default config
