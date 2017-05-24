const config = require('../../config/config.js')
const request = require('request');
const makeIns = async function(ctx) {
    const userInfo = {
        phone,
        password
    } = ctx.request.body;
    const res = await login(userInfo);
    const cookies = res.headers['set-cookie'];
    ctx.cookies.set('username', 'huruqing');
    ctx.body = res.body;
}
const login = function(postData) {
    return new Promise(function(resolve, reject) {
        request.post({
            url: config.baseUrl + '/account/login',
            formData: postData
        }, function optionalCallback(err, httpResponse, body) {
            if (err) {
                // reject(new Error('查询列表失败'));
                console.log('失败');
                throw new Error('添加用户失败');
            } else {
                resolve(httpResponse);
            }
        });
    })
}
module.exports = makeIns;
