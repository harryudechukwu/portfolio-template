import { defineType, defineField, defineArrayMember } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Full Name",
      type: "string",
    }),
    defineField({
      name: "jobTitle",
      title: "Job Title",
      type: "string",
    }),
    defineField({
      name: "avatar",
      title: "Avatar",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "bio",
      title: "Bio",
      type: "array",
      of: [
        defineArrayMember({
          type: "block",
          styles: [{ title: "Normal", value: "normal" }],
          marks: {
            decorators: [
              { title: "Bold", value: "strong" },
              { title: "Italic", value: "em" },
            ],
            annotations: [
              {
                name: "link",
                type: "object",
                title: "Link",
                fields: [{ name: "href", type: "url", title: "URL" }],
              },
            ],
          },
        }),
      ],
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),
    defineField({
      name: "resumeUrl",
      title: "Resume URL",
      type: "url",
    }),
    defineField({
      name: "socials",
      title: "Social Links",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            { name: "platform", type: "string", title: "Platform" },
            { name: "label", type: "string", title: "Display Label" },
            { name: "url", type: "url", title: "URL" },
          ],
          preview: {
            select: { title: "label", subtitle: "url" },
          },
        }),
      ],
    }),
  ],
});
