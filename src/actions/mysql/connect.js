
var mysql = require('mysql');
var pool = mysql.createPool({
    connectionLimit: 100,
    host: 'localhost',
    user: 'root',
    password: 'a32883288',
    database: 'myquan'
});

pool.query('SELECT * from users', function (error, results, fields) {
    console.log(12321312321);
    if (error) throw error;
    console.log(results[2]);
});