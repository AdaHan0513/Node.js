const express = require('express');
// 创建路由对象
const router = express.Router();

// 定义路由
router.get('/home', (req, res) => {
    res.send('Welcome to the Home Page!');
});

module.exports = router;
