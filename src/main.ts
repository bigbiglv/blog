import { createApp } from 'vue'
import App from './App.vue'
import { createHead } from '@vueuse/head'
import { router } from './router'
import('./assets/css/index.css')
import { createPinia } from 'pinia';
import 'highlight.js/styles/github-dark.css';
const store = createPinia()


const app = createApp(App)
app.use(store)
app.use(router)
app.use(createHead())
app.mount('#app')
