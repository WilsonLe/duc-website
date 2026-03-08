import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function Navbar() {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-8 py-5 bg-[var(--color-cream)]/80 backdrop-blur-md border-b border-neutral-200">
      <Link href="/" className="text-sm font-semibold tracking-widest uppercase">
        {siteConfig.name}
      </Link>
      <ul className="flex gap-8 text-sm text-neutral-500">
        {siteConfig.navLinks.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="hover:text-[var(--color-red)] transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
