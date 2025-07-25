const express = require('express');
const app = express();

// 路由中间件函数
function routeMiddleware(req, res, next) {
    if (req.query.code === '521') {
        next()
    } else {
        res.send('error code')
    }
}

app.get('/home', routeMiddleware, (req, res) => {
    res.send('Welcome to the Home Page!');
});

app.get('/admin', (req, res) => {
    res.send('Welcome to the Admin Page!');
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});