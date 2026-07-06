export type ProjectCategorySlug = "ui-ux" | "react" | "framer" | "branding";
export type ProjectStatus = "completed" | "in-progress";
export type Breakout =
  "top-right" | "top-left" | "bottom-right" | "bottom-left" | "center";

export interface Category {
  slug: ProjectCategorySlug;
  name: string;
  description: string;
  image: string;
}

export interface CaseStudyContent {
  problem: string;
  businessGoals: string[];
  research?: string;
  challenges: string;
  businessResults: string;
  keyLearnings: string;
}

export interface ProjectSEO {
  title: string;
  description: string;
  ogImage?: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: ProjectCategorySlug;
  tool: string;
  image: string;
  gallery: string[];
  technologies: string[];
  tags: string[];
  status: ProjectStatus;

  // Controls the Selected Projects section on the homepage.
  // Business rule: max 6 projects can have this set to true.
  // Enforced in the service layer (getSelectedProjects) as a safety net;
  // in the future admin/CMS, the toggle UI itself should disable once 6 are active.
  showInSelectedProjects: boolean;

  // Bento layout fields for the Selected Projects card - deliberately kept as
  // per-project data (not computed) since breakout position/size is an
  // art-directed design choice per project, not something that should be
  // auto-generated.
  span: string;
  breakout: Breakout;
  imageWidth: string;

  liveUrl?: string;
  githubUrl?: string;
  architectureUrl?: string;
  caseStudy?: CaseStudyContent;
  seo: ProjectSEO;
  relatedSlugs: string[];
}
