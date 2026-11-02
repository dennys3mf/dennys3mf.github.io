import { PROJECTS } from "../../../data/projects";
import CaseStudyClient from "./CaseStudyClient";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return PROJECTS.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) return { title: "Case Study | Dennys Marquez" };

  return {
    title: `${project.shortTitle} — Case Study | Dennys Marquez`,
    description: project.summary.en,
    openGraph: {
      title: `${project.shortTitle} — Case Study | Dennys Marquez`,
      description: project.summary.en,
      images: [project.coverImage],
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) notFound();

  return <CaseStudyClient slug={slug} />;
}
