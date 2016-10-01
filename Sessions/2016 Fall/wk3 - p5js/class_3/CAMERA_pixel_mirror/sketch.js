var video;
var aspectRatio = 20;
function setup() {
  createCanvas(320, 240);
  pixelDensity(1);
  
  video = createCapture(VIDEO);
  video.size(width/aspectRatio, height/aspectRatio);
  //video.hide();
}

function draw() {

  video.loadPixels();
  loadPixels();
  for (var y = 0; y < video.height; y++) {
    for (var x = 0; x < video.width; x++) {
      var index = (x + y * video.width)*4;
      var r = video.pixels[index+0];
      var g = video.pixels[index+1];
      var b = video.pixels[index+2];
      var a = video.pixels[index+3];  
      
      var bright = (r+g+b)/3;
      
      noStroke();
      fill(bright);
      rect(x*aspectRatio,y*aspectRatio,aspectRatio, aspectRatio);
      
    }
  }

 
}


