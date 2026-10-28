import { useEffect, useRef } from "react";

const FOCUSABLE =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export default function ProjectModal({ project, onClose }) {
  const panelRef = useRef(null);
  const closeRef = useRef(null);

  useEffect(() => {
    const previouslyFocused = document.activeElement;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab" || !panelRef.current) return;
      const items = panelRef.current.querySelectorAll(FOCUSABLE);
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = originalOverflow;
      previouslyFocused?.focus?.();
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-ink/60 p-0 sm:items-center sm:p-6"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        className="modal-panel flex max-h-[92vh] w-full max-w-2xl flex-col overflow-hidden rounded-t-2xl bg-primary shadow-2xl sm:rounded-2xl"
      >
        <div className="flex items-start justify-between gap-4 border-b border-line bg-secondary/50 px-6 py-5">
          <div>
            <p className="text-sm font-medium text-accent">
              {project.role} · {project.period}
            </p>
            <h3
              id="project-modal-title"
              className="font-display text-2xl font-bold"
            >
              {project.title}
            </h3>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="rounded-md p-2 text-ink transition-colors hover:bg-white/70"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        <div className="space-y-6 overflow-y-auto px-6 py-6">
          <section>
            <h4 className="mb-2 font-display text-sm font-semibold uppercase tracking-widest text-accent">
              Overview
            </h4>
            <p className="leading-relaxed text-muted">{project.overview}</p>
          </section>

          <section>
            <h4 className="mb-2 font-display text-sm font-semibold uppercase tracking-widest text-accent">
              Key features
            </h4>
            <ul className="list-disc space-y-1 pl-5 text-muted marker:text-accent">
              {project.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </section>

          <section>
            <h4 className="mb-2 font-display text-sm font-semibold uppercase tracking-widest text-accent">
              Challenge
            </h4>
            <p className="leading-relaxed text-muted">{project.challenges}</p>
          </section>

          <section>
            <h4 className="mb-2 font-display text-sm font-semibold uppercase tracking-widest text-accent">
              Results
            </h4>
            <ul className="space-y-1 text-ink">
              {project.results.map((r, i) => (
                <li key={i} className="flex gap-2">
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                    aria-hidden="true"
                  />
                  {r}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h4 className="mb-2 font-display text-sm font-semibold uppercase tracking-widest text-accent">
              Tech stack
            </h4>
            <ul className="flex flex-wrap gap-2">
              {project.stack.map((t, i) => (
                <li
                  key={i}
                  className="rounded-full bg-secondary px-3 py-1 text-sm font-medium text-ink"
                >
                  {t}
                </li>
              ))}
            </ul>
          </section>
        </div>

        {project.links?.length > 0 && (
          <div className="flex flex-wrap gap-3 border-t border-line bg-white px-6 py-4">
            {project.links.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className={
                  i === 0
                    ? "rounded-lg bg-ink px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-accent"
                    : "rounded-lg border border-ink/25 px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-secondary/50"
                }
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
