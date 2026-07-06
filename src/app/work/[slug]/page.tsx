import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  getAllProjects,
  getProjectBySlug,
} from "@/lib/services/project-service";
import { UiUxTemplate } from "@/components/sections/work/templates/ui-ux-templates";
import { ReactTemplate } from "@/components/sections/work/templates/react-template";
import { FramerTemplate } from "@/components/sections/work/templates/framer-template";
import { BrandingTemplate } from "@/components/sections/work/templates/branding-template";

export function generateStaticParams() {
  return getAllProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: project.seo.title,
    description: project.seo.description,
    openGraph: project.seo.ogImage
      ? { images: [project.seo.ogImage] }
      : undefined,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  switch (project.category) {
    case "ui-ux":
      return <UiUxTemplate project={project} />;
    case "react":
      return <ReactTemplate project={project} />;
    case "framer":
      return <FramerTemplate project={project} />;
    case "branding":
      return <BrandingTemplate project={project} />;
  }
}
