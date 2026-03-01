# Copilot Instructions

## Project Overview

This is a static artist portfolio website for **Duc Nguyen**, built with **Next.js** (App Router, static export), **TypeScript**, and **Tailwind CSS**.

## Project Structure

```
src/
├── app/          # Next.js App Router pages (about, work, contact, etc.)
├── components/   # Reusable UI components (Navbar, Footer, Hero, etc.)
└── lib/          # Core utilities and shared configuration
    ├── site-config.ts   # Centralised site content and metadata
    └── utils.ts         # Common helper functions (cn, etc.)
```

## Coding Guidelines

### DRY — Don't Repeat Yourself

- **If anything is reusable, make it a component.** Extract repeated UI patterns into `src/components/`.
- **Shared data belongs in `src/lib/site-config.ts`.** Site name, social links, navigation items, and other content used across pages must be defined once.
- **Common utilities go in `src/lib/`.** Helper functions like `cn()` for class merging, formatters, or constants should live in `src/lib/utils.ts` or their own module under `src/lib/`.

### Components

- Place all reusable components in `src/components/` with kebab-case file names (e.g. `project-card.tsx`).
- Export every component from `src/components/index.ts` so consumers can import from `@/components`.
- Use TypeScript props types defined at the top of each component file.
- Keep components focused — one responsibility per component.

### Styling

- Use **Tailwind CSS** utility classes exclusively; avoid custom CSS except in `globals.css`.
- Use the `cn()` helper from `@/lib/utils` to conditionally merge class names.
- Maintain the existing design language: white background, neutral colour palette, system sans-serif font.

### Pages

- Each route lives in `src/app/<page-name>/page.tsx`.
- All pages must be compatible with `output: "export"` (no server-side APIs or dynamic routes without `generateStaticParams`).
- Reuse `Navbar` and `Footer` components on every page for consistent navigation.
- Add `metadata` exports for SEO on every page, referencing `siteConfig` for the site name.

### TypeScript

- Use strict TypeScript — avoid `any`.
- Define types and interfaces close to where they are used; share them via `src/lib/` if used across files.

### General

- Use the `@/*` import alias (maps to `src/*`) for all internal imports.
- Do **not** add new dependencies unless absolutely necessary.
- After any change, confirm `npm run build` and `npm run lint` pass.
