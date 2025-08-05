import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),],

  server: {
    port: 5000,
    strictPort: true,

    // 👇 This allows React Router to handle unknown paths
    historyApiFallback: true,
  }
  
})



