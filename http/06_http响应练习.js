const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    let html = fs.readFileSync('./02-form.html');
    res.end(html);
});

server.listen(9000, () => {
    console.log('Server is running at http://localhost:9000/');
});
