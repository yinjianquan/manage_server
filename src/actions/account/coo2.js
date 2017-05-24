module.exports = function (ctx) {
    const coo = ctx.cookies.get('test');
    ctx.body = {
        coo
    }
}
