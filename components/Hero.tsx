"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useApp } from "@/app/providers";
import { getResume, t } from "@/content/resume";

const profileImageSrc = "/david.png";

export function Hero() {
  const { locale } = useApp();
  const data = getResume(locale);
  const { hero, contact } = data;

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex flex-col justify-center px-6 pt-24 pb-16"
      aria-labelledby="hero-heading"
    >
      <div className="hero-bg-subtle absolute inset-0 pointer-events-none" aria-hidden />
      <div className="relative z-10 mx-auto w-full max-w-5xl flex flex-col md:flex-row md:items-start items-center gap-8 md:gap-10">
        <motion.div
          className="flex-shrink-0 order-1"
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-2xl overflow-hidden border border-[hsl(var(--color-border))] shadow-lg bg-surface-elevated">
            <Image
              src={profileImageSrc}
              alt={hero.name}
              fill
              sizes="(max-width: 640px) 176px, (max-width: 768px) 176px, (max-width: 1024px) 288px, 320px"
              className="object-cover object-top"
              priority
            />
          </div>
        </motion.div>
        <div className="flex-1 text-center md:text-left min-w-0 order-2 md:h-[18rem] lg:h-[20rem] md:flex md:flex-col md:justify-between">
        <motion.h1
          id="hero-heading"
          className="text-3xl font-bold tracking-tight leading-tight text-[hsl(var(--color-text))] sm:text-4xl md:text-5xl md:whitespace-nowrap"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {hero.name}
        </motion.h1>
        <motion.p
          className="mt-2 text-lg leading-snug text-accent font-semibold sm:text-xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {hero.title}
        </motion.p>
        <motion.p
          className="mt-4 text-base leading-snug text-[hsl(var(--color-text-muted))]"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {hero.tagline}
        </motion.p>
        {hero.taglineShort && (
          <motion.p
            className="mt-1.5 text-sm text-accent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
          >
            {hero.taglineShort}
          </motion.p>
        )}
        {hero.openToRoles && (
          <motion.p
            className="mt-2 text-sm font-medium text-[hsl(var(--color-text))]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {hero.openToRoles}
          </motion.p>
        )}
        <motion.div
          className="mt-6 flex flex-wrap items-center justify-center md:justify-start gap-3"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a
            href="/resume.pdf"
            download="David-Herrera-Almeraya-Resume.pdf"
            className="inline-flex items-center justify-center rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-white hover:bg-accent-muted focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-surface"
          >
            {t("hero.downloadResume", locale)}
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center justify-center rounded-lg border border-[hsl(var(--color-border))] bg-surface-elevated px-5 py-2.5 text-sm font-medium text-[hsl(var(--color-text))] hover:bg-[hsl(var(--color-border))] focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-surface"
          >
            {t("hero.contact", locale)}
          </a>
        </motion.div>
        </div>
      </div>
    </section>
  );
}
