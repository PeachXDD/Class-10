/* var marks = [30, 45, 50, 48, 36]
var total = marks[0]+marks [1]+marks[2]+marks[3]+marks[4]
var average = total/marks.length
 */

var trex;
var trex_running;
var groundimage
var ground
//load images & sounds
function preload(){
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  groundimage= loadImage("ground2.png")
}

function setup() {
  createCanvas(400, 400);

  trex = createSprite(50, 380, 20, 50)
  trex.shapeColor="#9F2B68"
  trex.addAnimation("run",trex_running)
  trex.scale=0.5
  ground=createSprite(200,380,400,20)
  ground.addImage(groundimage)
  ground.velocityX=-2

}


function draw() {
  background(220);

/*   text("This is a text", 100, 200);
  text(marks,100,250)
  text(marks[1],100,300)
  text(average, 200, 200)
  text(marks[4],100,350) */

  //Adding gravity
  trex.velocityY=trex.velocityY+1
  trex.collide(ground)
  
  //checking if the ground is leaving the screen - Infinite world
  if(ground.x<0){
   ground.x=ground.width/2
  }

  if(keyDown(UP_ARROW)){
    trex.velocityY=-7
  }
  
  drawSprites()             
}


/*
Array - list of variables
created using []
contain multiple items - elements
Index Numbers - unique serial number given to each element
Index starts with 0 & end at (length - 1)
*/