var express = require('express');
var router = express.Router();
var conn = require('../../db');
var Result = require('../../vo/Result.js')

/* GET home page. */
router.get('/list', function(req, res) {
  conn.query('select * from client',function(err,results,rows){
    var rt = new Result();
    if (err && err.number != mysql.ERROR_DB_CREATE_EXISTS) {
        throw err;
      } 
    rt.setData(results);
    res.send(rt);
    res.end();
})
});
router.get('/detail/:id', function(req, res) {
  var id =req.params.id;
  var sql = 'select * from client where id=?';
  conn.query(sql,id,function(err,results,rows){
      var rt = new Result();
      rt.setData(results);
      res.send(rt);
      res.end();
  })
});
router.get('/del/:id', function(req, res) {
  var id =req.params.id;
  var sql = 'delete from client where id=?';
  conn.query(sql,id,function(err,results,rows){
      var rt = new Result();
      rt.setData(results);
      res.send(rt);
      res.end();
  })
});
module.exports = router;