import { Context } from 'koa'

export interface IRoute {
  path: string
  method: string
  action: (ctx: Context) => void
}

export interface ITodo {
  text: string
  completed?: boolean
}
