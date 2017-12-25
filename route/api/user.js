var express = require('express');
var crypto = require('crypto');  
var cookieParser = require('cookie-parser');
var session = require('express-session');
var conn = require('../../db');
var router = express.Router();

/* GET home page. */
router.post('/login', function(req, res) {
	var sql ='select * from user where loginid=?'
	var loginid = req.body.loginid;
	var pass = req.body.pass;
	conn.query(sql,loginid,function(err,results,rows) {

		var md5 = crypto.createHash('md5');  
		md5.update(pass.trim());  
		var md5dig = md5.digest('hex');  

		if(results.length>0){
			if(md5dig==results[0].passwords){
				console.info('session is here');
				req.session.user = results;
				res.send(results);
			}else{
				res.send("wrong passwords");
			}
			res.end;
		}
	})
	
})
router.get('/list', function(req, res, next) {
	var u = req.session.user;
	console.info(u)
	console.info(u[0]['id'])
  //res.send();
})
router.get('/:id', function(req, res, next) {
	var id =req.params.id;
	var sql ='select * from  user where loginid=?';
	conn.query(sql,id, function(err,results,rows) {
		 res.send("test:"+results);
	});
   
})

module.exports = router;