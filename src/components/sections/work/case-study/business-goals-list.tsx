import { Check } from "lucide-react";

export function BusinessGoalsList({ goals }: { goals: string[] }) {
  return (
    <ul className="relative space-y-3">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="bg-brand-blue/20 absolute top-1/4 right-[10%] h-72 w-72 rounded-full blur-[110px]" />
        <div className="bg-brand-cyan/10 absolute bottom-0 left-[10%] h-72 w-72 rounded-full blur-[110px]" />
      </div>
      {goals.map((goal) => (
        <li key={goal} className="flex items-start gap-3">
          <span className="bg-accent/15 text-accent mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full">
            <Check size={12} />
          </span>
          <span className="text-foreground/80 text-sm leading-relaxed">
            {goal}
          </span>
        </li>
      ))}
    </ul>
  );
}
