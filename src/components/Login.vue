<template>
  <div>
    <img src="../assets/logo.png">
    <el-row class="content">
      <el-col :xs="24" :sm="{span: 6,offset: 9}">
        <span class="title">欢迎登录</span>
        <el-row>
          <el-input v-model="name" placeholder="账号"></el-input>
          <el-input v-model="password" placeholder="密码" type="password"></el-input>
          <el-button type="primary" @click="login">登录</el-button>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        name: '',
        password: ''
      }
    },
    methods: {
      login() {
        this.axios
          .post('/api/login', {name: this.name, password: this.password})
          .then(
            res => {
              if (res.data.success) {
                this.$message.success('登录成功！')
                axios.defaults.headers.common['Authorization'] = res.data.token
                sessionStorage.setItem('demo-token', res.data.token)

                this.$router.push('./todolist')
              } else {
                this.$message.error(res.data.info)
                sessionStorage.setItem('demo-token', null)
              }
            },
            err => {
              this.$message.error('请求错误！')
              sessionStorage.setItem('demo-token', null)
            })

      }
    }
  }
</script>

<style scoped>
  .el-row.content {
    padding: 16px;
  }

  .title {
    font-size: 28px;
  }

  .el-input {
    margin: 12px 0;
  }

  .el-button {
    width: 100%;
    margin-top: 12px;
  }
</style>
