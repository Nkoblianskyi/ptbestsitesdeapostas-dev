import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: "ptbestsitesdeapostas - Melhores Sites de Apostas em Portugal",
  description:
    "Comparações independentes e rigorosas dos melhores sites de apostas desportivas licenciados em Portugal. Rankings atualizados, bónus verificados e análises especializadas.",
  metadataBase: new URL("https://ptbestsitesdeapostas.com"),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt" className={`${inter.variable} bg-background`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
