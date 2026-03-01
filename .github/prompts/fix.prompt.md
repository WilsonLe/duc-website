---
mode: agent
description: Fix a specific bug, lint error, or broken test in the codebase.
---

# Fix

Apply the smallest possible change to fix the issue described below.

## Guidelines

- Read and understand the failing code before making changes.
- Make surgical, minimal edits — do not refactor unrelated code.
- Ensure `npm run build` and `npm run lint` pass after the fix.
- Add a brief comment only if the fix is non-obvious.
- Do **not** introduce new dependencies.
- If the fix affects a component, visually verify it still renders correctly.

## Context

${input:Describe the issue to fix. Provide file paths, error messages, or relevant context.}
