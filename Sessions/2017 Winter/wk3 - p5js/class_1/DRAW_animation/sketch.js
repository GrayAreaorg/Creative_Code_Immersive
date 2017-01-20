var x = 0;
var speed=4;
function setup() {
  createCanvas(500,500);
  
}

function draw() {
  
  background(0);
  fill(255);
  ellipse(250,x,30,30);
  
  if(x>width){
    speed=-4;
  }else if(x<0){
    speed=4;
  }
  
  x = x+=speed;
  
  
  
}