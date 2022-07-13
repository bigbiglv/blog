#### vue-router@4（路由）

---

##### 安装

```npm
npm i vue-router@4
```

##### 引入

`createWebHashHistory`和`createWebHistory`对应`hash`和`history`模式
新建路由表 src/router/index.ts

```ts
//引入路由
import { createRouter, createWebHashHistory,RouteRecordRaw } from 'vue-router'
//引入首页和user页
import Home from '../views/Home/index.vue'
import User from '../views/User/index.vue'
const routes : Array<RouteRecordRaw> = [
  {
    path:'/',
    name:'home',
    meta:{
      keepAlive:true,
      tabbar:true
    },
    component:Home
  },
  {
    path:'/user',
    name:'user',
    meta:{
      keepAlive:true,
      tabbar:true
    },
    component:User
  }
]
export default createRouter({
  history: createWebHashHistory(),
  routes
})
```

在main.ts中使用

```ts
import router from './router'
const app = createApp(App)
app.use(router)
app.mount('#app')
```

##### 编程式跳转

页面中引入对应的路由hooks `useRoute useRouter`

```ts
import { useRouter } from 'vue-router'
const router = useRouter()
router.push('/home')
```
