# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev        # Start local dev server
pnpm build      # TypeScript check + Vite production build
pnpm lint       # ESLint (max-warnings 0 — must be clean)
pnpm test       # Run all tests with Vitest
pnpm deploy     # Build + deploy to GitHub Pages via gh-pages
```

Run a single test file:

```bash
pnpm vitest run src/App.test.tsx
```

## Architecture

This is a static React + TypeScript portfolio site deployed to GitHub Pages.

**Navigation** uses a single `Home` page with native section anchors (`#work`, `#approach`, `#experience`, `#contact`). `AppLayout` maps legacy hash routes (`#/about`, `#/projects`, `#/contact`) to these sections. GitHub Pages serves the root document; no React Router or History API routing is used.

**Styling** is a layered system:

- **Tailwind CSS 4** via `@tailwindcss/vite` plugin (no `tailwind.config.js` — config is inline)
- **daisyUI 5** for a fixed light theme with paper/forest colors; `index.html` sets `data-theme="light"` before rendering
- **shadcn/ui** component pattern in `src/components/ui/` (Button, Card, Badge, Sheet, etc.) using Radix UI primitives + `class-variance-authority` + `clsx`/`tailwind-merge`
- Global styles and hero background animations live in `src/styles/`

**Pages** live in `src/pages/<name>/`. `Home` composes the landing sections using shared `PortfolioElements`. `Projects` is retained in an expandable archive and `Contact` in a Radix sheet. The chatbot and back-to-top control remain in `AppLayout`.

**Services** (`src/services/`) are thin API clients:

- `chatService.ts` / `contactService.ts` — POST to `https://frank-bot.vercel.app/api/chat` and `/api/contact`
- `analyticsService.ts` — wraps GA4, only initializes when `VITE_GA_MEASUREMENT_ID` env var is set
- `seoService.ts` — sets document title/meta tags per page
- `intentService.ts` — intent detection for the chatbot

**Testing** uses Vitest + React Testing Library with `happy-dom`. Setup file is `tests/setup.ts`. Test files live alongside source files (`*.test.tsx`) or in `tests/`.

**Pre-commit hooks** are scaffolded with Husky; the current pre-commit file has no commands. Run lint, tests, and build before committing.

## Environment

Create a `.env` file for local analytics:

```
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

Analytics silently skips initialization if this variable is absent.
