import { siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="bg-neutral-900 border-t border-neutral-800 px-8 py-8">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-neutral-500 text-sm">
        <span>
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </span>
        <div className="flex gap-6">
          {siteConfig.socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
