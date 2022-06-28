import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"
import Layout from '../layout/index.vue'
import Home from '../view/Home.vue'
import docs from '../docs'
export const routes:Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'home',
        component: Home,
        meta: {
          title: '首页'
        }
      }
    ]
  },
  ...docs
]
export const router = createRouter({
  history: createWebHashHistory(),
  routes
})