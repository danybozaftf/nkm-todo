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
    const { text } = ctx.request.body
    const data = await todos.create(text)
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
    const { text, completed } = ctx.request.body
    const data = await todos.updateOne(id, text, completed)
    ctx.body = {
      data
    }
  } catch (err) {
    ctx.throw(err)
  }
}
