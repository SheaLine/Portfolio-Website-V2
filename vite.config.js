import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/Portfolio-Website-V2/' : '/',
  plugins: [react(), tailwindcss()],
  server: {
    host: true
  },
})
