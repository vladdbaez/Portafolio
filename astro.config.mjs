import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://vladdbaez.github.io',
  base: '/Portafolio',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});