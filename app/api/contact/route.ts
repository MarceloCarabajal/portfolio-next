import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactEmail } from "@/lib/content";

export const runtime = "nodejs";

const LIMITS = { name: 120, message: 8000 } as const;

function isValidEmail(s: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const from =
    process.env.RESEND_FROM?.trim() ||
    "Portfolio <onboarding@resend.dev>";
  const to = process.env.CONTACT_TO_EMAIL?.trim() || contactEmail;

  if (!apiKey) {
    return NextResponse.json({ error: "not_configured" }, { status: 503 });
  }

  let raw: unknown;
  try {
    raw = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const body = raw as Record<string, unknown>;
  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (!name || name.length > LIMITS.name) {
    return NextResponse.json({ error: "validation", field: "name" }, { status: 400 });
  }
  if (!email || email.length > 254 || !isValidEmail(email)) {
    return NextResponse.json({ error: "validation", field: "email" }, { status: 400 });
  }
  if (!message || message.length > LIMITS.message) {
    return NextResponse.json({ error: "validation", field: "message" }, { status: 400 });
  }

  const resend = new Resend(apiKey);
  const result = await resend.emails.send({
    from,
    to: [to],
    replyTo: email,
    subject: `Portfolio contact — ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
  });

  if (result.error) {
    console.error("[api/contact]", result.error);
    const msg = result.error.message ?? "";
    const sandboxRecipientLock =
      result.error.statusCode === 403 ||
      /only send testing emails to your own email address/i.test(msg) ||
      /verify a domain at resend\.com/i.test(msg);

    if (sandboxRecipientLock) {
      return NextResponse.json(
        { error: "resend_sandbox_recipient" },
        { status: 422 },
      );
    }

    return NextResponse.json(
      { error: "send_failed", message: msg },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true as const, id: result.data?.id });
}
