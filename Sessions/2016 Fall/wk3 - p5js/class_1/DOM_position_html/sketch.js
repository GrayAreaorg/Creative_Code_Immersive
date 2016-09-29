var canvas;
var h1;
var x = 100;
var y = 100;

function setup() {
  canvas = createCanvas(200, 200);
  canvas.position(100, 100);
  h1 = createElement('h1', 'Waiting.');
  // h1.position(400, 400);
  // createP("My favorite color is purple")
  
}



function draw() {
  //clear();
  background(150, 100);
  fill(255, 0, 0);
  rect(x, y, 50, 50);
  h1.position(x, y);
  x = x + random(-5, 5);
}