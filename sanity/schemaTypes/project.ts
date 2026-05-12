import { defineType, defineField, defineArrayMember } from "sanity";

export default defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Short Description",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Lower number shows first",
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
      options: {
        list: [
          { title: "WIP", value: "WIP" },
          { title: "Featured", value: "featured" },
        ],
      },
    }),
    defineField({ name: "role", title: "My Role", type: "string" }),
    defineField({ name: "timeline", title: "Timeline", type: "string" }),
    defineField({
      name: "tools",
      title: "Tools Used",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
    }),
    defineField({ name: "liveUrl", title: "Live URL", type: "url" }),
    defineField({
      name: "content",
      title: "Case Study Content",
      type: "array",
      of: [
        defineArrayMember({
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
            { title: "Quote", value: "blockquote" },
          ],
          marks: {
            decorators: [
              { title: "Bold", value: "strong" },
              { title: "Italic", value: "em" },
              { title: "Underline", value: "underline" },
            ],
            annotations: [
              {
                name: "link",
                type: "object",
                title: "Link",
                fields: [
                  { name: "href", type: "url", title: "URL" },
                  {
                    name: "blank",
                    type: "boolean",
                    title: "Open in new tab",
                    initialValue: true,
                  },
                ],
              },
            ],
          },
        }),
        defineArrayMember({
          type: "image",
          options: { hotspot: true },
          fields: [
            { name: "caption", type: "string", title: "Caption" },
            { name: "alt", type: "string", title: "Alt text" },
          ],
        }),
        defineArrayMember({
          name: "videoEmbed",
          type: "object",
          title: "Video Embed",
          fields: [
            {
              name: "url",
              type: "url",
              title: "URL",
              description: "YouTube, Vimeo, or direct video URL",
            },
            { name: "caption", type: "string", title: "Caption" },
          ],
          preview: { select: { title: "url" } },
        }),
        defineArrayMember({
          name: "figmaEmbed",
          type: "object",
          title: "Figma Prototype",
          fields: [
            {
              name: "url",
              type: "string",
              title: "Figma Share URL",
              description: "Paste the Figma share link here",
            },
            { name: "title", type: "string", title: "Label (optional)" },
          ],
          preview: {
            select: { title: "title", subtitle: "url" },
          },
        }),
        defineArrayMember({
          name: "imageGallery",
          type: "object",
          title: "Image Gallery",
          description: "Side-by-side images (2-column grid)",
          fields: [
            {
              name: "images",
              type: "array",
              title: "Images",
              of: [
                {
                  type: "image",
                  options: { hotspot: true },
                  fields: [
                    { name: "caption", type: "string", title: "Caption" },
                    { name: "alt", type: "string", title: "Alt text" },
                  ],
                },
              ],
            },
          ],
          preview: { select: { media: "images.0" } },
        }),
      ],
    }),
  ],
  preview: {
    select: { title: "title", media: "coverImage" },
  },
});
