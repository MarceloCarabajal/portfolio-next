"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/ScrollReveal";

const EMAIL_TO = "marcelocarabajalok@gmail.com";

export function SectionContact() {
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const nombre = String(data.get("nombre") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const mensaje = String(data.get("mensaje") ?? "").trim();

    if (!nombre || !email || !mensaje) {
      setStatus("error");
      return;
    }

    const subject = encodeURIComponent(`Contacto portfolio — ${nombre}`);
    const body = encodeURIComponent(
      `Nombre: ${nombre}\nEmail: ${email}\n\n${mensaje}`,
    );
    window.location.href = `mailto:${EMAIL_TO}?subject=${subject}&body=${body}`;
    setStatus("sent");
  }

  return (
    <section
      id="contacto"
      aria-labelledby="contact-heading"
      className="flex min-h-screen scroll-mt-28 flex-col justify-center px-4 py-24 sm:scroll-mt-32 sm:px-6 lg:scroll-mt-36 lg:px-8"
    >
      <div className="mx-auto max-w-3xl">
        <ScrollReveal>
          <h2
            id="contact-heading"
            className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl title-neon"
          >
            Formulario de contacto
          </h2>
          <p className="mt-3 text-lg text-slate-400">
            Completá el mensaje y se abrirá tu cliente de correo con el borrador
            listo para enviar.
          </p>
        </ScrollReveal>
        <ScrollReveal className="mt-10" delayMs={90}>
          <form
            onSubmit={onSubmit}
            className="space-y-6 rounded-2xl border border-cyan-500/25 bg-slate-950/55 p-6 shadow-[0_0_28px_rgba(45,226,255,0.12)] ring-1 ring-fuchsia-500/15 sm:p-8"
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
              className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none ring-0 transition focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-500/30"
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
              className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-500/30"
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
              className="mt-2 w-full resize-y rounded-xl border border-white/10 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-500/30"
            />
          </div>
          {status === "error" ? (
            <p className="text-sm text-rose-400" role="alert">
              Revisá que todos los campos tengan contenido válido.
            </p>
          ) : null}
          {status === "sent" ? (
            <p className="text-sm text-emerald-400" role="status">
              Si tu navegador no abrió el correo, escribime directamente a{" "}
              <a className="underline" href={`mailto:${EMAIL_TO}`}>
                {EMAIL_TO}
              </a>
              .
            </p>
          ) : null}
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-xl btn-neon-primary px-5 py-3 text-sm font-bold transition hover:scale-[1.02] sm:w-auto"
          >
            Enviar mensaje
          </button>
        </form>
        </ScrollReveal>
      </div>
    </section>
  );
}
