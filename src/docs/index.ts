import { RouteRecordRaw } from "vue-router"
import Layout from '../layout/index.vue'
const module = import.meta.globEager('../docs/**/*.md')
const docs:Array<RouteRecordRaw> = []
for (const key in module) {
  if (Object.prototype.hasOwnProperty.call(module, key)) {
    const element = module[key].default //组件实例
    const path = key.split('/')[2]  //路径截取文件夹名
    const childPath = key.split('/')[3].slice(0,-3)  //路径截取文件名
    if(docs.length){
      //当前已有路由 遍历当前路由判断是否已存在该路由
      docs.forEach((el,i) => {
        if(el.path === '/'+path){
          //如果存在则添加子路由
          el.children?.push({
            path: `${childPath}`,
            name: `${path}-${childPath}`,
            component: element,
            meta: {
              title: `${path}-${childPath}`
            }
          })
        }else if(i === docs.length - 1){
          //如果不存在则添加路由
          docs.push({
            path: '/'+path,
            name: path,
            component: Layout,
            meta:{
              title: path
            },
            children: [{
              path: `${childPath}`,
              name: `${path}-${childPath}`,
              component: element,
              meta: {
                title: `${path}-${childPath}`
              }
            }]
          })
        }
      });
    }else{
      //当前没有路由直接添加
      docs.push({
        path:'/'+path,
        name: path,
        component: Layout,
        meta: {
          title: path
        },
        children: [{
          path: `${childPath}`,
          name: `${path}-${childPath}`,
          component: element,
          meta: {
            title: `${path}-${childPath}`
          }
        }]
      })
    }
  }
}

export default docs