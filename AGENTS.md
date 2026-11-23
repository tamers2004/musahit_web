# AGENTS.md

## Project
Hebrew RTL marketing site for אייל פתרונות תוכנה (Eyal Software Solutions), a from-scratch redesign.
`plan.md` is the authoritative spec; the original site (eyalcomp.co.il) is the content source of truth.
Do NOT invent product features, stats, clients, certifications, testimonials, or contact details.

## Commands
- `npm run dev` — Vite dev server
- `npm run build` — `tsc -b && vite build`; use this as the real typecheck + build
- `npm run lint` — only `tsc --noEmit`; root tsconfig is solution-style (`files: []`), so this does NOT typecheck `src`. Verify types with `npm run build` or `npx tsc -b`.
- `npm run preview` — serve built `dist`
- No test runner is configured; verify via build + manual route checks.

## Current state
- Full app is implemented: `src/App.tsx` defines all routes; `src/pages/*` render pages; `src/components/{layout,navigation,footer,sections,ui,forms}` hold shared UI; `src/three/*` holds the lazy 3D hero.
- Data lives in `src/data/*` (`site`, `products`, `modules`, `services`, `news`, `clients`, `about`). `getProduct`/`getModule`/`getNewsItem` look up by slug.
- No backend. `ContactForm` validates in the browser only and explicitly does not send or store data.
- `.gitignore` exists; the repo still has no commits. Do not commit `node_modules`/`dist`.
- Route aliases for original URLs (`/musachit`, `/buying-tests`, `/modolim`, `/shinoha`, etc.) redirect to the new routes in `App.tsx`.

## Conventions
- TS is strict with `noUnusedLocals`/`noUnusedParameters`; unused imports/params break the build.
- Path alias `@/*` -> `src/*` (configured in both Vite and tsconfig).
- Reuse Tailwind design tokens/classes from `src/index.css` and `tailwind.config.js`: `ink`/`accent` colors, Heebo `font-sans`, `.container-page`, `.btn-primary`, `.btn-ghost`, `.card`, `.prose-he`, `.gradient-text`, `.glass`. Avoid ad-hoc styles.
- Keep all copy Hebrew RTL (`index.html` sets `lang="he" dir="rtl"`); handle Latin product names/phone/email inside RTL correctly.
- Keep company/product content in `src/data/*`; do not duplicate strings across components.
- Routes/pages are defined in `plan.md` §5; every nav item must resolve to a real route (no dead links/buttons).
