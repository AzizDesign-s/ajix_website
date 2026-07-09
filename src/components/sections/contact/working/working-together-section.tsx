"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { FeatureCard } from "@/components/sections/work/dev-overview/feature-card";
import { staggerContainer, fadeUp } from "@/lib/motion";
import type { ContactService } from "@/types/contact";

export function WorkingTogetherSection({
  services,
}: {
  services: ContactService[];
}) {
  return (
    <Section id="working-together">
      <Container>
        <SectionHeader
          eyebrow="Working Together"
          title="What I can help you with"
          description="From early strategy through shipped product — pick where you need support."
          align="center"
          className="mx-auto"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={fadeUp}>
              <FeatureCard feature={service} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
