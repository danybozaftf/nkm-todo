import { Context } from 'koa'

export default async (ctx: Context, next: any) => {
  try {
    await next()
  } catch (err) {
    ctx.status = err.status || 500
    ctx.body = err.message
  }
}
