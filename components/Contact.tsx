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
  const [errorMessage, setErrorMessage] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    setStatus("sending");
    setErrorMessage("");
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
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        const msg = typeof data?.error === "string" ? data.error : "Send failed";
        setErrorMessage(msg);
        throw new Error(msg);
      }
      setStatus("success");
      form.reset();
    } catch (e) {
      setStatus("error");
      console.error("Contact form error:", e);
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

        <div className="mt-8">
          <a
            href={`mailto:${contact.email}`}
            className="text-lg font-medium text-accent hover:underline"
          >
            {contact.email}
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
              {errorMessage || t("contact.error", locale)}
            </p>
          )}
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="submit"
              disabled={status === "sending"}
              className="rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-white hover:bg-accent-muted focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-surface disabled:opacity-60"
            >
              {status === "sending" ? t("contact.sending", locale) : t("contact.send", locale)}
            </button>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-[hsl(var(--color-border))] bg-surface-elevated px-4 py-2.5 text-[hsl(var(--color-text))] transition-colors hover:border-accent hover:bg-accent/10 hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-surface"
              aria-label="LinkedIn"
            >
              <svg
                className="h-5 w-5 shrink-0"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <span className="text-sm font-medium">LinkedIn</span>
            </a>
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-[hsl(var(--color-border))] bg-surface-elevated px-4 py-2.5 text-[hsl(var(--color-text))] transition-colors hover:border-accent hover:bg-accent/10 hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-surface"
              aria-label="GitHub"
            >
              <svg
                className="h-5 w-5 shrink-0"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <span className="text-sm font-medium">GitHub</span>
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}
