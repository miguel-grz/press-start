/// <reference types="vitest/config" />
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { routeShells } from './scripts/routeShells.ts'
import { consoles } from './src/data/consoles.ts'

export default defineConfig({
  // Served from https://miguel-grz.github.io/press-start/
  base: '/press-start/',
  plugins: [
    react(),
    tailwindcss(),
    routeShells(
      consoles.map((c) => ({
        path: `console/${c.slug}`,
        title: `${c.name} · PRESS START`,
        description: `The ${c.name} (${c.releaseYear}): its origin, hardware, launch, iconic games and legacy, told as a scroll-driven experience.`,
      })),
    ),
  ],
  build: {
    target: 'es2022',
    // three.js + R3F make the console route chunk ~900 kB raw (~245 kB gzip); it only loads on console pages.
    chunkSizeWarningLimit: 1000,
  },
  test: {
    include: ['src/**/*.test.ts', 'scripts/**/*.test.ts'],
  },
})
