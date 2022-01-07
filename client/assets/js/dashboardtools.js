function advancedOptions() {
    var x = document.getElementsByName("advanced");
    for (var i = 0; i<x.length; i++){
        if (x[i].style.display === "none") {
            x[i].style.display = "block";
        } else {
            x[i].style.display = "none";
        }
    }
}

function timetableOptions(){
    console.log("YE")
    var x = document.getElementById("timetableConfig");
    console.log(x)
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}