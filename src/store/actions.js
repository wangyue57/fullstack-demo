const addTodo = ({commit}, text) => commit('addTodo', text)
const removeTodo = ({commit}, todo) => commit('removeTodo', todo)
const activeAll = ({commit, getter}) => getter.activeTodos.forEach(todo => commit('activeTodo', todo))
const completeAll = ({commit, getter}) => getter.completedTodos.forEach(todo => commit('completeTodo', todo))

export default {addTodo, removeTodo, activeAll, completeAll}
