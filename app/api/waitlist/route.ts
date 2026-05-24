import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "info@envisionanalytics.net"
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || "HamroSkill <onboarding@resend.dev>"

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json()

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "Valid email is required." }, { status: 400 })
    }

    if (!resend) {
      console.warn("[waitlist] RESEND_API_KEY is not set — not notified.")
      console.info("[waitlist] Inbound email:", email)
      return NextResponse.json({ ok: true, queued: false })
    }

    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      subject: "New HamroSkill waitlist signup",
      replyTo: email,
      html: `<p>New waitlist signup: <strong>${escapeHtml(email)}</strong></p>`,
    })

    if (error) {
      console.error("[waitlist] Resend error:", error)
      return NextResponse.json({ error: "Failed to save signup." }, { status: 500 })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error("[waitlist] Unexpected error:", err)
    return NextResponse.json({ error: "Failed to save signup." }, { status: 500 })
  }
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}
