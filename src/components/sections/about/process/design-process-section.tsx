"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { ProcessStepCard } from "@/components/sections/about/process/process-step-card";
import { FlowConnector } from "@/components/sections/about/process/flow-connector";
import { ProcessLoopIndicator } from "@/components/sections/about/process/process-loop-indicator";
import { staggerContainer, fadeUp } from "@/lib/motion";
import type { ProcessStep } from "@/types/about";

export function DesignProcessSection({ steps }: { steps: ProcessStep[] }) {
  // Split into two rows of 4 for the desktop connector layout
  const rowOne = steps.slice(0, 4);
  const rowTwo = steps.slice(4, 8);

  return (
    <Section id="process">
      <Container>
        <SectionHeader
          eyebrow="My Design Process"
          title="A structured path from problem to product"
          description="Eight steps I follow on every project — not linear, but cyclical."
          align="center"
          className="mx-auto"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-12 space-y-6"
        >
          {[rowOne, rowTwo].map((row, rowIndex) => (
            <div key={rowIndex} className="flex items-stretch gap-4">
              {row.map((step, i) => {
                const globalIndex = rowIndex * 4 + i;
                return (
                  <div
                    key={step.step}
                    className="flex flex-1 items-stretch gap-4"
                  >
                    <motion.div variants={fadeUp} className="min-w-0 flex-1">
                      <ProcessStepCard step={step} />
                    </motion.div>
                    {i < row.length - 1 && (
                      <FlowConnector delay={globalIndex * 0.15} />
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </motion.div>

        <ProcessLoopIndicator />
      </Container>
    </Section>
  );
}
