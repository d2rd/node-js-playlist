// RUNNING ON PORT 3100
var express = require('express');

var app = express();

app.get('/', function(req,res){
    res.send('this is the homepage. DAVE you GOT IT, DUDE!!'); //express knows the content type!
});

app.get('/contact', function(req,res){
    res.send('this is the contact page. DAVE\'s at d2rd@outlook.com!!'); //express knows the content type!
});

// app.get('/profile/:id', function(req,res){
//     res.send('You requested to see a profile with the id of  ' + req.params.id); 
// });

app.get('/profile/:name', function(req,res){ 
    res.send('You requested to see a profile with the name of  ' + req.params.name); 
});
    
   
app.listen(3100);