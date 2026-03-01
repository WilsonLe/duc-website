import type { Metadata } from "next";
import { Navbar, SectionHeading, ProjectCard, Footer } from "@/components";
import { siteConfig, projects } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Work — ${siteConfig.name}`,
  description: `Selected projects and portfolio work by ${siteConfig.name}.`,
};

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900 font-sans">
      <Navbar />

      <section className="py-32 px-8 pt-40">
        <div className="max-w-4xl mx-auto">
          <SectionHeading label="Selected Work" title="Projects" className="mb-16" />
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
