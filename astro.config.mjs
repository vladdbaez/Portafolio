import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://github.com/vladdbaez/',
  base: '/Portafolio',
  integrations: [tailwind()],
  output: 'static',
});