//Creating RestAPI//
var express = require('express');
var app = express();
var http = require('http').Server(app);

http.listen(9001, '127.0.0.1', function(){
     
    console.log('Listening to the port 9001');
});

var log = (function(req, res, next){
    console.log("Logging");
    next();
});

app.use(('/lib'), express.static('lib'));
app.route('/').get(log, function(req, res, next){
     res.send("Hello SB");
});
app.route('/').put(function(req, res, next){
    res.send("Hello SB");
});
app.route('/').post(function(req, res, next){
    res.send("Hello SB");
});
app.route('/').patch(function(req, res, next){
    res.send("Hello SB");
});
app.route('/').delete(function(req, res, next){
    res.send("Hello SB");
});

app.route('/about').get(log, function(req, res, next){
    res.json({"result": "Hello SB"});
});