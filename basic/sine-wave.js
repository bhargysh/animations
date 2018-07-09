//for a one cycle sine wave, mark the 5 points
//point 1:(0,0) --> 0
//point 2:(x,y) --> Math.Pi/2
//point 3:(x,y) --> Math.Pi
//point 4:(x,y) --> 3 * Math.Pi/2
//point 5:(x,y) --> 2 * Math.Pi
const _ = require('lodash');

var canvas = document.getElementById("wave");
var ctx = canvas.getContext("2d");

animate();

function animate() {
  requestAnimationFrame(animate);
  draw();
}

function draw() {
  ctx.beginPath();
  ctx.lineWidth=2;
  ctx.strokeStyle= '#0060c0';

  const maxTime = 1;
  const maxAngle = 2 * Math.Pi;

  for angle in _.range(maxAngle) {
    var y = Math.sin(angle);
    console.log(y);
  }

  ctx.moveTo(0, 1);
  ctx.lineTo(Math.Pi/2, Math.sin(Math.Pi/2));
}
