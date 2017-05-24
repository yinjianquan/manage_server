const model = require('./model.js');
const getContactList = async(ctx) => {
  let res = {};
  try {
    list = await model.getContactList(ctx);
    ctx.body = {
      code: 666,
      msg: 'success',
      list
    }
  } catch (e) {
    ctx.body = {
      code: 0,
      errMsg: e
    }
  }
}

module.exports = {
  getContactList
}