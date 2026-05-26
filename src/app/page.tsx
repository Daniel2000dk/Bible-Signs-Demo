import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ThemeSection from '@/components/ThemeSection'
import ProductGrid from '@/components/ProductGrid'
import CustomizerPreview from '@/components/CustomizerPreview'
import MissionSection from '@/components/MissionSection'
import CommunitySection from '@/components/CommunitySection'
import SocialProofSection from '@/components/SocialProofSection'
import FAQSection from '@/components/FAQSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <Hero />
      <ThemeSection />
      <ProductGrid />
      <CustomizerPreview />
      <MissionSection />
      <CommunitySection />
      <SocialProofSection />
      <FAQSection />
      <Footer />
    </main>
  )
}
