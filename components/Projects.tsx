"use client";

import { motion } from "framer-motion";
import { useApp } from "@/app/providers";
import { getResume, t } from "@/content/resume";

export function Projects() {
  const { locale } = useApp();
  const data = getResume(locale);

  return (
    <section
      id="projects"
      className="scroll-mt-20 px-6 py-16 md:py-24"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-4xl">
        <motion.h2
          id="projects-heading"
          className="text-2xl font-bold text-[hsl(var(--color-text))] sm:text-3xl"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
        >
          {t("projects.title", locale)}
        </motion.h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {data.projects.map((project, i) => (
            <motion.article
              key={project.id}
              className="rounded-xl border border-[hsl(var(--color-border))] bg-surface-elevated p-5"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: 0.05 * i }}
            >
              <h3 className="text-base font-semibold text-[hsl(var(--color-text))]">
                {project.title}
              </h3>
              <p className="mt-2 text-sm text-[hsl(var(--color-text-muted))]">
                {project.description}
              </p>
              <div className="mt-3 flex flex-nowrap gap-1 overflow-x-auto">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="shrink-0 rounded bg-[hsl(var(--color-border))] px-1.5 py-px text-[10px] font-medium text-[hsl(var(--color-text-muted))]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {(project.url || project.repo) && (
                <div className="mt-3 flex gap-3 text-sm">
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:underline"
                    >
                      Live
                    </a>
                  )}
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:underline"
                    >
                      Repo
                    </a>
                  )}
                </div>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
