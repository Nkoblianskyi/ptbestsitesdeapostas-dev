"use client"

import { useState } from "react"
import { BadgeCheck, AlertCircle, TrendingUp } from "lucide-react"
import { AdvertiserInfoModal } from "./advertiser-info-modal"
import Image from "next/image"

export function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section className="relative py-14 md:py-20">
      <div className="container mx-auto px-4 max-w-[1150px]">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="block w-8 h-px bg-portugal-green" />
            <p className="text-xs font-semibold tracking-widest uppercase text-portugal-green">
              Comparador Independente &middot; Portugal
            </p>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4 text-balance">
            Os Melhores Sites de Apostas em Portugal
          </h1>

          <p className="text-base text-gray-300 leading-relaxed max-w-xl mb-8">
            Rankings rigorosos, bónus verificados e análises independentes de operadores licenciados pelo SRIJ.
          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <div className="flex items-center gap-2">
              <Image src="/srij-new.svg" alt="SRIJ" width={16} height={16} className="flex-shrink-0" />
              <span className="text-sm text-gray-300">Licença</span>
            </div>
            <div className="flex items-center gap-2">
              <BadgeCheck className="h-4 w-4 text-portugal-green flex-shrink-0" />
              <span className="text-sm text-gray-300">Bónus Verificados</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-portugal-green flex-shrink-0" />
              <span className="text-sm text-gray-300">Odds Comparadas</span>
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-gray-200 transition-colors"
            >
              <AlertCircle className="h-4 w-4 flex-shrink-0" />
              <span className="underline underline-offset-2">Info Publicitária &middot; +18</span>
            </button>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap gap-6">
          {[
            { value: "100%", label: "Operadores Licenciados SRIJ" },
            { value: "+50", label: "Casas Analisadas" },
            { value: "24/7", label: "Monitorização de Ofertas" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl font-bold text-white">{stat.value}</p>
              <p className="text-xs text-gray-400 mt-0.5">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <AdvertiserInfoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}
