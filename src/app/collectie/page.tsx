import type { Metadata } from 'next'
import Header from '@/components/Header'
import ThemeSection from '@/components/ThemeSection'
import ProductGrid from '@/components/ProductGrid'
import CustomizerPreview from '@/components/CustomizerPreview'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Collectie — BibleSigns',
  description: 'De complete BibleSigns collectie. Krachtige Bijbelse posters voor jouw ruimte.',
}

export default function CollectiePage() {
  return (
    <main className="overflow-x-hidden">
      <Header />

      {/* Page header */}
      <div className="pt-36 pb-16 bg-bs-offwhite border-b border-bs-sand">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-bs-gold block mb-4">
            De collectie
          </span>
          <h1 className="font-serif text-[48px] md:text-[64px] font-bold text-bs-black leading-[1.0] tracking-tight">
            Ontdek<br />de designs.
          </h1>
          <p className="mt-5 text-[15px] text-bs-dark max-w-md leading-relaxed">
            Vier thema's. Tien designs. Elk getypografeerd met Bijbelteksten die spreken.
            Beschikbaar in Nederlands en Engels.
          </p>
        </div>
      </div>

      <ThemeSection />
      <ProductGrid />
      <CustomizerPreview />
      <Footer />
    </main>
  )
}
