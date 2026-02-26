"use client";

import { motion } from "framer-motion";
import { useApp } from "@/app/providers";
import { getResume, t } from "@/content/resume";

export function About() {
  const { locale } = useApp();
  const data = getResume(locale);
  const { about } = data;

  return (
    <section
      id="about"
      className="scroll-mt-20 px-6 py-16 md:py-24"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-3xl">
        <motion.h2
          id="about-heading"
          className="text-2xl font-bold text-[hsl(var(--color-text))] sm:text-3xl"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4 }}
        >
          {t("about.title", locale)}
        </motion.h2>
        <div className="mt-6 space-y-4">
          {about.paragraph.split(/\n\n+/).map((para, i) => (
            <motion.p
              key={i}
              className="leading-relaxed text-[hsl(var(--color-text-muted))]"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: 0.05 * i }}
            >
              {para}
            </motion.p>
          ))}
        </div>
        {about.bullets.length > 0 && (
          <ul className="mt-8 space-y-3" role="list">
            {about.bullets.map((bullet, i) => (
              <motion.li
                key={i}
                className="flex gap-3 text-[hsl(var(--color-text-muted))]"
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.35, delay: 0.05 * i }}
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                <span className="leading-relaxed">{bullet}</span>
              </motion.li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
