"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { contactEmail } from "@/lib/content";

function openMailto(href: string) {
  const a = document.createElement("a");
  a.href = href;
  a.rel = "noopener noreferrer";
  document.body.appendChild(a);
  a.click();
  a.remove();
}

type SubmitStatus =
  | "idle"
  | "loading"
  | "success"
  | "validation_error"
  | "request_error"
  | "resend_sandbox"
  | "not_configured";

export function SectionContact() {
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const [copyHint, setCopyHint] = useState<"idle" | "ok" | "fail">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const nombre = String(data.get("nombre") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const mensaje = String(data.get("mensaje") ?? "").trim();

    if (!nombre || !email || !mensaje) {
      setSubmitStatus("validation_error");
      return;
    }

    setSubmitStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre, email, mensaje }),
      });

      const payload = (await res.json().catch(() => ({}))) as {
        error?: string;
      };

      if (res.status === 503 && payload.error === "not_configured") {
        setSubmitStatus("not_configured");
        return;
      }

      if (res.status === 422 && payload.error === "resend_sandbox_recipient") {
        setSubmitStatus("resend_sandbox");
        return;
      }

      if (!res.ok) {
        setSubmitStatus(
          res.status === 400 || payload.error === "validation"
            ? "validation_error"
            : "request_error",
        );
        return;
      }

      form.reset();
      setSubmitStatus("success");
    } catch {
      setSubmitStatus("request_error");
    }
  }

  function onMailtoFallback() {
    const form = document.getElementById("contact-form") as HTMLFormElement | null;
    if (!form) return;
    const data = new FormData(form);
    const nombre = String(data.get("nombre") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const mensaje = String(data.get("mensaje") ?? "").trim();
    if (!nombre || !email || !mensaje) {
      setSubmitStatus("validation_error");
      return;
    }
    const subject = encodeURIComponent(`Contacto portfolio — ${nombre}`);
    const body = encodeURIComponent(`Nombre: ${nombre}\nEmail: ${email}\n\n${mensaje}`);
    openMailto(`mailto:${contactEmail}?subject=${subject}&body=${body}`);
  }

  async function onCopyEmail() {
    try {
      await navigator.clipboard.writeText(contactEmail);
      setCopyHint("ok");
      window.setTimeout(() => setCopyHint("idle"), 2200);
    } catch {
      setCopyHint("fail");
      window.setTimeout(() => setCopyHint("idle"), 2800);
    }
  }

  return (
    <section
      id="contacto"
      aria-labelledby="contact-heading"
      className="flex min-h-[100svh] scroll-mt-28 flex-col justify-center px-4 py-8 sm:min-h-screen sm:scroll-mt-32 sm:px-6 sm:py-10 lg:scroll-mt-36 lg:px-8 lg:py-12"
    >
      <div className="mx-auto w-full max-w-3xl text-center">
        <ScrollReveal>
          <h2
            id="contact-heading"
            className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl title-neon"
          >
            Formulario de contacto
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-lg text-slate-400">
            Al enviar, recibo el mensaje en mi correo y puedo responderte usando la dirección que
            pongas en el campo Email.
          </p>
          <div className="mx-auto mt-6 flex max-w-2xl flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
            <a
              href={`mailto:${contactEmail}`}
              className="btn-neon-ghost inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-semibold text-slate-100 transition hover:text-cyan-100"
            >
              Abrir mailto
            </a>
            <button
              type="button"
              onClick={() => void onCopyEmail()}
              className="btn-neon-ghost inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-semibold text-slate-100 transition hover:text-cyan-100"
            >
              Copiar email
            </button>
            <span className="text-sm text-slate-500">{contactEmail}</span>
          </div>
          {copyHint === "ok" ? (
            <p className="mt-2 text-sm text-emerald-400" role="status">
              Email copiado al portapapeles.
            </p>
          ) : null}
          {copyHint === "fail" ? (
            <p className="mt-2 text-sm text-amber-400/95" role="status">
              No se pudo copiar automáticamente; seleccioná el correo arriba o usá{" "}
              <span className="font-medium text-slate-300">{contactEmail}</span>.
            </p>
          ) : null}
        </ScrollReveal>
        <ScrollReveal className="mt-10" delayMs={90}>
          <form
            id="contact-form"
            onSubmit={(e) => void onSubmit(e)}
            className="space-y-6 rounded-2xl border border-cyan-500/25 bg-slate-950/55 p-6 text-left shadow-[0_0_28px_rgba(45,226,255,0.12)] ring-1 ring-fuchsia-500/15 sm:p-8"
            noValidate
          >
            <div>
              <label htmlFor="nombre" className="block text-sm font-medium text-slate-200">
                Nombre
              </label>
              <input
                id="nombre"
                name="nombre"
                type="text"
                autoComplete="name"
                required
                disabled={submitStatus === "loading"}
                className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none ring-0 transition focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-500/30 disabled:opacity-60"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-200">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                disabled={submitStatus === "loading"}
                className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-500/30 disabled:opacity-60"
              />
            </div>
            <div>
              <label htmlFor="mensaje" className="block text-sm font-medium text-slate-200">
                Mensaje
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows={5}
                required
                disabled={submitStatus === "loading"}
                className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-500/30 disabled:opacity-60"
              />
            </div>
            {submitStatus === "validation_error" ? (
              <p className="text-sm text-rose-400" role="alert">
                Revisá que todos los campos tengan contenido válido.
              </p>
            ) : null}
            {submitStatus === "success" ? (
              <p className="text-sm text-emerald-400/95" role="status">
                Mensaje enviado. Te voy a responder al correo que indicaste.
              </p>
            ) : null}
            {submitStatus === "request_error" ? (
              <p className="text-sm text-rose-400/95" role="alert">
                No se pudo enviar ahora. Probá de nuevo en unos minutos o escribime a{" "}
                <a className="underline" href={`mailto:${contactEmail}`}>
                  {contactEmail}
                </a>
                .
              </p>
            ) : null}
            {submitStatus === "resend_sandbox" ? (
              <div
                className="rounded-xl border border-amber-500/25 bg-amber-500/5 p-4 text-left text-sm text-amber-100/95"
                role="alert"
              >
                <p className="font-medium text-amber-50">
                  Resend está en modo prueba con{" "}
                  <code className="text-amber-200">onboarding@resend.dev</code>: solo deja enviar
                  notificaciones al correo con el que creaste la cuenta en Resend (no a cualquier{" "}
                  <code className="text-amber-200">CONTACT_TO_EMAIL</code>).
                </p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-amber-100/90">
                  <li>
                    <strong className="text-amber-50">Para probar ya:</strong> en{" "}
                    <code className="text-amber-200">.env.local</code> poné{" "}
                    <code className="text-amber-200">CONTACT_TO_EMAIL</code> igual al email de tu
                    cuenta Resend.
                  </li>
                  <li>
                    <strong className="text-amber-50">Para producción:</strong> verificá un dominio
                    en{" "}
                    <a
                      className="underline decoration-amber-400/60 underline-offset-2 hover:text-amber-50"
                      href="https://resend.com/domains"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      resend.com/domains
                    </a>{" "}
                    y usá un <code className="text-amber-200">RESEND_FROM</code> de ese dominio;
                    después sí podés recibir en{" "}
                    <code className="text-amber-200">{contactEmail}</code> u otra bandeja.
                  </li>
                </ul>
              </div>
            ) : null}
            {submitStatus === "not_configured" ? (
              <div className="rounded-xl border border-amber-500/25 bg-amber-500/5 p-4 text-sm text-amber-100/95">
                <p>
                  En este entorno falta configurar <code className="text-amber-200">RESEND_API_KEY</code>{" "}
                  (por ejemplo en <code className="text-amber-200">.env.local</code>). Mirá{" "}
                  <code className="text-amber-200">.env.example</code> en el proyecto.
                </p>
                <button
                  type="button"
                  onClick={onMailtoFallback}
                  className="btn-neon-ghost mt-3 inline-flex items-center justify-center rounded-xl px-4 py-2 text-xs font-semibold text-slate-100"
                >
                  Abrir borrador en mi correo (alternativa)
                </button>
              </div>
            ) : null}
            <button
              type="submit"
              disabled={submitStatus === "loading"}
              className="inline-flex w-full items-center justify-center rounded-xl btn-neon-primary px-5 py-3 text-sm font-bold transition hover:scale-[1.02] disabled:pointer-events-none disabled:opacity-55 sm:w-auto"
            >
              {submitStatus === "loading" ? "Enviando…" : "Enviar mensaje"}
            </button>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
}
