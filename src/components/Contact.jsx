import { useState } from "react";
import { profile } from "../data";
import SectionHeading from "./SectionHeading";

const inputClass =
  "w-full rounded-lg border border-line bg-white px-4 py-3 text-ink outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  // Opens the visitor's email app with the message pre-filled.
  // Swap for Formspree / EmailJS / your own API when you're ready.
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("a")
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="bg-secondary/25">
      <div className="mx-auto max-w-5xl px-5 py-20">
        <SectionHeading eyebrow="Contact" title="Let's work together" />

        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="text-lg leading-relaxed text-muted">
              I'm currently {profile.availability.toLowerCase()}. Whether you have a role in mind or
              a project to discuss, I'd love to hear from you.
            </p>
            <ul className="mt-6 space-y-3 font-medium">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="text-accent underline-offset-4 hover:underline"
                >
                  {profile.email}
                </a>
              </li>
              <li>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-accent underline-offset-4 hover:underline"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-accent underline-offset-4 hover:underline"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="mb-1 block text-sm font-medium">
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                value={form.name}
                onChange={update}
                className={inputClass}
                autoComplete="name"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={update}
                className={inputClass}
                autoComplete="email"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-1 block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                value={form.message}
                onChange={update}
                className={inputClass}
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-ink px-6 py-3 font-semibold text-primary transition-colors hover:bg-accent sm:w-auto"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
