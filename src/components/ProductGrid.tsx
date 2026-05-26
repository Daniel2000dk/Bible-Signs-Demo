import Link from 'next/link'
import ProductCard from './ProductCard'
import { products } from '@/data/products'

export default function ProductGrid() {
  return (
    <section id="shop" className="py-14 md:py-20 bg-bs-sand/30">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div className="flex flex-col gap-2">
            <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-bs-gold">
              Alle designs
            </span>
            <h2 className="font-serif text-[28px] md:text-[38px] font-bold text-bs-black leading-tight">
              De volledige collectie.
            </h2>
          </div>
          <div className="flex flex-col gap-3 items-start md:items-end">
            <p className="text-[14px] text-bs-dark max-w-xs leading-relaxed md:text-right">
              Elk design beschikbaar in meerdere kleuren, formaten en lijsten.
              In Nederlands en Engels.
            </p>
          </div>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-5 gap-y-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* CTA bar */}
        <div className="mt-10 pt-6 border-t border-bs-sand flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[14px] text-bs-dark">
            Meer designs in de maak. Word community-lid en help de volgende collectie vormen.
          </p>
          <Link
            href="/community"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-bs-black text-bs-offwhite text-[13px] font-medium tracking-wide hover:bg-bs-gold hover:text-bs-black transition-all duration-200"
          >
            Help de collectie vormen
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M2 6h8M6 2l4 4-4 4" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
