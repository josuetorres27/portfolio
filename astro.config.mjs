// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  // Keep the markup exactly as written: inline elements rely on the whitespace between them.
  compressHTML: false,
  site: 'https://josuetorressibaja.com',
  i18n: {
    // English stays at / and Spanish lives at /es/.
    locales: ['en', 'es'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: false,
    },
  },
  build: {
    // Keep pages as folder/index.html so URLs end in a slash, like the canonical address.
    format: 'directory',
  },
});
