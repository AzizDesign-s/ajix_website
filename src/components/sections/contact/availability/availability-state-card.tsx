import { CheckCircle2 } from "lucide-react";
import { availabilityDotColor } from "@/config/availability";
import { cn } from "@/lib/utils";
import type { AvailabilityState } from "@/types/contact";

export function AvailabilityStateCard({
  state,
  isCurrent,
}: {
  state: AvailabilityState;
  isCurrent: boolean;
}) {
  return (
    <div
      className={cn(
        "relative flex flex-col gap-3 rounded-2xl border p-6 transition-all duration-300",
        isCurrent
          ? "gradient-brand-border bg-surface/60 shadow-lg"
          : "border-border/30 bg-surface/20 opacity-60"
      )}
    >
      {isCurrent && (
        <span className="bg-accent absolute -top-3 left-6 flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-semibold tracking-wide text-white uppercase">
          <CheckCircle2 size={11} />
          Current Status
        </span>
      )}

      <div className="flex items-center gap-2.5">
        <span className="relative flex h-2.5 w-2.5">
          {isCurrent && (
            <span
              className={cn(
                "absolute inline-flex h-full w-full animate-ping rounded-full opacity-60",
                availabilityDotColor[state.level]
              )}
            />
          )}
          <span
            className={cn(
              "relative inline-flex h-2.5 w-2.5 rounded-full",
              availabilityDotColor[state.level]
            )}
          />
        </span>
        <h3 className="font-display text-foreground text-base font-semibold">
          {state.label}
        </h3>
      </div>

      <p className="text-foreground/65 text-sm leading-relaxed">
        {state.description}
      </p>
      <p className="text-muted-foreground text-xs font-medium">
        {state.responseTime}
      </p>
    </div>
  );
}
