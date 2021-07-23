var http = require('http');
var path = require('path');
var fs = require('fs');
let indexPath = path.join(__dirname, './pages/') + 'index.html';
// let indexPath = 'index.html';
http.createServer((req, res) => {
    fs.readFile(indexPath, function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });
}).listen(8080);
console.log(indexPath);
console.log('http://localhost:8080');
