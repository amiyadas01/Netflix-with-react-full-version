import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react() , tailwindcss()],
  server:{
    host:"0.0.0.0",
    port:5173,
    allowedHosts:["2a40-2402-a00-404-6978-4ddf-411f-dfec-e0b5.ngrok-free.app"]
  }
  
})
