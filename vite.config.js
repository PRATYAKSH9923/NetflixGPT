import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    chunkSizeWarningLimit: 1000, // Adjust the limit to your desired value
  },
  plugins: [react()]
  // base: "/NetflixGPT/"
})
