"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { ProjectCard } from "@/components/sections/home/project/project-card";
import { Button } from "@/components/ui/button";
import { projects } from "@/config/projects";
import { staggerContainer } from "@/lib/motion";

export function SelectedProjects() {
  return (
    <Section id="selected-projects">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeader
            eyebrow="Selected Projects"
            title="A closer look at the work"
            description="Six projects spanning product design, engineering, and motion."
          />
          <Button asChild variant="secondary" size="md" className="shrink-0">
            <a href="/work">View All Work</a>
          </Button>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:auto-rows-57.5 lg:grid-cols-12 lg:gap-6"
        >
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
