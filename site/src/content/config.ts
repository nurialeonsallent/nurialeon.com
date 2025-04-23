import { defineCollection, z } from "astro:content"
import { authors } from "./authors/authors";

const posts = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      draft: z.boolean().optional(),
      title: z.string(),
      subtitle: z.string().optional(),
      date: z.coerce.date(),
      image: image(),
      author: z.custom<keyof typeof authors>((v) => Object.keys(authors).includes(v as string)).optional()
    }),
})

export const collections = {
  'posts': posts,
};
