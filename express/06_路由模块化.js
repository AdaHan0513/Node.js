const express = require('express');
const app = express();
// 引入路由模块
const homeRouter = require('./routes/homeRouter');

// 使用路由模块
app.use(homeRouter)

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});