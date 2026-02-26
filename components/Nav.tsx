"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useApp } from "@/app/providers";
import { t } from "@/content/resume";

const SECTIONS = [
  { id: "about", key: "nav.about" },
  { id: "expertise", key: "nav.expertise" },
  { id: "case-studies", key: "nav.caseStudies" },
  { id: "experience", key: "nav.experience" },
  { id: "projects", key: "nav.projects" },
  { id: "contact", key: "nav.contact" },
] as const;

export function Nav() {
  const { locale, setLocale, theme, toggleTheme } = useApp();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className="no-print fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      aria-label="Main navigation"
    >
      <motion.div
        className={`mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4 transition-all duration-300 ${
          scrolled ? "bg-surface/95 shadow-lg backdrop-blur" : "bg-transparent"
        }`}
        initial={false}
        animate={{ opacity: mounted ? 1 : 0 }}
      >
        <div className="flex items-center gap-6">
          {SECTIONS.map(({ id, key }) => (
            <button
              key={id}
              type="button"
              onClick={() => handleNav(id)}
              className="text-sm md:text-base font-medium text-[hsl(var(--color-text-muted))] hover:text-accent focus:text-accent focus:outline-none"
            >
              {t(key, locale)}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <div
            className="flex rounded-md border border-[hsl(var(--color-border))] p-0.5"
            role="group"
            aria-label="Language"
          >
            {(["en", "es"] as const).map((lang) => (
              <button
                key={lang}
                type="button"
                onClick={() => setLocale(lang)}
                aria-pressed={locale === lang}
                className={`rounded px-2 py-1 text-xs font-medium transition-colors ${
                  locale === lang
                    ? "bg-accent text-white"
                    : "text-[hsl(var(--color-text-muted))] hover:text-[hsl(var(--color-text))]"
                }`}
              >
                {t(`lang.${lang}`, locale)}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="rounded-md p-2 text-[hsl(var(--color-text-muted))] hover:bg-surface-elevated hover:text-[hsl(var(--color-text))]"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
        </div>
      </motion.div>
    </nav>
  );
}
