import { getResume } from "@/content/resume";

/**
 * Print-friendly resume page. Open /resume and use Print (Ctrl+P / Cmd+P)
 * to save as PDF, or use a headless browser script.
 */
export const metadata = {
  title: "Resume | David Herrera Almeraya",
  description: "Resume of David Herrera Almeraya — Senior Full-Stack Engineer",
  robots: { index: false, follow: true },
};

export default function ResumePage() {
  const data = getResume("en");
  const { contact, hero, about, experience } = data;

  return (
    <div className="min-h-screen bg-white px-8 py-12 text-black print:px-6 print:py-8">
      <header className="border-b border-gray-300 pb-4">
        <h1 className="text-2xl font-bold">{hero.name}</h1>
        <p className="text-lg text-gray-700">{hero.title}</p>
        <p className="mt-2 text-sm text-gray-600">
          {contact.location} · {contact.email} · {contact.phone}
        </p>
        <p className="text-sm text-gray-600">
          <a href={contact.linkedin} className="underline">
            LinkedIn
          </a>
          {" · "}
          <a href={contact.github} className="underline">
            GitHub
          </a>
        </p>
      </header>

      <section className="mt-6">
        <h2 className="text-lg font-bold uppercase tracking-wide text-gray-900">About</h2>
        <p className="mt-1 text-sm leading-relaxed text-gray-700">{about.paragraph}</p>
        <ul className="mt-2 list-disc list-inside space-y-0.5 text-sm text-gray-700">
          {about.bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </section>

      <section className="mt-6">
        <h2 className="text-lg font-bold uppercase tracking-wide text-gray-900">
          Experience
        </h2>
        {experience.map((job) => (
          <div key={`${job.company}-${job.start}`} className="mt-4">
            <div className="flex flex-wrap justify-between gap-2">
              <h3 className="font-semibold text-gray-900">{job.role}</h3>
              <span className="text-sm text-gray-600">
                {job.start} — {job.end}
              </span>
            </div>
            <p className="text-sm font-medium text-gray-700">
              {job.company} · {job.location}
            </p>
            <ul className="mt-1 list-disc list-inside space-y-0.5 text-sm text-gray-700">
              {job.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <p className="mt-8 text-right text-xs text-gray-500">
        Last updated: {new Date().toLocaleDateString("en-US")}
      </p>
    </div>
  );
}
