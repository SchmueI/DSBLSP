var socket = io();

socket.on("timetable", function(data){
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
	if (!(document.activeElement === document.getElementById("sat2"))){ document.getElementById("sat2").value=data[6].raw2 } else if (!(document.getElementById("sat2").value === data[6].raw2)){socket.emit("tableChange",{"raw2":document.getElementById("sat2").value, "day":6});}
	if (!(document.activeElement === document.getElementById("sat3"))){ document.getElementById("sat3").value=data[6].raw3 } else if (!(document.getElementById("sat3").value === data[6].raw3)){socket.emit("tableChange",{"raw3":document.getElementById("sat3").value, "day":6});}
	if (!(document.activeElement === document.getElementById("sat4"))){ document.getElementById("sat4").value=data[6].raw4 } else if (!(document.getElementById("sat4").value === data[6].raw4)){socket.emit("tableChange",{"raw4":document.getElementById("sat4").value, "day":6});}
	if (!(document.activeElement === document.getElementById("sat5"))){ document.getElementById("sat5").value=data[6].raw5 } else if (!(document.getElementById("sat5").value === data[6].raw5)){socket.emit("tableChange",{"raw5":document.getElementById("sat5").value, "day":6});}
	if (!(document.activeElement === document.getElementById("sat6"))){ document.getElementById("sat6").value=data[6].raw6 } else if (!(document.getElementById("sat6").value === data[6].raw6)){socket.emit("tableChange",{"raw6":document.getElementById("sat6").value, "day":6});}
	if (!(document.activeElement === document.getElementById("sat7"))){ document.getElementById("sat7").value=data[6].raw7 } else if (!(document.getElementById("sat7").value === data[6].raw7)){socket.emit("tableChange",{"raw7":document.getElementById("sat7").value, "day":6});}
});