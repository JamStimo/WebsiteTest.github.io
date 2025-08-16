
/*
window.addEventListener('load', function(){
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var rad = 25
    var di = 2*rad
    for (let i = 0; i<600; i+=di) {
        console.log(i);
        ctx.beginPath();
        ctx.moveTo(di,30)
        ctx.arc(i+di,150,rad,0,Math.PI*2);
        ctx.closePath();
        ctx.fill()
    }
})

*/

var x = 30
var y = 30
var rad = 20
var di = 2*rad
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.fillStyle = "#aaaaaa"

window.addEventListener('load', function(){
    /*
    ctx.beginPath();
    ctx.moveTo(di,30)
    ctx.arc(di+x,y,rad,0,Math.PI*2);
    ctx.closePath();
    ctx.fill()
    */

})

window.addEventListener('keydown', function(e) {
    ctx.clearRect(0,0,c.width,c.height)
    if (e.key == "ArrowDown") {
        y=y+30
    } else if (e.key == "ArrowRight") {
        x=x+30
    } else if (e.key == "ArrowLeft") {
        x=x-30
    } else if (e.key == "ArrowUp") {
        y=y-30
    };
    x = Math.max(x,0);
    y = Math.max(y,0);
    x = Math.min(x,c.width-di);
    y = Math.min(y,c.height-di);
    console.log("x",x,"y",y)
    console.log(e.key);
    ctx.beginPath();
    ctx.arc(x+rad,y+rad,rad,0,Math.PI*2);
    ctx.fill();


})

window.addEventListener('mousemove', function(event) {
    console.log("Mouse x",event.clientX,"Mouse Y:",event.clientY)
    ctx.clearRect(0,0,c.width,c.height)
    ctx.beginPath();
    ctx.arc(event.clientX,event.clientY,rad,0,Math.PI*2);
    ctx.fill();
})

window.addEventListener('mousedown', function(event) {
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(event.clientX,event.clientY);
    ctx.stroke();

})

// moveTo is used when you are drawing multiple different objects and don't want them connected
// the arc line will already move to the wanted point.

// each circle is its own subpath
/* if begin path is not used for each new circle, the two circles connect together with a straight line as it draws/connects from one to another (if move to isn't used)
fill is then needed after each path to colour the circle onto the screen
closepath is not needed as beginpath just gets rid of the previous path and starts a new one anyway
closepath is only needed to connect the end of the current path/shape up with a straight line from the end to the start

x and y are taken from centre, not top left 
*/