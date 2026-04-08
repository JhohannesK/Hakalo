# AGENTS.md

## Cursor Cloud specific instructions

This is a **Next.js 16** marketing website ("Hakalo") using React 19, Tailwind CSS v4, and TypeScript 5.

### Quick reference

- **Package manager:** Yarn v1 (`yarn.lock` present)
- **Dev server:** `yarn dev` → http://localhost:3000
- **Lint:** `yarn lint` (runs `eslint .` with flat config)
- **Build:** `yarn build`
- **API test route:** http://localhost:3000/api/hello returns `{"name":"John Doe"}`

### Caveats

- No database, Docker, or environment variables required — fully self-contained frontend app.
- `embla-carousel-autoplay` and `embla-carousel-class-names` have unmet peer dependency warnings for `embla-carousel@8.6.0` — these are non-blocking (carousel packages are installed but not imported anywhere).
- The masthead references `/vid.mp4` which is not in the repo; the page renders fine without it (no background video).
- Components are exposed as pages under `/components/*` (e.g. `/components/About`) due to Next.js pages-router file structure — this is intentional in the current codebase layout.
- Tailwind v4 uses CSS-based config in `styles/globals.css` via `@theme` block (no `tailwind.config.js`).
- ESLint uses flat config (`eslint.config.mjs`), not `.eslintrc.json`.
- `next.config.mjs` (ES module) is used instead of `next.config.js`.
