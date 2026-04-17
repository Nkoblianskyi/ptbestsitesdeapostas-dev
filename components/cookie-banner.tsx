"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { X } from "lucide-react"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent")
    if (!cookieConsent) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted")
    setIsVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-white bg-white backdrop-blur-sm shadow-2xl">
      <div className="max-w-[1150px] mx-auto px-4 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex-1 min-w-0">
          <p className="text-xs font-semibold text-black mb-1">Aviso de Cookies</p>
          <p className="text-xs text-black leading-relaxed">
            Utilizamos cookies para melhorar a sua experiência de navegação e personalizar conteúdos. Ao continuar, aceita a nossa{" "}
            <Link href="/cookie-policy" className="text-black underline underline-offset-2 hover:text-white transition-colors">
              Política de Cookies
            </Link>
            .
          </p>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            onClick={handleDecline}
            className="text-xs text-black hover:text-gray-200 transition-colors px-4 py-2 border border-white/15 rounded-sm hover:border-white/30"
          >
            Recusar
          </button>
          <button
            onClick={handleAccept}
            className="text-xs text-white bg-portugal-green hover:bg-portugal-dark-green transition-colors px-5 py-2 rounded-sm font-medium"
          >
            Aceitar Cookies
          </button>
          <button
            onClick={handleDecline}
            className="text-gray-500 hover:text-gray-300 transition-colors p-1.5 ml-1"
            aria-label="Fechar"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
