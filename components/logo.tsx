import Link from "next/link"
import Image from "next/image"

interface LogoProps {
  className?: string
  size?: "sm" | "md" | "lg"
}

export function Logo({ className = "", size = "md" }: LogoProps) {
  const textSize =
    size === "sm" ? "text-base" : size === "lg" ? "text-2xl" : "text-lg"

  return (
    <Link href="/" className={`flex items-center uppercase gap-0 font-bold tracking-tight ${className}`}>
      <Image src="/favicon.ico" alt="Logo" width={32} height={32} className="mr-2" />
      <span className={`${textSize} text-gray-300 font-semibold`}>pt</span>
      <span className={`${textSize} text-portugal-green font-bold`}>best</span>
      <span className={`${textSize} text-gray-300 font-semibold`}>sites</span>
      <span className={`${textSize} text-portugal-red font-bold`}>deapostas</span>
    </Link>
  )
}
