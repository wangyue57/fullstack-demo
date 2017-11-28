const db = require('../config/db')
const modelUrl = '../schema/user'

const todolistDb = db.Todolist
const user = todolistDb.import(modelUrl)

const getUserById = async id => await user.findOne({where: {id}})
const getUserByName = async name => await user.findOne({where: {name}})
const addUser = async data => await user.create(data)

module.exports = {getUserById, getUserByName, addUser}
