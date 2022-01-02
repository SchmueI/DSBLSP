var express = require("express");
var app = express();
var serv = require("http").Server(app);
var sID = 0;

app.get("/", function(req, res){

    res.sendFile(__dirname + "/client/index.html");
});

app.use("/client", express.static(__dirname + "/client"))

serv.listen(2000)
console.log("Server started at Port 2000")

var SOCKET_LIST = {};

var io = require("socket.io")(serv,{});
io.sockets.on("connection", function(socket){
    socket.id = sID //Define identifier for each socket
    sID++;
    console.log("Connected with socket #" +socket.id);
    socket.x = 0;
    socket.y = 0;
    SOCKET_LIST[socket.id] = socket; //add socket to List
    socket.text = "Mathe Dahnke heute in Raum 77"


    /*
        This function will be called whenever the Connection of one of the sockets gets lost.
    */
    socket.on("disconnect", function(){

        delete SOCKET_LIST[socket.id]
        console.log("Lost connection of socket #"+socket.id)

    });
    
    /*
        This function will be called when the client sends a Date to the server.
        The Data of this Package will contain a message and a position. Maybe add username and/or usergroup later, to identify post authors and prevent abuse
    */
    socket.on("date", function(data){
        console.log("received data: "+data.content)
    });

    /*
        socket.emit() will contain all informations shared with the client. The Module "serverLog" is reserved for logs. Module "recentData" will contain position and Text of the displayed Information
    */
    socket.emit("serverLog", {
        log:"Connection established.\nYour ID is #"+socket.id,
    });
});

/*
    This function is called automaticly 25 Times per second. The intervall might be reduced due to performance needs by changing the FPS value.
*/
var FPS=25;
setInterval(function(){
    
    /*
        There are two main functions in one Intervall.
        The first one is made to create a SPECIFIC data package depending on the information for each socket.
        The second one sends the SPECIFIC packed Data to each socket.
    */
    var pack = [];
    for (var i in SOCKET_LIST){
        var socket = SOCKET_LIST[i];
        
        socket.x++;
        socket.y++;
        
        pack.push({
            x:socket.x,
            y:socket.y,
            text:socket.text
        });
    }
    for (var i in SOCKET_LIST){
        var socket = SOCKET_LIST[i]
        socket.emit("recentData", pack)
    }

},1000/FPS);