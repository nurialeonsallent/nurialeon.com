/** @type {import('tailwindcss').Config} */

import * as defaultTheme from "tailwindcss/defaultTheme"

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        brand: "#7d3647",
      },
      fontFamily: {
        body: ["Roboto", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
