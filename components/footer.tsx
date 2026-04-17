import Link from "next/link"
import Image from "next/image"
import { Logo } from "./logo"

export function Footer() {
  return (
    <footer className="bg-black/70 backdrop-blur-sm border-t border-white/10 text-gray-400">
      <div className="container mx-auto px-4 max-w-[1150px] py-10 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">

          {/* Brand */}
          <div className="lg:col-span-2">
            <Logo className="mb-4" size="md" />
            <p className="text-xs text-gray-400 leading-relaxed max-w-sm mb-4">
              ptbestsitesdeapostas.com é um serviço de comparação independente de operadores de apostas desportivas licenciados pelo SRIJ. Podemos receber comissões de parceiros, o que pode influenciar a ordem de apresentação, sem prejuízo da objetividade das análises.
            </p>
            <p className="text-xs text-gray-500">
              Proibido a menores de 18 anos &middot; Jogue com responsabilidade
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-300 mb-4">
              Navegação
            </p>
            <ul className="space-y-2.5">
              {[
                { href: "/about", label: "Quem Somos" },
                { href: "/privacy-policy", label: "Política de Privacidade" },
                { href: "/cookie-policy", label: "Política de Cookies" },
                { href: "/responsible-gambling", label: "Jogo Responsável" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs text-gray-400 hover:text-gray-200 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support orgs */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-300 mb-4">
              Organizações de Apoio
            </p>
            <div className="grid grid-cols-2 gap-2">
              {[
                { href: "https://www.srij.turismodeportugal.pt/", src: "/srij-new.svg", alt: "SRIJ" },
                { href: "https://www.icad.pt/", src: "/icad.png", alt: "ICAD" },
                { href: "https://www.gamcare.org.uk/", src: "/gamecare-new.svg", alt: "GamCare" },
                { href: "https://www.gambleaware.org/", src: "/gamble-aware.webp", alt: "GambleAware" },
              ].map((org) => (
                <Link
                  key={org.alt}
                  href={org.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-white/5 border border-white/10 rounded-sm p-2.5 hover:bg-white/10 transition-colors"
                >
                  <div className="relative w-16 h-7">
                    <Image src={org.src} alt={org.alt} fill className="object-contain" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} ptbestsitesdeapostas.com. Todos os direitos reservados.
          </p>
          <p className="text-xs text-gray-500">
            Linha de Apoio ao Jogo:{" "}
            <Link href="tel:213950213" className="text-gray-300 hover:text-white transition-colors font-medium">
              213 950 213
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
