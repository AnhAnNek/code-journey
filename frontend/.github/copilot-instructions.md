# Copilot Instructions (Next.js App Router)

## Core Principles

- Clean, readable, maintainable code
- Functional components + hooks only
- Single responsibility per component
- Avoid duplication
- Do NOT break UI or existing behavior

---

## Architecture

- Routing → `src/app/` (Next.js App Router)
- UI → `components/` (render only)
- Feature logic → `features/`
- Shared logic → `utils/`
- API layer → `features/*/api` or `lib/`
- External setup → `lib/`

---

## Folder Structure

```txt
src/
  app/                 # Next.js routing (page.tsx, layout.tsx)
  components/          # reusable UI (atoms, molecules, organisms, templates)
  features/            # domain-based logic (blog/, product/, auth/, ...)
    <feature>/
      api/
      components/
      hooks/
      types/
      utils/
  lib/                 # axios, config, shared setup
  utils/               # global helpers (pure functions)
  types/               # shared types
  constants/           # global constants
  styles/              # optional (global styles)
```

---

## Routing Rules (CRITICAL)

- Use **App Router only**
- All routes must be inside `src/app/`
- Do NOT use `src/pages/` (remove if exists)

Example:

```txt
src/app/
  layout.tsx
  page.tsx
  blog/
    page.tsx
    [slug]/
      page.tsx
```

---

## API Rules

- Do NOT use `services/`

- API must be placed in:
  - `features/<feature>/api/` (preferred)
  - or `lib/` (shared APIs)

- API layer:
  - Only handle HTTP
  - No UI logic

---

## Data Flow Rules

- Data fetching:
  - in **Server Components (app/)** OR
  - in **hooks (features/\*/hooks)**

- Components:
  - MUST be presentational only
  - MUST NOT call API directly

---

## Types Rules

- `features/*/types` → feature-specific types
- `types/` → shared global types
- Do NOT mix API types and UI types
- Keep local types close to usage

---

## Components (Atomic Design)

- atoms → basic UI (Button, Input)
- molecules → small combos (SearchBox, Card)
- organisms → complex UI (Header, ProductSection)
- templates → layouts

➡️ Prefer composition over duplication

---

## Hooks

- Place in `features/<feature>/hooks`
- Used for:
  - data fetching
  - state logic

- Keep reusable and isolated

---

## Utils

- Pure functions only
- No side effects
- No API calls

---

## Lib

- axios instance
- interceptors
- config
- shared setup

---

## Styling

- Prefer Tailwind CSS + shadcn/ui (recommended)
- If SCSS is used:
  - follow BEM
  - each component has its own SCSS

- Avoid inline styles

---

## Naming

- components → PascalCase
- folders → kebab-case
- utils/api → camelCase or lowercase
- entry files → `index.tsx` or `index.ts`

---

## Import Rules (CRITICAL)

Use alias:

```ts
@/* → src/*
```

Correct:

```ts
import { Button } from '@/components/ui/Button';
```

Forbidden:

```ts
import Button from '../../../components/Button';
```

---

## Code Rules

- No API calls inside UI components
- No mixing UI + business logic
- Keep files small and reusable
- Prefer Server Components when possible

---

## Remove Legacy Structure

- Remove `src/pages/`
- Remove `routes/`
- Remove `services/` if duplicated with API layer
- Remove unused folders/files after verification

---

## Scripts

```bash
npm install
npm run dev
npm run build
npm start
```
