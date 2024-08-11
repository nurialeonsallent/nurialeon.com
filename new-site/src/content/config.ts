import { defineCollection, z } from "astro:content"

const blog = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().optional(),
      date: z.coerce.date(),
      image: image(),
    }),
})

export const collections = {
  'blog': blog,
};
