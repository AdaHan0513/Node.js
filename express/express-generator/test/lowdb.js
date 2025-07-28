const lowdb = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('db.json');
const db = lowdb(adapter);

// 初始化数据库
// db.defaults({ accounts: [] }).write();

// 添加一条记录
// db.get('accounts')
//     .push({ id: '1', name: 'Test Account' })
//     .write();

// 获取所有记录
const accounts = db.get('accounts').value();
console.log(accounts);

// 删除一条记录
// db.get('accounts').remove({ id: '1' }).write();