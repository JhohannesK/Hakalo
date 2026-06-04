# AGENTS.md

## Cursor Cloud specific instructions

This is a **Next.js 12** static/marketing website ("Hakalo") using React 18, Tailwind CSS, and TypeScript.

### Quick reference

- **Package manager:** Yarn v1 (`yarn.lock` present)
- **Dev server:** `yarn dev` → http://localhost:3000
- **Lint:** `yarn lint`
- **Build:** `yarn build`
- **API test route:** http://localhost:3000/api/hello returns `{"name":"John Doe"}`

### Caveats

- No database, Docker, or environment variables required — fully self-contained frontend app.
- Node.js 22 works fine despite the project targeting Next.js 12 (deprecation warnings about `punycode` are harmless).
- `embla-carousel-autoplay` and `embla-carousel-class-names` have unmet peer dependency warnings for `embla-carousel@7.0.3` — these are non-blocking.
- The masthead references `/vid.mp4` which is not in the repo; the page renders fine without it (no background video).
- Components are exposed as pages under `/components/*` (e.g. `/components/About`) due to Next.js pages-router file structure — this is intentional in the current codebase layout.
