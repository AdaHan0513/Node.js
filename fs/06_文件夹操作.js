import { mkdir, readdir, rm } from "fs";

// 1-创建文件夹
// recursive：选项允许创建多级目录(可选)
mkdir('./files/newDir', { recursive: true }, (err) => {
    if (err) {
        console.error('创建目录失败:', err);
    } else {
        console.log('目录创建成功');
    }
});

// 2-读取文件夹内容
readdir('./files', (err, files) => {
    if (err) {
        console.error('读取目录失败:', err);
    } else {
        console.log('目录内容:', files); // 输出目录下的文件和文件夹列表
    }
});

// 3-删除文件夹 (rmdir不推荐使用，使用rm代替)
rm('./files/newDir', (err) => {
    if (err) {
        console.error('删除目录失败:', err);
    } else {
        console.log('目录删除成功');
    }
});      