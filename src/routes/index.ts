import Router from 'koa-router'
import todoRoutes from './todoRoutes'
const router: any = new Router()

todoRoutes.forEach(route => {
  router[route.method](route.path, route.action)
})

export default router
