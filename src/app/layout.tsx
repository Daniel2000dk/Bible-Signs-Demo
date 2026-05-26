import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '600', '700', '900'],
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  title: 'BibleSigns — Premium Bijbelse Wanddecoratie',
  description:
    'Premium christelijke posters voor jongeren van 16–25 jaar. Gods Woord zichtbaar in jouw ruimte. Modern, krachtig, interieurproof.',
  keywords: [
    'christelijke poster',
    'bijbelse wanddecoratie',
    'christian wall art',
    'bijbel poster',
    'premium christelijk',
    'religieuze poster',
  ],
  openGraph: {
    title: 'BibleSigns — Gods Woord in jouw ruimte',
    description:
      'Premium christelijke posters die jongeren écht willen ophangen. Krachtig, modern, interieurproof.',
    type: 'website',
    locale: 'nl_NL',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BibleSigns — Premium Bijbelse Wanddecoratie',
    description: 'Gods Woord zichtbaar in jouw kamer.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased bg-bs-offwhite text-bs-black overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
