import { useState } from "react";
import { profile } from "../data";

export default function Hero() {
  const [photoFailed, setPhotoFailed] = useState(false);
  const showPhoto = Boolean(profile.photo) && !photoFailed;
  console.log(profile.photo)
  const initials = profile.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2);

  return (
    <section id="top" className="bg-linear-to-b from-secondary/60 via-secondary/20 to-primary">
      <div className="mx-auto grid max-w-5xl items-center gap-10 px-5 py-16 md:grid-cols-[1.4fr_1fr] md:py-24">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white/70 px-3 py-1 text-sm font-medium text-ink">
            <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
            {profile.availability}
          </p>

          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Hi, I'm {profile.name}.
            <span className="block text-accent">{profile.role}.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{profile.tagline}</p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-lg bg-ink px-6 py-3 font-semibold text-primary transition-colors hover:bg-accent"
            >
              View Projects
            </a>
            <a
              href={profile.cvUrl}
              download
              className="rounded-lg border border-ink/25 bg-white/70 px-6 py-3 font-semibold text-ink transition-colors hover:bg-white"
            >
              Download CV
            </a>
          </div>

          <div className="mt-8 flex gap-5 text-sm font-medium">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="text-accent underline-offset-4 hover:underline"
            >
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-accent underline-offset-4 hover:underline"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="mx-auto w-full max-w-xs">
          <div className="relative">
            <div
              className="absolute -right-3 -top-3 h-full w-full rounded-3xl border-2 border-accent/40"
              aria-hidden="true"
            />
            {showPhoto ? (
              <img
                src={profile.photo}
                alt={`Portrait of ${profile.name}`}
                width="400"
                height="400"
                onError={() => setPhotoFailed(true)}
                className="relative aspect-square w-full rounded-3xl bg-secondary object-cover object-center shadow-sm"
              />
            ) : (
              <div
                className="relative flex aspect-square items-center justify-center rounded-3xl bg-secondary font-display text-8xl font-bold text-ink shadow-sm"
                aria-hidden="true"
              >
                {initials}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}