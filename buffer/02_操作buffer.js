// buffer转换为字符串，toString()
let buffer1 = Buffer.from([105,108,111,118,101,121,111,117]) 
console.log(buffer1) 
console.log(buffer1.toString())  // 输出：iloveyou;

// 修改buffer内容
buffer1[0] = 97; // 将第一个字节修改为97
console.log(buffer1)  // 输出：aloveyou;
