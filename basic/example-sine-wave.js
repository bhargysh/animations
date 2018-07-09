// Original JavaScript code by Chirp Internet: www.chirp.com.au
// Please acknowledge use of this code by including this header.

window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

var field = document.getElementById("field");
var circle = document.getElementById("circle");

//setting the boundaries
var maxX = field.clientWidth - circle.offsetWidth;
var maxY = field.clientHeight - circle.offsetHeight;

var duration = 5; // seconds
var gridSize = 50; // pixels

var start = null;

function step(timestamp)
{
  var progress, x, y;
  if(start === null) start = timestamp;

  progress = (timestamp - start) / duration / 1000; // percent

  x = progress * maxX/gridSize; // x = ƒ(t)
  y = 2 * Math.sin(x); // y = ƒ(x)

  circle.style.left = Math.min(maxX, gridSize * x) + "px";
  circle.style.bottom = maxY/2 + (gridSize * y) + "px";

  if(progress >= 1) start = null; // reset to start position
  requestAnimationFrame(step);
}

requestAnimationFrame(step);
