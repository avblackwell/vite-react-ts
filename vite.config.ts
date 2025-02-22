import path from 'node:path'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'

export default defineConfig({
  plugins: [TanStackRouterVite(), react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/app'),
    },
  },
  base: process.env.NODE_ENV === 'development' ? '/' : './',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
})
