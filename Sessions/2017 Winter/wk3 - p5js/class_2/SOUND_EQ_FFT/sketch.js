
var mic, fft, sound;
//var smoothing = .8;
var binCount = 16;


// function preload(){
//   sound = loadSound('assets/nowhere.mp3');
// }

function setup() {
   createCanvas(710,400);
   noFill();
  // sound.play();
  mic = new p5.AudioIn();
  mic.start();
   fft = new p5.FFT();
  fft.setInput(mic);
  // fft.setInput(sound);
}

function draw() {
   background(0);

   var spectrum = fft.analyze(binCount);

  noStroke();

  for (var i = 0; i <spectrum.length; i++){
    var col = map(i, 0, binCount, 0, 255);
    var x = map(i, 0, binCount, 0, width);
    var h = map(spectrum[i], 0, 255, height, 0);
    fill(col, col, 255);
    rect(x, height, 30, -height+h );
  
  }
  // print(h);
}
