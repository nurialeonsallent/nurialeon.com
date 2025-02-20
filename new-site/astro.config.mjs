import { defineConfig } from "astro/config"
import mdx from "@astrojs/mdx"
import react from "@astrojs/react"
import tailwind from "@astrojs/tailwind"
import sitemap from "@astrojs/sitemap"

import { externalLink } from "./src/utils/externalLink"

// https://astro.build/config
export default defineConfig({
  site: "https://www.nurialeon.com",
  integrations: [
    mdx(),
    sitemap(),
    react(),
    tailwind({ applyBaseStyles: false }),
  ],
  markdown: {
    rehypePlugins: [[externalLink, {}]],
  },
  // image: {
  //   layout: "responsive",
  // },
  redirects: {
    "/sitemap.xml": "/sitemap-index.xml",
  },
})
