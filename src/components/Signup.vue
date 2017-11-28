<template>
  <div>
    <img src="../assets/logo.png">
    <el-row class="content">
      <el-col :xs="24" :sm="{span: 6,offset: 9}">
        <span class="title">欢迎注册</span>
        <el-row>
          <el-input v-model="name" placeholder="账号"></el-input>
          <el-input v-model="password" placeholder="密码" type="password"></el-input>
          <el-input v-model="confirmPassword" placeholder="确认密码" type="password"></el-input>
          <el-button type="primary" @click="signup">注册</el-button>
          <router-link to="/">返回</router-link>
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
        password: '',
        confirmPassword: ''
      }
    },
    methods: {
      signup() {
        if (!this.name || !this.password) {
          return this.$message.error('请输入账号及密码！')
        }

        if (this.password !== this.confirmPassword) {
          this.confirmPassword = ''
          return this.$message.error('两次输入密码不一致！')
        }

        this.axios
          .post('/api/signup', {name: this.name, password: this.password})
          .then(
            res => {
              if (res.data.success) {
                this.$message.success('注册成功，自动登录！')
                this.$store.state.user = {name: this.name}
                this.axios.defaults.headers.common['Authorization'] = 'Bearer ' + res.data.token
                sessionStorage.setItem('demo-token', res.data.token)

                this.$router.push('./todolist')
              } else {
                this.$message.error(res.data.info)
                sessionStorage.removeItem('demo-token')
              }
            },
            err => {
              this.$message.error('请求错误！')
              sessionStorage.removeItem('demo-token')
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
