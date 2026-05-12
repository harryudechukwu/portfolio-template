"use client";

import { FadeUpOnScroll } from "./animations";

interface Social {
  platform: string;
  label: string;
  url: string;
}

interface ContactProps {
  settings: {
    socials?: Social[];
  } | null;
}

export default function Contact({ settings }: ContactProps) {
  if (!settings?.socials?.length) return null;

  return (
    <FadeUpOnScroll>
    <section className="space-y-3 pb-4">
      <p className="text-xs font-semibold uppercase tracking-widest text-accent">
        Contact
      </p>
      <ul className="space-y-2">
        {settings.socials.map((social, i) => (
          <li key={i}>
            <a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[15px] text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              {social.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
    </FadeUpOnScroll>
  );
}
