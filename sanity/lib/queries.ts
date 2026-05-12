import { groq } from "next-sanity";

export const SITE_SETTINGS_QUERY = groq`
  *[_type == "siteSettings"][0] {
    name,
    jobTitle,
    bio,
    avatar,
    email,
    resumeUrl,
    socials
  }
`;

export const PROJECTS_QUERY = groq`
  *[_type == "project"] | order(order asc) {
    _id,
    title,
    "slug": slug.current,
    description,
    coverImage,
    tags
  }
`;

export const PROJECT_QUERY = groq`
  *[_type == "project" && slug.current == $slug][0] {
    title,
    "slug": slug.current,
    description,
    coverImage,
    content,
    role,
    timeline,
    tools,
    liveUrl,
    tags
  }
`;

export const PROJECT_SLUGS_QUERY = groq`
  *[_type == "project"] { "slug": slug.current }
`;
