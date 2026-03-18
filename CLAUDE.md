# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start local dev server
npm run build      # TypeScript check + Vite production build
npm run lint       # ESLint (max-warnings 0 — must be clean)
npm run test       # Run all tests with Vitest
npm run deploy     # Build + deploy to GitHub Pages via gh-pages
```

Run a single test file:
```bash
npx vitest run src/components/Navbar.test.tsx
```

## Architecture

This is a static React + TypeScript portfolio site deployed to GitHub Pages.

**Routing** uses `createHashRouter` (not `createBrowserRouter`) because GitHub Pages does not support the History API. All routes are hash-based (`/#/about`, `/#/projects`, etc.). The four routes are: `/` (Home), `/about`, `/contact`, `/projects`.

**Styling** is a layered system:
- **Tailwind CSS 4** via `@tailwindcss/vite` plugin (no `tailwind.config.js` — config is inline)
- **daisyUI 5** for theme system, including light/dark mode toggling via a theme controller
- **shadcn/ui** component pattern in `src/components/ui/` (Button, Card, Badge, Sheet, etc.) using Radix UI primitives + `class-variance-authority` + `clsx`/`tailwind-merge`
- Global styles and hero background animations live in `src/styles/`

**Pages** each live in `src/pages/<name>/` and are standalone — they import shared components from `src/components/`.

**Services** (`src/services/`) are thin API clients:
- `chatService.ts` / `contactService.ts` — POST to `https://frank-bot.vercel.app/api/chat` and `/api/contact`
- `analyticsService.ts` — wraps GA4, only initializes when `VITE_GA_MEASUREMENT_ID` env var is set
- `seoService.ts` — sets document title/meta tags per page
- `intentService.ts` — intent detection for the chatbot

**Testing** uses Vitest + React Testing Library with `happy-dom`. Setup file is `tests/setup.ts`. Test files live alongside source files (`*.test.tsx`) or in `tests/`.

**Pre-commit hooks** (Husky) run lint and format checks — keep code ESLint-clean before committing.

## Environment

Create a `.env` file for local analytics:
```
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```
Analytics silently skips initialization if this variable is absent.
