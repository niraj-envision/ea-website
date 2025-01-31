import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sign%20Stamp%20Logo%20(1)-8diKk2DAhelwpotPXXziarnHlD2vy4.png"
            alt="Envision Analytics Logo"
            width={40}
            height={40}
            className="dark:brightness-110"
          />
          <span className="text-2xl font-bold text-primary">Envision Analytics</span>
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link href="#services" className="text-foreground hover:text-primary transition-colors">
            Services
          </Link>
          <Link href="#about" className="text-foreground hover:text-primary transition-colors">
            About
          </Link>
          <Link href="#projects" className="text-foreground hover:text-primary transition-colors">
            Projects
          </Link>
          <Link href="#team" className="text-foreground hover:text-primary transition-colors">
            Team
          </Link>
          <Link href="#contact" className="text-foreground hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>
        <Button variant="outline" className="hidden md:inline-flex">
          Get Started
        </Button>
        <Button variant="outline" className="md:hidden">
          Menu
        </Button>
      </div>
    </header>
  )
}

