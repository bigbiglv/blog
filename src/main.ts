import { createApp } from 'vue'
import App from './App.vue'
import { createHead } from '@vueuse/head'
import { router } from './router'
import('./assets/css/tailwind.css')
import('./assets/css/common.css')
import('./assets/css/highlinght/a11y-light.css')
import('./assets/css/highlinght/a11y-dark.css')
import('./assets/css/highlinght/agate.css')
// import('../public/highlinght/github.css')
import setupStore from '@/store'

const app = createApp(App)

//注册pinia
setupStore(app)
app.use(router)
app.use(createHead())
app.mount('#app')
