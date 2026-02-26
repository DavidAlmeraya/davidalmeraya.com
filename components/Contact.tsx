"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useApp } from "@/app/providers";
import { getResume, t } from "@/content/resume";

export function Contact() {
  const { locale } = useApp();
  const data = getResume(locale);
  const { contact } = data;
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fd.get("name"),
          email: fd.get("email"),
          message: fd.get("message"),
        }),
      });
      if (!res.ok) throw new Error("Send failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="scroll-mt-20 px-6 py-16 md:py-24"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-2xl">
        <motion.h2
          id="contact-heading"
          className="text-2xl font-bold text-[hsl(var(--color-text))] sm:text-3xl"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
        >
          {t("contact.title", locale)}
        </motion.h2>
        <p className="mt-2 text-[hsl(var(--color-text-muted))]">{t("contact.subtitle", locale)}</p>

        <div className="mt-8 flex flex-wrap gap-6">
          <a
            href={`mailto:${contact.email}`}
            className="text-lg font-medium text-accent hover:underline"
          >
            {contact.email}
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[hsl(var(--color-text-muted))] hover:text-accent"
          >
            LinkedIn
          </a>
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[hsl(var(--color-text-muted))] hover:text-accent"
          >
            GitHub
          </a>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-10 space-y-4"
          aria-label="Contact form"
        >
          <div>
            <label htmlFor="contact-name" className="block text-sm font-medium text-[hsl(var(--color-text))]">
              {t("contact.name", locale)}
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              required
              autoComplete="name"
              className="mt-1 w-full rounded-lg border border-[hsl(var(--color-border))] bg-surface px-4 py-2.5 text-[hsl(var(--color-text))] placeholder:text-[hsl(var(--color-text-muted))] focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
              placeholder="Your name"
              disabled={status === "sending"}
            />
          </div>
          <div>
            <label htmlFor="contact-email" className="block text-sm font-medium text-[hsl(var(--color-text))]">
              {t("contact.email", locale)}
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className="mt-1 w-full rounded-lg border border-[hsl(var(--color-border))] bg-surface px-4 py-2.5 text-[hsl(var(--color-text))] placeholder:text-[hsl(var(--color-text-muted))] focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
              placeholder="you@example.com"
              disabled={status === "sending"}
            />
          </div>
          <div>
            <label htmlFor="contact-message" className="block text-sm font-medium text-[hsl(var(--color-text))]">
              {t("contact.message", locale)}
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={4}
              required
              className="mt-1 w-full rounded-lg border border-[hsl(var(--color-border))] bg-surface px-4 py-2.5 text-[hsl(var(--color-text))] placeholder:text-[hsl(var(--color-text-muted))] focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
              placeholder="Your message"
              disabled={status === "sending"}
            />
          </div>
          {status === "success" && (
            <p className="text-sm text-green-500" role="status">
              {t("contact.success", locale)}
            </p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-500" role="alert">
              {t("contact.error", locale)}
            </p>
          )}
          <button
            type="submit"
            disabled={status === "sending"}
            className="rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-white hover:bg-accent-muted focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-surface disabled:opacity-60"
          >
            {status === "sending" ? t("contact.sending", locale) : t("contact.send", locale)}
          </button>
        </form>
      </div>
    </section>
  );
}
