var mysql = require('mysql');
var bcrypt = require('bcryptjs');

// Create a password salt
var salt = bcrypt.genSaltSync(10);

// Salt and hash password
var passwordToSave = bcrypt.hashSync('111111', salt)

var conn = mysql.createConnection({
    host : '111.230.29.226',
    user : 'node',
    password : 'Wdmms123@',
    database:'nodejs_db'
})

conn.query('select * from test',function(err,results,rows) {
    if (err && err.number != mysql.ERROR_DB_CREATE_EXISTS) {
      throw err;
    }
    console.log(JSON.stringify(results));
   // console.log(rows);
   });
var sql ='update user set passwords=?';
conn.query(sql,passwordToSave, function(err,results,rows) {
    console.info(passwordToSave.length);
});