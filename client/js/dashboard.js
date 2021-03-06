var width = document.getElementById('screen').offsetWidth;
var socket = io();
var paper = Raphael(document.getElementById("screen"), width, width*0.5625);
var movingElem = false;
var staticTimeTable = [];

socket.on("timetable", function(data){
	
	for (var i = 0; i<data.length; i++){
	    staticTimeTable[i]=data[i];
	}
	
	timetable(0.75, 0.3, 0.1, 0.06);
});

var sendDate = function(text, spawn, die, font){
	
	d = Date.now()
	spawn=(spawn*60*60*1000)+d;
	die=(die*60*60*1000)+spawn;
   	x = Math.random() * (0.7 - 0.01) + 0.01;
	y = Math.random() * (0.9 - 0.3) + 0.3;


    socket.emit("date",{
	    "text":text,
		"spawn":spawn,
		"die":die,
		"font":font,
		"x":x,
		"y":y		
	});

	socket.emit("backup",{});

}

var sendLogin = function(username, password){
	
	socket.emit("login",{
		"username":username,
		"password":password
	});

}

var erease = function(){
    socket.emit("erease", {
	    erease:"all"
    });
}

var del = function(){
    socket.emit("erease",{
	    erease:"last"
	});

}

var testChange = function(){
    socket.emit("ChangeTime",{
	    day: 3,
		raw1: "",
		raw2: "14-16, Test",
		raw3: "14-16, Test",
		raw4: "14-16, Test",
		raw5: "14-16, Test",
		raw6: "14-16, Test",
		raw7: "14-16, Test"
	})
}

/*
    This section defines the way how the text moves
*/

move_start = function () {
    //storing original coordinates
    this.ox = this.attr('x');
	this.oy = this.attr('y');
	this.attr({opacity: 0.5});
	movingElem = true;
};

//visually change the text when it is being moved
move_drag = function (dx, dy, x, y) {
    //move will be called with dx and dy
	this.attr({x: this.ox + dx, y: this.oy + dy});
	socket.emit("move",{
	    x: (this.ox + dx)/paper.width,
        y: (this.oy + dy)/paper.height,
		id: this.id,
		spawn: this.spawn,
		die: this.die,
		font: this.font
	});
					
};

//when the user lets go of the mouse button, reset the square's properties
move_up = function () {
    //restoring the visual state
	this.attr({opacity: 1});
	movingElem = false;
};

rem_elem = function(){
    socket.emit("erease",{
	    erease: "spec",
		id: this.id
	});
}

var elements = [];

socket.on("recentData",function(data){
    /*
        This section is about aligning the elements on the paper correctly.
        It sets the preferences of the background and style elements.
        The for-loop iterates thru every Element of the received Dataset
        and prints it to the Screen.

    */
                        
    if (!movingElem){
        for(var i = 0; i < elements.length; i++){
            elements[i].remove();
        }

        elements = [];

        for (var i = 0; i<data.length; i++){
            x=data[i].x*paper.width;
            y=data[i].y*paper.height;
                                
            elements.push({
                text: data[i].text,
                x: x,
                y: y,
				spawn: data[i].spawn,
				die: data[i].die,
				font: data[i].font
            });
                                
        }
        
        for(var i = 0; i < elements.length; i++) {
            //extract the positional data from the json array
            var px = elements[i].x;
            var py = elements[i].y;
            
            //we need to make sure that the values are numerical for calculations later
            px = parseInt(px);
            py = parseInt(py);
            
            //deal with this individual text, position it and show a status based on color
			console.log(data[i].font)
            elements[i] = paper.text(px, py, elements[i].text).attr({
                fill: "white",
                font: "Arial",
                "font-size": Math.floor(elements[i].font*paper.height),
                "text-anchor": "start",
                cursor: "grabbing",
            });
            elements[i].id = i
                                
            //define relations and functions for moving and positioning
            //move the text
            elements[i].drag(move_drag, move_start, move_up);
            elements[i].dblclick(rem_elem)
        }
    }
});


socket.on("serverLog", function(data){
    console.log(data.log);
});

socket.on("auth", function(data){
	console.log(data.auth);
	if(data.auth=="success") auth();
	else if (data.auth == "password") pwd();
	else wrong();
});

var XREL=0.85;
var YREL=0.14;
var RREL=0.06;

/**
 * The following socket defines the hand variables of the clock globally
 * they will be transformed into a path by the function clockHands();
 * and uppdated secondwise
 */

var d = new Date();
var hourAngle = (d.getHours() * 60 + d.getMinutes())/2, minAngle = (d.getMinutes() * 6), secAngle = (d.getSeconds() * 6);
var secHand = paper.circle(0,0,0);
var minHand = paper.circle(0,0,0);
var hourHand = paper.circle(0,0,0);

