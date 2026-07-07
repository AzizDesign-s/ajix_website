import type { ReactNode } from "react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

export function CaseStudySection({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <Section
      id={id}
      className="border-border/30 relative scroll-mt-10 border-t"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="bg-brand-blue/20 absolute top-1/4 right-[10%] h-72 w-72 rounded-full blur-[110px]" />
        <div className="bg-brand-cyan/10 absolute bottom-0 left-[10%] h-72 w-72 rounded-full blur-[110px]" />
      </div>
      <Container>
        <span className="text-accent text-xs font-semibold tracking-widest uppercase">
          {eyebrow}
        </span>
        <h2 className="font-display text-foreground mt-2 text-2xl font-semibold md:text-3xl">
          {title}
        </h2>
        <div className="mt-8">{children}</div>
      </Container>
    </Section>
  );
}
