import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import { fileURLToPath } from 'url'
// https://vite.dev/config/
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
export default defineConfig({
  
  
  theme: {
    extend: {
      keyframes: {
         gradient: {
           '0%': { backgroundPosition: '0% 50%' },
           '50%': { backgroundPosition: '100% 50%' },
           '100%': { backgroundPosition: '0% 50%' },
         },
       },
       animation: {
         gradient: 'gradient 8s linear infinite'
       },
     },
   },
  
  plugins: [react(),tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  base:"/StephMut-portfolio",
})
