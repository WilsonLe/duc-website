import type { Metadata } from "next";
import { Navbar, SectionHeading, Footer } from "@/components";
import { WorkGrid } from "@/components/work-grid";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Work — ${siteConfig.name}`,
  description: `Selected projects and portfolio work by ${siteConfig.name}.`,
};

export default function WorkPage() {
  return (
    <main className="min-h-screen text-neutral-900 font-sans">
      <Navbar />

      <section className="py-32 px-8 pt-40">
        <div className="max-w-5xl mx-auto">
          <SectionHeading label="Selected Work" title="Projects" className="mb-12" />
          <WorkGrid />
        </div>
      </section>

      <Footer />
    </main>
  );
}
