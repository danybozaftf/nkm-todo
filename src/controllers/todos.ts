import { ObjectID } from 'mongodb'
import mongo from '../database'

export async function getTodos() {
  const db = await mongo.getDb()
  return new Promise((resolve, reject) => {
    db.collection('todos')
      .find({})
      .toArray((err, data) => {
        err ? reject(err) : resolve(data)
      })
  })
}

export async function getTodo(id: string) {
  const db = await mongo.getDb()
  const todoId = new ObjectID(id)
  return new Promise((resolve, reject) => {
    db.collection('todos')
      .findOne({ _id: todoId })
      .then(data => {
        resolve(data)
      })
      .catch(err => reject(err))
  })
}

export async function createTodo(text: string) {
  const db = await mongo.getDb()
  const todo = { text, completed: false }
  return new Promise((resolve, reject) => {
    db.collection('todos').insertOne(todo, (err, response) => {
      err ? reject(err) : resolve(response.ops[0])
    })
  })
}

export async function deleteTodo(id: string) {
  const db = await mongo.getDb()
  const todoId = new ObjectID(id)
  return new Promise((resolve, reject) => {
    db.collection('todos')
      .findOneAndDelete({ _id: todoId })
      .then(res => (res.value === null ? reject() : resolve()))
      .catch(() => reject())
  })
}

export async function updateTodo(id: string, text: string, completed: string) {
  const db = await mongo.getDb()
  const todoId = new ObjectID(id)
  return new Promise((resolve, reject) => {
    db.collection('todos').findOneAndUpdate(
      { _id: todoId },
      {
        $set: {
          text,
          completed
        }
      },
      { returnOriginal: false },
      (err, response) => {
        err ? reject(err) : resolve(response.value)
      }
    )
  })
}

export default {
  getAll: getTodos,
  getOne: getTodo,
  create: createTodo,
  deleteOne: deleteTodo,
  updateOne: updateTodo
}
