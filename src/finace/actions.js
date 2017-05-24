const model = require('./model.js');
const add = async(ctx) => {
  let res = {};
  try {
    res = await model.add(ctx);
    ctx.body = {
      code: 666,
      msg: 'success',
      res
    }
  } catch (e) {
    ctx.body = {
      code: 0,
      errMsg: e
    }
  }
}

/**
 * 获取费用列表 
 */
const getCostList = async(ctx) => {
  let res = {};
  try {
    res = await model.getCostList(ctx);
    // 下列四个变量为收入列表,支出列表,总收入,总支出
    let incomeList = [];
    let payList = [];
    let totalIncome = 0;
    let totalPay = 0;
    res.forEach((item) => {
      if (item.type === 1) {
        incomeList.push(item);
        totalIncome += item.amount || 0;
      } else {
        payList.push(item);
        totalPay += item.amount || 0;
      }

    })
    const data = {
      incomeList,
      payList,
      totalIncome,
      totalPay
    }
    ctx.body = {
      code: 666,
      msg: 'success',
      data,
    }
  } catch (e) {
    console.log(e);
    ctx.body = {
      code: 0,
      errMsg: e
    }
  }
}

module.exports = {
  add,
  getCostList
}