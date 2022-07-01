import { createApp } from 'vue'
import App from './App.vue'
import { createHead } from '@vueuse/head'
import { router } from './router'
import('./assets/css/index.css')
import { createPinia } from 'pinia';
// import(`./assets/highlinght/${path}.css`);
// console.log('css',css.default)

const store = createPinia()


const app = createApp(App)
app.use(store)
app.use(router)
app.use(createHead())
app.mount('#app')
