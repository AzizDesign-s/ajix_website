import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "gradient-brand-border bg-surface/80 text-foreground/90 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium backdrop-blur-sm",
        className
      )}
    >
      {children}
    </span>
  );
}
