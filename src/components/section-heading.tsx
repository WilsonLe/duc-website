import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  label: string;
  title: string;
  className?: string;
};

export function SectionHeading({ label, title, className }: SectionHeadingProps) {
  return (
    <div className={cn(className)}>
      <p className="text-xs tracking-widest uppercase text-neutral-400 mb-4">
        {label}
      </p>
      <h2 className="text-4xl font-bold">{title}</h2>
    </div>
  );
}
