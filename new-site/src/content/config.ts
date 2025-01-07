import { defineCollection, z } from "astro:content"
import { authors } from "./authors";

const blog = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().optional(),
      date: z.coerce.date(),
      image: image(),
      author: z.custom<keyof typeof authors>((v) => Object.keys(authors).includes(v as string)).optional()
    }),
})

export const collections = {
  'blog': blog,
};
