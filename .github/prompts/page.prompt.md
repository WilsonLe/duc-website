---
mode: agent
description: Create, update, or delete a Next.js static page. Usage examples — /page create about, /page update contact, /page delete projects.
---

# Page

Manage pages in this Next.js static portfolio website.

## Actions

### Create a new page
> /page create <page-name>

1. Create `src/app/<page-name>/page.tsx` following the structure below.
2. Add a navigation link in `src/lib/site-config.ts` (`navLinks` array) if appropriate.
3. Reuse `Navbar` and `Footer` from `src/components/` for consistent layout.
4. Ensure the page is reachable via `/<page-name>`.

**New page template:**
```tsx
import type { Metadata } from "next";
import { Navbar, Footer } from "@/components";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `<Page Title> — ${siteConfig.name}`,
  description: "<Short description of the page>",
};

export default function <PageName>Page() {
  return (
    <main className="min-h-screen bg-white text-neutral-900 font-sans">
      <Navbar />
      <section className="py-32 px-8 pt-40">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8"><Page Title></h1>
          {/* Page content here */}
        </div>
      </section>
      <Footer />
    </main>
  );
}
```

---

### Update an existing page
> /page update <page-name>

1. Locate `src/app/<page-name>/page.tsx` (or `src/app/page.tsx` for the home page).
2. Apply the requested changes while preserving the existing design language.
3. Keep Tailwind utility classes consistent with the rest of the site.
4. Reuse components from `src/components/` where possible.

---

### Delete a page
> /page delete <page-name>

1. Remove the `src/app/<page-name>/` directory and all its files.
2. Remove any navigation links pointing to that page from `src/lib/site-config.ts`.
3. Confirm `npm run build` passes after deletion.

---

## General Guidelines

- All pages must be compatible with `output: "export"` (no server-side APIs or dynamic routes without `generateStaticParams`).
- Use TypeScript and Tailwind CSS.
- Match the existing visual style: white background, neutral colour palette, system sans-serif font.
- After any change, run `npm run build` to verify the static export succeeds.

## Context

${input:Specify the action and page name, e.g. "create about", "update contact", or "delete projects". Add any additional details about the desired content or changes.}
