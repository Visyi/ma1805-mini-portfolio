function setup() {
  createCanvas(1200, 600);
}


function draw() { 
  background(255);
    fill(128);
    stroke(64);
    strokeWeight(4);
  rect(450, 200, 300, 50); //Surveillance Base
  arc(600, 250, 250, 225, 0, PI); //Surveillance Dome
   fill(50);
  rect(570, 250, 60, 85, 0, 0, 20, 20); //Camera Pocket
  fill(128);
  stroke(0);
  strokeWeight(4);
  circle(600, 310, 50); //Surveillance Camera
    fill(255);
  circle(600, 310, 25); //Surveillance Camera Lens

}