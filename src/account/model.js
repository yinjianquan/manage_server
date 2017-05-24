const db = require('../db/db');
const login = (ctx, phone) => {
  return new Promise((resolve, reject) => {
    const sql = `SELECT * FROM users WHERE phone=${phone}`;
    db.query(ctx, sql).then((res) => {
      if (!res || res.length === 0) {
        reject('查询数据库失败:sql=' + sql);
      } else {
      	res.sql = sql;
        resolve(res);
      }
    }).catch((e) => {
      reject('查询数据库失败:sql=' + sql);
    })
  })
}

const edit = async(ctx,data) => {
   return new Promise((resolve, reject) => {
    const sql = `UPDATE users SET ${data.option} = '${data.optionValue}' WHERE phone=${data.phone}`;
    console.log('sql',sql);
    db.query(ctx, sql).then((res) => {
      if (!res.affectedRows) {
        reject('查询数据库失败:sql=' + sql);
      } else {
      	res.sql = sql;
        resolve(res);
      }
    }).catch((e) => {
      reject('查询数据库失败:sql=' + sql);
    })
  })
}

module.exports = {
  login,
  edit
}