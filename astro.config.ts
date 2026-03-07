import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://affitoku.jp',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  // Performance: Static export for Cloudflare Pages
  output: 'static',
  // Image optimization
  image: {
    service: {
      entrypoint: 'astro/assets/services/squoosh',
    },
    format: ['webp', 'avif'],
  },
  // Build optimization
  build: {
    inlineStylesheets: 'auto',
  },
  // Vite configuration for mobile optimization
  vite: {
    build: {
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
        },
      },
    },
  },
});
