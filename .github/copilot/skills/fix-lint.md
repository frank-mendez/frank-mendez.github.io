# Fix Lint Issues

Analyze the entire repository and fix all linting issues while preserving the current functionality of the application.

The goal is to make the codebase fully compliant with the configured linter (ESLint, TypeScript ESLint, Prettier, or other configured linters).

Do not introduce breaking changes.

---

## Responsibilities

The agent should:

-   Identify all lint warnings and errors
-   Automatically refactor code to satisfy lint rules
-   Maintain readability and maintainability
-   Preserve existing behavior
-   Follow the repository coding standards

---

## Step 1 — Detect Lint Configuration

First identify lint configuration in the repository.

Look for files such as:

-   `.eslintrc`
-   `.eslintrc.json`
-   `.eslintrc.js`
-   `eslint.config.js`
-   `.prettierrc`
-   `prettier.config.js`
-   `tsconfig.json`
-   `package.json` lint scripts

Respect the configured rules.

---

## Step 2 — Fix Common Lint Errors

Resolve common lint problems including:

### Unused Variables

Remove unused variables, parameters, and imports.

Example:

Before

```

const unused = 10

```

After

```

(remove the variable)

```

---

### Unused Imports

Remove unused imports from files.

---

### Missing Dependency in Hooks (React)

Fix React hook dependency issues.

Example:

Before

```

useEffect(() => {
fetchData()
}, [])

```

After

```

useEffect(() => {
fetchData()
}, [fetchData])

```

---

### Prefer Const

Replace `let` with `const` when variables are not reassigned.

Before

```

let name = "Frank"

```

After

```

const name = "Frank"

```

---

### Formatting Issues

Ensure consistent formatting:

-   indentation
-   line length
-   spacing
-   trailing commas
-   semicolons (depending on config)

Follow the project's Prettier configuration.

---

### Console Statements

Remove unnecessary console logs except when clearly required for debugging or logging.

Example:

Before

```

console.log("debug")

```

After

```

(remove or replace with logger)

```

---

### Equality Rules

Replace `==` with strict equality.

Before

```

if (a == b)

```

After

```

if (a === b)

```

---

### Arrow Function Improvements

Prefer arrow functions when required by lint rules.

---

### Simplify Code

Refactor complex or verbose patterns flagged by lint rules.

---

## Step 3 — Improve Code Quality

While fixing lint issues:

-   simplify logic where possible
-   remove dead code
-   improve naming clarity
-   ensure consistency across files

Avoid large refactors unless necessary.

---

## Step 4 — Maintain Project Integrity

The agent must ensure:

-   application behavior does not change
-   tests (if present) continue to pass
-   no breaking API changes occur

---

## Security Rules

Never:

-   expose secrets
-   commit environment variables
-   hardcode credentials

---

## Deliverables

The agent should:

1. Fix all lint errors
2. Fix lint warnings when safe
3. Maintain clean readable code
4. Follow project lint configuration

---

## Definition of Done

The repository should pass lint checks successfully.

Example:

```

npm run lint

```

or

```

pnpm lint

```

or

```

yarn lint

```

should return **zero lint errors**.

```

---
```
