import type { Metadata } from 'next'
import Header from '@/components/Header'
import CommunitySection from '@/components/CommunitySection'
import SocialProofSection from '@/components/SocialProofSection'
import FAQSection from '@/components/FAQSection'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Community — BibleSigns',
  description: 'Word deel van de BibleSigns community. Early access, help de collectie vormen en ontvang een welkomstkorting.',
}

export default function CommunityPage() {
  return (
    <main className="overflow-x-hidden">
      <Header />

      {/* Page header */}
      <div className="pt-36 pb-16 bg-bs-green text-bs-offwhite">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-bs-gold block mb-4">
            Community
          </span>
          <h1 className="font-serif text-[48px] md:text-[64px] font-bold text-bs-offwhite leading-[1.0] tracking-tight">
            Word onderdeel<br />van de beweging.
          </h1>
          <p className="mt-5 text-[15px] text-bs-offwhite/60 max-w-md leading-relaxed">
            Een generatie christenen die hun geloof niet verstopt.
            Stem mee, ontvang early access en krijg een welkomstkorting bij lancering.
          </p>
        </div>
      </div>

      <CommunitySection />
      <SocialProofSection />
      <FAQSection />
      <Footer />
    </main>
  )
}
