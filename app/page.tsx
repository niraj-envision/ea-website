import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ArrowUpRight, Sparkles, ShieldCheck, Cpu, GraduationCap, Smartphone, Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid opacity-40" aria-hidden />
        <div className="absolute inset-0 bg-spotlight" aria-hidden />
        <div className="relative container mx-auto px-4 sm:px-6 pt-24 pb-20 sm:pt-32 sm:pb-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-3 py-1 text-xs text-muted-foreground mb-6">
              <span className="size-1.5 rounded-full bg-primary animate-pulse-soft" />
              Envision Analytics · Kathmandu, Nepal
            </div>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight leading-[1.05]">
              Software for Nepal's <span className="text-gradient">next era</span>.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              We build modern systems for government, ship AI-powered products, and operate{" "}
              <Link href="/hamroskill" className="text-foreground underline underline-offset-4 decoration-primary/60 hover:decoration-primary">
                HamroSkill
              </Link>{" "}
              — Nepal's marketplace for skilled services.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Button asChild size="lg">
                <Link href="/hamroskill">
                  See HamroSkill <ArrowRight className="ml-1.5 size-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/work">Read case studies</Link>
              </Button>
            </div>
            <dl className="mt-14 grid grid-cols-3 gap-4 sm:gap-10 max-w-lg">
              <div>
                <dt className="text-[10px] sm:text-xs uppercase tracking-wider text-muted-foreground">Founded</dt>
                <dd className="mt-1 font-display text-xl sm:text-2xl font-semibold">2024</dd>
              </div>
              <div>
                <dt className="text-[10px] sm:text-xs uppercase tracking-wider text-muted-foreground">Team</dt>
                <dd className="mt-1 font-display text-xl sm:text-2xl font-semibold">9</dd>
              </div>
              <div>
                <dt className="text-[10px] sm:text-xs uppercase tracking-wider text-muted-foreground">Based in</dt>
                <dd className="mt-1 font-display text-xl sm:text-2xl font-semibold">Kathmandu</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Flagship — HamroSkill */}
      <section className="border-t border-border/40 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 py-20 sm:py-28">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-primary mb-4">
                <Sparkles className="size-3.5" />
                Flagship product
              </div>
              <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.1]">
                HamroSkill
                <span className="block font-devanagari text-2xl sm:text-3xl text-muted-foreground mt-2 font-normal">
                  हाम्रो सीप — Skilled hands. Trusted homes.
                </span>
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Nepal's two-sided marketplace for skilled services — plumbers, electricians, technicians.
                Built across iOS, Android, and Web from one codebase, with real-time dispatch, in-app chat,
                and bilingual English / Devanagari support.
              </p>
              <ul className="mt-6 space-y-3 text-sm">
                {[
                  "17 screens shipped across mobile + web",
                  "Phone + OTP authentication, role-based dispatch",
                  "KYC verification flow for service professionals",
                  "Bilingual EN / नेपाली, dark mode, 6 accent themes",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 size-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild>
                  <Link href="/hamroskill">
                    See the product <ArrowRight className="ml-1.5 size-4" />
                  </Link>
                </Button>
                <Button asChild variant="ghost">
                  <Link href="/hamroskill#waitlist">Join waitlist</Link>
                </Button>
              </div>
            </div>

            {/* Phone mockup */}
            <div className="order-1 lg:order-2 flex justify-center">
              <PhoneMockup />
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by Government */}
      <section className="border-t border-border/40">
        <div className="container mx-auto px-4 sm:px-6 py-20 sm:py-28">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-primary mb-4">
              <ShieldCheck className="size-3.5" />
              Government clients
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight">
              Building for Nepal's institutions.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              From provincial training boards to state insurance — we ship production systems for Nepali government and public-sector clients.
            </p>
          </div>

          <div className="mt-14 grid md:grid-cols-3 gap-5">
            <ClientCard
              name="PCTVET"
              subtitle="Province Council for Technical Education and Vocational Training"
              description="Bilingual training management system covering events, trainees, contracts, procurements, and skill tests across 8 user roles."
              status="Live · pctvet.com"
              href="/work/pctvet"
              external="https://pctvet.com"
            />
            <ClientCard
              name="MoICS"
              subtitle="Ministry of Industry, Commerce & Supplies"
              description="Project management information system for ministry-level program tracking and reporting."
              status="Engagement"
            />
            <ClientCard
              name="Nepal Re"
              subtitle="Nepal Reinsurance Company"
              description="Digital experience and internal systems for Nepal's state-owned reinsurer."
              status="Engagement"
            />
          </div>
        </div>
      </section>

      {/* What we build */}
      <section className="border-t border-border/40 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 py-20 sm:py-28">
          <div className="max-w-2xl mb-14">
            <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight">
              What we build.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Four practice areas, one team. Every project ships from Kathmandu.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <ServiceCard
              icon={Building2}
              title="Government Digital"
              description="E-governance platforms, ministry PMIS, training management systems. Bilingual EN/Nepali by default."
            />
            <ServiceCard
              icon={Smartphone}
              title="Marketplace Products"
              description="Two-sided platforms across iOS, Android, and Web. Real-time dispatch, KYC, payments, chat."
            />
            <ServiceCard
              icon={Cpu}
              title="AI Integration"
              description="LLM-powered workflows, deep-research agents, document understanding, intelligent matching."
            />
            <ServiceCard
              icon={GraduationCap}
              title="Training Systems"
              description="Multi-stakeholder TMS for vocational councils — events, trainers, trainees, skill tests, finance."
            />
          </div>
        </div>
      </section>

      {/* Open source */}
      <section className="border-t border-border/40">
        <div className="container mx-auto px-4 sm:px-6 py-20 sm:py-28">
          <div className="max-w-2xl mb-12">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-primary mb-4">
              <Cpu className="size-3.5" />
              Open source
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight">
              We work in the open.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Selected projects we maintain publicly on GitHub.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <OpenSourceCard
              name="deep-research"
              tagline="Open-source OpenAI Deep Research agent."
              description="Get the same capability without paying $200/mo. Tweak behavior with adjustable breadth and depth. Run 5 minutes or 5 hours — it auto-adjusts."
              href="https://github.com/niraj-envision/deep-research"
              language="TypeScript"
            />
            <OpenSourceCard
              name="clawdbot"
              tagline="Your own personal AI assistant. Any OS. Any platform."
              description="Cross-platform AI assistant — the lobster way 🦞. Built with TypeScript, ships everywhere."
              href="https://github.com/niraj-envision/clawdbot"
              language="TypeScript"
            />
          </div>
        </div>
      </section>

      {/* Team teaser */}
      <section className="border-t border-border/40 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 py-20 sm:py-28">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div className="max-w-xl">
              <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight">
                A small team that ships.
              </h2>
              <p className="mt-5 text-lg text-muted-foreground">
                Nine engineers, designers, and product people across Kathmandu.
              </p>
            </div>
            <Button asChild variant="outline">
              <Link href="/about">
                Meet the team <ArrowRight className="ml-1.5 size-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-5 gap-3 sm:gap-5">
            {[
              { name: "Niraj Dahal", role: "CEO & Founder", avatar: "/nkd.png" },
              { name: "Saroj Rajbhandari", role: "Sr. Software Developer", avatar: "/srb.png" },
              { name: "Jwala Nepal", role: "BDS", avatar: "/jn.png" },
              { name: "Ishwor Thapa", role: "Backend Developer", avatar: "/IT.png" },
              { name: "Shishir Parajuli", role: "Frontend Developer", avatar: "/sb.png" },
            ].map((m) => (
              <div key={m.name} className="group">
                <div className="aspect-square relative overflow-hidden rounded-lg border border-border bg-card">
                  <Image
                    src={m.avatar}
                    alt={m.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 20vw, 150px"
                  />
                </div>
                <p className="mt-2 text-xs sm:text-sm font-medium truncate">{m.name}</p>
                <p className="text-[10px] sm:text-xs text-muted-foreground truncate">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/40">
        <div className="container mx-auto px-4 sm:px-6 py-24 sm:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-4xl sm:text-6xl font-semibold tracking-tight">
              Building something?<br />
              <span className="text-gradient">Let's talk.</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              We take on a small number of new engagements each quarter.
              If your problem is interesting, we'd like to hear about it.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg">
                <Link href="/contact">
                  Start a conversation <ArrowRight className="ml-1.5 size-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="mailto:info@envisionanalytics.net">info@envisionanalytics.net</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function ClientCard({
  name,
  subtitle,
  description,
  status,
  href,
  external,
}: {
  name: string
  subtitle: string
  description: string
  status: string
  href?: string
  external?: string
}) {
  const isLive = status.toLowerCase().includes("live")
  const inner = (
    <Card className="h-full p-6 bg-card hover:border-primary/40 transition-colors group">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-display text-xl font-semibold">{name}</h3>
          <p className="text-xs text-muted-foreground mt-1">{subtitle}</p>
        </div>
        {href && (
          <ArrowUpRight className="size-4 text-muted-foreground group-hover:text-foreground transition-colors flex-shrink-0 mt-1" />
        )}
      </div>
      <p className="mt-5 text-sm text-muted-foreground leading-relaxed">{description}</p>
      <div className="mt-6 inline-flex items-center gap-1.5 text-xs">
        <span className={`size-1.5 rounded-full ${isLive ? "bg-primary animate-pulse-soft" : "bg-muted-foreground/50"}`} />
        <span className="text-muted-foreground">{status}</span>
      </div>
    </Card>
  )

  if (href) return <Link href={href}>{inner}</Link>
  if (external)
    return (
      <a href={external} target="_blank" rel="noopener noreferrer">
        {inner}
      </a>
    )
  return inner
}

function ServiceCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType
  title: string
  description: string
}) {
  return (
    <Card className="p-6 bg-card hover:border-primary/40 transition-colors h-full">
      <Icon className="size-6 text-primary" strokeWidth={1.5} />
      <h3 className="mt-5 font-display text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{description}</p>
    </Card>
  )
}

function OpenSourceCard({
  name,
  tagline,
  description,
  href,
  language,
}: {
  name: string
  tagline: string
  description: string
  href: string
  language: string
}) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="block group">
      <Card className="p-6 sm:p-8 bg-card hover:border-primary/40 transition-colors h-full">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-display text-2xl font-semibold">
              <span className="text-muted-foreground">github.com/</span>
              <span>{name}</span>
            </h3>
            <p className="mt-2 text-sm font-medium">{tagline}</p>
          </div>
          <ArrowUpRight className="size-5 text-muted-foreground group-hover:text-foreground transition-colors flex-shrink-0" />
        </div>
        <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{description}</p>
        <div className="mt-5 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
          <span className="size-2 rounded-full bg-blue-500" />
          {language}
        </div>
      </Card>
    </a>
  )
}

