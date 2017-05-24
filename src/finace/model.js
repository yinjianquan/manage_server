const db = require('../db/db');

// 新增记录
const add = (ctx) => {
  return new Promise((resolve, reject) => {
    const {
      type = 1, date = '未知', amount = 0, remark = '未知'
    } = ctx.request.body;
    const sql = db.insert('charge', {
      type,
      date,
      amount,
      remark
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

// 获取费用列表
const getCostList = (ctx) => {
  return new Promise((resolve, reject) => {
    const sql = db.getAll('charge');
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
  getCostList
}