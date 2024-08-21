var http = require('http');
var fs = require('fs');
var url = require('url');


http.createServer((req, res) => {

    let parsedUrl = url.parse(req.url, true);
    let pathName = '.' + parsedUrl.pathname;

    fs.readFile(pathName, (err, data) => {
        
    });

}).listen(3000, () => {
    console.log('Server connected on port: 3000');
});