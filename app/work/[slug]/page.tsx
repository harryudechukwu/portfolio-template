import { client } from "@/sanity/lib/client";
import { PROJECT_QUERY, PROJECT_SLUGS_QUERY } from "@/sanity/lib/queries";
import CaseStudy from "@/components/CaseStudy";
import { notFound } from "next/navigation";

export const revalidate = 60;

export const dynamicParams = true;

export async function generateStaticParams() {
  try {
    const slugs: { slug: string }[] = await client.fetch(PROJECT_SLUGS_QUERY);
    return slugs.filter(Boolean).map(({ slug }) => ({ slug }));
  } catch {
    return [];
  }
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function WorkPage({ params }: PageProps) {
  const { slug } = await params;
  const project = await client.fetch(PROJECT_QUERY, { slug });

  if (!project) notFound();

  return <CaseStudy project={project} />;
}
