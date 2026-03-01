export default function Home() {
  return (
    <main className="min-h-screen bg-white text-neutral-900 font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-8 py-5 bg-white/80 backdrop-blur-md border-b border-neutral-100">
        <span className="text-sm font-semibold tracking-widest uppercase">
          Duc Nguyen
        </span>
        <ul className="flex gap-8 text-sm text-neutral-500">
          <li>
            <a href="#about" className="hover:text-neutral-900 transition-colors">
              About
            </a>
          </li>
          <li>
            <a href="#work" className="hover:text-neutral-900 transition-colors">
              Work
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-neutral-900 transition-colors"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Hero */}
      <section className="flex flex-col justify-center min-h-screen px-8 pt-20">
        <div className="max-w-4xl">
          <p className="text-sm tracking-widest uppercase text-neutral-400 mb-6">
            Graphic Designer · Vietnam
          </p>
          <h1 className="text-6xl md:text-8xl font-bold leading-none tracking-tight mb-8">
            Duc
            <br />
            Nguyen
          </h1>
          <p className="text-xl md:text-2xl text-neutral-500 max-w-xl leading-relaxed">
            Crafting visual identities and compelling design experiences that
            tell meaningful stories.
          </p>
          <div className="mt-12">
            <a
              href="#work"
              className="inline-block bg-neutral-900 text-white text-sm px-8 py-4 rounded-full hover:bg-neutral-700 transition-colors"
            >
              View My Work
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-32 px-8 bg-neutral-50">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs tracking-widest uppercase text-neutral-400 mb-4">
              About
            </p>
            <h2 className="text-4xl font-bold mb-6">
              Design is how it works.
            </h2>
            <p className="text-neutral-500 leading-relaxed mb-4">
              I&apos;m Duc Nguyen, a graphic designer based in Vietnam with a
              passion for brand identity, typography, and print design. I believe
              that great design is invisible — it guides, informs, and delights
              without getting in the way.
            </p>
            <p className="text-neutral-500 leading-relaxed">
              With an eye for detail and a love for clean aesthetics, I help
              brands find their visual voice and connect with their audience in
              an authentic way.
            </p>
          </div>
          <div className="bg-neutral-200 rounded-2xl aspect-square flex items-center justify-center">
            <span className="text-neutral-400 text-sm">Photo coming soon</span>
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="py-32 px-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-neutral-400 mb-4">
            Selected Work
          </p>
          <h2 className="text-4xl font-bold mb-16">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Brand Identity",
                category: "Branding",
                color: "bg-amber-100",
              },
              {
                title: "Editorial Design",
                category: "Print",
                color: "bg-sky-100",
              },
              {
                title: "Packaging",
                category: "Product Design",
                color: "bg-emerald-100",
              },
              {
                title: "Visual Campaign",
                category: "Art Direction",
                color: "bg-rose-100",
              },
            ].map((project) => (
              <div
                key={project.title}
                className={`${project.color} rounded-2xl aspect-video flex flex-col justify-end p-6 cursor-pointer hover:scale-[1.02] transition-transform`}
              >
                <p className="text-xs text-neutral-500 mb-1">
                  {project.category}
                </p>
                <h3 className="text-xl font-semibold">{project.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32 px-8 bg-neutral-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs tracking-widest uppercase text-neutral-400 mb-4">
            Contact
          </p>
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Let&apos;s work together.
          </h2>
          <p className="text-neutral-400 text-lg mb-12 max-w-md mx-auto">
            Have a project in mind? I&apos;d love to hear about it. Send me a
            message and let&apos;s create something great.
          </p>
          <a
            href="mailto:duc@example.com"
            className="inline-block border border-white text-white text-sm px-8 py-4 rounded-full hover:bg-white hover:text-neutral-900 transition-colors"
          >
            duc@example.com
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 border-t border-neutral-800 px-8 py-8">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-neutral-500 text-sm">
          <span>© 2025 Duc Nguyen. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              LinkedIn
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Behance
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
