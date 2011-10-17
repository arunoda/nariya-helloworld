var express = require('express');
var app = express.createServer();
var fs = require('fs');

app.get('/', function(req, res){
	fs.readFile('text.txt', 'utf8', function(err, data) {
		res.send("OK - It's changed " + data);
	});
});

var port = process.argv[2] || 8082;
app.listen(port);
console.log('app started on port: %s', port);
