"use client";

import { useState } from "react";
import { categories, projects } from "@/lib/content/projects";
import type { Category } from "@/lib/content/projects";
import { ProjectCard } from "@/components/project-card";

export function WorkGrid() {
	const [active, setActive] = useState<Category | "All">("All");

	const filtered =
		active === "All"
			? projects
			: projects.filter((p) => p.category === active);

	return (
		<>
			{/* Category filter tabs */}
			<div className="flex flex-wrap gap-3 mb-12">
				<button
					onClick={() => setActive("All")}
					className={`px-5 py-2 text-sm rounded-full border transition-colors ${active === "All"
							? "bg-[var(--color-red)] text-white border-[var(--color-red)]"
							: "border-neutral-300 text-neutral-500 hover:border-neutral-900 hover:text-neutral-900"
						}`}
				>
					All
				</button>
				{categories.map((cat) => (
					<button
						key={cat}
						onClick={() => setActive(cat)}
						className={`px-5 py-2 text-sm rounded-full border transition-colors ${active === cat
								? "bg-[var(--color-red)] text-white border-[var(--color-red)]"
								: "border-neutral-300 text-neutral-500 hover:border-neutral-900 hover:text-neutral-900"
							}`}
					>
						{cat}
					</button>
				))}
			</div>

			{/* Project grid */}
			<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
				{filtered.map((project) => (
					<ProjectCard key={project.slug} project={project} />
				))}
			</div>
		</>
	);
}
