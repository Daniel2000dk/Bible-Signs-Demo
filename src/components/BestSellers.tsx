import Link from 'next/link'
import PosterDisplay from './PosterDisplay'
import { products } from '@/data/products'

// Four featured/highlighted products for the homepage
const bestSellers = [
  products.find(p => p.id === '1')!, // Chosen & Loved
  products.find(p => p.id === '2')!, // Be Still & Know
  products.find(p => p.id === '4')!, // New Creation
  products.find(p => p.id === '3')!, // Walk by Faith
]

export default function BestSellers() {
  return (
    <section className="py-24 md:py-32 bg-bs-sand/25">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="flex flex-col gap-3">
            <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-bs-gold">
              Best sellers
            </span>
            <h2 className="font-serif text-[32px] md:text-[44px] font-bold text-bs-black leading-tight">
              De meest gekozen<br />
              designs.
            </h2>
          </div>
          <Link
            href="/collectie"
            className="self-start md:self-auto inline-flex items-center gap-2 text-[13px] font-medium text-bs-black border-b border-bs-black/25 hover:border-bs-gold hover:text-bs-gold pb-0.5 transition-all duration-200"
          >
            Bekijk de volledige collectie →
          </Link>
        </div>

        {/* Editorial grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-7">
          {bestSellers.map((product) => (
            <Link
              key={product.id}
              href="/collectie"
              className="group flex flex-col hover:-translate-y-1 transition-transform duration-300"
            >
              {/* Poster area — generous padding for editorial feel */}
              <div
                className="relative flex items-center justify-center py-12 px-6 overflow-hidden"
                style={{ backgroundColor: product.poster.background }}
              >
                {product.featured && !product.isNew && (
                  <span className="absolute top-3 left-3 text-[9px] font-semibold tracking-widest uppercase px-2 py-1 border border-bs-gold/30 text-bs-gold">
                    Populair
                  </span>
                )}
                {product.isNew && (
                  <span className="absolute top-3 left-3 text-[9px] font-semibold tracking-widest uppercase px-2 py-1 bg-bs-gold text-bs-black">
                    Nieuw
                  </span>
                )}
                <PosterDisplay design={product.poster} size="md" showFrame />
              </div>

              {/* Product info */}
              <div className="flex flex-col gap-1.5 pt-5">
                <span className="text-[10px] font-medium tracking-widest uppercase text-bs-gold/80">
                  {product.theme}
                </span>
                <h3 className="font-serif text-[17px] md:text-[18px] font-bold text-bs-black leading-snug">
                  {product.title}
                </h3>
                <div className="flex items-baseline gap-1.5 mt-0.5">
                  <span className="text-[13px] font-semibold text-bs-black">
                    Vanaf €{product.priceFrom}
                  </span>
                  <span className="text-[11px] text-bs-dark/60">
                    · met lijst €{product.priceWithFrame}
                  </span>
                </div>
                <span className="mt-2 inline-flex items-center gap-1.5 text-[12px] font-medium text-bs-black group-hover:text-bs-gold transition-colors duration-200">
                  Personaliseer dit design
                  <svg
                    width="11" height="11" viewBox="0 0 11 11" fill="none"
                    stroke="currentColor" strokeWidth="1.8"
                    className="group-hover:translate-x-0.5 transition-transform duration-200"
                  >
                    <path d="M1 5.5h9M5.5 1l4.5 4.5L5.5 10" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-14 pt-8 border-t border-bs-sand flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[13px] text-bs-dark">
            Beschikbaar in Nederlands en Engels · Kies jouw Bijbelvertaling in de customizer
          </p>
          <Link
            href="/collectie"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-bs-black text-bs-offwhite text-[13px] font-medium tracking-wide hover:bg-bs-gold hover:text-bs-black transition-all duration-200"
          >
            Volledige collectie
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M2 6h8M6 2l4 4-4 4" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  )
}
