/**
 *  Visualize the frequency spectrum of live audio input
 */

var mic, amp;

function setup() {
   createCanvas(512,400);
   noStroke();
   fill(0,255,255);

   mic = new p5.AudioIn();
   mic.start();
   amp = new p5.Amplitude();
   amp.setInput(mic);
   
}

function draw() {
  var level = amp.getLevel();
   background(200);
   //var spectrum = fft.analyze();
   
  // console.log(spectrum);
   
   
   
   fill (255);
  

    
    var radius = map(level, 0, 1, 20, 500);
    ellipse(width/2, height/2, radius,radius );
  

}