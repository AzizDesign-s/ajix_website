export interface Tool {
  slug: string; // Simple Icons slug (used when type is "icon")
  label: string;
  type: "icon" | "badge";
  badgeText?: string; // short initials, only used when type is "badge"
}

export const toolsRowOne: Tool[] = [
  { slug: "figma", label: "Figma", type: "icon" },
  { slug: "", label: "Illustrator", type: "badge", badgeText: "Ai" },
  { slug: "", label: "Photoshop", type: "badge", badgeText: "Ps" },
  { slug: "", label: "Adobe XD", type: "badge", badgeText: "Xd" },
  { slug: "sketch", label: "Sketch", type: "icon" },
  { slug: "framer", label: "Framer", type: "icon" },
  { slug: "react", label: "React", type: "icon" },
  { slug: "nextdotjs", label: "Next.js", type: "icon" },
];

export const toolsRowTwo: Tool[] = [
  { slug: "javascript", label: "JavaScript", type: "icon" },
  { slug: "typescript", label: "TypeScript", type: "icon" },
  { slug: "tailwindcss", label: "Tailwind CSS", type: "icon" },
  { slug: "framer", label: "Framer Motion", type: "icon" },
  { slug: "jira", label: "Jira", type: "icon" },
  { slug: "notion", label: "Notion", type: "icon" },
  { slug: "miro", label: "Miro", type: "icon" },
];
