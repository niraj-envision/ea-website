"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Home, Briefcase, Info, Mail, Rocket, Users } from "lucide-react"
import Link from "next/link"

const navItems = [
  { name: "Home", icon: Home, href: "#home" },
  { name: "Services", icon: Briefcase, href: "#services" },
  { name: "About", icon: Info, href: "#about" },
  { name: "Projects", icon: Rocket, href: "#projects" },
  { name: "Team", icon: Users, href: "#team" },
  { name: "Contact", icon: Mail, href: "#contact" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.nav
      className="fixed right-0 top-1/2 -translate-y-1/2 z-50"
      initial={{ x: "100%" }}
      animate={{ x: isOpen ? "0%" : "85%" }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="bg-primary/90 backdrop-blur-sm text-primary-foreground p-4 rounded-l-lg shadow-lg"
        whileHover={{ x: isOpen ? 0 : -20 }}
        onHoverStart={() => setIsOpen(true)}
        onHoverEnd={() => setIsOpen(false)}
      >
        <ul className="space-y-6">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="flex items-center space-x-4 hover:text-secondary transition-colors group"
                onClick={() => {
                  setIsOpen(false)
                  setTimeout(() => {
                    const element = document.querySelector(item.href)
                    element?.scrollIntoView({ behavior: "smooth" })
                  }, 300)
                }}
              >
                <span className="bg-secondary/20 p-2 rounded-full group-hover:bg-secondary/40 transition-colors">
                  <item.icon size={20} />
                </span>
                <span className={`transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}>
                  {item.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.nav>
  )
}

