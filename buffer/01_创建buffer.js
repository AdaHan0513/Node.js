let buffer1 = Buffer.alloc(10) // 创建一个长度为10的Buffer对象
console.log(buffer1)

let buffer2 = Buffer.allocUnsafe(10)  // 创建速度快，但可能含有脏数据
console.log(buffer2)

let buffer3 = Buffer.from('hello')
console.log(buffer3) 
