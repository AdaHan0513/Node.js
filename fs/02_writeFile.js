import { writeFile, writeFileSync } from 'node:fs'

// 适合写入频率较低的场景
/*参数1：文件的存放路径
  参数2：要写入的内容
  参数3：回调函数，写入文件成功后会执行该函数
*/
writeFile('./files/1.txt', 'hello world!', (err) => {
    if (err) {
        console.error('写入文件失败:', err)
    }
    console.log('写入文件成功');
})
console.log(1);

// 同步写入文件
// 参数1：文件的存放路径    
// 参数2：要写入的内容
// 参数3：编码格式，默认是utf8
writeFileSync('./files/2.txt', 'hello node!')
console.log(2);

// 注意：同步写入文件会阻塞代码执行，直到写入完成才会继续执行后续代码
// 异步写入文件不会阻塞代码执行，写入操作会在后台进行，代码会继续执行后续操作

