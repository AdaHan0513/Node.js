const path = require('node:path');

console.log(path.resolve());  // 拼接规范的绝对路径

console.log(path.sep);   // 输出平台特定的路径分隔符，例如在Windows上是'\', 在Linux上是'/'

console.log(__filename); // 输出当前文件的绝对路径
console.log(__dirname);  // 输出当前文件所在目录的绝对路径

let filePath = 'C:\\Users\\41916\\Documents\\WorkSpace\\NodeJs\\path\\path.js'

console.log(path.parse(filePath)); // 解析路径，输出对象包含root, dir, base, ext, name等属性

console.log('输出文件名:', path.basename(filePath));
console.log('输出目录名:', path.dirname(filePath));
console.log('输出扩展名:', path.extname(filePath));



