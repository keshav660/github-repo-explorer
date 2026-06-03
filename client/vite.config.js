import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
        // https://vite.dev/config/
        //added tailwindcss plugin to the vite config file to enable tailwindcss in the project 
export default defineConfig({
  plugins: [react(), tailwindcss()],
})

