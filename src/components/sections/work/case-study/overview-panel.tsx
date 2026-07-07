import { ImageFrame } from "@/components/sections/work/case-study/image-frame";
import type { CaseStudyOverview } from "@/types/project";

export function OverviewPanel({
  overview,
  problem,
  coverImage,
}: {
  overview: CaseStudyOverview;
  problem: string;
  coverImage?: string;
}) {
  return (
    <div className="relative space-y-8">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="bg-brand-blue/20 absolute top-1/4 right-[10%] h-72 w-72 rounded-full blur-[110px]" />
        <div className="bg-brand-cyan/10 absolute bottom-0 left-[10%] h-72 w-72 rounded-full blur-[110px]" />
      </div>
      {coverImage && (
        <ImageFrame src={coverImage} alt="Project cover" aspect="video" />
      )}

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="border-border/60 bg-card/20 overflow-hidden rounded-2xl border p-6 shadow-lg backdrop-blur-xl transition-[border-color,opacity,box-shadow] duration-300 lg:col-span-1">
          <div
            aria-hidden="true"
            className="absolute -top-1/3 -left-1/3 h-2/3 w-2/3 rotate-12 rounded-full bg-white/10 blur-3xl transition-transform duration-700 group-hover:translate-x-4 group-hover:translate-y-2"
          />

          {/* Top edge highlight */}
          <div
            aria-hidden="true"
            className="absolute inset-x-4 top-0 h-px bg-linear-to-r from-transparent via-white/40 to-transparent"
          />

          <dl className="space-y-4">
            <div>
              <dt className="text-muted-foreground text-xs tracking-wide uppercase">
                Role
              </dt>
              <dd className="text-foreground mt-1 text-sm font-medium">
                {overview.role}
              </dd>
            </div>
            <div>
              <dt className="text-muted-foreground text-xs tracking-wide uppercase">
                Timeline
              </dt>
              <dd className="text-foreground mt-1 text-sm font-medium">
                {overview.timeline}
              </dd>
            </div>
            <div>
              <dt className="text-muted-foreground text-xs tracking-wide uppercase">
                Tools
              </dt>
              <dd className="mt-1 flex flex-wrap gap-1.5">
                {overview.tools.map((tool) => (
                  <span
                    key={tool}
                    className="border-border/50 bg-background/40 text-foreground/80 rounded-full border px-2.5 py-0.5 text-xs"
                  >
                    {tool}
                  </span>
                ))}
              </dd>
            </div>
          </dl>
        </div>
        <p className="text-foreground/70 text-base leading-relaxed lg:col-span-2">
          {problem}
        </p>
      </div>
    </div>
  );
}
