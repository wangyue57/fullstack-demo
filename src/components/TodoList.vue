<template>
  <el-row class="content">
    <el-col :xs="{span:20,offset:2}" :sm="{span:8,offset:8}">
      <span>欢迎：{{user.name}}！你的待办事项是：</span>
      <el-input placeholder="what needs to be done" v-model="todoText" @keyup.enter.native="_addTodo"></el-input>
      <div :class="{'todo-list': true, completed: todo.completed}" v-for="todo in showTodos">
        <input type="checkbox" v-model="todo.completed">
        {{todo.text}}
        <el-button class="pull-right" type="text" @click.native="removeTodo(todo)">X</el-button>
      </div>
      <div class="buttons">
        <el-button type="primary" @click="save"
                   :style="{padding: 0,lineHeight: '30px',height: '30px',width: '100px',marginTop: '20px'}">
          保存
        </el-button>
        <el-button type="primary" @click="logout"
                   :style="{padding: 0,lineHeight: '30px',height: '30px',width: '100px',marginTop: '20px'}">
          退出
        </el-button>

      </div>
    </el-col>
  </el-row>
</template>

<script>
  import { mapState, mapActions, mapGetters } from 'vuex'

  export default {
    data() {
      return {
        todoText: ''
      }
    },

    mounted() {
      this.getData()
    },

    computed: {
      ...mapState(['todos', 'user']),
      ...mapGetters(['allCompleted']),
      showTodos() {
        return this.todos
      }
    },

    methods: {
      ...mapActions(['addTodo', 'removeTodo']),

      _addTodo() {
        if (this.todoText === '') return

        this.addTodo(this.todoText).then(() => this.todoText = '')
      },

      getData() {

      },

      save() {

      },

      logout() {
        this.axios.defaults.headers.common['Authorization'] = null
        sessionStorage.removeItem('demo-token')
        this.$router.push('/')
      }
    }
  }

</script>

<style scoped>

  .todo-list {
    width: 100%;
    margin-top: 8px;
    padding-bottom: 8px;
    border-bottom: 1px solid #eee;
    text-align: left;
  }

  .todo-list.completed {
    color: grey;
    text-decoration: line-through;
  }

  .pull-right {
    float: right;
  }
</style>
