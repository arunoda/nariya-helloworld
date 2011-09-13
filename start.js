var express = require('express');
var app = express.createServer();

app.get('/', function(req, res){
    res.send('Hello :P');
});

var port = process.argv[2];
app.listen(port);
console.log('app started on port: %s', port);

//