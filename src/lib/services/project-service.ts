import { allProjects } from "@/data/projects";
import type { Project, ProjectCategorySlug } from "@/types/project";

const MAX_SELECTED_PROJECTS = 6;

export function getAllProjects(): Project[] {
  return allProjects;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return allProjects.find((project) => project.slug === slug);
}

export function getProjectsByCategory(
  category: ProjectCategorySlug
): Project[] {
  return allProjects.filter((project) => project.category === category);
}

// Powers the homepage Selected Projects section.
// Business rule: max 6 projects, enforced here as a safety net even if
// the mock data (or, later, the database) somehow has more flagged true.
export function getSelectedProjects(): Project[] {
  return allProjects
    .filter((project) => project.showInSelectedProjects)
    .slice(0, MAX_SELECTED_PROJECTS);
}

export function getRelatedProjects(project: Project, limit = 3): Project[] {
  const related = project.relatedSlugs
    .map((slug) => getProjectBySlug(slug))
    .filter((p): p is Project => Boolean(p));
  return related.slice(0, limit);
}

interface ProjectFilters {
  category?: ProjectCategorySlug;
  query?: string;
}

export function filterProjects({ category, query }: ProjectFilters): Project[] {
  let results = allProjects;

  if (category) {
    results = results.filter((project) => project.category === category);
  }

  if (query) {
    const q = query.toLowerCase();
    results = results.filter(
      (project) =>
        project.title.toLowerCase().includes(q) ||
        project.description.toLowerCase().includes(q) ||
        project.tags.some((tag) => tag.toLowerCase().includes(q))
    );
  }

  return results;
}

export function getWorkStats() {
  const categorySet = new Set(allProjects.map((project) => project.category));
  const technologySet = new Set(
    allProjects.flatMap((project) => project.technologies)
  );

  return {
    totalProjects: allProjects.length,
    totalCategories: categorySet.size,
    totalTechnologies: technologySet.size,
  };
}
