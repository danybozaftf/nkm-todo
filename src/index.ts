import Config from './config'
import TodoService from './TodoService'

const todoServer: TodoService = new TodoService()
const config: Config = new Config()

config.init()
todoServer.init()
