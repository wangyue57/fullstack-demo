const db = require('../config/db')
const modelUrl = '../schema/list.js'

const todolistDb = db.Todolist
const todolist = todolistDb.import(modelUrl)

const getTodolistById = async id => await todolist.findAll({where: {id}, attributes: ['id', 'text', 'completed']})
const createTodo = async data => await todolist.create({id: data.id, text: data.text, completed: data.completed})

module.exports = {getTodolistById, createTodo}
