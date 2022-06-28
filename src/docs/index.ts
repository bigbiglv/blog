import moduleToRoute from './moduleToRoute'
const module = import.meta.glob('../docs/**/*.md')
//模块转成路由表
export default moduleToRoute(module)