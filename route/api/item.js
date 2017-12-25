var express = require('express');
var router = express.Router();
var conn = require('../../db');
var Result = require('../../vo/Result.js')

/* GET home page. */
router.get('/list', function(req, res) {
    conn.query('select * from item',function(err,results,rows){
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
    var sql = 'select * from item where id=?';
    conn.query(sql,id,function(err,results,rows){
        var rt = new Result();
        rt.setData(results);
        res.send(rt);
        res.end();
    })
  });
router.get('/del/:id', function(req, res) {
    var id =req.params.id;
    var sql = 'delete from item where id=?';
    conn.query(sql,id,function(err,results,rows){
        var rt = new Result();
        rt.setData('DEL OK');
        res.send(rt);
        res.end();
    })
  });
router.post('/add',function (req,res) {
      var type = req.body.type;
      var name = req.body.name;
      var unit = req.body.unit;
      var price = req.body.price;
      var spec = req.body.spec;
      var model = req.body.model;
      var note = req.body.note;
      console.info(name);
      var sql = 'insert into item(type,name,unit,price,spec,model,note) value(?,?,?,?,?,?,?)'
      conn.query(sql,[type,name,unit,price,spec,model,note],function(err){
        res.send(name);
        res.end();
      })
      
  });
router.post('/update',function (req,res) {
      var id = req.body.id;
      var name = req.body.name;
      var unit = req.body.unit;
      var price = req.body.price;
      var spec = req.body.spec;
      var model = req.body.model;
      var note = req.body.note;
      console.info(name);
      var sql = 'update item set name=?,unit=?, price=?,spec=?,model=?,note=? where id=?'
      conn.query(sql,[name,unit,price,spec,model,note,id],function(err){
        res.send('update ok');
        res.end();
      })
})

module.exports = router;