var videoScale = 4;

// Number of columns and rows in our system
var cols, rows;

function setup() {
  createCanvas(640, 480);

  // Initialize columns and rows
  cols = width/videoScale;
  rows = height/videoScale;

  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(cols, rows);
  //video.hide();
}

function draw() {
  video.loadPixels();

  // Begin loop for columns
  for (var x = 0; x < cols; x++) {
    // Begin loop for rows
    for (var y = 0; y < rows; y++) {
      // Scaling up to draw a rectangle at (x,y)
      var loc = (x + y * cols) * 4;
      // The functions red(), green(), and blue() pull out the three color components from a pixel.
      var r = video.pixels[loc   ]; 
      var g = video.pixels[loc + 1];
      var b = video.pixels[loc + 2];
      noStroke()
      // stroke(255);
      // For every column and row, a rectangle is drawn at an (x,y) location scaled and sized by videoScale.
      var x2 = x*videoScale;
      var  y2= y*videoScale;
      if (r>100){
        fill(r,g-40,b,20);
        ellipse(x2, y2, videoScale, videoScale);
      }else if (g>10){
        fill(r,g-40,b,10);
        ellipse(x2,y2,videoScale,videoScale);
      }else{
        fill(r,g-40,b,30);
        ellipse(x2,y2,15,15);
      }
    }
  }
  updatePixels();
}


