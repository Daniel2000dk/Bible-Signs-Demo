import Link from 'next/link'
import PosterDisplay from './PosterDisplay'
import type { Product } from '@/types'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group flex flex-col gap-0 hover:-translate-y-1 transition-transform duration-300">

      {/* Poster mockup */}
      <div
        className="relative flex items-end justify-center overflow-hidden py-8 px-6"
        style={{ backgroundColor: product.poster.background }}
      >
        {/* Badge */}
        {product.isNew && (
          <span className="absolute top-3 right-3 text-[9px] font-bold tracking-widest uppercase px-2 py-1 bg-bs-gold text-bs-black">
            Nieuw
          </span>
        )}
        {product.featured && !product.isNew && (
          <span className="absolute top-3 right-3 text-[9px] font-semibold tracking-widest uppercase px-2 py-1 border border-bs-gold/40 text-bs-gold">
            Populair
          </span>
        )}

        <PosterDisplay design={product.poster} size="sm" showFrame />
      </div>

      {/* Product info */}
      <div className="flex flex-col gap-2 pt-4">
        <div className="flex flex-col gap-0.5">
          <span className="text-[10px] font-medium tracking-widest uppercase text-bs-gold/80">
            {product.theme}
          </span>
          <h3 className="font-serif text-[16px] font-bold text-bs-black leading-snug">
            {product.title}
          </h3>
        </div>

        {/* Pricing */}
        <div className="flex items-baseline gap-1.5">
          <span className="text-[13px] font-semibold text-bs-black">
            Vanaf €{product.priceFrom}
          </span>
          <span className="text-[11px] text-bs-dark/60">
            · met lijst €{product.priceWithFrame}
          </span>
        </div>

        {/* CTA */}
        <Link
          href="/collectie"
          className="mt-1 inline-flex items-center gap-1.5 text-[12px] font-medium text-bs-black group-hover:text-bs-gold transition-colors duration-200"
        >
          Personaliseer dit design
          <svg
            width="11" height="11" viewBox="0 0 11 11" fill="none"
            stroke="currentColor" strokeWidth="1.8"
            className="group-hover:translate-x-0.5 transition-transform duration-200"
          >
            <path d="M1 5.5h9M5.5 1l4.5 4.5L5.5 10" />
          </svg>
        </Link>
      </div>
    </div>
  )
}
