import type { ReactNode, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Card({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement> & { children: ReactNode }) {
  return (
    <div
      className={cn(
        "border-border bg-card hover:border-border-hover rounded-lg border p-6 shadow-sm transition-colors duration-200",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
