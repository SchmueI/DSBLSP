var width = document.getElementById('screen').offsetWidth;
var socket = io();
var paper = Raphael(document.getElementById("screen"), width, width*0.5625);
var movingElem = false;
var staticTimeTable = [];

socket.on("timetable", function(data){
    for (var i = 0; i<data.length; i++){
	    staticTimeTable[i]=data[i];
	}
	if (!(document.activeElement === document.getElementById("sun1"))){ document.getElementById("sun1").value=data[0].raw1 } else if (!(document.getElementById("sun1").value === data[0].raw1)){socket.emit("tableChange",{"raw1":document.getElementById("sun1").value, "day":0});}
	if (!(document.activeElement === document.getElementById("sun2"))){ document.getElementById("sun2").value=data[0].raw2 } else if (!(document.getElementById("sun2").value === data[0].raw2)){socket.emit("tableChange",{"raw2":document.getElementById("sun2").value, "day":0});}
	if (!(document.activeElement === document.getElementById("sun3"))){ document.getElementById("sun3").value=data[0].raw3 } else if (!(document.getElementById("sun3").value === data[0].raw3)){socket.emit("tableChange",{"raw3":document.getElementById("sun3").value, "day":0});}
	if (!(document.activeElement === document.getElementById("sun4"))){ document.getElementById("sun4").value=data[0].raw4 } else if (!(document.getElementById("sun4").value === data[0].raw4)){socket.emit("tableChange",{"raw4":document.getElementById("sun4").value, "day":0});}
	if (!(document.activeElement === document.getElementById("sun5"))){ document.getElementById("sun5").value=data[0].raw5 } else if (!(document.getElementById("sun5").value === data[0].raw5)){socket.emit("tableChange",{"raw5":document.getElementById("sun5").value, "day":0});}
	if (!(document.activeElement === document.getElementById("sun6"))){ document.getElementById("sun6").value=data[0].raw6 } else if (!(document.getElementById("sun6").value === data[0].raw6)){socket.emit("tableChange",{"raw6":document.getElementById("sun6").value, "day":0});}
	if (!(document.activeElement === document.getElementById("sun7"))){ document.getElementById("sun7").value=data[0].raw7 } else if (!(document.getElementById("sun7").value === data[0].raw7)){socket.emit("tableChange",{"raw7":document.getElementById("sun7").value, "day":0});}
    
	if (!(document.activeElement === document.getElementById("mon1"))){ document.getElementById("mon1").value=data[1].raw1 } else if (!(document.getElementById("mon1").value === data[1].raw1)){socket.emit("tableChange",{"raw1":document.getElementById("mon1").value, "day":1});}
	if (!(document.activeElement === document.getElementById("mon2"))){ document.getElementById("mon2").value=data[1].raw2 } else if (!(document.getElementById("mon2").value === data[1].raw2)){socket.emit("tableChange",{"raw2":document.getElementById("mon2").value, "day":1});}
	if (!(document.activeElement === document.getElementById("mon3"))){ document.getElementById("mon3").value=data[1].raw3 } else if (!(document.getElementById("mon3").value === data[1].raw3)){socket.emit("tableChange",{"raw3":document.getElementById("mon3").value, "day":1});}
	if (!(document.activeElement === document.getElementById("mon4"))){ document.getElementById("mon4").value=data[1].raw4 } else if (!(document.getElementById("mon4").value === data[1].raw4)){socket.emit("tableChange",{"raw4":document.getElementById("mon4").value, "day":1});}
	if (!(document.activeElement === document.getElementById("mon5"))){ document.getElementById("mon5").value=data[1].raw5 } else if (!(document.getElementById("mon5").value === data[1].raw5)){socket.emit("tableChange",{"raw5":document.getElementById("mon5").value, "day":1});}
	if (!(document.activeElement === document.getElementById("mon6"))){ document.getElementById("mon6").value=data[1].raw6 } else if (!(document.getElementById("mon6").value === data[1].raw6)){socket.emit("tableChange",{"raw6":document.getElementById("mon6").value, "day":1});}
	if (!(document.activeElement === document.getElementById("mon7"))){ document.getElementById("mon7").value=data[1].raw7 } else if (!(document.getElementById("mon7").value === data[1].raw7)){socket.emit("tableChange",{"raw7":document.getElementById("mon7").value, "day":1});}
	
	if (!(document.activeElement === document.getElementById("tue1"))){ document.getElementById("tue1").value=data[2].raw1 } else if (!(document.getElementById("tue1").value === data[2].raw1)){socket.emit("tableChange",{"raw1":document.getElementById("tue1").value, "day":2});}
	if (!(document.activeElement === document.getElementById("tue2"))){ document.getElementById("tue2").value=data[2].raw2 } else if (!(document.getElementById("tue2").value === data[2].raw2)){socket.emit("tableChange",{"raw2":document.getElementById("tue2").value, "day":2});}
	if (!(document.activeElement === document.getElementById("tue3"))){ document.getElementById("tue3").value=data[2].raw3 } else if (!(document.getElementById("tue3").value === data[2].raw3)){socket.emit("tableChange",{"raw3":document.getElementById("tue3").value, "day":2});}
	if (!(document.activeElement === document.getElementById("tue4"))){ document.getElementById("tue4").value=data[2].raw4 } else if (!(document.getElementById("tue4").value === data[2].raw4)){socket.emit("tableChange",{"raw4":document.getElementById("tue4").value, "day":2});}
	if (!(document.activeElement === document.getElementById("tue5"))){ document.getElementById("tue5").value=data[2].raw5 } else if (!(document.getElementById("tue5").value === data[2].raw5)){socket.emit("tableChange",{"raw5":document.getElementById("tue5").value, "day":2});}
	if (!(document.activeElement === document.getElementById("tue6"))){ document.getElementById("tue6").value=data[2].raw6 } else if (!(document.getElementById("tue6").value === data[2].raw6)){socket.emit("tableChange",{"raw6":document.getElementById("tue6").value, "day":2});}
	if (!(document.activeElement === document.getElementById("tue7"))){ document.getElementById("tue7").value=data[2].raw7 } else if (!(document.getElementById("tue7").value === data[2].raw7)){socket.emit("tableChange",{"raw7":document.getElementById("tue7").value, "day":2});}

	if (!(document.activeElement === document.getElementById("wed1"))){ document.getElementById("wed1").value=data[3].raw1 } else if (!(document.getElementById("wed1").value === data[3].raw1)){socket.emit("tableChange",{"raw1":document.getElementById("wed1").value, "day":3});}
	if (!(document.activeElement === document.getElementById("wed2"))){ document.getElementById("wed2").value=data[3].raw2 } else if (!(document.getElementById("wed2").value === data[3].raw2)){socket.emit("tableChange",{"raw2":document.getElementById("wed2").value, "day":3});}
	if (!(document.activeElement === document.getElementById("wed3"))){ document.getElementById("wed3").value=data[3].raw3 } else if (!(document.getElementById("wed3").value === data[3].raw3)){socket.emit("tableChange",{"raw3":document.getElementById("wed3").value, "day":3});}
	if (!(document.activeElement === document.getElementById("wed4"))){ document.getElementById("wed4").value=data[3].raw4 } else if (!(document.getElementById("wed4").value === data[3].raw4)){socket.emit("tableChange",{"raw4":document.getElementById("wed4").value, "day":3});}
	if (!(document.activeElement === document.getElementById("wed5"))){ document.getElementById("wed5").value=data[3].raw5 } else if (!(document.getElementById("wed5").value === data[3].raw5)){socket.emit("tableChange",{"raw5":document.getElementById("wed5").value, "day":3});}
	if (!(document.activeElement === document.getElementById("wed6"))){ document.getElementById("wed6").value=data[3].raw6 } else if (!(document.getElementById("wed6").value === data[3].raw6)){socket.emit("tableChange",{"raw6":document.getElementById("wed6").value, "day":3});}
	if (!(document.activeElement === document.getElementById("wed7"))){ document.getElementById("wed7").value=data[3].raw7 } else if (!(document.getElementById("wed7").value === data[3].raw7)){socket.emit("tableChange",{"raw7":document.getElementById("wed7").value, "day":3});}

	if (!(document.activeElement === document.getElementById("thu1"))){ document.getElementById("thu1").value=data[4].raw1 } else if (!(document.getElementById("thu1").value === data[4].raw1)){socket.emit("tableChange",{"raw1":document.getElementById("thu1").value, "day":4});}
	if (!(document.activeElement === document.getElementById("thu2"))){ document.getElementById("thu2").value=data[4].raw2 } else if (!(document.getElementById("thu2").value === data[4].raw2)){socket.emit("tableChange",{"raw2":document.getElementById("thu2").value, "day":4});}
	if (!(document.activeElement === document.getElementById("thu3"))){ document.getElementById("thu3").value=data[4].raw3 } else if (!(document.getElementById("thu3").value === data[4].raw3)){socket.emit("tableChange",{"raw3":document.getElementById("thu3").value, "day":4});}
	if (!(document.activeElement === document.getElementById("thu4"))){ document.getElementById("thu4").value=data[4].raw4 } else if (!(document.getElementById("thu4").value === data[4].raw4)){socket.emit("tableChange",{"raw4":document.getElementById("thu4").value, "day":4});}
	if (!(document.activeElement === document.getElementById("thu5"))){ document.getElementById("thu5").value=data[4].raw5 } else if (!(document.getElementById("thu5").value === data[4].raw5)){socket.emit("tableChange",{"raw5":document.getElementById("thu5").value, "day":4});}
	if (!(document.activeElement === document.getElementById("thu6"))){ document.getElementById("thu6").value=data[4].raw6 } else if (!(document.getElementById("thu6").value === data[4].raw6)){socket.emit("tableChange",{"raw6":document.getElementById("thu6").value, "day":4});}
	if (!(document.activeElement === document.getElementById("thu7"))){ document.getElementById("thu7").value=data[4].raw7 } else if (!(document.getElementById("thu7").value === data[4].raw7)){socket.emit("tableChange",{"raw7":document.getElementById("thu7").value, "day":4});}

	if (!(document.activeElement === document.getElementById("fri1"))){ document.getElementById("fri1").value=data[5].raw1 } else if (!(document.getElementById("fri1").value === data[5].raw1)){socket.emit("tableChange",{"raw1":document.getElementById("fri1").value, "day":5});}
	if (!(document.activeElement === document.getElementById("fri2"))){ document.getElementById("fri2").value=data[5].raw2 } else if (!(document.getElementById("fri2").value === data[5].raw2)){socket.emit("tableChange",{"raw2":document.getElementById("fri2").value, "day":5});}
	if (!(document.activeElement === document.getElementById("fri3"))){ document.getElementById("fri3").value=data[5].raw3 } else if (!(document.getElementById("fri3").value === data[5].raw3)){socket.emit("tableChange",{"raw3":document.getElementById("fri3").value, "day":5});}
	if (!(document.activeElement === document.getElementById("fri4"))){ document.getElementById("fri4").value=data[5].raw4 } else if (!(document.getElementById("fri4").value === data[5].raw4)){socket.emit("tableChange",{"raw4":document.getElementById("fri4").value, "day":5});}
	if (!(document.activeElement === document.getElementById("fri5"))){ document.getElementById("fri5").value=data[5].raw5 } else if (!(document.getElementById("fri5").value === data[5].raw5)){socket.emit("tableChange",{"raw5":document.getElementById("fri5").value, "day":5});}
	if (!(document.activeElement === document.getElementById("fri6"))){ document.getElementById("fri6").value=data[5].raw6 } else if (!(document.getElementById("fri6").value === data[5].raw6)){socket.emit("tableChange",{"raw6":document.getElementById("fri6").value, "day":5});}
	if (!(document.activeElement === document.getElementById("fri7"))){ document.getElementById("fri7").value=data[5].raw7 } else if (!(document.getElementById("fri7").value === data[5].raw7)){socket.emit("tableChange",{"raw7":document.getElementById("fri7").value, "day":5});}

	if (!(document.activeElement === document.getElementById("sat1"))){ document.getElementById("sat1").value=data[6].raw1 } else if (!(document.getElementById("sat1").value === data[6].raw1)){socket.emit("tableChange",{"raw1":document.getElementById("sat1").value, "day":6});}
	if (!(document.activeElement === document.getElementById("sat1"))){ document.getElementById("sat2").value=data[6].raw2 } else if (!(document.getElementById("sat2").value === data[6].raw2)){socket.emit("tableChange",{"raw2":document.getElementById("sat2").value, "day":6});}
	if (!(document.activeElement === document.getElementById("sat1"))){ document.getElementById("sat3").value=data[6].raw3 } else if (!(document.getElementById("sat3").value === data[6].raw3)){socket.emit("tableChange",{"raw3":document.getElementById("sat3").value, "day":6});}
	if (!(document.activeElement === document.getElementById("sat1"))){ document.getElementById("sat4").value=data[6].raw4 } else if (!(document.getElementById("sat4").value === data[6].raw4)){socket.emit("tableChange",{"raw4":document.getElementById("sat4").value, "day":6});}
	if (!(document.activeElement === document.getElementById("sat1"))){ document.getElementById("sat5").value=data[6].raw5 } else if (!(document.getElementById("sat5").value === data[6].raw5)){socket.emit("tableChange",{"raw5":document.getElementById("sat5").value, "day":6});}
	if (!(document.activeElement === document.getElementById("sat1"))){ document.getElementById("sat6").value=data[6].raw6 } else if (!(document.getElementById("sat6").value === data[6].raw6)){socket.emit("tableChange",{"raw6":document.getElementById("sat6").value, "day":6});}
	if (!(document.activeElement === document.getElementById("sat1"))){ document.getElementById("sat7").value=data[6].raw7 } else if (!(document.getElementById("sat7").value === data[6].raw7)){socket.emit("tableChange",{"raw7":document.getElementById("sat7").value, "day":6});}
	
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
	
    clock(0.85, 0.14, 0.06);
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
	var d = new Date();
	var hourAngle = (d.getHours() * 60 + d.getMinutes())/2, minAngle = (d.getMinutes() * 6), secAngle = (d.getSeconds() * 6);
	var secHand = paper.path("M "+ xpos + " " + ypos+", l 0"+(r*0.73333333333*-1)+", M "+ xpos + " " + ypos+", l 0" + (0.1*r)).attr({"stroke":"#590b5d", "stroke-width":2});
	var minHand = paper.path("M "+ xpos + " " + ypos+", l 0 "+(r*0.8*-1)).attr({"stroke":"#fff", 'stroke-width':2}).transform("r" + minAngle + " "+ xpos + " " + ypos);
	var hourHand = paper.path("M "+ xpos + " " + ypos+", l 0 "+(r*0.53333*-1)).attr({"stroke":"#fff", 'stroke-width':3, 'stroke-linecap':'round'}).transform("r" + hourAngle + " "+ xpos + " " + ypos);
	
	/** 
	 * The following code using the Raphael.animation function is HIGHLY unstable and should be replaced
	 * with a JS script that fetches the right position for each second.
	 * Even if this uses more memory, it is highly recommended to not rely on
	 * the .animation method anymore!
	*/
	
	var secAnim = Raphael.animation({transform: "r360 "+ xpos + " " + ypos}, 60000).repeat(Infinity);
	var minAnim = Raphael.animation({transform: "r360 "+ xpos + " " + ypos}, 3600000).repeat(Infinity);
	var hourAnim = Raphael.animation({transform: "r360 "+ xpos + " " + ypos}, 43200000).repeat(Infinity);
	secHand.animate(secAnim); 
	minHand.animate(minAnim);
	hourHand.animate(hourAnim);
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