import { appendFile, appendFileSync, writeFile } from "fs";
// https://www.runoob.com/nodejs/nodejs-fs.html

// 参数1：文件的存放路径
// 参数2：要追加的内容
// 参数3：回调函数，追加文件成功后会执行该函数
appendFile('./files/2.txt', '\rhtml', (err) => {
    if (err) {
        console.error('追加文件失败:', err);
    }
    console.log('追加文件成功');
});

// flag: 'a' 表示追加内容
writeFile('./files/2.txt', '\rhappy', { flag: 'a' }, (err) => {
    if (err) {
        console.error('追加文件失败:', err);
    }
    console.log('追加文件成功');
});