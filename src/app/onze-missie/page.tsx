import type { Metadata } from 'next'
import Header from '@/components/Header'
import MissionSection from '@/components/MissionSection'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Onze Missie — BibleSigns',
  description: 'Gods Woord hoeft niet te verstoppen achter je smaak. Lees onze missie en zaaimodel.',
}

export default function OnzeMissiePage() {
  return (
    <main className="overflow-x-hidden">
      <Header />

      {/* Page header */}
      <div className="pt-36 pb-16 bg-bs-black text-bs-offwhite">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-bs-gold block mb-4">
            Onze missie
          </span>
          <h1 className="font-serif text-[48px] md:text-[64px] font-bold text-bs-offwhite leading-[1.0] tracking-tight">
            Gods Woord<br />zichtbaar maken.
          </h1>
          <p className="mt-5 text-[15px] text-bs-offwhite/55 max-w-md leading-relaxed">
            Waarom BibleSigns bestaat, wat we geloven over schoonheid en waarheid,
            en hoe we structureel geven als daad van rentmeesterschap.
          </p>
        </div>
      </div>

      <MissionSection />
      <Footer />
    </main>
  )
}
