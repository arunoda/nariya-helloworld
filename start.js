var express = require('express');
var app = express.createServer();
app.get('/', function(req, res) {
	console.log('incoming request');
	res.send('Hello World Nariya');
});

app.listen(8090);
