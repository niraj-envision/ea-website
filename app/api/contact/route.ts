import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "info@envisionanalytics.net"
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || "Envision Analytics <onboarding@resend.dev>"

export async function POST(req: NextRequest) {
  try {
    const { name, email, organization, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 },
      )
    }

    if (!resend) {
      console.warn("[contact] RESEND_API_KEY is not set — message not sent.")
      console.info("[contact] Inbound:", { name, email, organization, message })
      return NextResponse.json(
        { error: "Email service not configured. Please email info@envisionanalytics.net directly." },
        { status: 503 },
      )
    }

    const html = `
      <div style="font-family:-apple-system,BlinkMacSystemFont,sans-serif;line-height:1.6;color:#0f172a">
        <h2 style="margin:0 0 16px;font-size:20px">New contact form submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        ${organization ? `<p><strong>Organization:</strong> ${escapeHtml(organization)}</p>` : ""}
        <hr style="border:none;border-top:1px solid #e2e8f0;margin:16px 0" />
        <p><strong>Message:</strong></p>
        <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
      </div>
    `

    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      replyTo: email,
      subject: `New inquiry from ${name}${organization ? ` (${organization})` : ""}`,
      html,
    })

    if (error) {
      console.error("[contact] Resend error:", error)
      return NextResponse.json({ error: "Failed to send message." }, { status: 500 })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error("[contact] Unexpected error:", err)
    return NextResponse.json({ error: "Failed to send message." }, { status: 500 })
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
