//Javascript Function as a Callback for An Event

var bgcolor;
var button;//create this to create callback
// var bigger;

//mousePressed function is "callback" the function that executes to a particular object.
//store result of CreateButton in variable


function setup() {
  canvas = createCanvas(200, 200);
  bgcolor = color(200);
  button = createButton("Change Color");// create button element
  button.mousePressed(changeColor);

  
}

function changeColor() {
  bgcolor = color(random(255))
  // bigger = random(20,50);
  
}


//This is Global, not yet a callback
// function mousePressed() {
//   changeColor();
// }


function draw() {
  background(bgcolor);
  fill(255, 0, 175);
  rect(100,100,50,50);
  // rect(100, 100, bigger, bigger);

}
