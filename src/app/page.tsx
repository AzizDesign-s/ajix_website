import { Hero } from "@/components/sections/home/hero/hero";
import { FeaturedCollections } from "@/components/sections/home/featured-work/featured-collections";
import { WhatIDo } from "@/components/sections/home/services/what-i-do";
import { SelectedProjects } from "@/components/sections/home/project/selected-projects";
import { WhyAjix } from "@/components/sections/home/why/why-ajix";
import { LetsConnect } from "@/components/sections/home/cta/lets-connect";
import { ToolsSection } from "@/components/sections/home/tools/tools-section";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedCollections />
      <WhatIDo />
      <ToolsSection />
      <SelectedProjects />
      <WhyAjix />
      <LetsConnect />
    </>
  );
}
