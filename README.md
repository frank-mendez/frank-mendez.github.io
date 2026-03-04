# ReactJS Web Portfolio

This is a simple web portfolio built with ReactJS, Vite, Typescript and Tailwind CSS 4 using daisyUI 5. It is a static site that is hosted on
Github pages.

If you want to use this project, you can fork it and update the content of the `src/data.json` file with your own
information.

If you like this project, please give it a star. It will help me to continue working on it.

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

## 🚀 About Me

I'm Frank R. Mendez, a Frontend Developer with a decade of experience in the tech
industry. Throughout my career, I've worked with various technologies and
frameworks and have contributed to open source projects.

## Features

-   Light/dark mode toggle
-   Theme switcher
-   Responsive design using TailwindCSS
-   Pre-commit hooks with Husky
-   Linting with ESLint
-   Formatting with Prettier
-   Unit testing with React Testing Library and Vitest
-   React Router for navigation
-   Github Pages deployment
-   Up-to-date technologies
-   AI chat endpoint integration (`/api/chat`)
-   Contact form API integration (`/api/contact`)

## Run Locally

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
  npm install
```

Start the server

```bash
  npm run dev
```

## Running Tests

To run tests, run the following command

```bash
  npm run test
```

## Analytics Setup

Create a `.env` file in the project root and add your GA4 measurement ID:

```bash
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

Analytics auto-initializes only when `VITE_GA_MEASUREMENT_ID` is present.

## Backend API Integration

Chatbot and contact form submissions are handled by the Frank backend service:

-   Base URL: `https://frank-bot.vercel.app`
-   Chat endpoint: `POST /api/chat`
-   Contact endpoint: `POST /api/contact`

Frontend service files:

-   `src/services/chatService.ts`
-   `src/services/contactService.ts`

## Deployment

To deploy this project run

```bash
  npm run deploy
```

## Contributing

Contributions are always welcome!

-   Suggestions and feedback are always welcome! Please create an issue.
