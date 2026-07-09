import {
  getCurrentAvailability,
  availabilityDotColor,
} from "@/config/availability";
import { cn } from "@/lib/utils";

export function AvailabilityBadge({ className }: { className?: string }) {
  const { label, level } = getCurrentAvailability();

  return (
    <div
      className={cn(
        "border-border bg-surface flex items-center gap-2 rounded-full border px-3 py-1.5",
        className
      )}
      role="status"
      aria-label={`Availability status: ${label}`}
    >
      <span
        className={cn("h-2 w-2 rounded-full", availabilityDotColor[level])}
      />
      <span className="text-foreground/80 text-xs font-medium">{label}</span>
    </div>
  );
}
