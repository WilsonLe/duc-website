import { siteConfig } from "@/lib/site-config";

export function Hero() {
  return (
    <section className="flex flex-col justify-center min-h-screen px-8 pt-20">
      <div className="max-w-4xl">
        <p className="text-sm tracking-widest uppercase text-neutral-400 mb-6">
          {siteConfig.tagline}
        </p>
        <h1 className="text-6xl md:text-8xl font-bold leading-none tracking-tight mb-8">
          Duc
          <br />
          Nguyen
        </h1>
        <p className="text-xl md:text-2xl text-neutral-500 max-w-xl leading-relaxed">
          {siteConfig.heroDescription}
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
  );
}
