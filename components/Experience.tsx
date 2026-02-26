"use client";

import { motion } from "framer-motion";
import { useApp } from "@/app/providers";
import { getResume, t } from "@/content/resume";

export function Experience() {
  const { locale } = useApp();
  const data = getResume(locale);

  return (
    <section
      id="experience"
      className="scroll-mt-20 px-6 py-16 md:py-24"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto max-w-3xl">
        <motion.h2
          id="experience-heading"
          className="text-2xl font-bold text-[hsl(var(--color-text))] sm:text-3xl"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
        >
          {t("experience.title", locale)}
        </motion.h2>
        <div className="mt-10 border-l-2 border-[hsl(var(--color-border))] pl-6 sm:pl-8">
          {data.experience.map((job, i) => (
            <motion.div
              key={`${job.company}-${job.start}`}
              className="relative pb-10 last:pb-0"
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: 0.05 * i }}
            >
              <span
                className="absolute left-0 top-[9px] h-3 w-3 -translate-x-[calc(1.5rem+6px)] -translate-y-1/2 rounded-full bg-accent sm:-translate-x-[calc(2rem+6px)]"
                aria-hidden
              />
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold text-[hsl(var(--color-text))]">
                  {job.role}
                </h3>
                <span className="text-sm text-[hsl(var(--color-text-muted))]">
                  {job.start} — {job.end}
                </span>
              </div>
              <p className="mt-0.5 text-sm font-medium text-accent">
                {job.company} · {job.location}
              </p>
              <ul className="mt-3 list-disc list-inside space-y-1 text-sm text-[hsl(var(--color-text-muted))]">
                {job.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
