import { createWriteStream, createReadStream } from "fs";
// 1-流式写入：适合大文件写入或者频繁写入
let ws = createWriteStream('./files/3.txt')
ws.write('乘风破浪会有时\n')
ws.write('直挂云帆济沧海\n')

ws.end() // 结束写入


// 2-流式读取
let rs = createReadStream('./files/3.txt')
// 绑定data事件，读取到数据时触发
rs.on('data', (chunk) => {
    console.log('读取到的数据:', chunk)
})

// 绑定end事件，读取完成时触发(可选)
rs.on('end', () => {
    console.log('读取完成')
})