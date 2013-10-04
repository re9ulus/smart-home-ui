// TODO: Rewrite with JQuery

window.onload = function() {
    var messages = [];
    var socket = io.connect("http://localhost:3700");
    var field = document.getElementById("field");
    var sendButton = document.getElementById("send");
    var content = document.getElementById("content");

    socket.on("message", function(data) {
        console.log(data);
        if (data.message) {
            messages.push(data.message);
            var html = '';
            for (var i=0; i<messages.length; ++i) {
                html += messages[i] + "<br />";
            }
            content.innerHTML = html;
        } else {
            console.log("There is a problem: ", data);
        }
    });

    // socket.on("message", function(data) {
    //     console.log(data);
    //     if (data.temp) {
    //         // temperature data
    //         // what to do with data, from different sources?
    //     }
    //     if (data.light) {
    //         // light data
    //     }
    //     if (data.secure) {
    //         // security data
    //     }
    //     if (data.water) {
    //         // water data
    //     }
    // });

    socket.on("temp", function(data) {
        console.log(data);
        if(data.temp) {
            content.innerHTML = data.temp;
        } else {
            console.log("There is a problem: ", data);
        }
    });

    sendButton.onclick = function() {
        var text = field.value;
        console.log(text);
        socket.emit('temp', {temp: text});
    };
}