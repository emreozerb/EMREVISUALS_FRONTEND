import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  // Use /EMREVISUALS_FRONTEND/ for production build (GitHub Pages), / for development
  base: command === 'build' ? '/EMREVISUALS_FRONTEND/' : '/',
}))
