"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useApp } from "@/app/providers";
import { getResume, t } from "@/content/resume";

export function Writing() {
  const { locale } = useApp();
  const data = getResume(locale);
  const posts = data.writing.filter((p) => p.locale === locale || p.locale === "en");

  return (
    <section
      id="writing"
      className="scroll-mt-20 px-6 py-16 md:py-24"
      aria-labelledby="writing-heading"
    >
      <div className="mx-auto max-w-3xl">
        <motion.h2
          id="writing-heading"
          className="text-2xl font-bold text-[hsl(var(--color-text))] sm:text-3xl"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
        >
          {t("writing.title", locale)}
        </motion.h2>
        <ul className="mt-10 space-y-6" role="list">
          {posts.map((post, i) => (
            <motion.li
              key={post.slug}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: 0.03 * i }}
            >
              <Link
                href={`/writing/${post.slug}`}
                className="group block rounded-lg border border-[hsl(var(--color-border))] bg-surface-elevated p-4 transition-colors hover:border-accent/50"
              >
                <h3 className="font-semibold text-[hsl(var(--color-text))] group-hover:text-accent">
                  {post.title}
                </h3>
                <p className="mt-1 text-sm text-[hsl(var(--color-text-muted))]">{post.excerpt}</p>
                <time
                  dateTime={post.date}
                  className="mt-2 block text-xs text-[hsl(var(--color-text-muted))]"
                >
                  {new Date(post.date).toLocaleDateString(locale === "es" ? "es-MX" : "en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
