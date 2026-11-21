import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Fully static site, deployable to Cloudflare Pages (or anywhere).
export default defineConfig({
    vite: {
        plugins: [tailwindcss()]
    }
});
