/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin"

import * as defaultTheme from "tailwindcss/defaultTheme"

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        brand: "#7d3647",
      },
      fontFamily: {
        body: [...defaultTheme.fontFamily.sans],
        title: ["Roboto", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("hover", [
        "@media (hover: hover) { &:hover }",
        "@media (hover: none) { &:active }",
      ])
    }),
  ],
}
