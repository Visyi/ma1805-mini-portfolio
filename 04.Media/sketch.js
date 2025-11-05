  let actionloop;
  let img;
  let img2;

  function preload() {
    img = loadImage('samurai.gif');
    img2 = loadImage('loader.gif');
    soundFormats('mp3');
    actionloop = loadSound('actionloop.mp3');
    outputVolume(0.3);
  }

  function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    background(0);

    // loops sound effect
    actionloop.play();
    actionloop.loop();
  }

  function draw() {
    background(0);

    // Samurai
    push();
    imageMode(CENTER);
    image(img, width / 2, height / 2.5, 125, 125);
    pop();

    // Loading ...
    imageMode(CORNER);
    image(img2, width / 1.1, height / 15, 50, 50);
  }

