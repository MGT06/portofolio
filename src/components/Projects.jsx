import { useCallback, useState } from "react";
import { projects } from "../data";
import SectionHeading from "./SectionHeading";
import ProjectModal from "./ProjectModal";

function ProjectCard({ project, index, onOpen }) {
  return (
    <article className="flex flex-col rounded-2xl border border-line bg-white p-6 transition-shadow hover:shadow-lg">
      <div className="flex items-center justify-between">
        <span className="font-display text-3xl font-bold text-accent/40">0{index + 1}</span>
        <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-ink">
          {project.role}
        </span>
      </div>

      <h3 className="mt-4 font-display text-xl font-semibold">{project.title}</h3>
      <p className="mt-2 flex-1 text-muted">{project.summary}</p>

      <ul className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((t, i) => (
          <li key={i} className="rounded-full bg-primary px-3 py-1 text-xs font-medium text-muted">
            {t}
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={() => onOpen(project)}
        aria-label={`View details for ${project.title}`}
        className="mt-6 inline-flex w-fit items-center gap-2 rounded-lg bg-ink px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-accent"
      >
        View details
        <span aria-hidden="true">→</span>
      </button>
    </article>
  );
}

export default function Projects() {
  const [active, setActive] = useState(null);
  const close = useCallback(() => setActive(null), []);

  return (
    <section id="projects" className="bg-secondary/25">
      <div className="mx-auto max-w-5xl px-5 py-20">
        <SectionHeading eyebrow="Featured work" title="Selected projects" />
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <ProjectCard key={i} project={p} index={i} onOpen={setActive} />
          ))}
        </div>
      </div>

      {active && <ProjectModal project={active} onClose={close} />}
    </section>
  );
}
