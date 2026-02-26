"use client";

import Link from "next/link";
import { useApp } from "@/app/providers";
import { getResume, t } from "@/content/resume";

export function Footer() {
  const { locale } = useApp();
  const { contact } = getResume(locale);

  return (
    <footer className="no-print border-t border-[hsl(var(--color-border))] px-6 py-8">
      <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-4">
        <p className="text-sm text-[hsl(var(--color-text-muted))]">
          © {new Date().getFullYear()} {contact.email}
        </p>
        <nav aria-label="Footer">
          <Link
            href="/resume"
            className="text-sm text-[hsl(var(--color-text-muted))] hover:text-accent"
          >
            {t("footer.resume", locale)}
          </Link>
        </nav>
      </div>
    </footer>
  );
}
