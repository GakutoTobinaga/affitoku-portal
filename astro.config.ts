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
  // Image optimization (sharp is Astro 5 default; squoosh is deprecated)
  image: {
    format: ['webp', 'avif'],
  },
  // Build optimization: never inline — Cloudflare Pages serves over HTTP/2, CSS caching across pages is more valuable
  build: {
    inlineStylesheets: 'never',
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
