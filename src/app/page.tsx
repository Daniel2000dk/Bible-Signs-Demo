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
          intensity={0.30}
          sheenColor="#3D2E12"
          accentColor="#7A6018"
          grain={0.44}
        />
      </div>

      <main className="overflow-x-hidden relative" style={{ zIndex: 1 }}>
        <Header />
        <Hero />
        {/* Overgangszone hero → reviews: fade van hero-kleur naar aurora */}
        <div
          aria-hidden
          className="relative pointer-events-none"
          style={{
            height: 90,
            marginTop: -90,
            zIndex: 2,
            background: 'linear-gradient(to bottom, #080604 0%, transparent 100%)',
          }}
        />
        <MovingReviews />
        <BestSellers />
        <HoeHetWerkt />
        <MissionCommunityTeaser />
        <Footer />
      </main>
    </>
  )
}
