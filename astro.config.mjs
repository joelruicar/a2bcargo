import { defineConfig } from "astro/config";
import sitemap from '@astrojs/sitemap';
export default defineConfig({
  output: 'static',

  site: 'https://www.a2bcargo.com',

  integrations: [sitemap()],
});