const db = require('../db/db');

// 新增记录
const add = (ctx) => {
  return new Promise((resolve, reject) => {
    const {
      title = '分享主题', github = '未知', date = '未知', username = '沃土前端', content = '未知'
    } = ctx.request.body;
    const sql = db.insert('shares', {
      title,
      github,
      date,
      username,
      content
    });
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
  add,
}