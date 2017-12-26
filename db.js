var mysql = require('mysql');
var conn = mysql.createConnection({
    host : '111.230.29.111',
    user : 'xxx',
    password : 'xxxx@',
    database:'xxxx'
})

module.exports = conn;
