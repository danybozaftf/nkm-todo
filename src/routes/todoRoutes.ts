import { IRoute } from '../common/types'
import {
  createTodo,
  deleteTodo,
  getTodo,
  getTodos,
  updateTodo
} from '../handlers/todos'

const routes: IRoute[] = [
  {
    method: 'get',
    path: '/todos',
    action: getTodos
  },
  {
    method: 'get',
    path: '/todos/:id',
    action: getTodo
  },
  {
    method: 'post',
    path: '/todos',
    action: createTodo
  },
  {
    method: 'put',
    path: '/todos/:id',
    action: updateTodo
  },
  {
    method: 'delete',
    path: '/todos/:id',
    action: deleteTodo
  }
]

export default routes
