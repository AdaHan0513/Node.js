// 导入express模块
const express = require('express');

// 创建一个express应用
const app = express();

// 创建一个路由
app.get('/', (req, res) => {
    res.send('Hello, Express!');
})

// 监听端口
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});