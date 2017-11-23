const todolist = require('../models/todolist')

const getTodolist = async (ctx, next) => {
  ctx.body = await  todolist.getTodolistById(ctx.params.id)
  await next()
}

const createTodo = async (ctx, next) => {
  await todolist.createTodo(ctx.request.body)
  ctx.body = {success: true}
  await next()
}
