#!/usr/bin/env node

var fs = require('fs');
var express = require("express");
var app = express();

app.get('/', function(request, response) {
  var tmp = fs.readFileSync('index.html','utf8');
  tmp.toString('utf8');
  response.end(tmp); 
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
