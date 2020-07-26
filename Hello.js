// Basic JavaScript Code
// console.log('Hello World'); 

// Web Server
// Create a variable
var http = require('http');
// It allows node to transfer data with internet
// Transfer the request to the server and responds back
// ASYNCHRONOUS
var url = require('url');
// Create Server
// create a web server object
http.createServer(function (req, res){
	// Two parameters request and response
	res.writeHead(200, {'Content-Type': 'text/html'});
	var q = url.parse(req.url, true).query;
	var dates = q.year;
	// var dates = q.year + " " + q.month;
	// res.write(req.url)
	res.write(dates);
	// Output to the page
	// res.end('Hello World!');
	res.end();
}).listen(8080);