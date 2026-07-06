import { uiUxProjects } from "./ui-ux";
import { reactProjects } from "./react";
import { framerProjects } from "./framer";
import { brandingProjects } from "./branding";
import type { Project } from "@/types/project";

export const allProjects: Project[] = [
  ...uiUxProjects,
  ...reactProjects,
  ...framerProjects,
  ...brandingProjects,
];
