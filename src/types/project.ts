export type ProjectCategorySlug = "ui-ux" | "react" | "framer" | "branding";
export type ProjectStatus = "completed" | "in-progress";
export type Breakout =
  "top-right" | "top-left" | "bottom-right" | "bottom-left" | "center";

export interface ReactFeature {
  icon: string;
  title: string;
  description: string;
}

export interface ReactProjectContent {
  about: string;
  aboutImage?: string;
  features?: ReactFeature[];
  architecture: string;
  architectureImage?: string;
}

export interface Category {
  slug: ProjectCategorySlug;
  name: string;
  description: string;
  image: string;
}

export interface GalleryImage {
  src: string;
  orientation: "portrait" | "landscape" | "square";
}

export interface CaseStudyMetric {
  label: string;
  value: number;
  suffix?: string;
}

export interface CaseStudyPersona {
  name: string;
  role: string;
  goal: string;
  frustration: string;
}

export interface CaseStudyJourneyStage {
  stage: string;
  description: string;
}

export interface CaseStudyOverview {
  role: string;
  timeline: string;
  tools: string[];
}

export interface CaseStudyContent {
  coverImage?: string;
  overview: CaseStudyOverview;
  problem: string;
  businessGoals: string[];
  businessGoalsImage?: string;
  research?: string;
  researchImage?: string;
  personas?: CaseStudyPersona[];
  journeyMap?: CaseStudyJourneyStage[];
  wireframes?: GalleryImage[];
  designSystem?: string;
  designSystemImage?: string;
  highFidelity?: GalleryImage[];
  accessibility?: string;
  accessibilityImage?: string;
  challenges: string;
  challengesImage?: string;
  businessResults: string;
  resultMetrics?: CaseStudyMetric[];
  keyLearnings: string;
  keyLearningsImage?: string;
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
  gallery: GalleryImage[];
  technologies: string[];
  tags: string[];
  status: ProjectStatus;
  framerContent?: FramerProjectContent; // only present for "framer" category
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
  reactContent?: ReactProjectContent;
  liveUrl?: string;
  githubUrl?: string;
  architectureUrl?: string;
  caseStudy?: CaseStudyContent;
  seo: ProjectSEO;
  relatedSlugs: string[];
}

export interface FramerDetail {
  label: string;
  value: string;
}

export interface FramerProjectContent {
  about: string;
  aboutImage?: string;
  features?: ReactFeature[]; // same shape/icon system as the React template
  cmsDetails?: FramerDetail[];
}
