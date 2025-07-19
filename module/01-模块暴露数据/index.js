function work() {
    console.log('工作函数执行中...');
}

function play() {
    console.log('玩耍函数执行中...');
}

// 1-导出模块
module.exports = {
    work,
    play,
};  

// 2-module.exports 可以导出任意数据
module.exports = 'hello'    // 会覆盖上面的导出


// 3
exports.work = work;  // 导出工作函数

// 不能使用 'exports = value' 的形式暴露数据