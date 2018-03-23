var express = require('express');
var router = express.Router();

var mysql = require('../db/db_con');
var res_util = require('../util/res_util');

var multer = require('multer'); // express에 multer모듈 적용 (for 파일업로드)
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/uploads') // cb 콜백함수를 통해 전송된 파일 저장 디렉토리 설정
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname) // cb 콜백함수를 통해 전송된 파일 이름 설정
  }
})
var upload = multer({ storage: storage })



router.post('/list',function(req , res){
  mysql.exec('select * from test',function (err,result) {
    res_util.json_val.result = result;
    res.status(200).json(res_util.json_val);
  });
});

router.post('/detail',function(req , res){
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

router.post('/delete',function(req , res){
  if(!req.body['pk']){
    res_util.setError('99','잘못된 접근입니다.')
    res.status(200).json(res_util.json_val);
  }

  mysql.exec('delete from test where pk = '+req.body['pk']+'',function (err,result) {
    res.status(200).json(res_util.json_val);
  });
});


router.post('/Insert',function(req , res){
  if(!req.body['name']){
    res_util.setError('99','잘못된 접근입니다.')
    res.status(200).json(res_util.json_val);
  }
  
  var update_sql = 'insert into test (name,email,address,regdate) value ( '
  update_sql += "'"+req.body['name']+"', "
  update_sql += "'"+req.body['email']+"', "
  update_sql += "'"+req.body['address']+"',"
  update_sql += "now()"
  update_sql += ")"

  mysql.exec(update_sql,function (err,result) {
    res.status(200).json(res_util.json_val);
  });
});

router.post('/update',function(req , res){
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

router.get('/test',function(req , res){
  if(req.query['s']){
    console.log(req.query['s']) 

  }else{
    console.log("없음") 
  }
 console.log(req.query) 
 res.status(200).json(req.query);
});

router.post('/upload',upload.single('file_test'), function(req, res){
  res.send('Uploaded! : '+req.file); // object를 리턴함
  console.log(req.file); // 콘솔(터미널)을 통해서 req.file Object 내용 확인 가능.
  res.status(200).json(res_util.json_val);
});



module.exports = router;
