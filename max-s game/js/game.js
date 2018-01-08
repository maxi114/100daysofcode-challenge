var canvas = document.getElementById('canvas');

//sets canvas to full width and hight of the window/screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//draw in 2d function
var c = canvas.getContext('2d');

// building
c.fillStyle = "yellow"
c.fillRect(50, 50, 100, 200);
c.stroke();

//windows
c.fillStyle = "blue"
c.fillRect(50, 50, 20, 20);
c.stroke();