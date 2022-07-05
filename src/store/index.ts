import { createPinia } from 'pinia';
import type { App } from 'vue';
import themeStore from './themeStore';
export default function setupStore(app:App){
  const store = createPinia();
  app.use(store)
  //设置默认代码块主题
  const storeTheme = themeStore()
  storeTheme.setCodeTheme()
}