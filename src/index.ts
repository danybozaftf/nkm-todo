import Config from './config'
import TodoServer from './TodoServer'

const todoServer: TodoServer = new TodoServer()
const config: Config = new Config()

config.init()
todoServer.init()
