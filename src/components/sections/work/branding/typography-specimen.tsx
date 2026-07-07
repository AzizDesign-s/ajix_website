import type { BrandTypographySpecimen } from "@/types/project";
import { GlowPanel } from "@/components/ui/work/glow-panel";

export function TypographySpecimen({
  specimens,
}: {
  specimens: BrandTypographySpecimen[];
}) {
  return (
    <div className="space-y-4">
      {specimens.map((specimen) => (
        <GlowPanel key={specimen.role} className="bg-surface/40 p-6">
          <div className="border-border/30 flex flex-wrap items-baseline justify-between gap-2 border-b pb-3">
            <span className="text-accent text-xs font-semibold tracking-widest uppercase">
              {specimen.role}
            </span>
            <span className="text-muted-foreground text-xs">
              {specimen.fontFamily} · {specimen.weight}
            </span>
          </div>
          <p
            className={`${specimen.fontClass} text-foreground mt-4 text-3xl md:text-4xl`}
          >
            {specimen.sample}
          </p>
        </GlowPanel>
      ))}
    </div>
  );
}
