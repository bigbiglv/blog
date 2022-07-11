import { createPinia } from 'pinia';
import type { App } from 'vue';
import themeStore from './themeStore';
export default function setupStore(app:App){
  const store = createPinia();
  app.use(store)
  const storeTheme = themeStore()
  //引入代码块主题
  storeTheme.importCodeTheme()
  //设置默认主题
  storeTheme.setCodeTheme(storeTheme.defaultCodeTheme)
}