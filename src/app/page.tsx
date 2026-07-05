import { Hero } from "@/components/sections/home/hero";
import { FeaturedCollections } from "@/components/sections/home/featured-collections";
import { WhatIDo } from "@/components/sections/home/what-i-do";
import { SelectedProjects } from "@/components/sections/home/selected-projects";
import { WhyAjix } from "@/components/sections/home/why-ajix";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedCollections />
      <WhatIDo />
      <SelectedProjects />
      <WhyAjix />
    </>
  );
}
