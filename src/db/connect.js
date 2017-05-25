const createConnect = (app) => {
    const mysql = require('mysql');
    const pool = mysql.createPool({
        connectionLimit: 100,
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'myyin'
    });
    pool.getConnection(function (err, connection) {
        if (err) {
//          throw new Error('数据库连接失败');
			console.log('数据库连接失败');
        } else {
            console.log('mysql数据库连接池创建成功');
        }
    });
    return pool;
}
module.exports = createConnect;


