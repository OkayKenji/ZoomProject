/**
 * Credit to p5.js and the Coding Train. 
 */

let myFont;
let x;
let y;
let addx = true;
let addy = true;
let ratex;
let ratey; 

//loads font
function preload() {
  myFont = loadFont('https://raw.githubusercontent.com/OkayKenji/ZoomProject/master/Lato-Bold.ttf');

}

function setup() {
  
  //change how it moves around the screen;
  ratex = Math.random();
  ratey = Math.sqrt(1-ratex*ratex)
  console.log(ratex);
  console.log(ratey);
  if (Math.random()<0.5)
    ratex*=-1;
  if (Math.random()<0.5) 
    ratey*=-1;
  
  //creates the canvas and loads the font
  createCanvas(windowWidth, windowHeight);
  textFont(myFont, 36);
  
  //sets intial text location as center
  x = windowWidth/2;
  y =windowHeight/2;
  
  //other presets that only have to be 
  //set once
  rectMode(CENTER);
  textAlign(CENTER);
  fill(255, 255, 255);
  textSize(120);
}



function draw() {
  background(35,35,36);

  text('Kenji', x, y);
  
  //changes location
  if (addx)
    x+=ratex; 
  else
    x-=ratex;
  if (addy)
    y+=ratey;
  else
    y-=ratey;
 
  //prevents text from going off screen "bounce"
  //effect
  if (x<0) {
    //x = windowWidth;
    addx = !addx; 
  }
  
  if (y<0) {
    //y = windowHeight;
    addy = !addy; 
  }

  if (x>windowWidth) {
    // x = 0;
    addx = !addx; 
  }
  
  if (y>windowHeight) {
    //y = 0;
    addy = !addy;
  }
  
}
