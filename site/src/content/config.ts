import { defineCollection, z } from "astro:content"
import { authors } from "./authors/authors";

const posts = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      draft: z.boolean().optional().default(false),
      title: z.string(),
      subtitle: z.string().optional(),
      date: z.coerce.date(),
      image: image().optional(),
      author: z.custom<keyof typeof authors>((v) => Object.keys(authors).includes(v as string)).optional()
    }),
})

export const collections = {
  'posts': posts,
};
