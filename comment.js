// create web server
// create web server
const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

// create web server
http.createServer((req, res) => {
  // parse url
  const urlObj = url.parse(req.url);
  let filePath = '.' + urlObj.pathname;
  // read file
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      return res.end('404 Not Found');
    }
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(data);
    return res.end();
  });
}).listen(8080);
console.log('Server running at http://localhost:8080/');