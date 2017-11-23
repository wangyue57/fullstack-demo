const addTodo = ({commit}, text) => commit('addTodo', text)
const removeTodo = ({commit}, todo) => commit('removeTodo', todo)

export default {addTodo, removeTodo}
