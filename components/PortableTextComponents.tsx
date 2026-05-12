import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import type { PortableTextComponents } from "@portabletext/react";

function getYoutubeId(url: string): string | null {
  const m = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\s]+)/);
  return m ? m[1] : null;
}

function getVimeoId(url: string): string | null {
  const m = url.match(/vimeo\.com\/(\d+)/);
  return m ? m[1] : null;
}

export const portableTextComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="text-neutral-700 text-[15px] leading-[1.85] mb-5">{children}</p>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-semibold text-neutral-900 mt-14 mb-4 tracking-tight">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-lg font-semibold text-neutral-900 mt-10 mb-3">{children}</h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-2 border-[#003344] pl-5 my-8 text-neutral-500 text-[15px] italic leading-relaxed">
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-neutral-900">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    underline: ({ children }) => <span className="underline">{children}</span>,
    link: ({ children, value }) => (
      <a
        href={value?.href}
        target={value?.blank ? "_blank" : undefined}
        rel={value?.blank ? "noopener noreferrer" : undefined}
        className="text-[#003344] underline underline-offset-2 hover:opacity-70 transition-opacity"
      >
        {children}
      </a>
    ),
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) return null;
      return (
        <figure className="my-10">
          <div className="overflow-hidden rounded-xl">
            <Image
              src={urlFor(value).width(1440).url()}
              alt={value.alt ?? ""}
              width={1440}
              height={900}
              className="w-full object-cover"
            />
          </div>
          {value.caption && (
            <figcaption className="text-xs text-neutral-400 text-center mt-2">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },

    videoEmbed: ({ value }) => {
      if (!value?.url) return null;
      const youtubeId = getYoutubeId(value.url);
      const vimeoId = getVimeoId(value.url);

      return (
        <figure className="my-10">
          <div className="overflow-hidden rounded-xl aspect-video">
            {youtubeId ? (
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${youtubeId}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
                title={value.caption ?? "Video"}
              />
            ) : vimeoId ? (
              <iframe
                src={`https://player.vimeo.com/video/${vimeoId}`}
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
                title={value.caption ?? "Video"}
              />
            ) : (
              <video controls className="w-full h-full rounded-xl">
                <source src={value.url} />
              </video>
            )}
          </div>
          {value.caption && (
            <figcaption className="text-xs text-neutral-400 text-center mt-2">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },

    figmaEmbed: ({ value }) => {
      if (!value?.url) return null;
      const embedUrl = value.url.includes("embed")
        ? value.url
        : `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(value.url)}`;

      return (
        <figure className="my-10">
          {value.title && (
            <p className="text-xs text-neutral-400 mb-2 uppercase tracking-wider">
              {value.title}
            </p>
          )}
          <div
            className="overflow-hidden rounded-xl border border-neutral-100"
            style={{ aspectRatio: "16/9" }}
          >
            <iframe
              src={embedUrl}
              allowFullScreen
              className="w-full h-full border-0"
              title={value.title ?? "Figma prototype"}
            />
          </div>
        </figure>
      );
    },

    imageGallery: ({ value }) => {
      if (!value?.images?.length) return null;
      const images: Array<{ asset?: { _ref: string }; caption?: string; alt?: string }> =
        value.images;

      return (
        <div
          className={`my-10 grid gap-3 ${images.length >= 2 ? "grid-cols-2" : "grid-cols-1"}`}
        >
          {images.map((img, i) => (
            <figure key={i} className="space-y-1">
              <div className="overflow-hidden rounded-xl">
                <Image
                  src={urlFor(img as Parameters<typeof urlFor>[0]).width(800).url()}
                  alt={img.alt ?? img.caption ?? ""}
                  width={800}
                  height={600}
                  className="w-full object-cover"
                />
              </div>
              {img.caption && (
                <figcaption className="text-xs text-neutral-400 text-center">
                  {img.caption}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      );
    },
  },
};
