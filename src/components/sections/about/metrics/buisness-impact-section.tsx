"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { MetricImpactCard } from "@/components/sections/about/metrics/metric-impact-card";
import { staggerContainer, fadeUp } from "@/lib/motion";
import type { BusinessMetric } from "@/types/about";

export function BusinessImpactSection({
  metrics,
}: {
  metrics: BusinessMetric[];
}) {
  return (
    <Section id="business-impact" className="relative overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="bg-brand-blue/10 absolute top-1/4 right-[12%] h-72 w-72 rounded-full blur-[110px]" />
      </div>

      <Container className="relative z-10">
        <SectionHeader
          eyebrow="Business Impact"
          title="Outcomes, not just deliverables"
          description="Every number here traces back to a real project — not a projection."
          align="center"
          className="mx-auto"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {metrics.map((metric) => (
            <motion.div key={metric.label} variants={fadeUp}>
              <MetricImpactCard metric={metric} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
