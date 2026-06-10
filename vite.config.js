import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // IMPORTANTE: mude 'nome-do-repositorio' para o nome exato do seu repo no GitHub
  base: '/nome-do-repositorio/', 
})