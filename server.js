var http = require('http'); // import module

var hostname = '127.0.0.1';
var port = 3000;

var server = http.createServer((request, response) => { //create server
  response.statusCode = 200; // http status
  response.setHeader('Content-Type', 'text/html'); // send the http header and content type
  response.end('<h1>Hello Node!!!!</h1>\n'); // response body
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
