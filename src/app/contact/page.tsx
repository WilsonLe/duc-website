import type { Metadata } from "next";
import { Navbar, ContactSection, Footer } from "@/components";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Contact — ${siteConfig.name}`,
  description: `Get in touch with ${siteConfig.name} for design projects and collaborations.`,
};

export default function ContactPage() {
  return (
    <main className="min-h-screen text-neutral-900 font-sans">
      <Navbar />

      <div className="pt-20">
        <ContactSection />
      </div>

      <Footer />
    </main>
  );
}
