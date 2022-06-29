import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { join } from 'path'
import Markdown from 'vite-plugin-vue-markdown'

export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/], 
    }),
    Markdown({
      headEnabled: true 
    })
  ],
  server: {
    port: 3001,
  },
  resolve: {
    alias: {
      '@': join(__dirname, "src"),
    }
  }
})
