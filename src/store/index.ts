import { createPinia } from 'pinia';
import type { App } from 'vue';
import themeStore from './themeStore';
export default function setupStore(app:App){
  const store = createPinia();
  app.use(store)
  const storeTheme = themeStore()
  //初始化默认主题
  storeTheme.initTheme()
}