const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

// 全局中间件函数
function globalMiddleware(req, res, next) {
    // 获取请求的 URL 和 IP 地址
    const { url, ip } = req;
    // 将信息记录到文件 access.log
    fs.appendFileSync(path.resolve(__dirname, './access.log'), `${url}  ${ip}\r\n`);
    // 调用 next() 继续处理请求
    next();
}

// 使用全局中间件
app.use(globalMiddleware);

app.get('/home', (req, res) => {
    // const { url, ip } = req;
    // fs.appendFileSync(path.resolve(__dirname, './access.log'), `${url}  ${ip}\r\n`);

    res.send('Welcome to the Home Page!');
});
app.get('/admin', (req, res) => {
    // const { url, ip } = req;
    // fs.appendFileSync(path.resolve(__dirname, './access.log'), `${url}  ${ip}\r\n`);

    res.send('Welcome to the Admin Page!');
});

// 监听端口
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});