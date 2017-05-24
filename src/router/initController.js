const router = require('koa-simple-router');
const config = require('../../config/config.js');
const accountAction = require('../account/actions');
const contactAction = require('../contact/actions');
const finaceAction = require('../finace/actions');
const activityAction = require('../activity/actions');

module.exports = (app) => {
  app.use(router(_ => {
    _.all('/', async(ctx) => {
      ctx.body = await ctx.render('index', {
        list: []
      });
    });
    // 账户
    _.all('/account/login', accountAction.login);
    // _.all('/account/register', accountAction.register);
    _.all('/account/edit', accountAction.edit);
    // 通讯录
    _.all('/contact/getContactList', contactAction.getContactList);
    // _.all('/contact/getDetail', contactAction.getDetail);
    // 财务
    _.all('/finace/add', finaceAction.add);
    _.all('/finace/getCostList', finaceAction.getCostList);
    // 活动
     _.all('/activity/add', activityAction.add);
  }));
}