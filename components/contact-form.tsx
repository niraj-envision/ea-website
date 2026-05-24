"use client"

import { useState } from "react"
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      organization: formData.get("organization"),
      message: formData.get("message"),
    }

    setStatus("loading")
    setErrorMessage("")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error || "Something went wrong")
      }
      setStatus("success")
      ;(e.target as HTMLFormElement).reset()
    } catch (err) {
      setStatus("error")
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong")
    }
  }

  if (status === "success") {
    return (
      <div className="text-center py-10">
        <div className="inline-flex items-center justify-center size-12 rounded-full bg-primary/15 mb-5">
          <CheckCircle2 className="size-6 text-primary" />
        </div>
        <h3 className="font-display text-2xl font-semibold">Message sent.</h3>
        <p className="mt-3 text-muted-foreground">
          We'll respond within two business days. Thanks for reaching out.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full h-11 px-4 rounded-md bg-secondary border border-border focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 text-sm transition"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full h-11 px-4 rounded-md bg-secondary border border-border focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 text-sm transition"
          />
        </div>
      </div>

      <div>
        <label htmlFor="organization" className="block text-sm font-medium mb-2">
          Organization <span className="text-muted-foreground font-normal">(optional)</span>
        </label>
        <input
          id="organization"
          name="organization"
          type="text"
          className="w-full h-11 px-4 rounded-md bg-secondary border border-border focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 text-sm transition"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Tell us about your project
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          className="w-full px-4 py-3 rounded-md bg-secondary border border-border focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 text-sm transition resize-none"
        />
      </div>

      <div className="flex items-center justify-between pt-2">
        <p className="text-xs text-muted-foreground">
          We typically reply within 2 business days.
        </p>
        <Button type="submit" size="lg" disabled={status === "loading"}>
          {status === "loading" ? (
            <>
              <Loader2 className="size-4 animate-spin mr-1.5" />
              Sending
            </>
          ) : (
            <>
              Send message <ArrowRight className="ml-1.5 size-4" />
            </>
          )}
        </Button>
      </div>

      {status === "error" && (
        <p className="text-sm text-destructive">{errorMessage}</p>
      )}
    </form>
  )
}
