---
mode: agent
description: Refactor existing code for improved readability, maintainability, or performance.
---

# Refactor

Refactor the selected code or the specified file/component in this Next.js project.

## Guidelines

- Preserve existing behaviour exactly — do not change functionality.
- Improve code structure, naming, and readability.
- Extract repeated logic into reusable hooks, utilities, or components under `src/components/` or `src/lib/`.
- Apply consistent TypeScript types and remove any `any` casts.
- Follow the existing conventions in this codebase (Tailwind CSS, App Router, static export).
- Follow DRY principles: if anything is reusable, make it a component.
- Do **not** add new dependencies unless absolutely necessary.
- After refactoring, confirm the build still passes with `npm run build`.

## Context

${input:What should be refactored? Provide a file path, component name, or describe the area of concern.}
