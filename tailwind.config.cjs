/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        'affitoku-red': '#E60012',      // PANTONE 18-1664 TCX (Fiery Red)
        'affitoku-navy': '#002A5B',     // PANTONE 19-4024 TCX (Dress Blues)
        'affitoku-gray': '#F8F8F8',     // PANTONE 12-4302 TCX (Vaporous Gray)
      },
      fontFamily: {
        'sans': ['Noto Sans JP', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
