const request = require('request');
const makeIns = async function(ctx) {
    const userInfo = {
        phone,
        password
    } = ctx.request.body;
    let res = await addUser(userInfo);
    res.msg = '注册成功';
    ctx.body = res;
}
const addUser = function(postData) {
    return new Promise(function(resolve, reject) {
        request.post({
            url: 'http://localhost/manage/index.php/account/addUser',
            formData: postData
        }, function optionalCallback(err, httpResponse, body) {
            if (err) {
                // reject(new Error('查询列表失败'));
                console.log('失败');
                throw new Error('添加用户失败');
            } else {
                resolve(JSON.parse(body));
            }
        });
    })
}
module.exports = makeIns;
