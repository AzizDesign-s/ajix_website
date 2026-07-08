"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { SkillFilterTabs } from "@/components/sections/about/skill/skill-filter-tabs";
import { SkillChip } from "@/components/sections/about/skill/skill-chips";
import type { Skill } from "@/types/about";

type FilterValue = Skill["category"] | "All";

export function SkillsSection({
  skills,
  categoryOrder,
}: {
  skills: Skill[];
  categoryOrder: Skill["category"][];
}) {
  const [active, setActive] = useState<FilterValue>("All");

  const filteredSkills = useMemo(() => {
    if (active === "All") return skills;
    return skills.filter((skill) => skill.category === active);
  }, [skills, active]);

  return (
    <Section id="skills">
      <Container>
        <SectionHeader
          eyebrow="Skills & Expertise"
          title="Capabilities across the full product lifecycle"
          description="Filter by discipline to see specific tools and skills."
          align="center"
          className="mx-auto"
        />

        <div className="mt-10 flex justify-center">
          <SkillFilterTabs
            categories={categoryOrder}
            active={active}
            onChange={setActive}
          />
        </div>

        <motion.div
          layout
          className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <SkillChip key={skill.name} skill={skill} />
            ))}
          </AnimatePresence>
        </motion.div>
      </Container>
    </Section>
  );
}
