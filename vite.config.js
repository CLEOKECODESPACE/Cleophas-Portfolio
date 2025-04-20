import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Cleophas-Portfolio/', // Critical for GitHub Pages routing
  server: {
    port: 3000, // Default dev server port
    open: true // Automatically open browser
  },
  build: {
    outDir: 'dist', // Where production files will go
    emptyOutDir: true, // Clear the directory before build
    sourcemap: false // Disable sourcemaps for production
  }
})
