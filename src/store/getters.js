const allCompleted = state => state.todos.every(todo => todo.completed)
const activeTodos = state => state.todos.filter(todo => !todo.completed)
const completedTodos = state => state.todos.filter(todo => todo.completed)
const activeNum = state => activeTodos(state).length
const completedNum = state => completedTodos(state).length

export default {allCompleted, activeTodos, completedTodos, activeNum, completedNum}
