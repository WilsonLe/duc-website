---
mode: agent
description: Create, update, or delete a Next.js static page. Usage examples — /page create about, /page update contact, /page delete projects.
---

# Page

Manage pages in this Next.js static portfolio website.

## Actions

### Create a new page
> /page create <page-name>

1. Create `app/<page-name>/page.tsx` following the structure below.
2. Add a navigation link in `app/page.tsx` (the home nav bar) if appropriate.
3. Ensure the page is reachable via `/<page-name>`.

**New page template:**
```tsx
export const metadata = {
  title: "<Page Title> — Duc Nguyen",
  description: "<Short description of the page>",
};

export default function <PageName>Page() {
  return (
    <main className="min-h-screen bg-white text-neutral-900 font-sans px-8 py-32">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8"><Page Title></h1>
        {/* Page content here */}
      </div>
    </main>
  );
}
```

---

### Update an existing page
> /page update <page-name>

1. Locate `app/<page-name>/page.tsx` (or `app/page.tsx` for the home page).
2. Apply the requested changes while preserving the existing design language.
3. Keep Tailwind utility classes consistent with the rest of the site.

---

### Delete a page
> /page delete <page-name>

1. Remove the `app/<page-name>/` directory and all its files.
2. Remove any navigation links pointing to that page.
3. Confirm `npm run build` passes after deletion.

---

## General Guidelines

- All pages must be compatible with `output: "export"` (no server-side APIs or dynamic routes without `generateStaticParams`).
- Use TypeScript and Tailwind CSS.
- Match the existing visual style: white background, neutral colour palette, system sans-serif font.
- After any change, run `npm run build` to verify the static export succeeds.

## Context

${input:Specify the action and page name, e.g. "create about", "update contact", or "delete projects". Add any additional details about the desired content or changes.}
