var mover;

function setup() {
  createCanvas(640,360);
  mover = new Mover(); 
}

function draw() {
  background(51);
  
  mover.update();
  mover.checkEdges();
  mover.display(); 
}

function Mover() {
  //x y position
  this.position = createVector(width/2,height/2); 
  //speed in x direction, speed in y direction
  this.velocity = createVector();
  //acceleration in x direction, acceleration in y direction
  this.acceleration = createVector(-0.001, .01);
  // this.topspeed = 10;

  this.update = function() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
  };

  this.display = function() {
    stroke(0);
    strokeWeight(2);
    fill(127);
    ellipse(this.position.x, this.position.y, 48, 48);
  };

  this.checkEdges = function() {

    if (this.position.x > width) {
      this.position.x = 0;
    }
    else if (this.position.x < 0) {
      this.position.x = width;
    }

    if (this.position.y > height) {
      this.position.y = 0;
    }
    else if (this.position.y < 0) {
      this.position.y = height;
    }
  };

}