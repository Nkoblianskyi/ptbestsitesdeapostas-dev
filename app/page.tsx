import { bettingSites } from "@/types"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { RatingList } from "@/components/rating-list"
import { Footer } from "@/components/footer"
import { TopOffersModal } from "@/components/top-offers-modal"
import { CookieBanner } from "@/components/cookie-banner"
import { CompareBonusTypes } from "@/components/compare-bonus-types"
import { PlaySmartGuide } from "@/components/play-smart-guide"
import { AboutSection } from "@/components/about-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-[url('/sports-event-background.jpg')] bg-cover bg-center bg-fixed">
      {/* single dark overlay over the whole page — фон видно скрізь */}
      <div className="min-h-screen bg-black/75">
        <Header />
        <main>
          <Hero />
          <RatingList sites={bettingSites} />
          <AboutSection />
          <CompareBonusTypes />
          <PlaySmartGuide />
        </main>
        <Footer />
        <TopOffersModal sites={bettingSites} />
        <CookieBanner />
      </div>
    </div>
  )
}
