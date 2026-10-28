import { profile } from "../data";

export default function Footer() {
  return (
    <footer className="bg-ink text-primary/80">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-5 py-8 text-sm sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <div className="flex gap-5">
          <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-secondary">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-secondary">
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`} className="hover:text-secondary">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
