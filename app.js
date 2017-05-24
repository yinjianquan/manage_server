const koa = require('koa');
const app = new koa();
const co = require('co');
const path = require('path');
const render = require('koa-swig');
// 跨域中间件
const cors = require('koa-cors');
// 获取post参数中间件
const koaBody = require('koa-body');
// 设置静态资源目录
const serv = require('koa-static');
// 让koa2的能使用koa1的插件
const convert = require('koa-convert')
const _use = app.use;
app.use = x => _use.call(app, convert(x));
// 建立数据库连接
const connectMysql = require('./src/db/connect');
const pool = connectMysql(app);
app.use((ctx, next) => {
    ctx.pool = pool;
    return next();
})
// 配置swig模板,root:后面跟的必须是views
app.context.render = co.wrap(render({ root: './views', autoescape: true, cache: 'memory', writeBody: false, ext: 'html' }))
app.use(serv(__dirname + '/static'));
app.use(cors({
//  origin: 'http://localhost:8080',
//  credentials: true
}));
app.use(koaBody({
    formidable: {
        uploadDir: __dirname
    }
}));
const initController = require('./src/router/initController.js');
initController(app);

app.listen(7777, function () {
    console.log('server start at port: http://localhost:7777');
})
