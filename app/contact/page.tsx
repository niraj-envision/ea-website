import type { Metadata } from "next"
import { Mail, MapPin, Phone, Github, Twitter, Linkedin } from "lucide-react"
import { Card } from "@/components/ui/card"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Contact — Envision Analytics",
  description:
    "Get in touch with Envision Analytics. We respond to new project inquiries within two business days.",
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border/40">
        <div className="absolute inset-0 bg-dot-grid opacity-30" aria-hidden />
        <div className="absolute inset-0 bg-spotlight" aria-hidden />
        <div className="relative container mx-auto px-4 sm:px-6 pt-24 pb-16 sm:pt-32 sm:pb-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-3 py-1 text-xs text-muted-foreground mb-6">
              Contact
            </div>
            <h1 className="font-display text-5xl sm:text-7xl font-semibold tracking-tight leading-[1.05]">
              Let's build something.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl">
              Tell us about your project. We respond to new inquiries within two business days.
            </p>
          </div>
        </div>
      </section>

      {/* Form + info */}
      <section>
        <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7">
              <Card className="p-7 sm:p-9 bg-card">
                <ContactForm />
              </Card>
            </div>

            <div className="lg:col-span-5 space-y-5">
              <Card className="p-7 bg-card">
                <h3 className="font-display text-lg font-semibold mb-5">Direct</h3>
                <ul className="space-y-4 text-sm">
                  <li className="flex items-start gap-3">
                    <Mail className="size-4 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground">Email</p>
                      <a
                        href="mailto:info@envisionanalytics.net"
                        className="font-medium hover:text-primary transition-colors"
                      >
                        info@envisionanalytics.net
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone className="size-4 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground">Phone</p>
                      <a
                        href="tel:+9779851111527"
                        className="font-medium hover:text-primary transition-colors"
                      >
                        +977 985-1111-527
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="size-4 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground">Office</p>
                      <p className="font-medium">
                        Tokha-10, Tokha Municipality 44600
                        <br />
                        Kathmandu, Nepal
                      </p>
                    </div>
                  </li>
                </ul>
              </Card>

              <Card className="p-7 bg-card">
                <h3 className="font-display text-lg font-semibold mb-5">Elsewhere</h3>
                <div className="flex flex-wrap gap-2">
                  <SocialLink
                    icon={Github}
                    label="GitHub"
                    href="https://github.com/niraj-envision"
                  />
                  <SocialLink
                    icon={Twitter}
                    label="Twitter"
                    href="https://twitter.com/NirajDahal"
                  />
                  <SocialLink
                    icon={Linkedin}
                    label="LinkedIn"
                    href="https://www.linkedin.com/company/envision-analytics"
                  />
                </div>
              </Card>

              <Card className="p-7 bg-card">
                <h3 className="font-display text-lg font-semibold mb-2">What we take on</h3>
                <ul className="text-sm text-muted-foreground space-y-2 mt-4">
                  <li>· Government and public-sector digital systems</li>
                  <li>· Marketplace and on-demand consumer products</li>
                  <li>· AI-powered internal tooling</li>
                  <li>· Training and certification platforms</li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function SocialLink({
  icon: Icon,
  label,
  href,
}: {
  icon: React.ElementType
  label: string
  href: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 hover:bg-secondary px-3.5 py-1.5 text-sm transition-colors"
    >
      <Icon className="size-3.5" />
      {label}
    </a>
  )
}
