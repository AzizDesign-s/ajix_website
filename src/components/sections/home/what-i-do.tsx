"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { ServiceCard } from "@/components/sections/home/services/service-card";
import { services } from "@/config/services";
import { staggerContainer } from "@/lib/motion";

export function WhatIDo() {
  return (
    <Section id="what-i-do" className="relative">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="bg-brand-blue/20 absolute top-1/4 right-[10%] h-72 w-72 rounded-full blur-[110px]" />
        <div className="bg-brand-cyan/10 absolute bottom-0 left-[10%] h-72 w-72 rounded-full blur-[110px]" />
      </div>
      <Container>
        <SectionHeader
          eyebrow="What I Do"
          title="Where design meets engineering"
          description="I work across the full stack of product creation — from research and interaction design to shipping production code."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
