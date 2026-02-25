# AGENTS.md

## Cursor Cloud specific instructions

This is a **Next.js 12** (Pages Router) frontend-only portfolio site. No databases, Docker, or external services needed.

### Prerequisites

- **Node.js 18** (Next.js 12.3.1 is incompatible with Node 22+; use `nvm use 18`)
- **Yarn** (classic v1) — lockfile is `yarn.lock`

### Common commands

Standard scripts are in `package.json`:

- `yarn dev` — dev server on port 3000
- `yarn build` — production build
- `yarn lint` — ESLint via `next lint`
- `yarn start` — production server (requires `yarn build` first)

### Caveats

- Components live in `pages/components/` (not a top-level `components/` dir), which means they're also routable as pages (e.g. `/components/About`). This is intentional in this codebase.
- The `embla-carousel` peer dependency warnings during `yarn install` are harmless — the app works fine without the base `embla-carousel` package explicitly installed.
- No automated test suite exists in this project; validation is done via lint + build + manual testing.
- The API route at `/api/hello` returns `{"name":"John Doe"}` — useful as a quick health check.
