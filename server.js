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
    res.render("page");
})

// app.listen(port);
var io = require('socket.io').listen(app.listen(port));

io.sockets.on('connection', function(socket) {
    socket.emit('message', {message: 'welcome to the chat', temp: '45C'});
    socket.on('send', function(data) {
        io.sockets.emit('message', data);
    });
});

console.log("Listening on port 3000");