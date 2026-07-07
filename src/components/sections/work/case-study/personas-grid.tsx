import type { CaseStudyPersona } from "@/types/project";

export function PersonasGrid({ personas }: { personas: CaseStudyPersona[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {personas.map((persona) => (
        <div
          key={persona.name}
          className="border-border/60 bg-card/20 overflow-hidden rounded-2xl border p-6 shadow-lg backdrop-blur-xl transition-transform duration-300"
        >
          {/* Liquid glass sheen */}
          <div
            aria-hidden="true"
            className="absolute -top-1/3 -left-1/3 h-2/3 w-2/3 rotate-12 rounded-full bg-white/10 blur-3xl transition-transform duration-700 group-hover:translate-x-4 group-hover:translate-y-2"
          />

          {/* Top edge highlight */}
          <div
            aria-hidden="true"
            className="absolute inset-x-4 top-0 h-px bg-linear-to-r from-transparent via-white/40 to-transparent"
          />
          <h3 className="font-display text-foreground text-base font-semibold">
            {persona.name}
          </h3>
          <p className="text-foreground/60 mt-1 text-sm">{persona.role}</p>
          <div className="border-border/30 mt-4 space-y-2 border-t pt-4 text-sm">
            <p>
              <span className="text-accent font-medium">Goal — </span>
              <span className="text-foreground/75">{persona.goal}</span>
            </p>
            <p>
              <span className="text-danger font-medium">Frustration — </span>
              <span className="text-foreground/75">{persona.frustration}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
