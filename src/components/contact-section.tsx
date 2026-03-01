import { siteConfig } from "@/lib/site-config";

export function ContactSection() {
  return (
    <section id="contact" className="py-32 px-8 bg-neutral-900 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-xs tracking-widest uppercase text-neutral-400 mb-4">
          Contact
        </p>
        <h2 className="text-4xl md:text-6xl font-bold mb-8">
          {siteConfig.contactHeading}
        </h2>
        <p className="text-neutral-400 text-lg mb-12 max-w-md mx-auto">
          {siteConfig.contactDescription}
        </p>
        <a
          href={`mailto:${siteConfig.email}`}
          className="inline-block border border-white text-white text-sm px-8 py-4 rounded-full hover:bg-white hover:text-neutral-900 transition-colors"
        >
          {siteConfig.email}
        </a>
      </div>
    </section>
  );
}
