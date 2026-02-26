"use client";

import { motion } from "framer-motion";
import { useApp } from "@/app/providers";
import { getResume, t } from "@/content/resume";

export function CaseStudies() {
  const { locale } = useApp();
  const data = getResume(locale);

  return (
    <section
      id="case-studies"
      className="scroll-mt-20 px-6 py-16 md:py-24"
      aria-labelledby="case-studies-heading"
    >
      <div className="mx-auto max-w-4xl">
        <motion.h2
          id="case-studies-heading"
          className="text-2xl font-bold text-[hsl(var(--color-text))] sm:text-3xl"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
        >
          {t("caseStudies.title", locale)}
        </motion.h2>
        <div className="mt-10 space-y-8">
          {data.caseStudies.map((study, i) => (
            <motion.article
              key={study.id}
              className="rounded-xl border border-[hsl(var(--color-border))] bg-surface-elevated p-6"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: 0.05 * i }}
            >
              <h3 className="text-lg font-semibold text-[hsl(var(--color-text))]">{study.title}</h3>
              <dl className="mt-4 grid gap-4 sm:grid-cols-1">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-accent">
                    {t("caseStudies.problem", locale)}
                  </dt>
                  <dd className="mt-1 text-sm text-[hsl(var(--color-text-muted))]">
                    {study.problem}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-accent">
                    {t("caseStudies.constraints", locale)}
                  </dt>
                  <dd className="mt-1 text-sm text-[hsl(var(--color-text-muted))]">
                    {study.constraints}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-accent">
                    {t("caseStudies.approach", locale)}
                  </dt>
                  <dd className="mt-1 text-sm text-[hsl(var(--color-text-muted))]">
                    {study.approach}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-accent">
                    {t("caseStudies.result", locale)}
                    {study.resultPlaceholder && (
                      <span className="ml-1 text-[hsl(var(--color-text-muted))]">
                        {t("caseStudies.placeholder", locale)}
                      </span>
                    )}
                  </dt>
                  <dd className="mt-1 text-sm text-[hsl(var(--color-text-muted))]">
                    {study.result}
                  </dd>
                </div>
              </dl>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
