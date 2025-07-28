const ejs = require('ejs');
const fs = require('fs');

let china = '中国'

// 1
// let res = ejs.render('Hello <%= name %>!', { name: china });

// 2
// let str = 'Hello <%= name %>!';
// let res = ejs.render(str, { name: china });

// 3
let str = fs.readFileSync('./01_ejs.html', 'utf-8');
let res = ejs.render(str, { china: china });

console.log(res); // 输出: Hello 中国!