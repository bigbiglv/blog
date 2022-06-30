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
      headEnabled: true,
      markdownItOptions: {
        html: true,
        linkify: true,
        typographer: true,
      },
      markdownItSetup(md) {
        md.use(require('markdown-it-highlightjs'))
        // add anchor links to your H[x] tags
        md.use(require('markdown-it-anchor'))
        // add code syntax highlighting with Prism
        // md.use(require('markdown-it-prism'))
        md.use(require('markdown-it-emoji'))

      },
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
