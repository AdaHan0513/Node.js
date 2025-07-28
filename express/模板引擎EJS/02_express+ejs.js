const express = require('express');
const ejs = require('ejs');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');      // 设置 EJS 作为模板引擎
app.set('views', path.resolve(__dirname + '/views'));        // 设置模板文件夹存放位置    模板文件：具有模板语法的文件
app.get('/home', (req, res) => {
    let title = 'Express EJS Example';
    res.render('index', { title }); // 渲染 index.ejs 模板，并传递数据
})

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
}); 
