# Developer Portfolio

Single-page portfolio built with React, Vite, and Tailwind CSS v4.

## Run locally

```bash
npm install
npm run dev      # development server
npm run build    # production build into /dist
npm run preview  # preview the production build
```

Requires Node.js 18 or newer.

## Replace the placeholder content

- **All text and links:** edit `src/data.js` (profile, about, 4 projects, skills, timeline).
- **CV download:** place your file at `public/cv.pdf`.
- **Page title and description:** edit `index.html`.
- **Projects:** each project in `src/data.js` has a short `summary` (on the card) and `overview`,
  `features`, `challenges`, `results` (shown in the detail modal opened by "View details").
- **Education and certifications:** edit the `education` and `certifications` arrays in `src/data.js`.
- **Contact form:** it opens the visitor's email app. For real submissions, connect Formspree or EmailJS
  in `src/components/Contact.jsx`.

## Design tokens

Defined in `src/index.css` under `@theme`:

| Token | Value | Use |
|---|---|---|
| `primary` | `#F6FAF7` | Page background |
| `secondary` | `#E7EAA8` | Hero gradient, section backgrounds, badges (fill only, never text) |
| `accent` | `#3D6B3F` | Links, small accent text, markers (contrast 5.9:1 on primary) |
| `ink` | `#1F3A2E` | Main text, primary buttons, footer |
| `muted` | `#4A5D52` | Secondary text |
| `line` | `#DDE6DF` | Borders |

Fonts: Space Grotesk (headings) and Inter (body), loaded from Google Fonts in `index.html`.

## Deploy

Upload the `dist/` folder to Netlify, Vercel, Cloudflare Pages, or GitHub Pages.
