import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Cpu,
  Database,
  ShieldCheck,
  Scale,
  Languages,
  Layers,
  FlaskConical,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Nepali Legal AI — RAG + fine-tuned LLM for Nepal's court verdicts",
  description:
    "A retrieval-grounded, fine-tuned LLM for Nepali legal Q&A — built on Nepal Kanoon Patrika and Supreme Court Faisala archives. R&D project at Envision Analytics.",
}

export default function NepaliLegalAiCaseStudy() {
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
                <FlaskConical className="size-3" />
                AI · R&amp;D
              </div>
              <h1 className="font-display text-5xl sm:text-6xl font-semibold tracking-tight leading-[1.05]">
                A Nepali-language AI assistant for Nepal's legal archives.
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                A retrieval-grounded, fine-tuned LLM that helps lawyers, students, and citizens understand and find prior court verdicts — built on the Nepal Kanoon Patrika and Supreme Court Faisala archives.
              </p>
              <p className="mt-3 font-devanagari text-lg text-muted-foreground">
                नेपाली भाषामा फैसला खोज्न र बुझ्न — कानूनी कागजातमा आधारित।
              </p>
            </div>
            <div className="lg:col-span-4">
              <Card className="p-6 bg-card">
                <dl className="space-y-4 text-sm">
                  <div>
                    <dt className="text-xs uppercase tracking-wider text-muted-foreground">
                      Status
                    </dt>
                    <dd className="mt-1 inline-flex items-center gap-1.5 font-medium">
                      <span className="size-1.5 rounded-full bg-accent animate-pulse-soft" />
                      Active R&amp;D
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-wider text-muted-foreground">
                      Base model
                    </dt>
                    <dd className="mt-1 font-medium">Gemma 4 31B IT</dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-wider text-muted-foreground">
                      Architecture
                    </dt>
                    <dd className="mt-1 font-medium">RAG + QLoRA fine-tune</dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-wider text-muted-foreground">
                      Hardware
                    </dt>
                    <dd className="mt-1 font-medium">RTX 5090 (Blackwell)</dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-wider text-muted-foreground">
                      Target v1
                    </dt>
                    <dd className="mt-1 font-medium">2.5–3 months</dd>
                  </div>
                </dl>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* The problem */}
      <section>
        <div className="container mx-auto px-4 sm:px-6 py-20 sm:py-24">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-primary mb-4">
                The problem
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight">
                Six decades of verdicts. None of them searchable in Nepali.
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-5 text-lg text-muted-foreground leading-relaxed">
              <p>
                The Nepal Kanoon Patrika (NKP) has been the official record of Nepal's reported court decisions since 1958. The Supreme Court's Faisala archive holds every published verdict since. Together: tens of thousands of decisions, mostly in Devanagari Nepali — scanned PDFs before 2008, Unicode after.
              </p>
              <p>
                A lawyer or law student needing to find precedent on a specific issue today has two options: pay a commercial database that doesn't speak Nepali well, or hand-scroll through scanned PDFs. Citizens trying to understand their own legal system have effectively zero options.
              </p>
              <p className="text-foreground">
                Off-the-shelf LLMs hallucinate case citations — a documented failure that has cost lawyers their licenses elsewhere. For Nepali legal use, the wrong architecture is unacceptable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The approach */}
      <section className="border-t border-border/40 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 py-20 sm:py-24">
          <div className="grid lg:grid-cols-12 gap-12 mb-14">
            <div className="lg:col-span-4">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-primary mb-4">
                The approach
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight">
                RAG + fine-tune.<br />Not either alone.
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-5 text-lg text-muted-foreground leading-relaxed">
              <p>
                A fine-tuned LLM memorizes patterns, not facts. Trained on verdicts, it will confidently fabricate case citations, dates, and rulings — the exact failure mode that ends legal careers.
              </p>
              <p>
                Our architecture splits the two responsibilities. The <strong className="text-foreground">fine-tune</strong> teaches the model legal-Nepali vocabulary, judgment-style reasoning, and the citation format we want. The <strong className="text-foreground">retrieval layer</strong> keeps every factual claim tied to a real, retrieved verdict.
              </p>
              <p>
                If the relevant verdict isn't in the retrieved context, the model is trained to refuse — explicitly. That's the difference between a legal product and a liability.
              </p>
            </div>
          </div>

          {/* Architecture flow */}
          <div className="grid lg:grid-cols-2 gap-5">
            <Card className="p-7 bg-card">
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-4">Offline pipeline</p>
              <ol className="space-y-3 text-sm">
                <PipelineStep n="1" text="Scrape NKP + Supreme Court Faisala archives, politely rate-limited" />
                <PipelineStep n="2" text="OCR Devanagari (Surya / Cloud Vision) for pre-2008 scans" />
                <PipelineStep n="3" text="Extract structured metadata — case#, judges, parties, ratio, decision" />
                <PipelineStep n="4" text="Section-aware chunking (तथ्य · ठहर · फैसला), 512–800 tokens" />
                <PipelineStep n="5" text="Embed with BGE-M3, index in Qdrant" />
              </ol>
            </Card>
            <Card className="p-7 bg-card">
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-4">Runtime query</p>
              <ol className="space-y-3 text-sm">
                <PipelineStep n="1" text="User question in Nepali" />
                <PipelineStep n="2" text="Hybrid retrieve top-50 chunks (dense + sparse)" />
                <PipelineStep n="3" text="bge-reranker-v2-m3 picks top-5" />
                <PipelineStep n="4" text="Fine-tuned Gemma 4 answers in formal Nepali, cites by case#" />
                <PipelineStep n="5" text="Refuses if context insufficient — citations verified against the corpus" />
              </ol>
            </Card>
          </div>
        </div>
      </section>

      {/* Why it matters */}
      <section>
        <div className="container mx-auto px-4 sm:px-6 py-20 sm:py-24">
          <div className="max-w-2xl mb-14">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-primary mb-4">
              Why it matters
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight">
              Legal information is civic infrastructure.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              When citizens can read their own legal system, courts get better questions, lawyers do less rote work, and the gap between the law and the public it serves narrows.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <BenefitCard
              icon={Languages}
              title="Native Nepali"
              description="Most legal AI today understands English law in English. Ours reads Devanagari, writes in formal Nepali, and treats both as first-class."
            />
            <BenefitCard
              icon={ShieldCheck}
              title="Anti-hallucination by design"
              description="Citations are verified against the corpus before display. The model refuses to answer when context is thin — better silent than confidently wrong."
            />
            <BenefitCard
              icon={Scale}
              title="Auditable"
              description="Every answer surfaces the underlying verdicts it cites — case number, NKP citation, year. Users can click through and read the source."
            />
            <BenefitCard
              icon={Database}
              title="Grounded in real archives"
              description="NKP from BS 2065 (~2008) forward as Unicode; older volumes via OCR. Constitution, statutes, and the 125K bilingual legal MT corpus layer on top."
            />
            <BenefitCard
              icon={Cpu}
              title="Edge-deployable"
              description="QLoRA adapters keep the merged model small enough to self-host. No dependence on foreign hyperscalers for sensitive legal queries."
            />
            <BenefitCard
              icon={Layers}
              title="Knowledge wiki layer"
              description="A planned v1.5 — a curated wiki of landmark cases + statute interpretations the model maintains, for fast consistent answers to common questions."
            />
          </div>
        </div>
      </section>

      {/* Stack */}
      <section className="border-t border-border/40 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 py-20 sm:py-24">
          <div className="max-w-2xl mb-14">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-primary mb-4">
              <Cpu className="size-3.5" />
              Engineering
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight">
              The stack.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Modern, open-weight, self-hostable. No vendor lock-in.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                category: "Models",
                items: [
                  "Gemma 4 31B IT (primary)",
                  "Gemma 4 26B-A4B (speed)",
                  "Qwen 3 14B (backup)",
                  "QLoRA via Unsloth 2026.4",
                ],
              },
              {
                category: "Retrieval",
                items: [
                  "BGE-M3 embeddings",
                  "Qdrant vector DB",
                  "bge-reranker-v2-m3",
                  "Hybrid dense + sparse",
                ],
              },
              {
                category: "Data",
                items: [
                  "NKP archive (BS 2065+)",
                  "Supreme Court Faisala",
                  "Constitution of Nepal",
                  "Surya OCR for scans",
                ],
              },
              {
                category: "Hardware",
                items: [
                  "RTX 5090 (32 GB sm_120)",
                  "CUDA 12.8 / PyTorch 2.11",
                  "FA2 community kernels",
                  "Single workstation",
                ],
              },
              {
                category: "Training",
                items: [
                  "10K–20K seed instructions",
                  "Lawyer-reviewed gold set",
                  "Synthetic expansion via stronger LLM",
                  "Citation-correctness eval",
                ],
              },
              {
                category: "Safety",
                items: [
                  "Source-cited answers required",
                  "Refusal training on thin context",
                  "Lawyer disclaimer on every output",
                  "Query logging for failure analysis",
                ],
              },
            ].map((stack) => (
              <Card key={stack.category} className="p-6 bg-card">
                <h3 className="font-display text-lg font-semibold mb-4">{stack.category}</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {stack.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="size-3.5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section>
        <div className="container mx-auto px-4 sm:px-6 py-20 sm:py-24">
          <div className="max-w-2xl mb-14">
            <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight">
              Phased plan.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Realistic v1 in 2.5–3 months. Faster with a Nepali lawyer engaged from day one.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <PhaseCard
              phase="Phase 0–1"
              title="Eval & scrape"
              detail="200-Q ground-truth set with lawyer review · NKP + Faisala cached locally"
              status="current"
            />
            <PhaseCard
              phase="Phase 2–3"
              title="Pipeline & RAG"
              detail="Structured JSONL extraction · Qdrant index · recall@5 baseline"
              status="next"
            />
            <PhaseCard
              phase="Phase 4–6"
              title="Instruction data & fine-tune"
              detail="10K–20K examples · QLoRA training · checkpoint evals"
              status="planned"
            />
            <PhaseCard
              phase="Phase 7–8"
              title="Iterate & release"
              detail="Re-train weak slices · model card · public demo with disclaimers"
              status="planned"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/40 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 py-20 sm:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl sm:text-5xl font-semibold tracking-tight">
              Working on Nepali language AI?
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              We collaborate with lawyers, researchers, and government bodies on Nepali NLP. If you have a corpus, a question, or want to compare notes — get in touch.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg">
                <Link href="/contact">Reach out</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="https://github.com/niraj-envision" target="_blank" rel="noopener noreferrer">
                  See our GitHub <ArrowUpRight className="ml-1.5 size-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function PipelineStep({ n, text }: { n: string; text: string }) {
  return (
    <li className="flex items-start gap-3">
      <span className="flex-shrink-0 size-6 rounded-full bg-primary/15 text-primary text-xs font-semibold flex items-center justify-center">
        {n}
      </span>
      <span className="text-muted-foreground leading-relaxed pt-0.5">{text}</span>
    </li>
  )
}

function BenefitCard({
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

function PhaseCard({
  phase,
  title,
  detail,
  status,
}: {
  phase: string
  title: string
  detail: string
  status: "current" | "next" | "planned"
}) {
  const colorClass = {
    current: "bg-primary/15 text-primary border-primary/30",
    next: "bg-accent/15 text-accent border-accent/30",
    planned: "bg-muted text-muted-foreground border-border",
  }[status]
  const label = { current: "In progress", next: "Up next", planned: "Planned" }[status]

  return (
    <Card className="p-6 bg-card h-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <p className="text-xs uppercase tracking-wider text-muted-foreground">{phase}</p>
        <span className={`text-[10px] px-2 py-0.5 rounded-full border ${colorClass}`}>{label}</span>
      </div>
      <h3 className="font-display text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{detail}</p>
    </Card>
  )
}
