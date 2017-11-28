import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import TodoList from '@/components/TodoList'
import Signup from '@/components/Signup'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/todolist',
      name: 'todolist',
      component: TodoList
    },
  ]
})

router.beforeEach((to, from, next) => {
  const token = sessionStorage.getItem('demo-token')

  if (to.path === '/' && token) {
    return next('/todolist')
  }

  if (to.path !== '/' && to.path !== '/signup' && !token) {
    return next('/')
  }

  next()
})

export default router
