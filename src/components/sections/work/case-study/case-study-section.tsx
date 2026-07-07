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
    <Section id={id} className="border-border/30 scroll-mt-32 border-t py-16">
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
