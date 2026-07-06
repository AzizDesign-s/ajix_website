export function ProjectGridSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="border-border/40 bg-surface/50 h-72 animate-pulse rounded-2xl border"
        />
      ))}
    </div>
  );
}
