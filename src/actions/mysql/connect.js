
var mysql = require('mysql');
var pool = mysql.createPool({
    connectionLimit: 100,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'wt-manage'
});

pool.query('SELECT * from users', function (error, results, fields) {
    if (error) throw error;
    console.log(results[2]);
});