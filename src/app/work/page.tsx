import { WorkHero } from "@/components/sections/work/hero/work-hero";
import { CategoryFilter } from "@/components/sections/work/category/category-filter";
import { CategorySection } from "@/components/sections/work/category/category-section";
import { LetsConnect } from "@/components/sections/home/cta/lets-connect";
import { getCategories } from "@/lib/services/category-service";
import {
  getProjectsByCategory,
  getWorkStats,
} from "@/lib/services/project-service";

export default function WorkPage() {
  const categories = getCategories();
  const stats = getWorkStats();

  return (
    <>
      <WorkHero stats={stats} />
      <CategoryFilter categories={categories} />

      {categories.map((category) => (
        <CategorySection
          key={category.slug}
          category={category}
          projects={getProjectsByCategory(category.slug)}
        />
      ))}

      <LetsConnect
        eyebrow="Let's Build Something"
        title={
          <>
            Like what you see?
            <br />
            Let&apos;s talk <span className="text-shimmer">details.</span>
          </>
        }
        description="Open to enterprise product design roles and select freelance engagements across the UAE and beyond."
      />
    </>
  );
}
