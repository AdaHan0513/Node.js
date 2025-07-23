const http = require('http');
const server = http.createServer((request, response) => {
    // console.log(`获取请求方法: ${request.method}`);
    // console.log(`请求路径: ${request.url}`);
    // console.log(`http版本: ${request.httpVersion}`);
    // console.log(`请求头: ${JSON.stringify(request.headers)}`);

    // 获取请求体
    let body = ''
    // 监听数据事件
    request.on('data', chunk => {
        body += chunk
    })
    // 监听结束事件
    request.on('end', () => {
        console.log(`请求体: ${body}`);

        // 响应内容
        response.end('Hello Http!\n');
    })




});

server.listen(9000, () => {
    console.log('Server is running at http://localhost:9000/');
}); 