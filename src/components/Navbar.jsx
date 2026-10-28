import { useState } from "react";
import { profile } from "../data";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-primary/90 backdrop-blur">
      <nav
        className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4"
        aria-label="Main"
      >
        <a href="#top" className="font-display text-lg font-bold tracking-tight">
          {profile.name}
          <span className="text-accent">.</span>
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {links.map((l, i) => (
            <li key={i}>
              <a
                href={l.href}
                className="text-sm font-medium text-muted transition-colors hover:text-ink"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={profile.cvUrl}
              download
              className="rounded-lg bg-ink px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-accent"
            >
              Download CV
            </a>
          </li>
        </ul>

        <button
          type="button"
          className="rounded-md p-2 text-ink md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      {open && (
        <ul className="border-t border-line bg-primary px-5 pb-5 pt-2 md:hidden">
          {links.map((l, i) => (
            <li key={i}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-base font-medium text-ink"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href={profile.cvUrl}
              download
              className="block rounded-lg bg-ink px-4 py-3 text-center font-semibold text-primary"
            >
              Download CV
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
