import { readFile } from 'node:fs'

// 参数1：文件的存放路径
// 参数2：文件采用的编码格式utf8
// 参数3：回调函数，读取文件成功后会执行该函数
// 回调函数的第一个参数是错误对象，第二个参数是文件内容

// 异步读取文件
readFile('./files/1.txt', 'utf8', (err, data) => {
    // err写入失败:错误对象;写入成功：null
    if (err) {
        console.error('读取文件失败:', err)
    }
    console.log('读取文件成功:', data)
})