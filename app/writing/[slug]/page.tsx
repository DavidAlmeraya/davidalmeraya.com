import { readFile } from "fs/promises";
import { join } from "path";
import { notFound } from "next/navigation";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { resume } from "@/content/resume";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return resume.writing.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = resume.writing.find((p) => p.slug === slug);
  if (!post) return { title: "Post" };
  return { title: `${post.title} | David Herrera Almeraya` };
}

export default async function WritingPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = resume.writing.find((p) => p.slug === slug);
  if (!post) notFound();

  const base = process.cwd();
  const path = join(base, "content", "writing", `${slug}.md`);
  let content = "";
  try {
    content = await readFile(path, "utf-8");
  } catch {
    content = `# ${post.title}\n\n${post.excerpt}`;
  }

  return (
    <article className="mx-auto max-w-2xl px-6 py-16">
      <Link href="/#writing" className="text-sm text-accent hover:underline">
        ← Back to Writing
      </Link>
      <header className="mt-6">
        <h1 className="text-3xl font-bold text-[hsl(var(--color-text))]">{post.title}</h1>
        <time
          dateTime={post.date}
          className="mt-2 block text-sm text-[hsl(var(--color-text-muted))]"
        >
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
      </header>
      <div className="prose prose-invert mt-8 max-w-none prose-headings:text-[hsl(var(--color-text))] prose-p:text-[hsl(var(--color-text-muted))] prose-a:text-accent prose-strong:text-[hsl(var(--color-text))]">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </article>
  );
}
