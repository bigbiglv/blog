#### 与vue2的变化

---

1. data应该始终为一个函数（setup语法没有data了）
2. 不再提供Vue构造函数，之前的全局api转到app上

```js
import { createdApp } from 'vue
import App from './App.vue
const app = createdApp(App)
app.mount('#app')
```

全局api转移

| Vue | app |
| --- | --- |
| Vue.config.xxx | app.config.xxx |
| Vue.config.productionTip(生产环境提示) | 移除（智能识别） |
| Vue.compontent | app.compontent |
| Vue.directive | app.directive |
| Vue.mixin | app.mixin |
| Vue.use | app.use |
| Vue.prototype | app.config.globalProperties |

3. 过渡动画类名改变，加了个from

| vue2 | vue3 |
| --- | --- |
| .v-enter, .v-leave-to | .v-enter-from, .v-leave-to |
| .v-leave, .v-enter-to | .v-leave-from, .v-enter-to |

4. 移除keycode，如@keyup.13 兼容性问题
5. 移除 `.native`修饰符
6. 移除过滤器 `filter`，建议改用方法或者计算属性
