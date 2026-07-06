import { categories } from "@/data/categories";
import { allProjects } from "@/data/projects";
import type { Category, ProjectCategorySlug } from "@/types/project";

export function getCategories(): Category[] {
  return categories;
}

export function getCategoryBySlug(
  slug: ProjectCategorySlug
): Category | undefined {
  return categories.find((category) => category.slug === slug);
}

export function getCategoryProjectCount(slug: ProjectCategorySlug): number {
  return allProjects.filter((project) => project.category === slug).length;
}
