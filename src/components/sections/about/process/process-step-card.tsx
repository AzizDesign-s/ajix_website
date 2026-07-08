import { featureIconMap } from "@/config/feature-icons";
import { GlowPanel } from "@/components/ui/work/glow-panel";
import type { ProcessStep } from "@/types/about";

export function ProcessStepCard({ step }: { step: ProcessStep }) {
  const Icon = featureIconMap[step.icon];

  return (
    <GlowPanel className="bg-surface/40 flex h-full flex-col p-5">
      <div className="flex items-center justify-between">
        <span className="font-display text-foreground/10 text-2xl font-bold">
          {step.step}
        </span>
        <div className="gradient-brand flex h-9 w-9 items-center justify-center rounded-lg">
          {Icon && <Icon size={16} className="text-white" />}
        </div>
      </div>
      <h3 className="font-display text-foreground mt-4 text-base font-semibold">
        {step.title}
      </h3>
      <p className="text-foreground/60 mt-1.5 text-sm leading-relaxed">
        {step.description}
      </p>
    </GlowPanel>
  );
}
