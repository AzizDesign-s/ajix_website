"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { IndustryCard } from "@/components/sections/about/industry/industry-card";
import { staggerContainer, fadeUp } from "@/lib/motion";
import type { Industry } from "@/types/about";

export function IndustriesSection({ industries }: { industries: Industry[] }) {
  return (
    <Section id="industries">
      <Container>
        <SectionHeader
          eyebrow="Industries & Domain Experience"
          title="Complexity I've designed for"
          description="A range of enterprise domains, each with its own operational logic."
          align="center"
          className="mx-auto"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5"
        >
          {industries.map((industry) => (
            <motion.div key={industry.name} variants={fadeUp}>
              <IndustryCard industry={industry} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
