export const siteConfig = {
  name: "Duc Nguyen",
  title: "Duc Nguyen — Graphic Designer",
  description:
    "Personal portfolio of Duc Nguyen, a graphic designer based in Vietnam.",
  tagline: "Graphic Designer · Vietnam",
  heroDescription:
    "Crafting visual identities and compelling design experiences that tell meaningful stories.",
  aboutHeading: "Design is how it works.",
  aboutParagraphs: [
    "I'm Duc Nguyen, a graphic designer based in Vietnam with a passion for brand identity, typography, and print design. I believe that great design is invisible — it guides, informs, and delights without getting in the way.",
    "With an eye for detail and a love for clean aesthetics, I help brands find their visual voice and connect with their audience in an authentic way.",
  ],
  contactHeading: "Let's work together.",
  contactDescription:
    "Have a project in mind? I'd love to hear about it. Send me a message and let's create something great.",
  email: "duc@example.com",
  socialLinks: [
    { label: "LinkedIn", href: "#" },
    { label: "Behance", href: "#" },
    { label: "Instagram", href: "#" },
  ],
  navLinks: [
    { label: "About", href: "#about" },
    { label: "Work", href: "#work" },
    { label: "Contact", href: "#contact" },
  ],
} as const;

export type Project = {
  title: string;
  category: string;
  color: string;
};

export const projects: Project[] = [
  { title: "Brand Identity", category: "Branding", color: "bg-amber-100" },
  { title: "Editorial Design", category: "Print", color: "bg-sky-100" },
  { title: "Packaging", category: "Product Design", color: "bg-emerald-100" },
  { title: "Visual Campaign", category: "Art Direction", color: "bg-rose-100" },
];
