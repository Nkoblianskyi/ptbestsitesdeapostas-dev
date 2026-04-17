"use client"
import Link from "next/link"
import { Logo } from "./logo"

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-site-header/95 backdrop-blur-sm">
      <div className="w-full max-w-[1150px] mx-auto px-4">
        <div className="flex items-center justify-between h-14 md:h-16">
          <Logo size="sm" />
          <nav className="hidden md:flex items-center gap-6">
            {[
              { href: "/about", label: "Quem Somos" },
              { href: "/responsible-gambling", label: "Jogo Responsável" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-gray-400 hover:text-gray-200 transition-colors tracking-wide"
              >
                {link.label}
              </Link>
            ))}
            <span className="text-xs text-gray-400 border border-white/20 px-3 py-1 rounded-sm tracking-wide">
              Licenciado SRIJ &middot; +18
            </span>
          </nav>
          <span className="md:hidden text-xs text-gray-400 border border-white/20 px-2.5 py-1 rounded-sm">
            +18
          </span>
        </div>
      </div>
    </header>
  )
}
