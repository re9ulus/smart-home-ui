var express = require('express');
var app = express();
var port = 3702;

app.set('views', __dirname + '/tpl');
app.set('view engine', 'jade');
app.engine('jade', require('jade').__express);
app.use(express.static(__dirname + '/public'));

app.get('/hello.txt', function(req, res) {
    var body = 'Hello World!';
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Length', body.length);
    res.end(body);
});

app.get('/', function(req, res) {
    // res.send("It works!");
    res.render('page');
})

app.get('/controls', function(req, res) {
    res.render('controls');
})

app.get('/sensors', function(req, res) {
    res.render('sensors');
});


app.listen(port);

console.log("Listening on port 3702");