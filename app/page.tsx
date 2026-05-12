import { client } from "@/sanity/lib/client";
import { SITE_SETTINGS_QUERY, PROJECTS_QUERY } from "@/sanity/lib/queries";
import Hero from "@/components/Hero";
import ProjectGrid from "@/components/ProjectGrid";
import Contact from "@/components/Contact";

export const revalidate = 60;

export default async function HomePage() {
  let settings = null;
  let projects = null;

  try {
    [settings, projects] = await Promise.all([
      client.fetch(SITE_SETTINGS_QUERY),
      client.fetch(PROJECTS_QUERY),
    ]);
  } catch {
    // Sanity not configured yet — will show empty state
  }

  return (
    <main className="max-w-[600px] mx-auto px-6 py-16 space-y-16">
      <Hero settings={settings} />
      <ProjectGrid projects={projects} />
      <Contact settings={settings} />
    </main>
  );
}
