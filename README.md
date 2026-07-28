# ReactJS Web Portfolio

A modern developer portfolio built with React, Vite, TypeScript, Tailwind CSS 4, and daisyUI 5. Styled with shadcn/ui components and lucide-react icons. Hosted as a static site on GitHub Pages.

If you like this project, please give it a star.

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

## 🚀 About Me

I'm Frank R. Mendez, a Frontend Developer with a decade of experience in the tech
industry. Throughout my career, I've worked with various technologies and
frameworks and have contributed to open source projects.

## Features

- Light/dark mode toggle with daisyUI theme controller
- Animated hero backgrounds (Retro Grid for dark, Underwater for light)
- shadcn/ui component system (Card, Button, Badge, Sheet, Input, Textarea, Label, Separator)
- lucide-react icons throughout
- Inter font + DM Sans utility class
- Mobile-responsive sticky navbar with slide-in Sheet drawer
- Book a Call CTA with Cal.com integration
- Responsive design using TailwindCSS
- Pre-commit hooks with Husky
- Linting with ESLint
- Formatting with Prettier
- Unit testing with React Testing Library and Vitest
- React Router (hash-based) for GitHub Pages navigation
- GitHub Pages deployment
- AI chat endpoint integration (`/api/chat`)
- Contact form API integration (`/api/contact`)

## Tech Stack

| Layer         | Technology                                                              |
| ------------- | ----------------------------------------------------------------------- |
| Framework     | React 18 + Vite 5 + TypeScript 5                                        |
| Styling       | Tailwind CSS 4, daisyUI 5, shadcn/ui components                         |
| Icons         | lucide-react                                                            |
| UI Primitives | @radix-ui/react-dialog, @radix-ui/react-separator, @radix-ui/react-slot |
| Utilities     | clsx, tailwind-merge, class-variance-authority                          |
| Routing       | React Router v8 (hash-based for GitHub Pages)                           |
| Testing       | Vitest + React Testing Library + happy-dom                              |
| Deployment    | GitHub Pages via gh-pages                                               |

## Project Structure

```
src/
├── components/
│   ├── ui/           # shadcn/ui components (Button, Card, Badge, etc.)
│   ├── Navbar.tsx    # Sticky header with mobile Sheet drawer
│   ├── Footer.tsx    # 3-column footer with social links
│   ├── WorkExperience.tsx
│   ├── SkillSection.tsx
│   ├── ProjectCard.tsx
│   └── FrankChatBot.tsx
├── pages/
│   ├── home/         # Hero with animated backgrounds + skills
│   ├── about/        # Bio, stats, work experience
│   ├── projects/     # Project cards grid
│   └── contact/      # Contact form + Book a Call CTA
├── services/         # chatService, contactService, analyticsService
├── routes/           # Hash-based router
├── layout/           # AppLayout wrapper
└── styles/           # Tailwind config + hero background CSS
```

## Run Locally

Requires Node.js 22.13 or newer. pnpm 11.17 is pinned in `package.json`; enable Corepack once before installing:

```bash
corepack enable
```

Clone the project

```bash
  git clone git@github.com:frank-mendez/frank-mendez.github.io.git
```

Go to the project directory

```bash
  cd frank-mendez.github.io
```

Install dependencies

```bash
  pnpm install
```

Start the server

```bash
  pnpm dev
```

## Running Tests

To run tests, run the following command

```bash
  pnpm test
```

## Analytics Setup

Create a `.env` file in the project root and add your GA4 measurement ID:

```bash
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

Analytics auto-initializes only when `VITE_GA_MEASUREMENT_ID` is present.

## Backend API Integration

Chatbot and contact form submissions are handled by the Frank backend service:

- Base URL: `https://frank-bot.vercel.app`
- Chat endpoint: `POST /api/chat`
- Contact endpoint: `POST /api/contact`

Frontend service files:

- `src/services/chatService.ts`
- `src/services/contactService.ts`

## Deployment

To deploy this project run

```bash
  pnpm deploy
```

## Contributing

Contributions are always welcome!

- Suggestions and feedback are always welcome! Please create an issue.
