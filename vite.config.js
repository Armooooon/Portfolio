import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Portfolio/',  // Ensure this matches your repository name
  plugins: [react()],
})
