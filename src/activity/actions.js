const model = require('./model.js');
const add = async(ctx) => {
  const data = {
    title,
    github,
    username,
    content
  } = ctx.request.body;
  let res = {};
  try {
    res = await model.add(ctx,data);
    if (res.affectedRows > 0) {
      ctx.body = {
        code: 666,
        msg: 'success',
      }
    } else {
      ctx.body = {
        code: 0,
        msg: ''
      }
    }
  } catch (e) {
    ctx.body = {
      code: 0,
      errMsg: e
    }
  }
}

module.exports = {
  add,
}