var circles = [];

function Circle(_x, _y, _r, _g, _b) {
  this.x = _x;
  this.y = _y;

  this.r = _r;
  this.g = _g;
  this.b = _b;

  this.size = 10;

  this.draw = function() {
    this.x++;
    this.size = this.size - random(.5);
    fill(this.r, this.g, this.b);
    ellipse(this.x, this.y, this.size, this.size);
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noCursor();
  ellipseMode(CENTER);
  cursorDiameter = 10;
}

function draw() {

  background(255);

  for (var i = 0; i < circles.length; i++) {
    circles[i].draw();
    if (circles[i].x > 700) {
      circles.splice(i, 1);
    }
  }

  if (mouseIsPressed) {
    if (mouseButton == LEFT) {

      var cursorCol = random(0, 255);

      circles.push(
        new Circle(
          mouseX,
          mouseY,
          random(0,255)
        )
      );
    }

    if (mouseButton == RIGHT) {
      circles = [];
    }
  }
  
  fill(random(255));
  ellipse(mouseX, mouseY, 10, 10);
}