import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
    build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react']
        }
      }
    }
  },
  server: {
    historyApiFallback: true // This helps in dev mode
  }
})
