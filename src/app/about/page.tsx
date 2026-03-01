import type { Metadata } from "next";
import { Navbar, SectionHeading, Footer } from "@/components";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `About — ${siteConfig.name}`,
  description: `Learn more about ${siteConfig.name}, a graphic designer based in Vietnam.`,
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900 font-sans">
      <Navbar />

      <section className="py-32 px-8 pt-40">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading label="About" title={siteConfig.aboutHeading} className="mb-6" />
            {siteConfig.aboutParagraphs.map((paragraph, i) => (
              <p key={i} className="text-neutral-500 leading-relaxed mb-4 last:mb-0">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="bg-neutral-200 rounded-2xl aspect-square flex items-center justify-center">
            <span className="text-neutral-400 text-sm">Photo coming soon</span>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
