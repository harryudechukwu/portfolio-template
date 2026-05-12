"use client";

import Link from "next/link";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { urlFor } from "@/sanity/lib/image";
import { portableTextComponents } from "./PortableTextComponents";
import { FadeUpStagger, FadeUpItem, FadeUpOnScroll } from "./animations";

interface Project {
  title: string;
  slug: string;
  description?: string;
  coverImage?: object;
  content?: Array<{ _type: string; [key: string]: unknown }>;
  role?: string;
  timeline?: string;
  tools?: string[];
  liveUrl?: string;
  tags?: string[];
}

export default function CaseStudy({ project }: { project: Project }) {
  const { title, description, coverImage, content, role, timeline, tools, liveUrl, tags } =
    project;

  const hasMeta = role || timeline || tools?.length || liveUrl;

  return (
    <main className="max-w-[600px] mx-auto px-6 py-16">
      <FadeUpStagger>
        <FadeUpItem>
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-[15px] text-neutral-400 hover:text-neutral-900 transition-colors mb-12"
          >
            ← Back
          </Link>
        </FadeUpItem>

        <FadeUpItem>
          <header className="mb-12 space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="text-4xl font-semibold tracking-tight text-neutral-900 leading-tight">
                {title}
              </h1>
              {tags?.includes("WIP") && (
                <span className="text-xs text-neutral-400 border border-neutral-200 rounded px-2 py-1 self-start mt-1.5">
                  WIP
                </span>
              )}
            </div>

            {description && (
              <p className="text-[15px] text-neutral-500 leading-relaxed">{description}</p>
            )}

            {hasMeta && (
              <div className="flex flex-wrap gap-x-8 gap-y-4 pt-5 border-t border-neutral-100">
                {role && (
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-neutral-400 mb-0.5">
                      Role
                    </p>
                    <p className="text-[15px] text-neutral-700">{role}</p>
                  </div>
                )}
                {timeline && (
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-neutral-400 mb-0.5">
                      Timeline
                    </p>
                    <p className="text-[15px] text-neutral-700">{timeline}</p>
                  </div>
                )}
                {tools?.length ? (
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-neutral-400 mb-0.5">
                      Tools
                    </p>
                    <p className="text-[15px] text-neutral-700">{tools.join(", ")}</p>
                  </div>
                ) : null}
                {liveUrl && (
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-neutral-400 mb-0.5">
                      Live
                    </p>
                    <a
                      href={liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[15px] text-accent hover:underline"
                    >
                      View project ↗
                    </a>
                  </div>
                )}
              </div>
            )}
          </header>
        </FadeUpItem>

        {coverImage && (
          <FadeUpItem>
            <div className="mb-14 overflow-hidden">
              <Image
                src={urlFor(coverImage as Parameters<typeof urlFor>[0])
                  .width(1440)
                  .height(900)
                  .url()}
                alt={title}
                width={1440}
                height={900}
                className="w-full h-auto"
                priority
              />
            </div>
          </FadeUpItem>
        )}
      </FadeUpStagger>

      {content && (
        <FadeUpOnScroll>
          <article>
            <PortableText value={content} components={portableTextComponents} />
          </article>
        </FadeUpOnScroll>
      )}
    </main>
  );
}
