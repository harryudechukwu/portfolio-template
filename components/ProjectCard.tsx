"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeUpOnScroll } from "./animations";
import { urlFor } from "@/sanity/lib/image";

interface Project {
  _id: string;
  title: string;
  slug: string;
  description?: string;
  coverImage?: object;
  tags?: string[];
}

export default function ProjectCard({ project }: { project: Project }) {
  const { title, slug, description, coverImage, tags } = project;

  return (
    <FadeUpOnScroll>
    <Link href={`/work/${slug}`} className="group block space-y-3">
      {coverImage && (
        <div className="overflow-hidden bg-neutral-50">
          <Image
            src={urlFor(coverImage as Parameters<typeof urlFor>[0]).width(1200).url()}
            alt={title}
            width={1200}
            height={800}
            className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-300"
          />
        </div>
      )}
      <div>
        <div className="flex items-center gap-2">
          <p className="text-[15px] font-medium text-neutral-900">{title}</p>
          {tags?.includes("WIP") && (
            <span className="text-xs text-neutral-400 border border-neutral-200 rounded px-1.5 py-0.5 leading-none">
              WIP
            </span>
          )}
        </div>
        {description && (
          <p className="text-[15px] text-neutral-500 mt-0.5 leading-relaxed">{description}</p>
        )}
      </div>
    </Link>
    </FadeUpOnScroll>
  );
}
