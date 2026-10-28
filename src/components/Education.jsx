import { education, certifications } from "../data";
import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <section id="education" className="border-y border-line bg-white">
      <div className="mx-auto max-w-5xl px-5 py-20">
        <SectionHeading eyebrow="Education" title="Where I studied" />

        <div className="grid gap-8 md:grid-cols-[1.6fr_1fr]">
          <ol className="space-y-5">
            {education.map((e, i) => (
              <li key={i} className="rounded-2xl border border-line bg-primary p-6">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-ink">
                    {e.period}
                  </span>
                  {e.gpa && <span className="text-sm font-medium text-accent">{e.gpa}</span>}
                </div>
                <h3 className="mt-3 font-display text-xl font-semibold">{e.degree}</h3>
                <p className="text-muted">{e.school}</p>
                <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-muted marker:text-accent">
                  {e.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>

          <div className="h-fit rounded-2xl bg-secondary/50 p-6">
            <h3 className="font-display text-lg font-semibold">Certifications</h3>
            <ul className="mt-4 space-y-4">
              {certifications.map((c, i) => (
                <li key={i} className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-medium">{c.name}</p>
                    <p className="text-sm text-muted">{c.issuer}</p>
                  </div>
                  <span className="text-sm font-semibold text-accent">{c.year}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
