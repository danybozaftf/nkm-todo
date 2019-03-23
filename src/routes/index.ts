import Koa from 'koa'
import Router from 'koa-router'
import todoRoutes from './todoRoutes'

export default class Routes {
  private router: any
  private app: Koa
  constructor(app: Koa) {
    this.app = app
    this.router = new Router()
  }
  public init(): void {
    todoRoutes.forEach(route => {
      this.router[route.method](route.path, route.action)
    })
    this.app.use(this.router.routes())
  }
}
