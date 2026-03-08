import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-8 pt-20 text-center overflow-hidden">
      {/* Large poster-style title */}
      <h1
        className="text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] font-black leading-[0.85] tracking-tight uppercase"
        style={{ color: "var(--color-red)" }}
      >
        Duc
        <br />
        Nguyen
      </h1>

      <p className="mt-6 text-sm md:text-base tracking-[0.3em] uppercase text-neutral-500">
        {siteConfig.tagline}
      </p>

      <p className="mt-6 text-lg md:text-xl text-neutral-500 max-w-md leading-relaxed">
        {siteConfig.heroDescription}
      </p>

      <div className="mt-10">
        <Link
          href="/work"
          className="inline-block text-sm px-8 py-4 rounded-full transition-colors"
          style={{
            backgroundColor: "var(--color-red)",
            color: "#fff",
          }}
        >
          View My Work
        </Link>
      </div>
    </section>
  );
}
