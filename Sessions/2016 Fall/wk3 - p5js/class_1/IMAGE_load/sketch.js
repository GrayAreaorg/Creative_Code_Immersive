var img;

function setup() {
  createCanvas(windowWidth, windowHeight);
  img = loadImage('torus.gif');
}

function draw() {
  background(255);
  imageMode(CENTER);
  image(img, mouseX, mouseY);
}



