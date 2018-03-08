var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cors());

var server = app.listen(3000,function(){
   console.log("Express Server has started on port 3000");
}); 

require('./server/express/api')(app);
