import { SearchX } from "lucide-react";

export function EmptyState({
  title = "No projects found",
  description = "Try a different category or search term.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <div className="border-border/40 bg-surface/30 flex flex-col items-center justify-center rounded-2xl border px-6 py-20 text-center">
      <SearchX size={32} className="text-muted-foreground" />
      <h3 className="font-display text-foreground mt-4 text-lg font-semibold">
        {title}
      </h3>
      <p className="text-foreground/60 mt-1 text-sm">{description}</p>
    </div>
  );
}
