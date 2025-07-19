const http = require('http');

// 创建服务对象
const server = http.createServer((request, response) => {
    // 设置响应头
    response.setHeader('Content-Type', 'text/html; charset=utf-8');

    // 响应内容
    response.end('Hello, World!\n');
})

// 监听端口
server.listen(9000, () => {
    console.log('Server is running at http://localhost:9000/');     // 在浏览器直接输入：http://127.0.0.1:9000/
})