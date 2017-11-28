const addTodo = (state, text) => state.todos.push({text, completed: false})
const removeTodo = (state, todo) => state.todos = state.todos.filter(item => item !== todo)
const activeTodo = (state, todo) => todo.completed = false
const completeTodo = (state, todo) => todo.completed = true

export default {addTodo, removeTodo, completeTodo, activeTodo}
