import Image from "next/image"
import { Star } from "lucide-react"
import type { BettingSite } from "@/types"

interface RatingListProps {
  sites: BettingSite[]
}

export function RatingList({ sites }: RatingListProps) {
  const getBadgeForPosition = (index: number) => {
    switch (index) {
      case 0:
        return { text: "Mais Bem Avaliada", className: "bg-amber-500 text-white" }
      case 1:
        return { text: "Oferta Exclusiva", className: "bg-portugal-green text-white" }
      case 2:
        return { text: "Em Tendência", className: "bg-portugal-green text-white" }
      default:
        return null
    }
  }

  const renderStars = (count: number) =>
    Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-3.5 w-3.5 ${i < count ? "fill-amber-400 text-amber-400" : "text-gray-300"}`}
      />
    ))

  return (
    <section className="py-4 md:py-8">
      <div className="container mx-auto px-4 md:px-6 max-w-[1150px]">
        <div className="flex flex-col gap-3">
          {sites.map((site, index) => {
            const badge = getBadgeForPosition(index)
            const isFirstPlace = index === 0

            return (
              <a
                key={site.id}
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block focus:outline-none focus:ring-2 focus:ring-portugal-green focus:ring-offset-2 rounded-md"
              >
                <div
                  className={`relative bg-black/50 backdrop-blur-sm rounded-md overflow-hidden transition-shadow hover:bg-black/60 ${
                    isFirstPlace
                      ? "border-2 border-amber-400"
                      : "border border-white/15"
                  }`}
                >
                  {/* Desktop Layout */}
                  <div className="hidden md:flex items-stretch divide-x divide-white/10">
                    {/* Logo + badge above */}
                    <div className="flex flex-col items-center justify-center px-6 py-3 w-[220px] shrink-0 gap-2">
                      {badge ? (
                        <span className={`${badge.className} text-[10px] font-semibold uppercase tracking-wide px-3 py-1 rounded-sm`}>
                          {badge.text}
                        </span>
                      ) : (
                        <span className="h-[22px]" />
                      )}
                      <div className="relative h-16 w-[160px]">
                        <Image
                          src={site.logo || "/placeholder.svg"}
                          alt={site.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>

                    {/* Bonus */}
                    <div className="flex flex-col items-center justify-center px-6 py-4 flex-1 gap-1">
                      <span className="text-[10px] font-semibold text-portugal-red uppercase tracking-widest">
                        Bónus de Boas-Vindas
                      </span>
                      <p className="font-bold text-white text-2xl leading-tight text-center">
                        {site.bonus}
                      </p>
                      {site.dopbonus && (
                        <p className="text-base text-green-300 font-semibold text-center">{site.dopbonus}</p>
                      )}
                    </div>

                    {/* Rating */}
                    <div className="flex flex-col items-center justify-center px-6 py-4 w-[150px] shrink-0 gap-1">
                      <span
                        className={`font-bold text-2xl leading-none ${
                          isFirstPlace ? "text-portugal-green" : "text-white"
                        }`}
                      >
                        {site.rating.toFixed(1)}
                      </span>
                      <div className="flex gap-0.5">{renderStars(site.stars)}</div>
                      <span className="text-[11px] text-gray-400">
                        {site.reviews.toLocaleString("pt-PT")} avaliações
                      </span>
                    </div>

                    {/* CTA */}
                    <div className="flex flex-col items-center justify-center px-6 py-4 w-[170px] shrink-0 gap-1.5">
                      <div className="w-full bg-portugal-green hover:bg-portugal-dark-green text-white text-sm font-semibold py-2.5 px-4 rounded text-center transition-colors">
                        Obter Bónus
                      </div>
                      <p className="text-[10px] text-gray-400 text-center">+18 | T&Cs Aplicam-se</p>
                    </div>
                  </div>

                  {/* Mobile Layout */}
                  <div className="md:hidden flex items-stretch divide-x divide-white/10">
                    {/* Logo + badge above */}
                    <div className="flex flex-col items-center justify-center px-3 py-2 w-[120px] shrink-0 gap-1.5">
                      {badge ? (
                        <span className={`${badge.className} text-[8px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-sm text-center leading-tight`}>
                          {badge.text}
                        </span>
                      ) : (
                        <span className="h-[16px]" />
                      )}
                      <div className="relative h-10 w-full">
                        <Image
                          src={site.logo || "/placeholder.svg"}
                          alt={site.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>

                    {/* Bonus + rating */}
                    <div className="flex flex-col justify-center px-3 py-3 flex-1 gap-0.5 min-w-0">
                      <span className="text-[9px] font-semibold text-portugal-red uppercase tracking-widest">
                        Bónus
                      </span>
                      <p className="font-bold text-white text-sm leading-tight">
                        {site.bonus}
                      </p>
                      {site.dopbonus && (
                        <p className="text-xs text-green-300 font-semibold leading-tight">{site.dopbonus}</p>
                      )}
                      <div className="flex items-center gap-1 mt-1">
                        <span className="text-xs font-bold text-white">{site.rating.toFixed(1)}</span>
                        <div className="flex gap-px">{renderStars(site.stars)}</div>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex items-center justify-center p-3 w-[90px] shrink-0">
                      <div className="bg-portugal-green text-white text-[10px] font-bold py-2 px-2 rounded text-center leading-tight w-full">
                        Obter<br />Bónus
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
