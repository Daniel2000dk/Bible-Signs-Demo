import Header from '@/components/Header'
import Hero from '@/components/Hero'
import MovingReviews from '@/components/MovingReviews'
import BestSellers from '@/components/BestSellers'
import MissionCommunityTeaser from '@/components/MissionCommunityTeaser'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <Hero />
      <MovingReviews />
      <BestSellers />
      <MissionCommunityTeaser />
      <Footer />
    </main>
  )
}
