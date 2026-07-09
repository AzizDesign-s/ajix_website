import type { SelectHTMLAttributes } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function Select({
  className,
  children,
  ...props
}: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <div className="relative">
      <select
        className={cn(
          "border-border bg-surface text-foreground focus-visible:ring-ring h-11 w-full appearance-none rounded-md border px-4 pr-10 text-sm focus-visible:ring-2 focus-visible:outline-none",
          className
        )}
        {...props}
      >
        {children}
      </select>
      <ChevronDown
        size={16}
        className="text-muted-foreground pointer-events-none absolute top-1/2 right-4 -translate-y-1/2"
      />
    </div>
  );
}
