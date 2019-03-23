import Koa from 'koa'
import bodyParser from 'koa-body'
import errorMiddleware from './error'

export default class Middlewares {
  constructor(private app: Koa) {
    this.app = app
  }
  public init() {
    this.app.use(errorMiddleware)
    this.app.use(bodyParser())
  }
}
