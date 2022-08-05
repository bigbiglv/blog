import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { join } from 'path'
import Markdown from 'vite-plugin-vue-markdown'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/], 
    }),
    Components({
      resolvers: [NaiveUiResolver()]
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
        const anchor = require('markdown-it-anchor')
        md.use(anchor,{
          permalink: anchor.permalink.linkInsideHeader({
            symbol: `
              <span aria-hidden="true">#</span>
            `,
            placement: 'before'
          })
        })
        md.use(require('markdown-it-emoji'))
        // md.use(require('markdown-it-github-headings'),{linkIcon:'#'})

      },
    })
  ],
  // base: '/test-blog/',
  base:process.env.NODE_ENV === 'production' ? '/' : '/',
  server: {
    // host:'0.0.0.0',
    port: 3001,
  },
  resolve: {
    alias: {
      '@': join(__dirname, "src"),
    }
  }
})
