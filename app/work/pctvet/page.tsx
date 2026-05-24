import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, ArrowUpRight, CheckCircle2, ShieldCheck, Users, FileText, Languages, Database } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "PCTVET TMS — Provincial training management for Nepal",
  description:
    "Bilingual training management system for Nepal's Province Council for Technical Education and Vocational Training. Live at pctvet.com.",
}

export default function PctvetCaseStudy() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border/40">
        <div className="absolute inset-0 bg-dot-grid opacity-30" aria-hidden />
        <div className="absolute inset-0 bg-spotlight" aria-hidden />
        <div className="relative container mx-auto px-4 sm:px-6 pt-20 sm:pt-28 pb-16 sm:pb-20">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
          >
            <ArrowLeft className="size-4" />
            All case studies
          </Link>
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-3 py-1 text-xs text-muted-foreground mb-6">
                <ShieldCheck className="size-3" />
                Government · Training
              </div>
              <h1 className="font-display text-5xl sm:text-6xl font-semibold tracking-tight leading-[1.05]">
                Modernizing vocational training for Nepal's provincial government.
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl">
                A bilingual training management system for the Province Council for Technical Education and Vocational Training (PCTVET) — covering events, trainees, trainers, contracts, procurements, and skill tests across 8 user roles.
              </p>
            </div>
            <div className="lg:col-span-4">
              <Card className="p-6 bg-card">
                <dl className="space-y-4 text-sm">
                  <div>
                    <dt className="text-xs uppercase tracking-wider text-muted-foreground">
                      Client
                    </dt>
                    <dd className="mt-1 font-medium">PCTVET</dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-wider text-muted-foreground">
                      Scope
                    </dt>
                    <dd className="mt-1 font-medium">Full-stack TMS</dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-wider text-muted-foreground">
                      Status
                    </dt>
                    <dd className="mt-1 inline-flex items-center gap-1.5 font-medium">
                      <span className="size-1.5 rounded-full bg-primary animate-pulse-soft" />
                      Live in production
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-wider text-muted-foreground">
                      Live at
                    </dt>
                    <dd className="mt-1">
                      <a
                        href="https://pctvet.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-medium underline underline-offset-4 decoration-primary/60 hover:decoration-primary"
                      >
                        pctvet.com
                        <ArrowUpRight className="size-3.5" />
                      </a>
                    </dd>
                  </div>
                </dl>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* The client */}
      <section>
        <div className="container mx-auto px-4 sm:px-6 py-20 sm:py-24">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-primary mb-4">
                The client
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight">
                A provincial arm of Nepal's national training council.
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-5 text-lg text-muted-foreground leading-relaxed">
              <p>
                The Council for Technical Education and Vocational Training (CTEVT) is the apex body for technical and vocational education in Nepal. PCTVET is the provincial-level council operating within that mandate — coordinating training providers, certifying skills, and disbursing public funds.
              </p>
              <p>
                Their work touches thousands of trainees, hundreds of training providers, and a long tail of trainers, co-trainers, and monitoring officers — historically managed across spreadsheets, paper, and disconnected systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The challenge */}
      <section className="border-t border-border/40 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 py-20 sm:py-24">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-primary mb-4">
                The challenge
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight">
                Eight stakeholder roles. One source of truth.
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-5 text-lg text-muted-foreground leading-relaxed">
              <p>
                Training programs in Nepal involve a chain of accountable roles: ministry administrators, council officers, training providers, coordinators, database and monitoring officers, trainers, and co-trainers. Each role sees a different slice of the data — and each needs to act on it without stepping on the others.
              </p>
              <p>
                Add bilingual requirements (Devanagari for official records, English for inter-agency reporting), contract lifecycle tracking, procurement workflows, and skill-test results that affect public funding — and a spreadsheet-driven workflow simply does not scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What we built */}
      <section>
        <div className="container mx-auto px-4 sm:px-6 py-20 sm:py-24">
          <div className="max-w-2xl mb-14">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-primary mb-4">
              The solution
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight">
              A single system across 8 roles.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <ModuleCard
              icon={Users}
              title="Role-based access"
              description="8 distinct user roles — admin, PCTVET officers, training providers, coordinators, database / monitoring officers, trainers, co-trainers. Each with tailored permissions."
            />
            <ModuleCard
              icon={FileText}
              title="Training events"
              description="Full lifecycle: draft → planned → pending approval → approved → ongoing → completed. Multi-step approval workflow built in."
            />
            <ModuleCard
              icon={Database}
              title="Contracts & procurement"
              description="Fixed price, time & materials, cost plus. Contract health monitoring, payment tracking, and procurement notice management."
            />
            <ModuleCard
              icon={CheckCircle2}
              title="Skill tests"
              description="Scheduled, completed, passed, failed states. Linked to trainees, certifications, and subject levels (1, 2, 3, N/A)."
            />
            <ModuleCard
              icon={Languages}
              title="Bilingual EN / नेपाली"
              description="Every record carries an English and Nepali version where official records require Devanagari. Built into the schema, not bolted on."
            />
            <ModuleCard
              icon={ShieldCheck}
              title="Audit trail"
              description="Granular permissions, configurable per role. Every change traceable to a user and timestamp."
            />
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="border-t border-border/40 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 py-20 sm:py-24">
          <div className="max-w-2xl mb-14">
            <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight">
              Engineering.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Modern, type-safe, deployable to any cloud.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { category: "Frontend", items: ["React + Vite", "TypeScript", "Tailwind + shadcn/ui", "wouter routing"] },
              { category: "Backend", items: ["Express + Node 20", "Drizzle ORM", "Neon Postgres", "Passport.js auth"] },
              { category: "Operations", items: ["Multi-tenant by role", "Session-based auth", "Multer file uploads", "WebSocket-ready"] },
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

      {/* CTA */}
      <section className="border-t border-border/40">
        <div className="container mx-auto px-4 sm:px-6 py-20 sm:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl sm:text-5xl font-semibold tracking-tight">
              Need a system like this?
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              We've built training management systems across multiple iterations. We know the domain.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg">
                <Link href="/contact">Start a conversation</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="https://pctvet.com" target="_blank" rel="noopener noreferrer">
                  Visit pctvet.com <ArrowUpRight className="ml-1.5 size-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function ModuleCard({
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
