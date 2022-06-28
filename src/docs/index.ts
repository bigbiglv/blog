import moduleToRoute from './moduleToRoute'
const module = import.meta.glob('../docs/**/*.md')

export default moduleToRoute(module)