export const categories = ["Print", "Branding", "Comic", "Mix Project"] as const;
export type Category = (typeof categories)[number];

export type Project = {
  slug: string;
  title: string;
  category: Category;
  description: string;
  thumbnail: string;
  images: string[];
};

function imgs(slug: string, files: string[]): string[] {
  return files.map((f) => `/work/${slug}/${f}`);
}

export const projects: Project[] = [
  // ── Print ──────────────────────────────────────────────
  {
    slug: "upc-posters",
    title: "UPC Posters",
    category: "Print",
    description:
      "Event promotional posters and graphics designed for the University Programming Council at Denison University. The series covers campus events including Aestavalia, the Coffeehouse performance series, the 2021 Gala, and student performer showcases — each balancing bold visual impact with clear event information.",
    thumbnail: "/work/upc-posters/01.jpg",
    images: imgs("upc-posters", [
      "01.jpg","02.png","03.png","04.jpg","05.jpg","06.png","07.png",
      "08.jpg","09.jpg","10.jpg","11.jpg","12.jpg","13.png","14.png",
      "15.jpg","16.jpg","17.png","18.png","19.png","20.png","21.png",
    ]),
  },
  {
    slug: "design-activism",
    title: "Design Activism",
    category: "Print",
    description:
      "A design activism portfolio exploring social issues through visual communication. The project combines critical research with graphic design practice, using typography, layout, and imagery to advocate for change and spark conversation around pressing social topics.",
    thumbnail: "/work/design-activism/01.jpg",
    images: imgs("design-activism", [
      "01.jpg","02.jpg","03.jpg","04.jpg","05.jpg","06.jpg","07.jpg","08.jpg",
      "09.jpg","10.jpg","11.jpg","12.jpg","13.jpg","14.jpg","15.jpg","16.jpg",
    ]),
  },
  {
    slug: "manifesto",
    title: "Manifesto",
    category: "Print",
    description:
      "A visual manifesto exploring identity and creative philosophy through graphic design. The piece articulates a personal artistic statement, combining expressive typography with illustration.",
    thumbnail: "/work/manifesto/01.jpg",
    images: imgs("manifesto", ["01.jpg"]),
  },
  {
    slug: "queer-graphix",
    title: "Queer Graphix",
    category: "Print",
    description:
      "A zine and illustration project exploring queer identity, fashion, and storytelling through graphic art. The work includes handmade zines, character designs, and narrative illustrations that center LGBTQIA+ experiences and self-expression.",
    thumbnail: "/work/queer-graphix/01.jpg",
    images: imgs("queer-graphix", [
      "01.jpg","02.jpg","03.jpg","04.jpg","05.jpg",
      "06.jpg","07.jpg","08.jpg","09.jpg","10.jpg",
    ]),
  },
  {
    slug: "save-water",
    title: "Save Water Posters",
    category: "Print",
    description:
      "Environmental awareness poster designs advocating for water conservation. The pair of posters uses graphic imagery and concise messaging to communicate the urgency of sustainable water usage.",
    thumbnail: "/work/save-water/01.png",
    images: imgs("save-water", ["01.png", "02.png"]),
  },

  // ── Branding ───────────────────────────────────────────
  {
    slug: "deer-x",
    title: "Deer X",
    category: "Branding",
    description:
      "UI/UX design and branding for Deer X, a mobile application concept. The project encompasses a complete design system including custom iconography, colour palettes, interface layouts, and user-flow screens that define the app's visual identity.",
    thumbnail: "/work/deer-x/01.jpg",
    images: imgs("deer-x", [
      "01.jpg","02.jpg","03.png","04.png","05.png","06.png","07.png","08.png",
      "09.png","10.png","11.png","12.png","13.png","14.png","15.png","16.png",
      "17.png","18.png","19.png","20.png","21.png","22.png","23.png","24.png",
      "25.png","26.png","27.png","28.png","29.png","30.png","31.png","32.png",
      "33.png","34.png","35.png","36.png","37.png","38.png",
    ]),
  },
  {
    slug: "deer-x-logo",
    title: "Deer X Logo",
    category: "Branding",
    description:
      "Logo exploration and brand identity development for the Deer X project. The process includes initial concept sketches, typographic treatments, icon variations, and final logo lockups.",
    thumbnail: "/work/deer-x-logo/01.jpg",
    images: imgs("deer-x-logo", [
      "01.jpg","02.jpg","03.jpg","04.png","05.png","06.png",
      "07.png","08.png","09.png","10.png","11.png","12.png",
    ]),
  },
  {
    slug: "knowlton-center",
    title: "Knowlton Center",
    category: "Branding",
    description:
      "Design materials for the Austin E. Knowlton Center for Career Exploration at Denison University. The project includes the strategic plan document design, presentation templates, and branded collateral that communicate the centre's mission and services.",
    thumbnail: "/work/knowlton-center/01.png",
    images: imgs("knowlton-center", [
      "01.png","02.png","03.png","04.png","05.png",
    ]),
  },
  {
    slug: "knowlton-logo",
    title: "Knowlton Logo",
    category: "Branding",
    description:
      "Logo design concepts and iterations for the Knowlton Center for Career Exploration. The explorations range from typographic marks to icon-based solutions, ensuring versatility across print and digital applications.",
    thumbnail: "/work/knowlton-logo/01.png",
    images: imgs("knowlton-logo", [
      "01.png","02.png","03.png","04.png","05.png","06.png","07.png",
    ]),
  },
  {
    slug: "logo-concept",
    title: "Logo Concepts",
    category: "Branding",
    description:
      "A collection of logo design explorations and brand identity concepts developed for various clients and personal projects.",
    thumbnail: "/work/logo-concept/01.jpg",
    images: imgs("logo-concept", ["01.jpg", "02.jpg", "03.jpg", "04.jpg"]),
  },

  // ── Comic ──────────────────────────────────────────────
  {
    slug: "comic-junior",
    title: "Comic Junior",
    category: "Comic",
    description:
      "Superhero-themed comic illustrations from early comic art studies. The series features original character designs and dynamic compositions that explore classic superhero visual language.",
    thumbnail: "/work/comic-junior/01.jpg",
    images: imgs("comic-junior", ["01.jpg", "02.jpg", "03.jpg"]),
  },
  {
    slug: "comic-senior",
    title: "Comic Senior",
    category: "Comic",
    description:
      "A multi-page fantasy comic created as a senior-level project, featuring detailed narrative illustration and sequential art. The story unfolds across carefully composed panels with expressive character work and immersive world-building.",
    thumbnail: "/work/comic-senior/01.jpg",
    images: imgs("comic-senior", [
      "01.jpg","02.jpg","03.jpg","04.jpg","05.jpg","06.jpg","07.jpg","08.jpg",
      "09.jpg","10.jpg","11.jpg","12.jpg","13.jpg","14.jpg","15.jpg","16.jpg",
      "17.jpg","18.jpg","19.jpg","20.jpg","21.jpg","22.jpg","23.jpg","24.jpg",
      "25.jpg",
    ]),
  },
  {
    slug: "ron-fantasy-comic",
    title: "Ron Fantasy Comic",
    category: "Comic",
    description:
      "A fantasy narrative comic following the character Ron through an original illustrated story. Each page features detailed ink work and world-building elements that bring the tale to life.",
    thumbnail: "/work/ron-fantasy-comic/01.png",
    images: imgs("ron-fantasy-comic", [
      "01.png","02.png","03.png","04.png","05.png","06.png","07.png",
    ]),
  },
  {
    slug: "dear-roe",
    title: "Dear Roé",
    category: "Comic",
    description:
      "A personal comic series exploring identity and storytelling through a multi-page illustrated narrative. The intimate artwork combines expressive linework with thoughtful pacing to convey deeply personal themes.",
    thumbnail: "/work/dear-roe/01.jpg",
    images: imgs("dear-roe", [
      "01.jpg","02.jpg","03.jpg","04.jpg","05.jpg","06.jpg","07.jpg","08.jpg",
      "09.jpg","10.jpg","11.jpg","12.jpg","13.jpg","14.jpg","15.jpg","16.jpg",
      "17.jpg","18.jpg",
    ]),
  },
  {
    slug: "contemporary-comics",
    title: "Contemporary Comics",
    category: "Comic",
    description:
      "Cover artwork and contributions for the Denison Art Department's Contemporary Comics anthology. The design balances bold graphic elements with the collaborative spirit of the publication.",
    thumbnail: "/work/contemporary-comics/01.png",
    images: imgs("contemporary-comics", ["01.png"]),
  },

  // ── Mix Project ────────────────────────────────────────
  {
    slug: "fun-art",
    title: "Fun Art",
    category: "Mix Project",
    description:
      "Personal pixel art and digital illustrations created for creative exploration. These playful pieces showcase a love for retro-inspired aesthetics and detailed pixel craftsmanship.",
    thumbnail: "/work/fun-art/01.png",
    images: imgs("fun-art", ["01.png", "02.png"]),
  },
  {
    slug: "bi-code-shirt",
    title: "Bi Code Shirt",
    category: "Mix Project",
    description:
      "T-shirt design celebrating bisexual identity through graphic design. The concept translates personal identity into wearable art with bold colours and meaningful visual language.",
    thumbnail: "/work/bi-code-shirt/01.jpg",
    images: imgs("bi-code-shirt", ["01.jpg", "02.jpg"]),
  },
  {
    slug: "class-assignments",
    title: "Class Assignments",
    category: "Mix Project",
    description:
      "A curated collection of class assignment works spanning abstract drawing, book cover design, typography explorations, eraser drawings, and collage compositions. Each piece demonstrates growth across a range of graphic design and fine art techniques.",
    thumbnail: "/work/class-assignments/01.jpg",
    images: imgs("class-assignments", [
      "01.jpg","02.jpg","03.jpg","04.jpg","05.png",
      "06.jpg","07.jpg","08.jpg","09.jpg",
    ]),
  },
  {
    slug: "artboard-explorations",
    title: "Artboard Explorations",
    category: "Mix Project",
    description:
      "A series of artboard design explorations showcasing iterative graphic experimentation. Each variation presents a unique composition, reflecting a process-driven approach to visual design.",
    thumbnail: "/work/artboard-explorations/01.png",
    images: imgs("artboard-explorations", [
      "01.png","02.png","03.png","04.png","05.png","06.png",
      "07.png","08.png","09.png","10.png","11.png","12.png",
    ]),
  },
  {
    slug: "illustrations",
    title: "Illustrations",
    category: "Mix Project",
    description:
      "A collection of personal illustrations, etchings, and mixed-media artwork. These pieces range from detailed ink etchings to expressive digital paintings, reflecting a diverse artistic practice.",
    thumbnail: "/work/illustrations/01.jpg",
    images: imgs("illustrations", [
      "01.jpg","02.jpg","03.png","04.png","05.jpg","06.jpg","07.jpg","08.png","09.png",
    ]),
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectsByCategory(category: Category): Project[] {
  return projects.filter((p) => p.category === category);
}
