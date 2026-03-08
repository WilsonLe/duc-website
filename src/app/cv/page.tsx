import type { Metadata } from "next";
import { Navbar, SectionHeading, Footer } from "@/components";
import { siteConfig } from "@/lib/site-config";
import { cvContent } from "@/lib/content";

export const metadata: Metadata = {
  title: `CV — ${siteConfig.name}`,
  description: `Curriculum vitae of ${siteConfig.name} — education, exhibitions, and design works.`,
};

export default function CvPage() {
  return (
    <main className="min-h-screen text-neutral-900 font-sans">
      <Navbar />

      <section className="py-32 px-8 pt-40">
        <div className="max-w-4xl mx-auto">
          <SectionHeading label="Curriculum Vitae" title={cvContent.contact.name} className="mb-12" />

          {/* Contact */}
          <div className="mb-12">
            <h3 className="text-sm tracking-widest uppercase text-neutral-400 mb-4">Contact</h3>
            <ul className="text-neutral-600 leading-relaxed space-y-1">
              <li>Email: {cvContent.contact.email}</li>
              <li>Address: {cvContent.contact.address}</li>
              <li>
                Website:{" "}
                <a href={cvContent.contact.website} className="underline hover:text-neutral-900 transition-colors">
                  {cvContent.contact.website}
                </a>
              </li>
              <li>
                Instagram:{" "}
                <a
                  href={`https://instagram.com/${cvContent.contact.instagram}`}
                  className="underline hover:text-neutral-900 transition-colors"
                >
                  {cvContent.contact.instagram}
                </a>
              </li>
            </ul>
          </div>

          {/* Education */}
          <div className="mb-12">
            <h3 className="text-sm tracking-widest uppercase text-neutral-400 mb-4">Education</h3>
            <ul className="text-neutral-600 leading-relaxed space-y-2">
              {cvContent.education.map((entry, i) => (
                <li key={i}>
                  <span className="font-semibold">{entry.year}</span>{" "}
                  {entry.description}
                </li>
              ))}
            </ul>
          </div>

          {/* Exhibition */}
          <div className="mb-12">
            <h3 className="text-sm tracking-widest uppercase text-neutral-400 mb-4">Exhibition</h3>
            <ul className="text-neutral-600 leading-relaxed space-y-2">
              {cvContent.exhibitions.map((entry, i) => (
                <li key={i}>
                  <span className="font-semibold">{entry.year}</span>{" "}
                  {entry.description}
                </li>
              ))}
            </ul>
          </div>

          {/* Design Works */}
          <div className="mb-12">
            <h3 className="text-sm tracking-widest uppercase text-neutral-400 mb-4">Design Works</h3>
            <ul className="text-neutral-600 leading-relaxed space-y-2">
              {cvContent.designWorks.map((entry, i) => (
                <li key={i}>
                  <span className="font-semibold">{entry.year}</span>{" "}
                  {entry.description}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
