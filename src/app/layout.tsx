import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Duc Nguyen — Graphic Designer",
  description:
    "Personal portfolio of Duc Nguyen, a graphic designer based in Vietnam.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
