import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://gigallard.com.ar',
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [sitemap()],
  output: 'static',
});
