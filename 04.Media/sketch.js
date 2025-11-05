let soundEffect;
let img;
let img2;

function preload() {
  img = loadImage('samurai.gif');
  img2 = loadImage('loader.gif');
  soundFormats('mp3');
  soundEffect = loadSound('actionloop.mp3');
  outputVolume(0.3);
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(0);

  // try to start sound immediately
  soundEffect.loop();
}

function draw() {
  background(0);

  // main samurai gif
  push();
  imageMode(CENTER);
  image(img, width / 2, height / 2.5, 125, 125);
  pop();

  // small loader gif in top-right corner
  imageMode(CORNER);
  image(img2, width / 1.1, height / 15, 50, 50);
}

