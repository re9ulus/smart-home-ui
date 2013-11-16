var express = require('express');
var app = express();
var port = 3701;

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
    res.send("It works!");
})

app.get('/controls', function(req, res) {
    res.json({'Controls': 'controls'});
})

app.get('/sensors/sensor_id', function(req, res) {
    var sensor_id = req.params.sensor_id;
    res.render({'Sensors info':sensor_id});
});

app.listen(port);

console.log("Backend server listening on port 3701");