import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/muluken-portfolio-dev/',   // <-- exact repo name with hyphens
  plugins: [react()],
})
