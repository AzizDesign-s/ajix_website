"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { CollectionCard } from "@/components/sections/collection-card";
import { collections } from "@/config/collections";
import { staggerContainer, fadeUp } from "@/lib/motion";

export function FeaturedCollections() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <Section id="work-preview" className="relative overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="bg-brand-blue/10 absolute top-1/4 left-[10%] h-72 w-72 rounded-full blur-[110px]" />
        <div className="bg-brand-cyan/10 absolute right-[10%] bottom-0 h-72 w-72 rounded-full blur-[110px]" />
      </div>

      <Container className="relative z-10">
        <SectionHeader
          eyebrow="Selected Work"
          title="Explore by discipline"
          description="Four ways to see how I think, design, and build — pick a lane."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {collections.map((collection, index) => (
            <motion.div key={collection.slug} variants={fadeUp}>
              <CollectionCard
                collection={collection}
                index={index}
                hoveredIndex={hoveredIndex}
                onHover={setHoveredIndex}
              />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
