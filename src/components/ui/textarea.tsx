import type { TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Textarea({
  className,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        "border-border bg-surface text-foreground placeholder:text-muted-foreground focus-visible:ring-ring w-full resize-none rounded-md border px-4 py-3 text-sm focus-visible:ring-2 focus-visible:outline-none",
        className
      )}
      {...props}
    />
  );
}
