# Copilot Instructions

## Project overview
- Static portfolio site built with React + Vite + TypeScript, styled with TailwindCSS + daisyUI.
- Pages are route-level components under src/pages and are wrapped by src/layout/AppLayout.tsx (Navbar + Footer).
- Assets live in public/images and are referenced with absolute paths (e.g., /images/frank.jpg).

## Architecture & routing
- App root in src/App.tsx renders React Router’s RouterProvider.
- Routing is defined in src/routes/router.tsx using createHashRouter (required for GitHub Pages; avoid BrowserRouter unless deployment changes).
- Each route maps directly to a page component (Home, About, Contact, Projects).

## Styling conventions
- Tailwind is configured in tailwind.config.ts with daisyUI and typography plugins.
- Theme switching uses daisyUI “theme-controller” inputs (see src/components/ThemeSwitcher.tsx and ThemeSelector.tsx).
- Reusable font class font-dm-sans is defined in src/styles/index.css and used across components.

## Components & UI patterns
- Shared layout elements live in src/components (Navbar, Footer, WorkExperience).
- Navigation uses react-router-dom Link for internal routes and anchor tags for external URLs.
- UI components heavily use daisyUI utility classes (e.g., hero, card, timeline).

## Data/content
- Content is mostly hardcoded within page components; no active data layer.
- src/data/data.ts exists but is currently empty; prefer updating page content directly unless a data layer is introduced.

## Tests
- Vitest + Testing Library with happy-dom (see vitest.config.ts and tests/setup.ts).
- Example tests in src/App.test.tsx and src/routes/router.test.tsx.

## Common scripts
- Dev server: npm run dev
- Build: npm run build (tsc -b then vite build)
- Tests: npm run test
- Deploy to GitHub Pages: npm run deploy (uses gh-pages on dist)

## Integration points
- Material UI icons are used for social links and buttons (@mui/icons-material).
- GitHub Pages hosting drives the hash-based routing and deploy workflow.
