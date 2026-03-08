import {
  Navbar,
  Hero,
  SectionHeading,
  ProjectCard,
  ContactSection,
  Footer,
} from "@/components";
import { siteConfig } from "@/lib/site-config";
import { projects } from "@/lib/content";

export default function Home() {
  /* Show up to 6 featured projects on the home page */
  const featured = projects.slice(0, 6);

  return (
    <main className="min-h-screen text-neutral-900 font-sans">
      <Navbar />

      <Hero />

      {/* About */}
      <section id="about" className="py-32 px-8 bg-neutral-50">
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

      {/* Work */}
      <section id="work" className="py-32 px-8">
        <div className="max-w-5xl mx-auto">
          <SectionHeading label="Selected Work" title="Projects" className="mb-16" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featured.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <ContactSection />

      <Footer />
    </main>
  );
}
