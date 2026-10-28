import { skills, experience } from "../data";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-5 py-20">
      <SectionHeading eyebrow="Skills & experience" title="What I work with" />

      <div className="grid gap-12 md:grid-cols-2">
        <div className="space-y-8">
          {skills.map((g, i) => (
            <div key={i}>
              <h3 className="mb-3 font-display text-lg font-semibold">{g.group}</h3>
              <ul className="flex flex-wrap gap-2">
                {g.items.map((item, i) => (
                  <li
                    key={i}
                    className="rounded-lg border border-line bg-white px-3 py-1.5 text-sm font-medium text-ink"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div>
          <h3 className="mb-5 font-display text-lg font-semibold">Experience</h3>
          <ol className="relative space-y-8 border-l-2 border-accent/30 pl-6">
            {experience.map((t, i) => (
              <li key={i} className="relative">
                <span
                  className="absolute -left-8.25 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-accent bg-secondary"
                  aria-hidden="true"
                />
                <p className="text-sm font-medium text-accent">{t.period}</p>
                <h4 className="font-display text-lg font-semibold">{t.title}</h4>
                <p className="text-sm text-muted">{t.place}</p>
                <p className="mt-2 text-muted">{t.note}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
