import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, ArrowUpRight, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Work — Case studies",
  description:
    "Selected work from Envision Analytics — government training systems, AI products, and Nepal's flagship marketplace.",
}

const projects = [
  {
    name: "PCTVET TMS",
    client: "Province Council for Technical Education and Vocational Training",
    category: "Government · Training",
    summary:
      "A bilingual training management system handling events, trainees, contracts, procurements, and skill tests across 8 user roles for Nepal's provincial vocational training authority.",
    status: "Live",
    statusLink: "https://pctvet.com",
    href: "/work/pctvet",
  },
  {
    name: "HamroSkill",
    client: "Envision Analytics (own product)",
    category: "Marketplace · Mobile + Web",
    summary:
      "Nepal's two-sided marketplace for skilled services. iOS, Android, and Web from one codebase. Live dispatch, KYC, bilingual UX.",
    status: "Pre-launch",
    href: "/hamroskill",
  },
  {
    name: "MoICS PMIS",
    client: "Ministry of Industry, Commerce & Supplies, Nepal",
    category: "Government · PMIS",
    summary:
      "Project management information system for ministry-level program tracking, with role-based reporting across departments.",
    status: "Engagement",
  },
  {
    name: "Nepal Re",
    client: "Nepal Reinsurance Company",
    category: "State enterprise · Internal systems",
    summary:
      "Digital experience and internal tooling for Nepal's state-owned reinsurer.",
    status: "Engagement",
  },
]

export default function WorkPage() {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden border-b border-border/40">
        <div className="absolute inset-0 bg-dot-grid opacity-30" aria-hidden />
        <div className="absolute inset-0 bg-spotlight" aria-hidden />
        <div className="relative container mx-auto px-4 sm:px-6 pt-24 pb-16 sm:pt-32 sm:pb-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-3 py-1 text-xs text-muted-foreground mb-6">
              <ShieldCheck className="size-3" />
              Case studies
            </div>
            <h1 className="font-display text-5xl sm:text-7xl font-semibold tracking-tight leading-[1.05]">
              Selected work.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl">
              Production systems for Nepal's government, public enterprises, and our own products.
            </p>
          </div>
        </div>
      </section>

      {/* Project list */}
      <section>
        <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((p) => {
              const inner = (
                <Card className="h-full p-7 sm:p-8 bg-card hover:border-primary/40 transition-colors group">
                  <div className="flex items-start justify-between gap-3">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">
                      {p.category}
                    </p>
                    {p.href && (
                      <ArrowUpRight className="size-4 text-muted-foreground group-hover:text-foreground transition-colors flex-shrink-0" />
                    )}
                  </div>
                  <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight">
                    {p.name}
                  </h2>
                  <p className="mt-1 text-sm text-muted-foreground">{p.client}</p>
                  <p className="mt-5 text-sm text-muted-foreground leading-relaxed">{p.summary}</p>
                  <div className="mt-7 flex items-center gap-2 text-xs">
                    <span
                      className={`size-1.5 rounded-full ${
                        p.status === "Live"
                          ? "bg-primary animate-pulse-soft"
                          : p.status === "Pre-launch"
                            ? "bg-accent"
                            : "bg-muted-foreground/50"
                      }`}
                    />
                    <span className="text-muted-foreground">{p.status}</span>
                    {p.statusLink && (
                      <span className="text-muted-foreground ml-1">
                        · {p.statusLink.replace("https://", "")}
                      </span>
                    )}
                  </div>
                </Card>
              )
              if (p.href) return <Link key={p.name} href={p.href}>{inner}</Link>
              return <div key={p.name}>{inner}</div>
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/40 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 py-20 sm:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl sm:text-5xl font-semibold tracking-tight">
              Have a project in mind?
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              We take on a small number of new engagements each quarter.
            </p>
            <div className="mt-8">
              <Button asChild size="lg">
                <Link href="/contact">
                  Start a conversation <ArrowRight className="ml-1.5 size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
