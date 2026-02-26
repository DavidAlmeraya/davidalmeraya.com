"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

function LangThemeBlock({
  locale,
  setLocale,
  theme,
  toggleTheme,
  variant = "inline",
}: {
  locale: "en" | "es";
  setLocale: (l: "en" | "es") => void;
  theme: "light" | "dark";
  toggleTheme: () => void;
  variant?: "inline" | "stack";
}) {
  const isStack = variant === "stack";
  return (
    <div
      className={`flex items-center gap-3 ${isStack ? "flex-col w-full" : ""}`}
      role="group"
      aria-label="Language and theme"
    >
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
  );
}

export function Nav() {
  const { locale, setLocale, theme, toggleTheme } = useApp();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handler = () => setMobileOpen(false);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  return (
    <nav
      className="no-print fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      aria-label="Main navigation"
    >
      <motion.div
        className={`mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 py-3 sm:py-4 transition-all duration-300 ${
          scrolled ? "bg-surface/95 shadow-lg backdrop-blur" : "bg-transparent"
        }`}
        initial={false}
        animate={{ opacity: mounted ? 1 : 0 }}
      >
        {/* Desktop: section links */}
        <div className="hidden md:flex items-center gap-6">
          {SECTIONS.map(({ id, key }) => (
            <button
              key={id}
              type="button"
              onClick={() => handleNav(id)}
              className="text-sm lg:text-base font-medium text-[hsl(var(--color-text-muted))] hover:text-accent focus:text-accent focus:outline-none"
            >
              {t(key, locale)}
            </button>
          ))}
        </div>

        {/* Right: locale + theme always visible; hamburger only on mobile */}
        <div className="flex items-center gap-2 sm:gap-3">
          <LangThemeBlock
            locale={locale}
            setLocale={setLocale}
            theme={theme}
            toggleTheme={toggleTheme}
            variant="inline"
          />
          <button
            type="button"
            onClick={() => setMobileOpen((o) => !o)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-menu"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="md:hidden rounded-md p-2 text-[hsl(var(--color-text-muted))] hover:bg-surface-elevated hover:text-[hsl(var(--color-text))]"
          >
            {mobileOpen ? (
              <span className="text-xl leading-none" aria-hidden>✕</span>
            ) : (
              <span className="text-xl leading-none" aria-hidden>☰</span>
            )}
          </button>
        </div>
      </motion.div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-nav-menu"
            role="dialog"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden border-b border-[hsl(var(--color-border))] bg-surface/98 backdrop-blur"
          >
            <div className="mx-auto max-w-6xl px-4 py-4 pb-5 flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                {SECTIONS.map(({ id, key }) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() => handleNav(id)}
                    className="text-left py-2.5 px-2 text-base font-medium text-[hsl(var(--color-text))] hover:text-accent hover:bg-surface-elevated rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                  >
                    {t(key, locale)}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
