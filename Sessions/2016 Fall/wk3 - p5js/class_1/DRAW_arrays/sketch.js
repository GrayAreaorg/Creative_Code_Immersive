var x = 0;
var speed=4;
var thingy = [];


function setup() {
  createCanvas(500,500);
 
  
}

function draw() {
  
  
   for(var i = 0; i<10; i++){
    
    thingy[i]= {
      b : map(i, 0, 10, 0, 255),
      x : random(0,width),
      y : random(0,height),
      display: function(){
      fill(255,255,this.b); 
      ellipse(this.x, this.y, 30, 30 );
      }
      
    }
  }

background(0);
  for (var i = 0; i < thingy.length; i++){
    if(mouseIsPressed){
    thingy[i].display();
    }else{
      
    }
  }
  
  
}

