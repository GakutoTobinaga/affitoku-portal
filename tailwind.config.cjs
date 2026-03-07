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
      spacing: {
        'safe': 'env(safe-area-inset-top)',
        'safe-bottom': 'env(safe-area-inset-bottom)',
        'safe-left': 'env(safe-area-inset-left)',
        'safe-right': 'env(safe-area-inset-right)',
      },
      padding: {
        'safe-x': 'env(safe-area-inset-left) env(safe-area-inset-right)',
        'safe-y': 'env(safe-area-inset-top) env(safe-area-inset-bottom)',
      },
      maxWidth: {
        'xs': '20rem',      // 320px
        'sm': '24rem',      // 384px
        'md': '28rem',      // 448px (our standard SP width)
        'lg': '32rem',      // 512px
      },
    },
  },
  plugins: [],
};