function PhoneMockup() {
  return (
    <div className="relative animate-float">
      <div className="absolute -inset-8 bg-gradient-to-br from-primary/30 to-accent/30 blur-3xl rounded-full" aria-hidden />
      <div className="relative w-[280px] h-[560px] rounded-[2.75rem] border border-border bg-card shadow-2xl p-3">
        <div className="w-full h-full rounded-[2.25rem] overflow-hidden bg-background border border-border relative">
          {/* Status bar */}
          <div className="h-6 flex items-center justify-center">
            <div className="w-24 h-5 rounded-full bg-foreground/90" />
          </div>
          {/* App content mockup */}
          <div className="px-5 pt-3 pb-6 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[10px] text-muted-foreground">Welcome back</p>
                <p className="text-sm font-semibold">Niraj</p>
              </div>
              <div className="size-8 rounded-full bg-primary/20" />
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-primary to-primary/70 p-4 text-primary-foreground">
              <p className="text-[10px] opacity-80">Need a pro now?</p>
              <p className="text-lg font-semibold mt-1">Call Now</p>
              <div className="mt-3 flex items-center justify-between text-[10px]">
                <span className="opacity-80">12 pros nearby</span>
                <span className="size-1.5 rounded-full bg-white animate-pulse-soft" />
              </div>
            </div>

            <div>
              <p className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground mb-2">
                Services
              </p>
              <div className="grid grid-cols-4 gap-2">
                {["P", "E", "C", "M"].map((c) => (
                  <div key={c} className="aspect-square rounded-xl bg-secondary flex items-center justify-center text-xs font-semibold">
                    {c}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground mb-2">
                Top rated
              </p>
              <div className="space-y-2">
                {[
                  { n: "Ram T.", s: "Plumber · ★ 4.9" },
                  { n: "Sita M.", s: "Electrician · ★ 4.8" },
                ].map((p) => (
                  <div key={p.n} className="flex items-center gap-3 p-2 rounded-lg bg-secondary/50">
                    <div className="size-8 rounded-full bg-accent/30" />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium">{p.n}</p>
                      <p className="text-[10px] text-muted-foreground">{p.s}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
