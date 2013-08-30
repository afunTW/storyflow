var fs = require('fs');
var express = require("express");
var app = express();
var http = require("http");
var server = http.createServer(app);

app.listen(8080);
console.log("Server Runnung");

app.get('/normalize.css', function(request, response) {
  var file = fs.readFileSync('normalize.css','utf8');
  response.end(file);
});

app.get('/storyflow.css', function(request, response) {
  var file = fs.readFileSync('storyflow.css','utf8');
  response.end(file);
});

app.get('/flow.css', function(request, response) {
  var file = fs.readFileSync('flow.css','utf8');
  response.end(file);
});

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
  console.log("read index.html");
});

/*Connect to mongodb*/
var mongoose = require('mongoose');
mongoose.connect('mongodb://endlessproof:100321014@ds041218.mongolab.com:41218/heroku_app17770783');
