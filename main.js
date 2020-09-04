// DRAW ROBOT FACE

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 600;

// Rectangle Behind Head for Ears
ctx.fillStyle = "rgb(100, 100, 100)";
ctx.fillRect(80, 260, 460, 80);

// Filled Triangles for Hair
fillTriangle(180, 80, 140, 100, 220, 100);
fillTriangle(340, 80, 300, 100, 380, 100);

// Outlined Triangles for Hair
outlineTriangle(250, 80, 220, 100, 300, 100);
outlineTriangle(420, 80, 380, 100, 460, 100);

// Filled Triangle for Neck
fillTriangle(300, 200, 220, 600, 380, 600);

// Rectangle Head
ctx.fillStyle = "rgb(180, 180, 180)";
ctx.fillRect(100, 100, 400, 400);

// Filled Circle for Eye Sockets
ctx.fillStyle = "rgb(235, 235, 235)";

fillCircle(200, 250, 50);
fillCircle(400, 250, 50);

// Rectangle for Mouth
ctx.fillRect(200, 350, 200, 60);

// Horizontal Line for Teeth
ctx.strokeStyle = "rgb(180, 180, 180)";

createLine(200, 380, 400, 380);

// Vertical Lines for Teeth
createLine(250, 350, 250, 410);
createLine(300, 350, 300, 410);
createLine(350, 350, 350, 410);

// Filled Circle for pupils
ctx.fillStyle = "rgb(100, 100, 100)";

fillCircle(200, 250, 30);
fillCircle(400, 250, 10);

// Outlined Circle for Left Eye Socket
ctx.strokeStyle = "rgb(100, 100, 100)";

outlineCircle(200, 250, 50);
outlineCircle(400, 250, 50);

// Lines for Eyebrows
ctx.lineWidth = 2;

createLine(150, 180, 250, 180);
createLine(350, 160, 450, 180);

// Outlined Triangle for Nose
outlineTriangle(300, 280, 320, 320, 280, 320);

// DRAW FUNCTIONS
function fillTriangle(x1, y1, x2, y2, x3, y3) {
  // Create a filled in triangle with vertices (x1, y1), (x2, y2), and (x3, y3)
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.lineTo(x3, y3);
  ctx.fill();
}

function outlineTriangle(x1, y1, x2, y2, x3, y3) {
  // Create a outlined triangle with vertices (x1, y1), (x2, y2), and (x3, y3)
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.lineTo(x3, y3);
  ctx.closePath()
  ctx.stroke();
}

function createLine(x1, y1, x2, y2) {
  // Draw a line from point (x1, y1) to (x2, y2)
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}

function outlineCircle(x, y, r) {
  // Draw a Circle at (x, y) and a radius of r
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  ctx.stroke();
}

function fillCircle(x, y, r) {
  // Draw a filled in Circle at (x, y) and a radius of r
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  ctx.fill();
}