var mysql = require('../db/db_con');
var res_util = require('../util/res_util');

var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data



var Name ="/test";
module.exports = function(app){
  app.post(Name+'/list',function(req , res){
    mysql.exec('select * from test',function (err,result) {
      res_util.json_val.result = result;
      res.status(200).json(res_util.json_val);
    });
  });

  app.post(Name+'/detail',function(req , res){
    if(!req.body['pk']){
      res_util.setError('99','잘못된 접근입니다.')
      res.status(200).json(res_util.json_val);
    }
    
    console.log(req.body['pk'])

    mysql.exec('select * from test where pk = '+req.body['pk']+'',function (err,result) {
      res_util.json_val.result = result;
      res.status(200).json(res_util.json_val);
    });
  });

  app.post(Name+'/delete',function(req , res){
    if(!req.body['pk']){
      res_util.setError('99','잘못된 접근입니다.')
      res.status(200).json(res_util.json_val);
    }

    mysql.exec('delete from test where pk = '+req.body['pk']+'',function (err,result) {
      res.status(200).json(res_util.json_val);
    });
  });

  app.post(Name+'/update',function(req , res){
    if(!req.body['pk'] || !req.body['name']){
      res_util.setError('99','잘못된 접근입니다.')
      res.status(200).json(res_util.json_val);
    }
    var update_sql = 'update test set '
    update_sql += "name = '"+req.body['name']+"', "
    update_sql += "email = '"+req.body['email']+"', "
    update_sql += "address = '"+req.body['address']+"'"
    update_sql += " where pk = '"+req.body['pk']+"'"

    mysql.exec(update_sql,function (err,result) {
      res.status(200).json(res_util.json_val);
    });
  });

  app.post('/upload', upload.array(), function (req, res, next) {
    console.log(req.body);
    res.json(req.body);
  });

  app.get(Name+'/test',function(req , res){
    if(req.query['s']){
      console.log(req.query['s']) 

    }else{
      console.log("없음") 
    }
   console.log(req.query) 
   //req.body['s']
  });
}