---
mode: agent
description: Debug an issue, error, or unexpected behaviour in the codebase.
---

# Debug

Investigate and explain the root cause of the issue described below.

## Guidelines

- Read the relevant source files before suggesting a fix.
- Reproduce the issue step-by-step if possible.
- Explain **why** the bug occurs, not just how to fix it.
- Suggest the minimal code change needed to resolve the issue.
- After applying the fix, verify `npm run build` and `npm run lint` still pass.
- If the issue is a runtime error, check browser console output and network requests.

## Context

${input:Describe the bug or unexpected behaviour. Include any error messages, stack traces, or steps to reproduce.}
