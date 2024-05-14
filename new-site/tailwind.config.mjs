/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin"

import * as defaultTheme from "tailwindcss/defaultTheme"

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        brand: {
          400: "hsl(345.63deg 39.66% 43.1%)",
          500: "hsl(345.63deg 39.66% 35.1%)",
          600: "hsl(345.63deg 39.66% 27.1%)",
        },
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
