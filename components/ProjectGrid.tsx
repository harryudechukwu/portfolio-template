import ProjectCard from "./ProjectCard";

interface Project {
  _id: string;
  title: string;
  slug: string;
  description?: string;
  coverImage?: object;
  tags?: string[];
}

export default function ProjectGrid({ projects }: { projects: Project[] | null }) {
  if (!projects?.length) return null;

  return (
    <section className="space-y-12">
      {projects.map((project) => (
        <ProjectCard key={project._id} project={project} />
      ))}
    </section>
  );
}
