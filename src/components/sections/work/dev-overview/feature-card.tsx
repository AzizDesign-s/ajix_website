import type { ReactFeature } from "@/types/project";
import { featureIconMap } from "@/config/tech-icons";
import { GlowPanel } from "@/components/ui/work/glow-panel";
import { HelpCircle } from "lucide-react";

export function FeatureCard({ feature }: { feature: ReactFeature }) {
  const Icon = featureIconMap[feature.icon] ?? HelpCircle;

  return (
    <GlowPanel className="bg-card/20 relative overflow-hidden p-6">
      <div
        aria-hidden="true"
        className="absolute -top-1/3 -left-1/3 h-2/3 w-2/3 rotate-12 rounded-full bg-white/10 blur-3xl transition-transform duration-700 group-hover:translate-x-4 group-hover:translate-y-2"
      />

      {/* Top edge highlight */}
      <div
        aria-hidden="true"
        className="absolute inset-x-4 top-0 h-px bg-linear-to-r from-transparent via-white/40 to-transparent"
      />
      <div className="gradient-brand mb-4 flex h-11 w-11 items-center justify-center rounded-xl">
        <Icon size={20} className="text-white" />
      </div>
      <h3 className="font-display text-foreground text-base font-semibold">
        {feature.title}
      </h3>
      <p className="text-foreground/60 mt-2 text-sm leading-relaxed">
        {feature.description}
      </p>
    </GlowPanel>
  );
}
