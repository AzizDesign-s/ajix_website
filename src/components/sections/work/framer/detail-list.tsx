import { GlowPanel } from "@/components/ui/work/glow-panel";

export function DetailList({
  items,
}: {
  items: { label: string; value: string }[];
}) {
  return (
    <GlowPanel className="divide-border/40 bg-surface/40 grid grid-cols-1 divide-y sm:grid-cols-2 sm:divide-x sm:divide-y-0">
      {items.map((item) => (
        <div key={item.label} className="px-6 py-4">
          <p className="text-muted-foreground text-xs font-medium tracking-wide uppercase">
            {item.label}
          </p>
          <p className="text-foreground mt-1 text-sm font-medium">
            {item.value}
          </p>
        </div>
      ))}
    </GlowPanel>
  );
}
