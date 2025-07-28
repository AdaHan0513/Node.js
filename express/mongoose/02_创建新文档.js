const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/bilibili')

mongoose.connection.once('open', () => {
    // 创建文档的结构对象 Schema       用于设置集合中文档的字段和类型
    let BookSchema = new mongoose.Schema({
        name: String,
        author: String,
        price: Number,
    });

    // 创建模型 Model   用于操作集合中的文档
    let BookModel = mongoose.model('books', BookSchema);

    // 创建文档 
    let book = new BookModel({
        name: 'Node.js 入门',
        author: '张三',
        price: 39.99
    });
    console.log('创建文档成功:', book)

    // 保存文档到数据库
    book.save()
        .then(() => {
            console.log('文档保存成功');
        })
        .catch(err => {
            console.error('文档保存失败:', err);
        });
});

mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});

mongoose.connection.on('disconnected', () => {
    console.log('MongoDB disconnected');
});