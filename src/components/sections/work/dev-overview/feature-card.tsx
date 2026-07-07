import type { ReactFeature } from "@/types/project";
import { featureIconMap } from "@/config/tech-icons";
import { GlowPanel } from "@/components/ui/work/glow-panel";
import { HelpCircle } from "lucide-react";

export function FeatureCard({ feature }: { feature: ReactFeature }) {
  const Icon = featureIconMap[feature.icon] ?? HelpCircle;

  return (
    <GlowPanel className="bg-surface/40 p-6">
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
