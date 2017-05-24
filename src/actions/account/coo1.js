module.exports = function (ctx) {
    ctx.cookies.set('test','set cookie');
    ctx.body = {
        a: 'aaa'
    }
}
