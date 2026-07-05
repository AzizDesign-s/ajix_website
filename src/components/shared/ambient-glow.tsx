export function AmbientGlow() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <div className="bg-primary/20 absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full blur-[120px]" />
      <div className="bg-accent/10 absolute top-20 right-1/4 h-[400px] w-[400px] rounded-full blur-[120px]" />
    </div>
  );
}
