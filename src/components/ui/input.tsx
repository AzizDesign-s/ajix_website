import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Input({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "border-border bg-surface text-foreground placeholder:text-muted-foreground focus-visible:ring-ring h-11 w-full rounded-md border px-4 text-sm focus-visible:ring-2 focus-visible:outline-none",
        className
      )}
      {...props}
    />
  );
}
