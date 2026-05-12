"use client";

import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { urlFor } from "@/sanity/lib/image";
import { FadeUpStagger, FadeUpItem } from "./animations";

interface Social {
  platform: string;
  label: string;
  url: string;
}

interface SiteSettings {
  name?: string;
  jobTitle?: string;
  avatar?: object;
  bio?: Array<{ _type: string; [key: string]: unknown }>;
  email?: string;
  resumeUrl?: string;
  socials?: Social[];
}

const bioPTComponents = {
  block: {
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p className="text-[15px] leading-relaxed text-neutral-700 mb-3">{children}</p>
    ),
  },
  marks: {
    strong: ({ children }: { children?: React.ReactNode }) => (
      <strong className="font-semibold text-neutral-900">{children}</strong>
    ),
    em: ({ children }: { children?: React.ReactNode }) => (
      <em className="italic">{children}</em>
    ),
    link: ({ children, value }: { children?: React.ReactNode; value?: { href: string } }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="underline underline-offset-2 text-neutral-900 hover:text-accent"
      >
        {children}
      </a>
    ),
  },
};

export default function Hero({ settings }: { settings: SiteSettings | null }) {
  if (!settings) return null;

  const { name, jobTitle, avatar, bio, email, resumeUrl } = settings;

  return (
    <FadeUpStagger className="space-y-5">
      <FadeUpItem>
        <div className="flex items-center gap-3">
          {avatar && (
            <Image
              src={urlFor(avatar as Parameters<typeof urlFor>[0]).width(80).height(80).url()}
              alt={name ?? ""}
              width={40}
              height={40}
              className="rounded-full object-cover shrink-0"
            />
          )}
          <div>
            <p className="text-[15px] font-semibold text-neutral-900 leading-tight">{name}</p>
            <p className="text-[15px] text-neutral-500">{jobTitle}</p>
          </div>
        </div>
      </FadeUpItem>

      {bio && (
        <FadeUpItem>
          <PortableText value={bio} components={bioPTComponents} />
        </FadeUpItem>
      )}

      <FadeUpItem>
        <div className="flex gap-3 flex-wrap">
          {email && (
            <a
              href={`mailto:${email}`}
              className="px-5 py-3 bg-[#003344] text-[#E5E999] text-[15px] font-medium hover:opacity-90 transition-opacity"
            >
              email me
            </a>
          )}
          {resumeUrl && (
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 bg-[#F3F4F4] text-[#003344] text-[15px] font-medium hover:bg-[#e8e9e9] transition-colors"
            >
              see resume
            </a>
          )}
        </div>
      </FadeUpItem>
    </FadeUpStagger>
  );
}
