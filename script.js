const canvas = document.getElementById("canv");

const ctx = canvas.getContext("2d");

ctx.fillStyle = "#00DDDD";
ctx.fillRect(0,0,200,100);
ctx.moveTo(0,0);
ctx.lineTo(200,100);
ctx.stroke();

ctx.beginPath();
ctx.arc(50, 50, 30, 0, 2*Math.PI);
ctx.stroke();

const grd = ctx.createLinearGradient(300,300,100,0);
grd.addColorStop(.8, "green");
grd.addColorStop(1, "white");
ctx.fillStyle = grd;
ctx.fillRect(10,10,150,80);
