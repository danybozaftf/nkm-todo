import { Context } from 'koa'
import todos from '../controllers/todos'

export async function getTodos(ctx: Context) {
  try {
    const data = await todos.getAll()
    ctx.body = { data }
  } catch (err) {
    ctx.throw(err)
  }
}

export async function getTodo(ctx: Context) {
  try {
    const { id } = (ctx as any).params
    const data = await todos.getOne(id)
    data ? (ctx.body = { data }) : ctx.throw(404, 'Todo not found')
  } catch (err) {
    ctx.throw(err)
  }
}

export async function createTodo(ctx: Context) {
  try {
    const { body } = ctx.request.body
    const data = await todos.create(body)
    ctx.body = {
      data
    }
  } catch (err) {
    ctx.throw(err)
  }
}

export async function deleteTodo(ctx: Context) {
  try {
    const { id } = (ctx as any).params
    await todos.deleteOne(id)
    ctx.status = 200
    ctx.body = {
      data: true
    }
  } catch (err) {
    ctx.throw(err)
  }
}

export async function updateTodo(ctx: Context) {
  try {
    const { id } = (ctx as any).params
    const { body, completed } = ctx.request.body
    const data = await todos.updateOne(id, body, completed)
    ctx.body = {
      data
    }
  } catch (err) {
    ctx.throw(err)
  }
}
