const Koa = require('koa')
const path = require('path')
const Json = require('koa-json')
const koaJwt = require('koa-jwt')
const serve = require('koa-static')
const Logger = require('koa-logger')
const Bodyparser = require('koa-bodyparser')
const historyApiFallback = require('koa-history-api-fallback')
const router = require('./server/routes')

const app = new Koa()

app
  .use(Json())
  .use(Logger())
  .use(Bodyparser())
  .use(koaJwt({secret: 'vue-koa-demo'}).unless({path: [/^\/api\/login/]}))
  .use(router.routes())
  .use(historyApiFallback())
  .use(serve(path.resolve('dist')))
  .on('error', err => console.log('server error', err))
  .listen(3000, () => console.log('Koa is listening in 3000'))

module.exports = app
