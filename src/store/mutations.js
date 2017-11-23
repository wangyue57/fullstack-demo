const addTodo = (state, text) => state.todos.push({text, completed: false})
const removeTodo = (state, todo) => state.todos = state.todos.filter(item => item !== todo)

export default {addTodo, removeTodo}
