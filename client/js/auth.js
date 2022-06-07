document.getElementById("dashpanel").style="display:none";
document.getElementById("login").style="display:block";

function auth(){
    document.getElementById("dashpanel").style="display:block";
    document.getElementById("login").style="display:none";
}

function pwd(){
    document.getElementById("password-label").style.color="red";
    document.getElementById("username-label").style.color="white";
}

function wrong(){
    document.getElementById("password-label").style.color="red";
    document.getElementById("username-label").style.color="red";
}