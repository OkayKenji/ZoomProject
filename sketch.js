/**
 * Credit to p5.js & Daniel Shiefman of Coding Train for teaching me some of the 
 * concepts seen here. (though this project was devloped indepently)
 * 
 * And to whoever invented the bouncing DVD logo. 
 */

let nameToDisplay = "nameHere"; //edit this line
let small = 0; //set to 0 to get random colors, 255 to get white only

let myFont;
let x;
let y;
let addx = true;
let addy = true;
let ratex;
let ratey; 
let crickets = false;
let count = 0; 
let originalHeight;
let orignialWidth;

//loads font
function preload() {
  //myFont = loadFont('https://raw.githubusercontent.com/OkayKenji/ZoomProject/master/Lato-Bold.ttf');
  myFont = loadFont('https://raw.githubusercontent.com/OkayKenji/ZoomProject/master/Lato-Black.ttf');
}

function setup() {
  
  //change how it moves around the screen;
  ratex = Math.random();
  ratey = Math.sqrt(2-ratex*ratex)
  console.log(ratex);
  console.log(ratey);
  if (Math.random()<0.5)
    ratex*=-1;
  if (Math.random()<0.5) 
    ratey*=-1;
  
  //creates the canvas and loads the font
  createCanvas(windowWidth, windowHeight);
  textFont(myFont, 35);
  
  //sets intial text location as center
  x = windowWidth/2;
  y = windowHeight/2;
  originalHeight = windowHeight;
  orignialWidth =windowWidth;
  
  //other presets that only have to be 
  //set once
  rectMode(CENTER);
  textAlign(CENTER);
  
  fill(255, 255, 255);
  textSize(85);
}

function draw() {
  background("#232322");

  text(nameToDisplay, x, y+25);
  
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
    fill(random(small,255), random(small,255), random(small,255));
    addx = !addx; 
  }
  
  if (y<0) {
    fill(random(small,255), random(small,255), random(small,255));
    addy = !addy; 
  }

  if (x>orignialWidth) {
    fill(random(small,255), random(small,255), random(small,255));
    addx = !addx; 
  }
  
  if (y>originalHeight) {
    fill(random(small,255), random(small,255), random(small,255));
    addy = !addy;
  }
  
  //hmmm Up,Up,Down,Down,Left,Left,Right,Right,b,a,enter
  if (crickets) {
    if (count%200<=100) {
    textSize(40);
    text('*crickets* *crickets* *crickets*', windowWidth/2, windowHeight-5);
    textSize(85);
    }
    count++;
  }
}

let match = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowLeft", "ArrowRight", "ArrowRight", "b", "a", "Enter"];
let arr = [];
let counter = 0;

function keyPressed() {
  arr.push(key);

  if (arr[counter]==match[counter]) {
    //console.log("Match");
    counter++;
  } else  {
    arr = [];
    counter=0;
  }
  if (arr.length==11) {
    //console.log("Win");
    crickets = !crickets;
    arr = []; 
    counter=0;
  } 

  if (!crickets)
    count = 0;
   // arr = []; 

  if (arr.length>11) {
    counter=0;
    arr = []; 
  }
 // console.log(arr);

}
