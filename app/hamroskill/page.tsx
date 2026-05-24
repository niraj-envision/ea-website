import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  CheckCircle2,
  Smartphone,
  Globe,
  Apple,
  MessageSquare,
  MapPin,
  ShieldCheck,
  Languages,
  CreditCard,
  Bell,
  Sparkles,
  Code2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { WaitlistForm } from "@/components/waitlist-form"

export const metadata: Metadata = {
  title: "HamroSkill — Nepal's skilled-services marketplace",
  description:
    "हाम्रो सीप — Skilled hands. Trusted homes. Find verified plumbers, electricians, and technicians across Nepal. Built across iOS, Android, and Web.",
}

export default function HamroSkillPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid opacity-30" aria-hidden />
        <div className="absolute inset-0 bg-spotlight" aria-hidden />
        <div className="relative container mx-auto px-4 sm:px-6 pt-24 pb-16 sm:pt-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-3 py-1 text-xs text-muted-foreground mb-6">
              <Sparkles className="size-3" />
              Flagship product · Pre-launch
            </div>
            <h1 className="font-display text-5xl sm:text-7xl font-semibold tracking-tight leading-[1.05]">
              HamroSkill
            </h1>
            <p className="font-devanagari text-2xl sm:text-3xl text-muted-foreground mt-3">
              हाम्रो सीप
            </p>
            <p className="mt-8 text-xl sm:text-2xl text-foreground font-medium">
              Skilled hands. Trusted homes.
            </p>
            <p className="mt-5 text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Nepal's two-sided marketplace for skilled services. Find verified plumbers, electricians,
              and technicians in minutes — booked through iOS, Android, or Web from one shared platform.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Button asChild size="lg">
                <Link href="#waitlist">
                  Join waitlist <ArrowRight className="ml-1.5 size-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#features">Explore product</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* The problem */}
      <section className="border-t border-border/40 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 py-20 sm:py-24">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-primary mb-4">
                The problem
              </div>
              <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight">
                Finding a trusted skilled worker in Nepal is broken.
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                When your pipe bursts at 9 PM in Kathmandu, you call relatives. You text neighbors.
                You hope the number scrawled on a wall last year still works. There is no SLA,
                no rating, no recourse — just luck.
              </p>
              <p>
                Meanwhile, thousands of skilled professionals — plumbers, electricians, carpenters,
                technicians — have no way to find consistent work outside their own neighborhoods.
                The market is opaque on both sides.
              </p>
              <p className="text-foreground">
                HamroSkill makes both sides legible — for customers and pros — in their own language.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="border-t border-border/40">
        <div className="container mx-auto px-4 sm:px-6 py-20 sm:py-24">
          <div className="max-w-2xl mb-14">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-primary mb-4">
              <Sparkles className="size-3.5" />
              The product
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight">
              17 screens. 2 sides. 3 platforms.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Every screen designed twice — once for customers needing service, once for pros delivering it.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <FeatureCard
              icon={MapPin}
              title="Live dispatch"
              description="Customers see pros on a live radar. Pros get incoming jobs with one-tap accept/pass. Sub-minute matching."
            />
            <FeatureCard
              icon={MessageSquare}
              title="In-app chat"
              description="Per-booking conversations with file sharing. Real-time updates between customer and pro."
            />
            <FeatureCard
              icon={ShieldCheck}
              title="6-step KYC"
              description="Document upload, ID verification, skills attestation, address proof. Trust by default."
            />
            <FeatureCard
              icon={Languages}
              title="Bilingual EN / नेपाली"
              description="Full English + Devanagari Nepali interface. Toggle anytime. Translations baked into design tokens."
            />
            <FeatureCard
              icon={CreditCard}
              title="Payments built-in"
              description="eSewa and Khalti integration ready. Customers pay in-app, pros get paid same week."
            />
            <FeatureCard
              icon={Bell}
              title="Smart notifications"
              description="Push for job offers, booking updates, chat. SMS fallback when offline."
            />
          </div>
        </div>
      </section>

      {/* Multi-platform */}
      <section className="border-t border-border/40 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 py-20 sm:py-24">
          <div className="max-w-2xl mb-14">
            <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight">
              One codebase.<br />Three platforms.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Shared design tokens, types, and mock data drive iOS, Android, and Web. Change a color in one place — every platform picks it up.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            <PlatformCard
              icon={Apple}
              name="iOS"
              tech="Expo / React Native"
              note="TestFlight in development"
            />
            <PlatformCard
              icon={Smartphone}
              name="Android"
              tech="Expo / React Native"
              note="EAS preview builds shipping"
            />
            <PlatformCard
              icon={Globe}
              name="Web"
              tech="Next.js 14"
              note="Marketing + customer dashboard"
            />
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="border-t border-border/40">
        <div className="container mx-auto px-4 sm:px-6 py-20 sm:py-24">
          <div className="max-w-2xl mb-14">
            <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight">
              Roadmap.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Where we are, and where we're headed.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-5">
            <RoadmapCard
              version="V1"
              status="Shipped"
              statusColor="primary"
              items={[
                "Phone + OTP auth, role-based routing",
                "17 customer + pro screens end-to-end",
                "Live dispatch with radar match",
                "Bookings, chat, rate + tip",
                "Pro home, schedule, earnings, KYC",
              ]}
            />
            <RoadmapCard
              version="V2"
              status="In progress"
              statusColor="accent"
              items={[
                "PostgreSQL + Drizzle migration",
                "eSewa / Khalti payment integration",
                "AI-assisted KYC verification",
                "Real-time map (Mapbox GL)",
                "Push notifications (Expo + FCM)",
              ]}
            />
            <RoadmapCard
              version="V3"
              status="Planned"
              statusColor="muted"
              items={[
                "Subscriptions and pro plans",
                "Smart matching with reliability scoring",
                "Milestones + PDF invoices",
                "Disputes and partner portal",
                "Referral program + full i18n",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="border-t border-border/40 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 py-20 sm:py-24">
          <div className="max-w-2xl mb-14">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-primary mb-4">
              <Code2 className="size-3.5" />
              Engineering
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight">
              Built on modern infrastructure.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              pnpm monorepo with three apps and three shared packages. Type-safe end-to-end.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                category: "Frontend",
                items: ["Next.js 14", "React Native (Expo)", "TypeScript", "Tailwind CSS"],
              },
              {
                category: "Backend",
                items: ["Express + Node 20", "PostgreSQL + Drizzle ORM", "Passport.js + JWT", "Socket.IO (planned)"],
              },
              {
                category: "Infrastructure",
                items: ["Vercel (web)", "EAS (mobile builds)", "Neon (database)", "Resend (transactional email)"],
              },
            ].map((stack) => (
              <Card key={stack.category} className="p-6 bg-card">
                <h3 className="font-display text-lg font-semibold mb-4">{stack.category}</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {stack.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <CheckCircle2 className="size-3.5 text-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist */}
      <section id="waitlist" className="border-t border-border/40">
        <div className="container mx-auto px-4 sm:px-6 py-20 sm:py-28">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-4xl sm:text-6xl font-semibold tracking-tight">
              Be first when we launch.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Join the waitlist. We'll let you know when HamroSkill goes live in your area.
            </p>
            <div className="mt-10">
              <WaitlistForm />
            </div>
            <p className="mt-6 text-xs text-muted-foreground">
              Built by{" "}
              <Link href="/" className="underline underline-offset-4 hover:text-foreground">
                Envision Analytics
              </Link>{" "}
              in Kathmandu, Nepal.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

function FeatureCard({
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

function PlatformCard({
  icon: Icon,
  name,
  tech,
  note,
}: {
  icon: React.ElementType
  name: string
  tech: string
  note: string
}) {
  return (
    <Card className="p-8 bg-card">
      <Icon className="size-10 text-primary" strokeWidth={1.25} />
      <h3 className="mt-6 font-display text-2xl font-semibold">{name}</h3>
      <p className="mt-1 text-sm font-mono text-muted-foreground">{tech}</p>
      <p className="mt-4 text-sm text-muted-foreground">{note}</p>
    </Card>
  )
}

function RoadmapCard({
  version,
  status,
  statusColor,
  items,
}: {
  version: string
  status: string
  statusColor: "primary" | "accent" | "muted"
  items: string[]
}) {
  const colorClass = {
    primary: "bg-primary/15 text-primary border-primary/30",
    accent: "bg-accent/15 text-accent border-accent/30",
    muted: "bg-muted text-muted-foreground border-border",
  }[statusColor]

  return (
    <Card className="p-6 bg-card h-full">
      <div className="flex items-center justify-between mb-5">
        <h3 className="font-display text-3xl font-semibold">{version}</h3>
        <span className={`text-xs px-2.5 py-1 rounded-full border ${colorClass}`}>{status}</span>
      </div>
      <ul className="space-y-3 text-sm text-muted-foreground">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <CheckCircle2 className={`size-4 mt-0.5 flex-shrink-0 ${statusColor === "primary" ? "text-primary" : "text-muted-foreground/50"}`} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </Card>
  )
}
