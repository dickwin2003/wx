var express = require('express');
var router = express.Router();
var conn = require('../../db');
var Result = require('../../vo/Result.js')

/* GET home page. */
router.get('/list', function(req, res) {
    conn.query('select * from project',function(err,results,rows){
        var rt = new Result();
        if (err && err.number != mysql.ERROR_DB_CREATE_EXISTS) {
            throw err;
          } 
        rt.setData(results);
        res.send(rt);
        res.end();
    })
  });
router.get('/:id', function(req, res) {
    var id =req.params.id;
    var sql = 'select * from project_detail where project_id=?';
    conn.query(sql,id,function(err,results,rows){
        var rt = new Result();
        rt.setData(results);
        res.send(rt);
        res.end();
    })
  });
router.get('/del/:id', function(req, res) {
    var id =req.params.id;
    var sql = 'delete from project_detail where project_id=?';
    conn.query(sql,id,function(err,results,rows){
        var rt = new Result();
        rt.setData(results);
        res.send(rt);
        res.end();
    })
  });
router.post('/add',function (req,res) {
      var pname = req.body.pname;
      var clientid = req.body.clientid;
      var chargerid = req.body.chargerid;
      var discount = req.body.discount;
      console.info(pname);
      var sql = 'insert into project_detail(p_name,client_id,charger,discount) value(?,?,?,?)'
      conn.query(sql,[pname,clientid,chargerid,discount],function(err){
        res.send(pname);
        res.end();
      })
      
  });
router.post('/update',function (req,res) {
    var id = req.body.pid;
    var pname = req.body.pname;
    var clientid = req.body.clientid;
    var chargerid = req.body.chargerid;
    var discount = req.body.discount;
    var status = req.body.status;
    console.info(pname);
    var sql = 'update project set p_name=?,client_id=?, charger=?,discount=?,status=? where id=?'
    conn.query(sql,[pname,clientid,chargerid,discount,status,id],function(err){
      res.send('ok');
      res.end();
    })
})

module.exports = router;