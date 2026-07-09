"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { ToolsCategoryGroup } from "@/components/sections/about/tools/tool-category-group";
import { staggerContainer } from "@/lib/motion";
import type { AboutTool } from "@/types/about";

export function ToolsSection({
  toolsByCategory,
  categoryOrder,
}: {
  toolsByCategory: Record<AboutTool["category"], AboutTool[]>;
  categoryOrder: AboutTool["category"][];
}) {
  return (
    <Section id="tools">
      <Container>
        <SectionHeader
          eyebrow="Tools & Technologies"
          title="The ecosystem behind the work"
          description="Design, engineering, analytics, and collaboration tools I use daily."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2"
        >
          {categoryOrder.map((category) => (
            <ToolsCategoryGroup
              key={category}
              category={category}
              tools={toolsByCategory[category] ?? []}
            />
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
