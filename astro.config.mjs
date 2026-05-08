import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://www.arenillas.es',
  integrations: [tailwind()],
  output: 'static',
});
