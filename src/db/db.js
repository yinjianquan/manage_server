/**
 * 根据sql查询
 * @param {*} ctx koa的上下文
 * @param {*} sql sql语句
 */
const query = (ctx, sql) => {
  return new Promise((resolve, reject) => {
    ctx.pool.query(sql, (err, results, fields) => {
      if (err) {
        resolve(false);
      } else {
        resolve(results);
      }
    })
  })
}

/**
 * 根据字段名查询
 * @param {*} ctx koa的上下文
 * @param {*} tableName 表名
 * @param {*} field 字段名
 */
const queryByField = (ctx, tableName, field) => {
  return new Promise((resolve, reject) => {
    ctx.pool.query(sql, (err, results, fields) => {
      if (err) {
        resolve(false);
      } else {
        resolve(results);
      }
    })
  })
}

const getAll = (dbname) => {
	return `select * from ${dbname}`;
}

// 增加
const insert = (dbname, data) => {
  const {
    keys,
    values
  } = makeSql(data);
  return `INSERT INTO ${dbname} (${keys}) VALUES (${values})`;
}
// 总数
const getSum = (dbname, filed) => {
  return `select sum(${filed}) from ${dbname}`;
}

// 拼接sql语句
const makeSql = (data) => {
  const keys = Object.keys(data);
  let values = '';
  for (let i = 0; i < keys.length; i++) {
    if (i === 0) {
      values += `"${data[keys[i]]}"`;
    } else {
      values += `,"${data[keys[i]]}"`;
    }
  }
  return {
    keys: keys.join(','),
    values
  }
}

module.exports = {
  query,
  insert,
  getAll,
  queryByField
};