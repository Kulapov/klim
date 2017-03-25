function displayCanvas() {
var canvasHTML = document.getElementById('myCanvas');
var contextHTML = canvasHTML.getContext('2d');
contextHTML.strokeRect(0,0,canvasHTML.width,canvasHTML.height);


var radiusClock = canvasHTML.width/2 - 10;
var xCenterClock = canvasHTML.width/2;
var yCenterClock = canvasHTML.width/2;

contextHTML.fillStyle = "#ffffff";
contextHTML.fillRect(0,0,canvasHTML.width, canvasHTML.height);

contextHTML.strokeStyle = "#000000";
contextHTML.lineWidth = 1;
contextHTML.beginPath();
contextHTML.arc(xCenterClock, yCenterClock, radiusClock, 0, 2*Math.PI, true);
contextHTML.moveTo(xCenterClock, yCenterClock);
contextHTML.stroke();
contextHTML.closePath();

var radiusNum
for(var tm = 0; tm < 60; tm++) {
contextHTML.beginPath();
if(tm % 5 == 0) {
radiusNum = radiusClock - 20;
}
else {radiusNum = radiusClock - 10;}
contextHTML.moveTo(xCenterClock + radiusNum * Math.cos(-6*tm*(Math.PI/180) + Math.PI/2),
yCenterClock - radiusNum* Math.sin(-6*tm*(Math.PI/180) + Math.PI/2));

contextHTML.lineTo(xCenterClock + radiusClock * Math.cos(-6*tm*(Math.PI/180) + Math.PI/2),
yCenterClock - radiusClock* Math.sin(-6*tm*(Math.PI/180) + Math.PI/2));

contextHTML.stroke();
contextHTML.closePath();
}
var lengthSecounds = radiusNum - 10;
var lengthMinuts = radiusNum - 15;
var lengthHour = lengthMinuts / 1.5;
var d = new Date();
var t_sec = 6*d.getSeconds();
var t_min = 6*(d.getMinutes() + (1/60)*d.getSeconds());
var t_hour = 30*(d.getHours() + (1/60)*d.getMinutes());

contextHTML.beginPath();
contextHTML.strokeStyle = "#FF0000";
contextHTML.moveTo(xCenterClock,yCenterClock);
contextHTML.lineTo(xCenterClock + lengthSecounds*Math.cos(Math.PI/2 - t_sec*(Math.PI/180)),
yCenterClock - lengthSecounds*Math.sin(Math.PI/2 - t_sec*(Math.PI/180)));
contextHTML.stroke();
contextHTML.closePath();

contextHTML.beginPath();
contextHTML.strokeStyle = "#000000";
contextHTML.lineWidth = 3;
contextHTML.moveTo(xCenterClock,yCenterClock);
contextHTML.lineTo(xCenterClock + lengthMinuts*Math.cos(Math.PI/2 - t_min*(Math.PI/180)),
yCenterClock - lengthMinuts*Math.sin(Math.PI/2 - t_min*(Math.PI/180)));
contextHTML.stroke();
contextHTML.closePath();

contextHTML.beginPath();
contextHTML.lineWidth = 5;
contextHTML.moveTo(xCenterClock,yCenterClock);
contextHTML.lineTo(xCenterClock + lengthHour*Math.cos(Math.PI/2 - t_hour*(Math.PI/180)),
yCenterClock - lengthHour*Math.sin(Math.PI/2 - t_hour*(Math.PI/180)));
contextHTML.stroke();
contextHTML.closePath();

contextHTML.beginPath();
contextHTML.strokeStyle = "#000000";
contextHTML.fillStyle = "#ffffff";
contextHTML.lineWidth = 3;
contextHTML.arc(xCenterClock, yCenterClock, 5, 0, 2*Math.PI, true);
contextHTML.stroke();
contextHTML.fill();
contextHTML.closePath();

return;
}

window.onload = function() {
window.setInterval(
function(){
displayCanvas();
}
, 1000);
}