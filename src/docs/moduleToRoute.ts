/*
* 批量导入的模块转成路由表
* @param {Array<Module>} modules 模块列表 
* @return {Array<RouteRecordRaw>} 路由表
*/
import { RouteRecordRaw } from "vue-router"
import Layout from "../layout/index.vue"
export default function moduleToRoute(modules:Record<string, {[key: string]: any;}>){
  const routes:Array<RouteRecordRaw> = []
  for (const key in modules) {
    if (Object.prototype.hasOwnProperty.call(modules, key)) {
      const module = modules[key]  //组件实例
      
      //父级路由信息
      const name = key.split('/')[2]  //获取到docs下的文件夹名作为的name
      const path = `/${name}`
      //子级路由信息
      const childName = key.split('/')[3].slice(0,-3)  //截取到文件名
      const childPath = childName
      if(routes.length > 0){
        let index = routes.findIndex(route => route.name === name)
        //检查父级路由是否存在
        if(index > -1){
          //如果存在则添加子路由
          routes[index].children?.push({
            path: childPath,
            name: `${name}-${childName}`,
            component: module,
            meta: {
              title: `${name}-${childName}`
            }
          })
        }else{
          //如果不存在则添加父级路由和当前为子路由
          routes.push({
            path: path,
            name: name,
            component: Layout,
            meta: {
              title: name
            },
            children: [
              {
                path: childPath,
                name: `${name}-${childName}`,
                component: module,
                meta: {
                  title: `${name}-${childName}`
                }
              }
            ]
          })
        }
      }else{
        //当前还没有任何路由
        //push一个路由做为父级路由并添加当前为子级路由
        routes.push({
          path: path,
          name: name,
          component: Layout,
          meta: {
            title: name
          },
          children: [
            {
              path: childPath,
              name: `${name}-${childName}`,
              component: module,
              meta: {
                title: `${name}-${childName}`
              }
            }
          ]
        })
      }
    }
  }
  return routes
}