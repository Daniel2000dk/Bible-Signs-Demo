import Header from '@/components/Header'
import Hero from '@/components/Hero'
import MovingReviews from '@/components/MovingReviews'
import BestSellers from '@/components/BestSellers'
import HoeHetWerkt from '@/components/HoeHetWerkt'
import MissionCommunityTeaser from '@/components/MissionCommunityTeaser'
import Footer from '@/components/Footer'
import SilkAuroraBackground from '@/components/SilkAuroraBackground'

export default function Home() {
  return (
    <>
      {/* Aurora fixed achtergrond voor de hele pagina */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
        <SilkAuroraBackground
          interactive={false}
          intensity={0.22}
          sheenColor="#1C1810"
          accentColor="#6B5020"
          grain={0.60}
        />
      </div>

      <main className="overflow-x-hidden relative" style={{ zIndex: 1 }}>
        <Header />
        <Hero />
        <MovingReviews />
        <BestSellers />
        <HoeHetWerkt />
        <MissionCommunityTeaser />
        <Footer />
      </main>
    </>
  )
}
