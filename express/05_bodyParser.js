// 获取请求体数据
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/05_login.html');
});

app.post('/login', (req, res) => {
    // 处理登录逻辑
    const username = req.body.name;
    const password = req.body.password;
    console.log(`Username: ${username}, Password: ${password}`);
    
    res.send('Login successful!');
});


app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

