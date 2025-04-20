/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin"

import * as defaultTheme from "tailwindcss/defaultTheme"

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f9f5f6",
          100: "#f3eaeb",
          200: "#e6d5d7",
          300: "#dac0c4",
          400: "#8b4957",
          500: "#7d3647",
          600: "#6c2e3d",
          700: "#4b1e28",
          800: "#3b161f",
          900: "#110306",
        },
      },
      fontFamily: {
        body: [...defaultTheme.fontFamily.sans],
        title: ["NLTitles", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents, theme, addVariant }) {
      addVariant("hover", [
        "@media (hover: hover) { &:hover }",
        "@media (hover: none) { &:active }",
      ])
    }),
  ],
}
