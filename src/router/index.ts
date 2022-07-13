import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from "vue-router"
import Layout from '@/layout/index.vue'
import Home from '@/view/Home.vue'
import docs from '@/docs'
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
      },
      {
        path: '/setting',
        name: 'setting',
        component: () => import('@/view/Setting.vue'),
        meta: {
          title: '设置',
          hidden: true
        }
      }
    ]
  },
  ...docs
]
export const router = createRouter({
  // history: createWebHistory(),
  history: createWebHashHistory(),
  routes
})