var init = function() {
	var bg = paper.rect(0, 0, window.innerWidth, window.innerHeight);
	var siteBarWhite = paper.rect(0.98*paper.width, 0, 0.01*paper.width, paper.height);
	var siteBarViolet = paper.rect(0.99*paper.width, 0, 0.01*paper.width, paper.height);
	var title = paper.text(0.5*paper.width, 0.047*paper.height, "Information").attr({
	    fill: "white",
		font: "Arial",
		"font-size": Math.floor(0.08*paper.height),
		"font-family": "bold"
	});
	
    bg.attr({
	    fill: "black"
	});
	
    siteBarWhite.attr({
	    fill: "white",
		stroke: "white"
	});
	
    siteBarViolet.attr({
	    fill: "#590b5d",
		stroke: "#590b5d"
	});
	
    clock(XREL, YREL, RREL);

	setInterval(clockHands, 1000);
}

var clock = function(xrel, yrel, rrel){
    xpos=xrel*paper.width
	ypos=yrel*paper.height
	r=rrel*paper.width

	var c1 = paper.circle(xpos, ypos , r).attr({"stroke":"#fff", "stroke-width":2});
	var c2 = paper.circle(xpos, ypos, r*0.03334).attr({"fill":"#590b5d"});
	var sMark = paper.path("M "+ xpos + " " + ypos+" m 0 "+(-r+(0.0666*r))+" l 0 "+(-0.0666*r)).attr({"stroke":"#fff", "stroke-width":2});
	sMark.clone().attr({transform:"r30 "+ xpos + " " + ypos});
	sMark.clone().attr({transform:"r60 "+ xpos + " " + ypos});
	sMark.clone().attr({transform:"r120 "+ xpos + " " + ypos});
	sMark.clone().attr({transform:"r150 "+ xpos + " " + ypos});
	sMark.clone().attr({transform:"r210 "+ xpos + " " + ypos});
	sMark.clone().attr({transform:"r240 "+ xpos + " " + ypos});
	sMark.clone().attr({transform:"r300 "+ xpos + " " + ypos});
	sMark.clone().attr({transform:"r330 "+ xpos + " " + ypos});
	var lMark = paper.path("M "+ xpos + " " + ypos+" m 0 "+(-r+(0.133333*r))+" l 0 "+(-0.133333*r)).attr({"stroke":"#590b5d",  "stroke-width":4});
	lMark.clone().attr({transform:"r90 "+ xpos + " " + ypos});
	lMark.clone().attr({transform:"r180 "+ xpos + " " + ypos});
	lMark.clone().attr({transform:"r270 "+ xpos + " " + ypos});
	lMark.clone().attr({transform:"r360 "+ xpos + " " + ypos});
}

function clockHands(){
	var d = new Date();
	console.log("clocky");
	xpos=XREL*paper.width
	ypos=YREL*paper.height
	r=RREL*paper.width
	
	hourHand.remove();
	minHand.remove();
	secHand.remove();

	hourAngle = (d.getHours() * 60 + d.getMinutes())/2, minAngle = (d.getMinutes() * 6), secAngle = (d.getSeconds() * 6);
	secHand = paper.path("M "+ xpos + " " + ypos+", l 0"+(r*0.73333333333*-1)+", M "+ xpos + " " + ypos+", l 0" + (0.1*r)).attr({"stroke":"#590b5d", "stroke-width":2}).transform("r" + secAngle + " "+ xpos + " " + ypos);
	minHand = paper.path("M "+ xpos + " " + ypos+", l 0 "+(r*0.8*-1)).attr({"stroke":"#fff", 'stroke-width':2}).transform("r" + minAngle + " "+ xpos + " " + ypos);
	hourHand = paper.path("M "+ xpos + " " + ypos+", l 0 "+(r*0.53333*-1)).attr({"stroke":"#fff", 'stroke-width':3, 'stroke-linecap':'round'}).transform("r" + hourAngle + " "+ xpos + " " + ypos);
}

tableElements=[]
var timetable = function(x, y, width, height){
    day = new Date().getDay();
	x = x*paper.width;
	y = y*paper.height;
	width = width*paper.width;
	height = height*paper.height;

	for(var i = 0; i < tableElements.length; i++){
	    tableElements[i].remove();
	}

	WriteTableRow(x,y,width*2,height,paper,staticTimeTable[day].day);
	y= y+height;
	WriteTableRow(x,y,width,height,paper,staticTimeTable[day].raw1);
	y= y+height;
	WriteTableRow(x,y,width,height,paper,staticTimeTable[day].raw2);
	y= y+height;
	WriteTableRow(x,y,width,height,paper,staticTimeTable[day].raw3);
	y= y+height;
	WriteTableRow(x,y,width,height,paper,staticTimeTable[day].raw4);
	y= y+height;
	WriteTableRow(x,y,width,height,paper,staticTimeTable[day].raw5);
	y= y+height;
	WriteTableRow(x,y,width,height,paper,staticTimeTable[day].raw6);
	y= y+height;
	WriteTableRow(x,y,width,height,paper,staticTimeTable[day].raw7);
	y= y+height;


	function WriteTableRow(x,y,width,height,paper,TDdata){
	    var TD = TDdata.split(",");
		for (j=0; j<TD.length; j++) {
		    var rect = paper.rect(x,y,width,height).attr({"stroke":"#590b5d"});
			tableElements.push(
			    paper.text(x+width/2, y+height/2, TD[j]).attr({
			        "fill":"#fff",
				    "font-size": Math.floor(0.024*paper.height)
			    })
		    );
		    x = x + width;
	    }
    }
}

init(); 