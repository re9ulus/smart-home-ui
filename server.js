var express = require('express');
var app = express();
var port = 3700;

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

// app.listen(port);
var io = require('socket.io').listen(app.listen(port));

io.sockets.on('connection', function(socket) {
    
    socket.emit('message', {message: 'welcome to the chat', temp: '45C'});
    
    socket.on('send', function(data) {
        io.sockets.emit('message', data);
    });
    
    socket.on('temp', function(data) {
        io.sockets.emit('temp', data);
    })

    // TODO: Test this code
    socket.on('sensor', function(data) {
        var sensor_name = data['name'];
        switch (sensor_name) {
            case('temperature') {
                break;
            },
            case('water') {

            }
        }
    });
});

console.log("Listening on port 3700");