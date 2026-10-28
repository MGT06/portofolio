import { about } from "../data";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-5 py-20">
      <SectionHeading eyebrow="About" title="A bit about me" />

      <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
        <div className="space-y-5 text-lg leading-relaxed text-muted">
          {about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <dl className="grid grid-cols-3 gap-3 md:grid-cols-1">
          {about.stats.map((s, i) => (
            <div key={i} className="rounded-xl border border-line bg-white p-5">
              <dd className="font-display text-3xl font-bold text-accent">{s.value}</dd>
              <dt className="mt-1 text-sm text-muted">{s.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
