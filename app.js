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
    - Master relative positioning on screen (Maybe Font mastering?)
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

var TIMETABLE =  [
    {
        day: "Sunday",
        raw1: "TIME,MEETING",
        raw2: "TIME,MEETING",
        raw3: "TIME,MEETING",
        raw4: "TIME,MEETING",
        raw5: "TIME,MEETING",
        raw6: "TIME,MEETING",
        raw7: "TIME,MEETING"
    },
    {
        day: "Monday",
        raw1: "TIME,MEETING",
        raw2: "TIME,MEETING",
        raw3: "TIME,MEETING",
        raw4: "TIME,MEETING",
        raw5: "TIME,MEETING",
        raw6: "TIME,MEETING",
        raw7: "TIME,MEETING"
    },
    {
        day: "Tuesday",
        raw1: "TIME,MEETING",
        raw2: "TIME,MEETING",
        raw3: "TIME,MEETING",
        raw4: "TIME,MEETING",
        raw5: "TIME,MEETING",
        raw6: "TIME,MEETING",
        raw7: "TIME,MEETING"
    },
    {
        day: "Wednesday",
        raw1: "TIME,MEETING",
        raw2: "TIME,MEETING",
        raw3: "TIME,MEETING",
        raw4: "TIME,MEETING",
        raw5: "TIME,MEETING",
        raw6: "TIME,MEETING",
        raw7: "TIME,MEETING"
    },
    {
        day: "Thursday",
        raw1: "TIME,MEETING",
        raw2: "TIME,MEETING",
        raw3: "TIME,MEETING",
        raw4: "TIME,MEETING",
        raw5: "TIME,MEETING",
        raw6: "TIME,MEETING",
        raw7: "TIME,MEETING"
    },
    {
        day: "Friday",
        raw1: "TIME,MEETING",
        raw2: "TIME,MEETING",
        raw3: "TIME,MEETING",
        raw4: "TIME,MEETING",
        raw5: "TIME,MEETING",
        raw6: "TIME,MEETING",
        raw7: "TIME,MEETING"
    },
    {
        day: "Satturday",
        raw1: "TIME,MEETING",
        raw2: "TIME,MEETING",
        raw3: "TIME,MEETING",
        raw4: "TIME,MEETING",
        raw5: "TIME,MEETING",
        raw6: "TIME,MEETING",
        raw7: "TIME,MEETING"
    }
]

var io = require("socket.io")(serv,{});
io.sockets.on("connection", function(socket){
    socket.id = sID //Define identifier for each socket
    sID++;
    console.log("Connected with socket #" +socket.id);
    socket.emit("recentData", Messages)                                                         //Send latest Data to socket on connection
    SOCKET_LIST[socket.id] = socket;                                                            //add socket to List
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
           text:data.text,
           spawn: data.spawn,
           die: data.die,
           font: data.font
        });
        sendData();
    });

    socket.on("ChangeTime", function(data){
        TIMETABLE[data.day]["raw1"]=data.raw1;
        TIMETABLE[data.day]["raw2"]=data.raw2;
        TIMETABLE[data.day]["raw3"]=data.raw3;
        TIMETABLE[data.day]["raw4"]=data.raw4;
        TIMETABLE[data.day]["raw5"]=data.raw5;
        TIMETABLE[data.day]["raw6"]=data.raw6;
        TIMETABLE[data.day]["raw7"]=data.raw7;

        timetable(TIMETABLE);
    });

    socket.on("move", function(data){
        //console.log("received data: "+JSON.stringify(data, null, 4));
        if (Messages[data.id] != null){
            Messages[data.id]={
                x: data.x,
                y: data.y,
                text: Messages[data.id].text,
                font: Messages[data.id].font,
                spawn: Messages[data.id].spawn,
                die: Messages[data.id].die
            }
        }
        sendData();
    })

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
            sendData();
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
            sendData();
        }

        if(type.erease=="spec"){
            Messages.splice(type.id, 1)
            sendData();
        }
    });

    /*
        socket.emit() will contain all informations shared with the client. The Module "serverLog" is reserved for logs. Module "recentData" will contain position and Text of the displayed Information
    */
    socket.emit("serverLog", {
        log:"Connection established.\nYour ID is #"+socket.id,
    });

    sendData();
    timetable(TIMETABLE);
});

function sendData(){
    d = Date.now();                                                                             // Date in ms
    curMsg = [];                                                                                // Current Messages

    //This loop makes sure that Data is only shown after spawn. It will also remove expired msg
    for(var i = 0; i<Messages.length; i++){
        if(Messages[i].spawn <= d){
            if(Messages[i].die > d){
                curMsg.push(Messages[i]);
            } else {
                console.log("Splicing message: "+JSON.stringify(Messages[i], null, 4))
                Messages.splice(i, 1);
            }
        }
    }

    //This loop sends the data to each socket
    for (var i in SOCKET_LIST){
        var socket = SOCKET_LIST[i];
        socket.emit("recentData", curMsg);
    }
}

function timetable(data){                                                                       // Data was defined at the top
    for (var i in SOCKET_LIST){
        var socket = SOCKET_LIST[i];
        socket.emit("timetable",data);
    }
}


setInterval(function(){
    sendData();
    timetable(TIMETABLE);
},100);

/**
 * Backups.
 * The code below creates a new backup every 15 Minutes.
 * however, the 15 Minute backups will be deleted after one hour.
 * There will also be a "great Backup" every 60 Minutes, which will NEVER be deleted by this software.
 * Therefore it is highly recommended to make a copy of the greater backups to reduce the storage usage.
 */
setInterval(function(){
    //15 min Backup
    //Create Backuo
    //Delete oldest backup (if it exists)
},1000*60*15);

setInterval(function(){
    //60 min Backup
},1000*60*60);