import "./globals.css"
import type { Metadata } from "next"
import { inter, spaceGrotesk, ubuntu } from "./fonts"
import type React from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: {
    default: "Envision Analytics — Software for Nepal's next era",
    template: "%s · Envision Analytics",
  },
  description:
    "We build modern software for Nepal — government systems, AI-powered products, and HamroSkill, our marketplace for skilled services.",
  metadataBase: new URL("https://envisionanalytics.net"),
  icons: {
    icon: "/logo.ico",
  },
  openGraph: {
    title: "Envision Analytics — Software for Nepal's next era",
    description:
      "Building HamroSkill (Nepal's skilled-services marketplace), PCTVET TMS, and modern software for government and enterprise.",
    url: "https://envisionanalytics.net",
    siteName: "Envision Analytics",
    locale: "en_NP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Envision Analytics",
    description: "Software for Nepal's next era.",
    creator: "@NirajDahal",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${ubuntu.variable} dark`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased min-h-screen flex flex-col bg-background text-foreground">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  )
}
