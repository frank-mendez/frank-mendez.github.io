# SKILLS.md

## Purpose

This document defines the **skills, standards, and expectations for AI coding agents** (Claude, Copilot, GPT agents) working on this repository.

The primary goal is to **revamp the portfolio UI into a modern, professional developer portfolio** that reflects **senior software engineer / tech lead quality**.

The redesign must focus on:

-   Modern UI/UX
-   Professional presentation
-   Mobile and tablet responsiveness
-   High performance
-   Accessibility
-   Clean and maintainable code

The UI must be built using **shadcn/ui components and TailwindCSS**.

---

# Core Design Stack

Agents must use the following technologies:

### UI Framework

-   **React / Next.js (if applicable to repo)**

### Component Library

-   [https://ui.shadcn.com/](https://ui.shadcn.com/)

Use shadcn components such as:

-   Button
-   Card
-   Badge
-   Tabs
-   Sheet
-   Dialog
-   Dropdown Menu
-   Avatar
-   Navigation Menu
-   Separator
-   Input
-   Textarea
-   Tooltip

### Styling

-   **TailwindCSS**
-   Use Tailwind best practices
-   Avoid inline CSS
-   Avoid custom CSS unless necessary

### Icons

Use:

-   `lucide-react`

### Fonts

Recommended:

-   Inter
-   Geist
-   or modern sans-serif developer friendly font

---

# UI Design Principles

The UI should resemble a **modern developer portfolio used by senior engineers**.

Design inspiration:

-   Vercel
-   Linear
-   Raycast
-   shadcn/ui examples

The UI must be:

-   Minimal
-   Clean
-   Developer focused
-   Fast
-   Elegant

Avoid:

-   Overly flashy animations
-   Complex gradients
-   Visual clutter
-   Large hero images

Prefer:

-   Cards
-   Clean spacing
-   Good typography
-   Subtle hover effects

---

# Layout Requirements

## Responsive Design

The UI must work across:

### Mobile

320px+

### Tablet

768px+

### Desktop

1024px+

Use Tailwind responsive utilities.

Example:

```
grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
```

Navigation must convert to **mobile menu (sheet / drawer)**.

---

# Portfolio Sections

Agents should ensure the portfolio contains the following sections.

---

# 1. Hero Section

Must include:

-   Name
-   Title (Senior Software Engineer / Full Stack Developer)
-   Short description
-   Profile picture or avatar
-   Social links

Example CTA buttons:

-   View Projects
-   Book a Call

Use:

-   Button
-   Badge
-   Avatar

---

# 2. Projects Section

Display GitHub projects in a **card grid layout**.

Each card must include:

-   Project name
-   Description
-   Tech stack
-   GitHub link
-   Live demo link (if available)

Use:

-   Card
-   Badge
-   Button

Example layout:

```
grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6
```

---

# 3. Skills Section

Show technologies such as:

-   React
-   Next.js
-   TypeScript
-   Node.js
-   Python
-   TailwindCSS
-   Docker
-   AI / LLM tools

Use:

-   Badges
-   Skill cards
-   Icons

---

# 4. About Section

Short biography describing:

-   Engineering experience
-   Focus areas
-   Interests

Keep text concise.

---

# 5. Contact / Booking CTA

Add a **prominent call-to-action section**.

Purpose:

Allow visitors to **book a call for consulting, collaboration, or hiring**.

Possible integrations:

-   Calendly
-   Google Calendar
-   Custom contact form

CTA example:

**Book a Call**

Include:

-   Button
-   Contact email
-   Optional contact form

Use:

-   Card
-   Button
-   Input
-   Textarea

---

# Navigation

Create a sticky top navigation bar.

Include:

-   Logo / Name
-   Projects
-   Skills
-   About
-   Contact

Mobile:

Use **Sheet / Drawer menu**.

---

# Footer

Footer must include:

-   GitHub
-   LinkedIn
-   Email
-   Copyright

Optional:

-   "Built with Next.js + shadcn/ui"

---

# Accessibility

Ensure:

-   Proper semantic HTML
-   Accessible buttons
-   Keyboard navigation
-   Good color contrast

---

# Performance

Agents must:

-   Avoid large images
-   Use optimized assets
-   Avoid unnecessary dependencies
-   Keep bundle size small

---

# Animations

Allowed:

-   subtle hover transitions
-   small fade-in effects

Example:

```
transition-all hover:scale-105
```

Avoid:

-   heavy animation libraries

---

# Code Quality Standards

Agents must ensure:

-   Clean folder structure
-   Reusable components
-   Modular UI components

Example:

```
components/
  hero.tsx
  project-card.tsx
  navbar.tsx
  footer.tsx
```

Avoid:

-   large monolithic files

---

# Security Rules

Agents must **never**:

-   expose API keys
-   expose private environment variables
-   commit secrets

Use `.env` files when necessary.

---

# Deliverables

Agents modifying this repository should:

1. Revamp the entire UI using **shadcn/ui + TailwindCSS**
2. Ensure **mobile + tablet responsiveness**
3. Add a **Booking CTA**
4. Improve layout and typography
5. Keep the UI **professional and modern**

---

# Definition of Done

The UI is considered complete when:

-   All pages are redesigned
-   Mobile responsiveness works
-   Booking CTA is visible
-   Portfolio looks professional
-   UI uses shadcn components
-   Code remains clean and maintainable

---
