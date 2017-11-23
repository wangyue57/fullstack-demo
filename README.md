### 使用vue2 + koa2开发的一个全栈demo

- 开发时，先`npm start`开启前端服务，再`npm run server`启动后端服务，通过访问前端服务的地址开发。

- 部署时，`npm run build`生成dist文件夹，再`npm run server`启动后端服务，访问后端服务的地址，静态文件会自动获取前端生成的dist。
