"use strict";
var express = require('express');
var bodyParser= require("body-parser"); 
var fs = require("fs");
var conn = require('./db.js');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var ResultModel = require('./ResultModel');
//import routes from './route/';
var user = require('./route/api/user');
var project = require('./route/api/project');
var projectref = require('./route/api/projectref');
var item = require('./route/api/item');
var client = require('./route/api/client');
var app = express();
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());
app.use(session({
    secret: 'sessiontest',//与cookieParser中的一致
    resave: true,
    saveUninitialized:true
}));

app.use('/user', user);
app.use('/project', project);
app.use('/item', item);
app.use('/projectref', projectref);
app.use('/client', client);

app.get('/listUsers/:id', function (req, res) {
    var id =req.params.id;
	conn.query('select * from test where id='+id,function(err,results,rows) {
    if (err && err.number != mysql.ERROR_DB_CREATE_EXISTS) {
      throw err;
    }
  //  res.send( JSON.stringify(results) );
   // rm.setData(results);
   rm = new ResultModel();
   // rm = new result();
  // rm.setData
    rm.setData(results);
    rm.setSize(results.length)
    res.send(rm);

    console.log(JSON.stringify(results));
    //console.log(name);
   // console.log(rows);
   });

/**
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
   **/
})
app.get('/listUsers', function (req, res) {
    var id =req.params.id;
	conn.query('select * from test',function(err,results,rows) {
    if (err && err.number != mysql.ERROR_DB_CREATE_EXISTS) {
      throw err;
    }
  //  res.send( JSON.stringify(results) );
   // rm.setData(results);
    rm = new ResultModel();
    rm.setData(results);
    rm.setSize(results.length)
    res.send(rm);
    console.log(JSON.stringify(results));

   });

/**
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
   **/
})
var server = app.listen(81, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("应用实例，访问地址为 http://%s:%s", host, port)

})