import { featureIconMap } from "@/config/feature-icons";
import { GlowPanel } from "@/components/ui/work/glow-panel";
import type { ContactMethod } from "@/types/contact";

export function ContactMethodCard({ method }: { method: ContactMethod }) {
  const Icon = featureIconMap[method.icon];

  const content = (
    <GlowPanel className="bg-surface/40 flex h-full flex-col items-start gap-4 p-6 transition-transform duration-300 hover:-translate-y-1">
      <div className="gradient-brand flex h-11 w-11 items-center justify-center rounded-xl">
        {Icon && <Icon size={20} className="text-white" />}
      </div>
      <div>
        <p className="text-muted-foreground text-xs font-medium tracking-wide uppercase">
          {method.label}
        </p>
        <p className="text-foreground mt-1 text-base font-semibold">
          {method.value}
        </p>
      </div>
    </GlowPanel>
  );

  if (!method.href) {
    return <div className="h-full">{content}</div>;
  }

  const isExternal = method.href.startsWith("http");

  return (
    <a
      href={method.href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="focus-visible:ring-ring block h-full rounded-2xl focus-visible:ring-2 focus-visible:outline-none"
      aria-label={`${method.label}: ${method.value}`}
    >
      {content}
    </a>
  );
}
