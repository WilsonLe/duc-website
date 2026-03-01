import { siteConfig } from "@/lib/site-config";

export function Navbar() {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-8 py-5 bg-white/80 backdrop-blur-md border-b border-neutral-100">
      <span className="text-sm font-semibold tracking-widest uppercase">
        {siteConfig.name}
      </span>
      <ul className="flex gap-8 text-sm text-neutral-500">
        {siteConfig.navLinks.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="hover:text-neutral-900 transition-colors"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
