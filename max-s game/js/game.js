var canvas = document.getElementById('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

/*c.fillStyle = "red";
c.fillRect(200, 200, 100, 100);

//line
c.beginPath();
c.moveTo(200, 50);
c.lineTo(300, 50);
c.strokeStyle = "red"
c.stroke();*/

//arc/circle object
function Circle(x, y) {
    this.x = x;
    this.y = y;

    this.draw = function() {
        c.beginPath();
        c.arc(x, y, 30, 0, Math.PI * 2);
        c.stroke();
    }
}

var circle = new Circle(200, 200);



//for loop to draw multiple circles randomly
var x = Math.random() * innerWidth;
var y = Math.random() * innerHeight;
var dx = (Math.random() - 0.5 * 8);
var dy = (Math.random() - 0.5 * 8);
var radius = 30;

function animation() {
    requestAnimationFrame(animation);

    c.clearRect(0, 0, innerWidth, innerHeight);
    circle.draw();
    c.beginPath();

    c.arc(x, y, 30, 0, Math.PI * 2);
    c.stroke();
    if (x + radius > innerWidth || x - radius < 0) {
        dx = -dx;
    }
    if (y + radius > innerHeight || y - radius < 0) {
        dy = -dy;
    }
    x += dx;
    y += dy;

}
animation();