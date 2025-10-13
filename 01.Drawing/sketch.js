function setup() {
  createCanvas(1200, 600);
}
  //Veiled Technocratic Supremacy

function draw() { 
  background(255);
  
  //Phone Body
  fill(20);
  rect(300, 200, 600, 500, 15, 15, 15 , 15); //Phone Body 
  fill(66, 150, 199);
  rect( 325, 240, 550, 430, 10, 10, 10, 10); //Phone Screen

  //Main Body of Camera
    fill(128);
    stroke(64);
    strokeWeight(4);
  rect(450, 200, 300, 50, 10, 10, 10, 10); //Surveillance Base
  fill(0);
  arc(600, 250, 250, 225, 0, PI); //Surveillance Dome
  fill(50);
  stroke(40);
  strokeWeight(3);
  rect(570, 250, 60, 85, 0, 0, 20, 20); //Camera Pocket

  //Details
  fill(128);
  stroke(20);
  strokeWeight(2);
  circle(600, 310, 50); //Surveillance Camera
    fill(0);
  circle(600, 310, 25); //Surveillance Camera Lens
  fill(255);
  circle(500, 265, 10); //Light Reflection
fill(0);
circle(600, 310, 10); //outer lense
  fill(255,0,0);
  circle(603, 307, 4); //Recording Light
}