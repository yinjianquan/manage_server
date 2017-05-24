const db = require('../db/db');
const getContactList = (ctx) => {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM `users`';
    db.query(ctx, sql).then((res) => {
      if (!res || res.length === 0) {
        reject('查询数据库失败:sql=' + sql);
      } else {
        resolve(res);
      }
    }).catch((e) => {
      reject('查询数据库失败:sql=' + sql);
    })
  })
}

module.exports = {
  getContactList,
}