const user = require('../models/user')
const jwt = require('jsonwebtoken')

const getUserInfo = async (ctx, next) => {
  ctx.body = await user.getUserById(ctx.params.id)
  await next()
}

const postUserAuth = async (ctx, next) => {
  const data = ctx.request.body
  const userInfo = await  user.getUserByName(data.name)
  let body

  if (!userInfo) {
    body = {success: false, info: '用户不存在！'}
  }

  if (userInfo && userInfo.password === data.password) {
    const userToken = {name: userInfo.name, id: userInfo.id}
    const secret = 'vue-koa-demo'
    const token = jwt.sign(userToken, secret)

    body = {success: true, token}
  }

  if (!body) {
    body = {success: false, info: '密码错误！'}
  }

  ctx.body = body
  await  next()
}

module.exports = {getUserInfo, postUserAuth}

