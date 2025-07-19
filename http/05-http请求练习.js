const http = require('http');

const server = http.createServer((req, res) => {
    let { method } = req;
    console.log(`请求方法: ${method}`);
    let { pathname } = new URL(req.url, 'http://127.0.0.1');
    console.log(`请求路径: ${pathname}`);
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    if (method === 'GET' && pathname === '/login') {
        res.end('登录页面');
    } else {
        res.end('页面不存在');
    }

});

server.listen(9000, () => {
    console.log('Server is running at http://localhost:9000/');
});