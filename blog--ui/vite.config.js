import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  
  server: {
    proxy: {
      '/api': {
        target: "http://localhost:5000", // Backend server URL
        changeOrigin: true,
        secure: false, // Set to false if you're working with a local development server without HTTPS
        // rewrite: (path) => path.replace(/^\/api/, ''), // Optional: Remove '/api' prefix before proxying
      },
    },
  },
  
  plugins: [react()],
})
