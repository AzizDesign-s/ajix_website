import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { featureIconMap } from "@/config/feature-icons";
import { GlowPanel } from "@/components/ui/work/glow-panel";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import type { BusinessMetric } from "@/types/about";

export function MetricImpactCard({ metric }: { metric: BusinessMetric }) {
  const Icon = featureIconMap[metric.icon];

  return (
    <GlowPanel className="bg-surface/40 flex h-full flex-col p-6">
      <div className="gradient-brand flex h-11 w-11 items-center justify-center rounded-xl">
        {Icon && <Icon size={20} className="text-white" />}
      </div>

      <p className="gradient-brand-text font-display mt-5 text-4xl font-bold md:text-5xl">
        <AnimatedCounter value={metric.value} suffix={metric.suffix ?? ""} />
      </p>
      <p className="text-foreground mt-1 text-sm font-semibold">
        {metric.label}
      </p>

      <p className="text-foreground/60 mt-3 flex-1 text-sm leading-relaxed">
        {metric.context}
      </p>

      {metric.projectSlug && (
        <Link
          href={`/work/${metric.projectSlug}`}
          className="text-accent hover:text-accent/80 mt-4 inline-flex items-center gap-1 text-xs font-medium transition-colors"
        >
          View Case Study
          <ArrowUpRight size={12} />
        </Link>
      )}
    </GlowPanel>
  );
}
