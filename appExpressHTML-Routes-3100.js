// RUNNING ON PORT 3100
var express = require('express');

var app = express();

app.get('/', function(req, res){
    res.send('this is the homepage. DAVE you GOT IT, DUDE!!'); //express knows the content type!
});

// Statements from appHTML-Routes.js refactored as Express get requests
// BROKEN!!
// app.get('/', function(req,res){
//     res.sendFile(__dirname + '/public/index.html'); //express knows the content type!
// });

app.get('/index', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.get('/contact', function(req,res){
    res.sendFile(__dirname + '/contact.html');
});

app.get('/mbeMain', function(req,res){
    res.sendFile(__dirname + '/api/mbeMainJSON.json');
});
    
app.listen(3100);