import { availabilityConfig, currentAvailability } from "@/config/availability";
import { cn } from "@/lib/utils";

export function AvailabilityBadge({ className }: { className?: string }) {
  const { label, dotClassName } = availabilityConfig[currentAvailability];

  return (
    <div
      className={cn(
        "border-border bg-surface flex items-center gap-2 rounded-full border px-3 py-1.5",
        className
      )}
      role="status"
      aria-label={`Availability status: ${label}`}
    >
      <span className={cn("h-2 w-2 rounded-full", dotClassName)} />
      <span className="text-foreground/80 text-xs font-medium">{label}</span>
    </div>
  );
}
