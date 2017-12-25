var mysql = require('mysql');
var conn = mysql.createConnection({
    host : '111.230.29.226',
    user : 'node',
    password : 'Wdmms123@',
    database:'nodejs_db'
})

module.exports = conn;