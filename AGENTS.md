# MicroSchool-LP

A Next.js (App Router) frontend prototype for a home-first weekly lesson planner.
Pages are rendered from typed mock data in `src/lib/mock-data.ts`; there is no
backend, database, auth, or AI wiring yet (see `docs/project-plan.md` for the roadmap).

## Cursor Cloud specific instructions

- Stack: Next.js 16, React 19, TypeScript, Tailwind CSS v4. Package manager is **npm** (`package-lock.json`); do not switch to pnpm/yarn.
- Standard commands live in `package.json` scripts:
  - `npm run dev` — start the dev server on http://localhost:3000
  - `npm run lint` — runs `next typegen && tsc --noEmit` (type-check only; there is **no ESLint** config despite the script name).
  - `npm run build` / `npm run start` — production build / serve.
- There are **no automated tests** and no test runner configured; "testing" is type-check (`npm run lint`), `npm run build`, and manual browser checks.
- No environment variables are required today — all pages use mock data, so the app runs with zero config.
- All routes are statically prerendered (`/`, `/profile`, `/curriculum`, `/baseline`, `/planner`, `/calendar`). Forms/buttons are presentational mock UI and are not yet wired to client state.
