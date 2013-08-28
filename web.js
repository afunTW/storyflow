var fs = require('fs');
var express = require("express");
var app = express();

app.get('/', function(request, response) {
  var index = fs.readFileSync('index.html','utf8');
  var flow = fs.readFileSync('flow.css','utf-8');
  var normalize = fs.readFileSync('normalize.css','utf-8');
  var storyflow = fs.readFileSync('storyflow.css','utf-8');

  index.toString('utf8');
  flow.toString('utf-8');
  normalize.toString('utf-8');
  storyflow.toString('utf-8');

  response.end(index);
  response.end(flow);
  response.end(normalize);
  response.end(storyflow); 
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});

/*Connect to mongodb*/
var mongoose = require('mongoose');
mongoose.connect('mongodb://endlessproof:100321014@ds041218.mongolab.com:41218/heroku_app17770783');
