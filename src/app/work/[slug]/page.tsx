import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar, Footer } from "@/components";
import { projects, getProjectBySlug } from "@/lib/content";
import { siteConfig } from "@/lib/site-config";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
	return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
	params,
}: {
	params: Promise<Params>;
}): Promise<Metadata> {
	return params.then(({ slug }) => {
		const project = getProjectBySlug(slug);
		if (!project) return { title: `Not Found — ${siteConfig.name}` };
		return {
			title: `${project.title} — ${siteConfig.name}`,
			description: project.description,
		};
	});
}

export default async function ProjectPage({
	params,
}: {
	params: Promise<Params>;
}) {
	const { slug } = await params;
	const project = getProjectBySlug(slug);
	if (!project) notFound();

	return (
		<main className="min-h-screen text-neutral-900 font-sans">
			<Navbar />

			<article className="pt-40 pb-24 px-8">
				<div className="max-w-4xl mx-auto">
					{/* Header */}
					<p className="text-xs tracking-widest uppercase text-neutral-400 mb-2">
						{project.category}
					</p>
					<h1 className="text-4xl md:text-6xl font-bold mb-6">{project.title}</h1>
					<p className="text-lg text-neutral-500 leading-relaxed max-w-2xl mb-16">
						{project.description}
					</p>

					{/* Image gallery — full-bleed stacked */}
					<div className="space-y-6">
						{project.images.map((src, i) => (
							/* eslint-disable-next-line @next/next/no-img-element */
							<img
								key={i}
								src={src}
								alt={`${project.title} — image ${i + 1}`}
								className="w-full rounded-lg"
								loading={i === 0 ? "eager" : "lazy"}
							/>
						))}
					</div>

					{/* Back link */}
					<div className="mt-16 text-center">
						<Link
							href="/work"
							className="inline-block text-sm px-8 py-4 rounded-full border border-neutral-300 hover:border-[var(--color-red)] hover:text-[var(--color-red)] transition-colors"
						>
							← See More Projects
						</Link>
					</div>
				</div>
			</article>

			<Footer />
		</main>
	);
}
