import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
  site: 'https://affitoku.jp',
  integrations: [
    tailwind(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      i18n: {
        defaultLocale: 'ja',
        locales: {
          ja: 'ja-JP',
        },
      },
    }),
    partytown({
      config: {
        forward: ['gtag', 'dataLayer.push'],
      },
      copyFiles: true,
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
