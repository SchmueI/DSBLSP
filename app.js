/**
    Copyright (C) 2022  Schmuel Odradek
    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation; version 3.
    DSBLSP is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.
    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.

    This product is a WIP. There are still a lot things to be done.
    The current version of the software is not meant to be already daily-driven
    in schools or companies.

    TODO: 
    - Orientate coordinates to the canvas positioning
    - Design account System (login and password) to prevent abuse
    - Set Design standards

 */

var express = require("express");
var app = express();
var serv = require("http").Server(app);
var sID = 0;

app.get("/", function(req, res){

    res.sendFile(__dirname + "/client/index.html");
});

app.use("/client", express.static(__dirname + "/client"))

serv.listen(2000)
console.log("Server started at Port 2000");

var SOCKET_LIST = {};                                                                           //This LIST will be used to track Socket Activity
var MSG_LIST = {};                                                                              //This Array will be used to store all active Informations on screen
var Messages = [];

var io = require("socket.io")(serv,{});
io.sockets.on("connection", function(socket){
    socket.id = sID //Define identifier for each socket
    sID++;
    console.log("Connected with socket #" +socket.id);
    SOCKET_LIST[socket.id] = socket; //add socket to List
    socket.text = "^"


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
        console.log("received data: "+JSON.stringify(data, null, 4));
        Messages.push({
           x:data.x,                                                                            
           y:data.y,
           text:data.text 
        });
    });

    /* 
        The purpose of this function is to clear the Blackboard by resetting the Messages Array.
        It should later contain informations about the author to detect (and prevent) abuse
    */
    socket.on("erease", function(type){
        
        if(type.erease=="all"){
            console.log("Ereased data")
            for (var i in SOCKET_LIST){
                var socket = SOCKET_LIST[i]
                socket.emit("serverLog", {
                    log:"Data was ereased by socket"
                });
            }
            Messages = []
        }

        if(type.erease=="last"){
            console.log("Deleting last data")
            for (var i in SOCKET_LIST){
                var socket = SOCKET_LIST[i]
                socket.emit("serverLog", {
                    log:"Last package was deleted by socket"
                });
            }
            Messages.splice(-1)
        }
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
var fps=25;
setInterval(function(){
    
    /*
        This loop sends the Messages to each connected socket.
    */
    for (var i in SOCKET_LIST){
        var socket = SOCKET_LIST[i]
        socket.emit("recentData", Messages)
    }

},1000/fps);