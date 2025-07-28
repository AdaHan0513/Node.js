const mongoose = require('mongoose');

// 连接到 MongoDB 数据库
mongoose.connect('mongodb://localhost:27017/bilibili');

// 连接成功后执行的回调函数
mongoose.connection.on('connected', () => {
    console.log('MongoDB connected successfully');
});

// 连接错误时执行的回调函数
mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});

// 连接断开时执行的回调函数
mongoose.connection.on('disconnected', () => {
    console.log('MongoDB disconnected');
});


// // 关闭连接
// setTimeout(() => {
//     mongoose.disconnect()
// }, 5000); // 5秒后关闭连接