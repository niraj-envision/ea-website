import Link from "next/link"
import Image from "next/image"
import { Twitter, Github, Linkedin, Mail } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5">
              <Image
                src="/logo.ico"
                alt="Envision Analytics"
                width={28}
                height={28}
                className="rounded"
              />
              <span className="font-display font-semibold tracking-tight">
                Envision Analytics
              </span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              Software for Nepal's next era. Government systems, AI products, and HamroSkill.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://twitter.com/NirajDahal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="https://github.com/niraj-envision"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/company/envision-analytics"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:info@envisionanalytics.net"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-3">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/hamroskill" className="hover:text-foreground transition-colors">
                  HamroSkill
                </Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-foreground transition-colors">
                  Case studies
                </Link>
              </li>
              <li>
                <Link href="/work/pctvet" className="hover:text-foreground transition-colors">
                  PCTVET TMS
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/about" className="hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/niraj-envision"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  Open source
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-3">Contact</h4>
            <address className="not-italic text-sm text-muted-foreground space-y-1">
              <p>Tokha-10, Tokha Municipality 44600</p>
              <p>Kathmandu, Nepal</p>
              <p>
                <a
                  href="mailto:info@envisionanalytics.net"
                  className="hover:text-foreground transition-colors"
                >
                  info@envisionanalytics.net
                </a>
              </p>
              <p>+977 985-1111-527</p>
            </address>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Envision Analytics Pvt. Ltd. All rights reserved.</p>
          <p className="font-devanagari">नेपालमा बनेको · Made in Nepal</p>
        </div>
      </div>
    </footer>
  )
}
