import { readFile, writeFile, createReadStream, createWriteStream } from "fs";
// 1-文件复制：使用readFile和writeFile实现文件复制
readFile('./files/HongKong.mp4', (err, data) => {
    if (err) {
        console.error('读取文件失败:', err);
    }
    let content = data; // 读取到的文件内容
    // 写入到新文件
    writeFile('./files/HongKong_2.mp4', content, err => {
        if (err) {
            console.error('写入文件失败:', err);
        } else {
            console.log('文件复制成功');
        }
    })
})

// 2-流式复制：使用createReadStream和createWriteStream实现文件复制
let rs = createReadStream('./files/HongKong.mp4');
let ws = createWriteStream('./files/HongKong_3.mp4');
rs.on('data', (chunk) => {
    ws.write(chunk); // 将读取到的数据写入到新文件
});