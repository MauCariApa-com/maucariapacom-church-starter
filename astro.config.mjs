// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  // Replace with your site URL
  site: 'https://example.com',

  integrations: [sitemap(), mdx()],

  markdown: {
    shikiConfig: {
      theme: 'github-light',
      wrap: true
    }
  },

  vite: {
    plugins: [tailwindcss()]
  }
});