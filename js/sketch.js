// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

let cn;

let ps;

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  cn.position(x);
}

function windowResized() {
  centerCanvas();
}

function setup() {
  cn = createCanvas(640, 360);
  centerCanvas();
  cn.parent('p5');
  setFrameRate(60);
  ps = new ParticleSystem(createVector(width / 2, 50));
}

function draw() {
  background(51);

  // Apply gravity force to all Particles
  let gravity = createVector(0, 0.1);
  ps.applyForce(gravity);

  ps.addParticle();
  ps.run();
}