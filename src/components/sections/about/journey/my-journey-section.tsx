"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { JourneyTimeline } from "@/components/sections/about/journey/journey-timeline";
import { JourneyMilestoneRow } from "@/components/sections/about/journey/journey-milestone";
import { staggerContainer } from "@/lib/motion";
import type { JourneyMilestone } from "@/types/about";

export function MyJourneySection({
  milestones,
}: {
  milestones: JourneyMilestone[];
}) {
  return (
    <Section id="journey">
      <Container>
        <SectionHeader
          eyebrow="My Journey"
          title="From first pixels to enterprise systems"
          description="A quick look at how the focus evolved — from interfaces, to systems, to shipping production code."
          align="center"
          className="mx-auto"
        />

        <div className="mt-16">
          <JourneyTimeline milestones={milestones} />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:hidden"
          >
            {milestones.map((milestone) => (
              <JourneyMilestoneRow key={milestone.year} milestone={milestone} />
            ))}
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
