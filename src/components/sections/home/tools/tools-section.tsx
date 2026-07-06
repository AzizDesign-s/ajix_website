import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { ToolsMarquee } from "@/components/sections/home/tools/tools-marquee";
import { toolsRowOne, toolsRowTwo } from "@/config/tools";

export function ToolsSection() {
  return (
    <Section id="tools" className="overflow-hidden">
      <Container>
        <SectionHeader
          eyebrow="Tools & Technologies"
          title="What powers the work"
          align="center"
          className="mx-auto"
        />
      </Container>

      {/* Full-bleed marquee, not constrained by Container, with edge fade mask */}
      <div
        className="relative mx-auto mt-12 flex max-w-7xl flex-col gap-4"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <ToolsMarquee tools={toolsRowOne} direction="left" duration={34} />
        <ToolsMarquee tools={toolsRowTwo} direction="right" duration={28} />
      </div>
    </Section>
  );
}
