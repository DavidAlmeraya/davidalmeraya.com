"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useApp } from "@/app/providers";
import { getResume, t, type ExpertisePillar } from "@/content/resume";

function PillarCard({
  pillar,
  isExpanded,
  onToggle,
  locale,
}: {
  pillar: ExpertisePillar;
  isExpanded: boolean;
  onToggle: () => void;
  locale: "en" | "es";
}) {
  return (
    <article
      className="rounded-xl border border-[hsl(var(--color-border))] bg-surface-elevated overflow-hidden"
    >
      <button
        type="button"
        onClick={onToggle}
        className="w-full px-6 py-5 text-left focus:outline-none focus:ring-2 focus:ring-accent focus:ring-inset"
        aria-expanded={isExpanded}
        aria-controls={`pillar-${pillar.id}`}
      >
        <h3 className="text-lg font-semibold text-[hsl(var(--color-text))]">{pillar.title}</h3>
        <p className="mt-1 text-sm text-[hsl(var(--color-text-muted))]">{pillar.summary}</p>
        <span className="mt-2 inline-block text-sm font-medium text-accent" aria-hidden>
          {isExpanded ? "− Less" : "+ More"}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            id={`pillar-${pillar.id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="border-t border-[hsl(var(--color-border))] overflow-hidden"
          >
            <div className="px-6 py-4 space-y-4">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-accent">
                  {t("expertise.tools", locale)}
                </h4>
                <p className="mt-1 text-sm text-[hsl(var(--color-text-muted))]">
                  {pillar.tools.join(" · ")}
                </p>
              </div>
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-accent">
                  {t("expertise.patterns", locale)}
                </h4>
                <p className="mt-1 text-sm text-[hsl(var(--color-text-muted))]">
                  {pillar.patterns.join(" · ")}
                </p>
              </div>
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-accent">
                  {t("expertise.outcomes", locale)}
                </h4>
                <ul className="mt-1 list-disc list-inside space-y-0.5 text-sm text-[hsl(var(--color-text-muted))]">
                  {pillar.outcomes.map((o, i) => (
                    <li key={i}>{o}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
}

export function Expertise() {
  const { locale } = useApp();
  const data = getResume(locale);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section
      id="expertise"
      className="scroll-mt-20 px-6 py-16 md:py-24"
      aria-labelledby="expertise-heading"
    >
      <div className="mx-auto max-w-4xl">
        <motion.h2
          id="expertise-heading"
          className="text-2xl font-bold text-[hsl(var(--color-text))] sm:text-3xl"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
        >
          {t("expertise.title", locale)}
        </motion.h2>
        <div className="mt-10 grid gap-4 grid-cols-1">
          {data.expertise.map((pillar) => (
            <PillarCard
              key={pillar.id}
              pillar={pillar}
              isExpanded={expandedId === pillar.id}
              onToggle={() => setExpandedId((prev) => (prev === pillar.id ? null : pillar.id))}
              locale={locale}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
