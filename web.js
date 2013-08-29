var fs = require('fs');
var express = require("express");
var app = express();

app.get('/', function(request, response) {
  var index = fs.readFileSync('index.html','utf8');
  
  index.toString('utf8');

  response.end(index);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});

/*Connect to mongodb*/
var mongoose = require('mongoose');
mongoose.connect('mongodb://endlessproof:100321014@ds041218.mongolab.com:41218/heroku_app17770783');
