var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
    console.log('request was made: ' + req.url)
    if(req.url === '/home' || req.url === '/'){
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.createReadStream(__dirname + '/public/index.html').pipe(res);
    } else if(req.url === '/contact'){
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.createReadStream(__dirname + '/public/contact.html').pipe(res);
    }else if(req.url === '/api/mbeMainJSON.json'){
        var mbeMain = fs.readFileSync(__dirname + '/api/mbeMainJSON.json', 'utf8')
        res.writeHead(200, { 'Content-Type': 'application/json' });    
        res.end(JSON.stringify(mbeMain));        
        // console.log(JSON.stringify(mbeMain));
    } else if(req.url === '/apiStreams/mbeMainJSON.json'){
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.createReadStream(__dirname + '/apiStreams/mbeMainJSON.json').pipe(res);
        // console.log('stream has been read');
    } else{
        res.writeHead(404, { 'Content-Type': 'text/html' });
        fs.createReadStream(__dirname + '/public/404.html').pipe(res);
    }
    

});

server.listen(3000, '127.0.0.1');
console.log('now listening to port 3000');