import { createApp } from 'vue'
import App from './App.vue'
import { createHead } from '@vueuse/head'
import { router } from './router'
const app = createApp(App)

app.use(router)
app.use(createHead())
app.mount('#app')
