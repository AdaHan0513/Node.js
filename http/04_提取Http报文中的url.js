const http = require('http');
const url = require('url');

// 1-获取url中的路径和查询字符串
// const server = http.createServer((request, response) => {
//     response.end('Hello URL!\n');
//     let res = url.parse(request.url, true);   // true表示将查询字符串解析为对象
//     console.log(res);   // 输出解析后的结果
//     let { pathname, query } = res;
//     console.log(`请求路径: ${pathname}`);
//     console.log(`查询字符串: ${JSON.stringify(query)}`);
// });

// 2-新方法，推荐
const server = http.createServer((request, response) => {
    response.end('Hello URL!\n');
    let url = new URL(request.url, 'http://127.0.0.1'); // 使用URL构造函数解析URL
    console.log(url);   // 输出解析后的结果 
    console.log(`请求路径: ${url.pathname}`);
    console.log(`查询特定参数: ${url.searchParams.get('name')}`);
});

server.listen(9000, () => {
    console.log('Server is running at http://localhost:9000/');
});