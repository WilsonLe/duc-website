import { aboutContent } from "@/lib/content";
import { cvContent } from "@/lib/content";

export const siteConfig = {
  name: "Duc Nguyen",
  title: "Duc Nguyen — Graphic Designer, Printmaker & Riso Print Artist",
  description:
    "Personal portfolio of Duc Nguyen, a graphic designer, printmaker, and Riso print artist.",
  tagline: "Graphic Designer · Printmaker · Riso Print Artist",
  heroDescription:
    "Crafting visual identities and compelling design experiences that tell meaningful stories.",
  aboutHeading: aboutContent.heading,
  aboutParagraphs: aboutContent.paragraphs,
  contactHeading: "Let's work together.",
  contactDescription:
    "Have a project in mind? I'd love to hear about it. Send me a message and let's create something great.",
  email: cvContent.contact.email,
  socialLinks: [
    { label: "Instagram", href: `https://instagram.com/${cvContent.contact.instagram}` },
  ],
  navLinks: [
    { label: "Home", href: "/" },
    { label: "Work", href: "/work" },
    { label: "About", href: "/about" },
    { label: "CV", href: "/cv" },
  ],
} as const;
