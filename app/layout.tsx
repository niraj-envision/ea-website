import "./globals.css"
import type { Metadata } from "next"
import { ubuntu } from './fonts'
import type React from "react"

export const metadata: Metadata = {
  title: "Envision Analytics Private Limited",
  description: "Futuristic IT solutions for Government, Education, and Startups",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={ubuntu.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}