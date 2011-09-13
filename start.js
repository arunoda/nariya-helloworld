var http = require('http');
var app = http.createServer(function(req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('Hello World Nariya - Continuous Deployment Node Js dfs');
});

var port = process.argv[2];
app.listen(port);
console.log('app started on port: %s', port);
