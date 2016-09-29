var camera;

function setup() {
  createCanvas(320, 240);
  background(51);
  camera = createCapture(VIDEO);
  camera.size(320, 240);
  // camera.hide();

}

function draw() {
  tint(0,0,255);
  image(camera, 0, 0, width, height);
}