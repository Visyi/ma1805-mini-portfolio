
                                    //  Silent Hill, The "Leave Ending".

let i = 0;
let theme;

const silenthillText = ('- the truth is... - - - ..i hated you.. - - - ..i wanted you out of the way.. - - - ..i wanted my life back.. - - - ...if that were true, then why do you look so sad?...  - - - - - - - - - - - - - - -  ');
const textArray = silenthillText.split("-"); // Convert text to array of phrases

let newFont;

function preload(){
  newFont = loadFont('fine_fraktur_B.ttf'); //Adds custom font
  soundFormats ('mp3');
  theme = loadSound ('themeoflaura.mp3'); //Adds theme
  outputVolume(0.01);
}

function setup(){
  createCanvas(windowWidth, windowHeight); 
  theme.play();
  frameRate(0.64); // Speed of the sketch to match with local audio
  background(20);
  textFont(newFont);
  textSize(20);
  textAlign(CENTER, CENTER);
}

function draw(){
  let boundary = 200; // Add an x axis boundary limit, stops the text from exiting the window
  let boundary2 = 50; // Add an y axis boundary limit
  let x = random(boundary, width - boundary);
  let y = random(boundary2, height - boundary2);
  stroke(20);
  strokeWeight(0.5);

  if (i < textArray.length) {
    if (textArray[i].includes ('...if that were true, then why do you look so sad?...')) { //Selects specific phrase word for word
      stroke(138, 3, 3);
      strokeWeight(0.2);
      fill(79, 18, 18); // last phrase in red
    } else {
      fill(255);
    }
    text(textArray[i], x , y); 
    i++;
  } 
}
