import type { AvailabilityState } from "@/types/contact";
import { availabilityDotColor } from "@/config/availability";
import { cn } from "@/lib/utils";

export function AvailabilityPill({ state }: { state: AvailabilityState }) {
  return (
    <div className="border-border/50 bg-surface/60 inline-flex items-center gap-2.5 rounded-full border py-1.5 pr-4 pl-2.5 backdrop-blur-sm">
      <span className="relative flex h-2.5 w-2.5">
        <span
          className={cn(
            "absolute inline-flex h-full w-full animate-ping rounded-full opacity-60",
            availabilityDotColor[state.level]
          )}
        />
        <span
          className={cn(
            "relative inline-flex h-2.5 w-2.5 rounded-full",
            availabilityDotColor[state.level]
          )}
        />
      </span>
      <span className="text-foreground/85 text-xs font-medium">
        {state.label}
      </span>
    </div>
  );
}
