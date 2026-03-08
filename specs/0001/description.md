# Spec 0001 — Portfolio Website

## Navigation

- **Nav items:** Home / Work / About / CV
- Contact page remains accessible by direct URL but is **not shown in the nav**

---

## Home Page — Poster Hero (Reference 1)

- **Style:** Bold, decorative red serif typography on a cream/off-white background, inspired by the Uniq Studio portfolio poster
- **Hero image:** Use the poster image asset at `specs/0001/poster-reference.jpg` (provided by Duc)
- **Elements:** Large display title (e.g. "PORTFOLIO" or Duc's name) in red, subtitle tagline, black-and-white illustration artwork filling the background
- **Color palette:** Cream (#FAFAF5 or similar) background, bold red (#C1272D or similar) display text, black line art

---

## Work Page — Thumbnail Grid (Reference 2: Susann Hoffmann)

- **Layout:** Visual thumbnail grid (like [susannhoffmann.com/lettering](https://susannhoffmann.com/lettering)) — each project shown as an image tile with title
- **Category filters:** Print, Branding, Comic, Mix Project
- **Thumbnail selection:** Auto-pick the first image file from each project folder
- **Clicking a tile** navigates to the full project detail page

### Category → Project Mapping

| Category | Projects |
|---|---|
| **Print** | UPC poster (Aestavalia, Coffeehouse series, Gala 2021, bubble tea event, Students Performers), Design activism, Manifesto, Queer Graphix, Class assignments (poster save water, book covers) |
| **Branding** | Deer X (app UI/logo), Deer X logo old, Knowlton Center for Career Exploration, knowlton logo, logo concept |
| **Comic** | Comic junior (heroes), comic senior (fantasy comic, multi-page spreads), Ron fantasy comic, Dear roé 2, Copy of Contemporary Comics |
| **Mix Project** | fun art (pixel art), Bi code Shirt, loose illustrations (etching Hide, self as words, zine-artist-book, highschool painting), Class assignments (abstract drawings, mandala, collage, font making) |

---

## Project Detail Page (Reference 3: Lisa Maltby)

- **Layout:** Follows [lisamaltby.com project page](https://www.lisamaltby.com/project-updates/sheffield-libraries-design) pattern
- **Structure:**
  1. Project title at top
  2. Description paragraph (auto-generated based on project name/category context)
  3. Full-bleed images stacked vertically showcasing the work
  4. "See more projects" link at the bottom to return to Work page
- **Route:** `/work/[slug]` — must use `generateStaticParams` for static export compatibility
- **Descriptions:** Generate descriptive text for each project (will be refined later by Duc)

---

## Assets

- All raw work assets are in `specs/0001/My work/`
- Assets need to be copied/optimized into `public/` for serving
- The poster hero image is under `specs/0001/` (the JPEG directly in that directory)

---

## References

- (1) Home poster style: Uniq Studio portfolio poster (bold red serif type, cream bg, black-and-white illustrations) — original Pinterest pin: https://au.pinterest.com/pin/596445544448991882
- (2) Work grid layout: https://susannhoffmann.com/lettering
- (3) Artwork detail page: https://www.lisamaltby.com/project-updates/sheffield-libraries-design
