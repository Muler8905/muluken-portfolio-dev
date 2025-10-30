import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/muluken-portfolio_dev/', // <- replace with your repo name + trailing slash
  plugins: [react()],
})

