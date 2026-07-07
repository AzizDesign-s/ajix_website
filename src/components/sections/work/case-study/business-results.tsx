import type { CaseStudyMetric } from "@/types/project";
import { AnimatedCounter } from "@/components/ui/animated-counter";

export function BusinessResults({
  summary,
  metrics,
}: {
  summary: string;
  metrics?: CaseStudyMetric[];
}) {
  return (
    <div>
      <p className="text-foreground/70 max-w-2xl text-base leading-relaxed">
        {summary}
      </p>

      {metrics && metrics.length > 0 && (
        <div className="divide-border/40 border-border/60 bg-card/40 relative mt-8 grid grid-cols-1 gap-8 divide-y overflow-hidden rounded-2xl border p-8 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-y-0">
          {/* Liquid glass sheen */}
          <div
            aria-hidden="true"
            className="absolute -top-1/3 -left-1/3 h-2/3 w-2/3 rotate-12 rounded-full bg-white/10 blur-3xl transition-transform duration-700 group-hover:translate-x-4 group-hover:translate-y-2"
          />

          {/* Top edge highlight */}
          <div
            aria-hidden="true"
            className="absolute inset-x-4 top-0 h-px bg-linear-to-r from-transparent via-white/40 to-transparent"
          />

          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="flex flex-col items-center px-4 py-4 text-center sm:py-0"
            >
              <p className="gradient-brand-text font-display text-3xl font-semibold">
                <AnimatedCounter
                  value={metric.value}
                  suffix={metric.suffix ?? ""}
                />
              </p>
              <p className="text-muted-foreground mt-2 text-xs font-medium tracking-wide uppercase">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
