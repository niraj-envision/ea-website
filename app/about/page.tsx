import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, MapPin, Calendar, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "About — Envision Analytics",
  description:
    "Envision Analytics is a Kathmandu-based software studio building modern systems for Nepal's government and AI-powered products like HamroSkill.",
}

const team = [
  {
    name: "Niraj Dahal",
    role: "CEO & Founder",
    avatar: "/nkd.png",
    bio: "Niraj leads product and engineering at Envision Analytics. Over eight years across government services, IT, and consulting in Nepal — building the systems he wishes existed when he was inside them.",
  },
  {
    name: "Saroj Rajbhandari",
    role: "Sr. Software Developer",
    avatar: "/srb.png",
    bio: "Saroj brings 15+ years building software for Nepali private and government institutions. He leads our technical execution end-to-end.",
  },
  {
    name: "Jwala Nepal",
    role: "Business Development",
    avatar: "/jn.png",
    bio: "Jwala leads business development at EA — partnerships, government engagements, and making sure every solution we ship matches the problem it was bought to solve.",
  },
  {
    name: "Ishwor Thapa",
    role: "Backend Developer",
    avatar: "/IT.png",
    bio: "Ishwor has 11+ years building scalable backends for complex IT projects across Nepal and India. He specializes in systems that have to be right.",
  },
  {
    name: "Shishir Parajuli",
    role: "Frontend Developer",
    avatar: "/sb.png",
    bio: "Shishir brings years of UI/UX experience across complex enterprise implementations. He cares about the small details no one notices until they're wrong.",
  },
]

const values = [
  {
    title: "Build for Nepal, first.",
    body: "Bilingual EN / Nepali isn't a feature we add later — it's baked into our data models, design tokens, and product decisions from day one.",
  },
  {
    title: "Ship real software.",
    body: "We don't write decks pretending to be products. Every project on our website is something you can visit, log into, or try.",
  },
  {
    title: "Stay in the open.",
    body: "Selected projects live on GitHub. We learn faster — and prove our capability — when our work can be inspected.",
  },
  {
    title: "Small team, no proxies.",
    body: "Nine people. The person who sells you the work is the person who builds it. No agency layers between you and the engineers.",
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border/40">
        <div className="absolute inset-0 bg-dot-grid opacity-30" aria-hidden />
        <div className="absolute inset-0 bg-spotlight" aria-hidden />
        <div className="relative container mx-auto px-4 sm:px-6 pt-24 pb-16 sm:pt-32 sm:pb-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-3 py-1 text-xs text-muted-foreground mb-6">
              About us
            </div>
            <h1 className="font-display text-5xl sm:text-7xl font-semibold tracking-tight leading-[1.05]">
              A small studio<br />
              <span className="text-gradient">building for Nepal.</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Envision Analytics is a Kathmandu-based software studio. We work with Nepal's government and public-sector clients, and we build our own products — most prominently HamroSkill, a marketplace for skilled services.
            </p>
            <dl className="mt-10 grid grid-cols-3 gap-4 sm:gap-6 max-w-md">
              <div>
                <Calendar className="size-4 text-muted-foreground mb-2" />
                <dt className="text-[10px] sm:text-xs uppercase tracking-wider text-muted-foreground">Founded</dt>
                <dd className="mt-1 font-display text-xl sm:text-2xl font-semibold">2024</dd>
              </div>
              <div>
                <Users className="size-4 text-muted-foreground mb-2" />
                <dt className="text-[10px] sm:text-xs uppercase tracking-wider text-muted-foreground">Team</dt>
                <dd className="mt-1 font-display text-xl sm:text-2xl font-semibold">9</dd>
              </div>
              <div>
                <MapPin className="size-4 text-muted-foreground mb-2" />
                <dt className="text-[10px] sm:text-xs uppercase tracking-wider text-muted-foreground">Based in</dt>
                <dd className="mt-1 font-display text-xl sm:text-2xl font-semibold">Kathmandu</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Story */}
      <section>
        <div className="container mx-auto px-4 sm:px-6 py-20 sm:py-24">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-primary mb-4">
                Our story
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight">
                Why we exist.
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-5 text-lg text-muted-foreground leading-relaxed">
              <p>
                Nepal has world-class engineers and world-class ambition. What it's often missing is the connective tissue — the modern, well-designed software systems that quietly run other countries' institutions and consumer markets.
              </p>
              <p>
                We started Envision Analytics in 2024 to build that connective tissue. Some of it is internal: training management systems for provincial councils, project management info systems for ministries, internal tooling for state enterprises. Some of it is consumer-facing: HamroSkill, our marketplace for skilled service professionals.
              </p>
              <p className="text-foreground">
                Same team. Same philosophy. Software that's modern, bilingual by default, and built to last beyond the engagement that funded it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-t border-border/40 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 py-20 sm:py-24">
          <div className="max-w-2xl mb-14">
            <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight">
              How we work.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {values.map((v) => (
              <Card key={v.title} className="p-7 bg-card">
                <h3 className="font-display text-xl font-semibold">{v.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{v.body}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="border-t border-border/40">
        <div className="container mx-auto px-4 sm:px-6 py-20 sm:py-24">
          <div className="max-w-2xl mb-14">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-primary mb-4">
              <Users className="size-3.5" />
              Team
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight">
              The people building it.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Five of us are on the public team page. Four more across engineering and operations.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {team.map((m) => (
              <Card key={m.name} className="p-6 bg-card hover:border-primary/40 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="relative size-16 rounded-full overflow-hidden bg-secondary border border-border flex-shrink-0">
                    <Image src={m.avatar} alt={m.name} fill className="object-cover" sizes="64px" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold truncate">{m.name}</h3>
                    <p className="text-xs text-primary truncate">{m.role}</p>
                  </div>
                </div>
                <p className="mt-5 text-sm text-muted-foreground leading-relaxed">{m.bio}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/40 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 py-20 sm:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl sm:text-5xl font-semibold tracking-tight">
              Want to work with us?
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Tell us about your project. We respond within two business days.
            </p>
            <div className="mt-8">
              <Button asChild size="lg">
                <Link href="/contact">
                  Get in touch <ArrowRight className="ml-1.5 size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
