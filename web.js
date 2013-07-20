var fs = require('fs');
var express = require('express');

var app = express.createServer(express.logger());

var _text = fs.readFileSync("index.html");
var _buffer = new Buffer(_text);

app.get('/', function(request,response) {
	response.send(_buffer.toString("utf8"));
});

var port = process.env.PORT || 8080;
app.listen(port,function() {
	console.log("Listening on "+port);
});

