const config = require('../../config/config.js');
const request = require('request');
const makeIns = async(ctx) => {
    const {option, optionValue} = ctx.request.body;
    // const option = 'phone';
    // const optionValue = 13800000000;
    ctx.body = {
        code: 0,
        msg: '修改失败',
        coo: ctx.cookies.get('username')
    }
    return false;

    const str = {
        [option]: optionValue
    }
    const data = {
        info: JSON.stringify(str)
    }
    const res = await updateUser(data);
    if (res.code == 666) {
        res.msg = '用户信息修改成功';
        ctx.body = res;
    } else {
        ctx.body = {
            code: 0,
            msg: '修改失败',
            coo: ctx.cookies.get('username')
        }
    }

}

const updateUser = (postData) => {
    return new Promise((resolve, reject) => {
        request.post({
            url: config.baseUrl + '/account/editUser',
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
