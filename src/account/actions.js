const model = require('./model.js');
const login = async(ctx) => {
  const phone = ctx.request.body.phone || ctx.query.phone;
  let res = {};
  try {
    res = await model.login(ctx, phone);
    if (res.length > 0) {
      ctx.body = {
        code: 666,
        msg: 'success',
        info: res[0]
      }
    } else {
      ctx.body = {
        code: 0,
        msg: '没有这个用户'
      }
    }
  } catch (e) {
    ctx.body = {
      code: 0,
      errMsg: e
    }
  }
}

const edit = async(ctx) => {
  const data = {
    phone,
    option,
    optionValue
  } = ctx.request.body;
  let res = {};
  try {
    res = await model.edit(ctx, data);
    ctx.body = {
      code: 666,
      msg: 'success',
      info: res.sql
    }
  } catch (e) {
    ctx.body = {
      code: 0,
      errMsg: e
    }
  }
}

module.exports = {
  login,
  edit
}