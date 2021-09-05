var peashooter,zombie,background1,ball;
var pImg,zImg,ballImg;
var zombieGroup;
var score;

function preload(){
  pImg=loadImage("peashooter.png");
  zImg=loadImage("zombieimage.png");
  background1=loadImage("bgzombie.jpeg");
  ballImg=loadImage("pea.png");

}
function setup() {
  createCanvas(windowWidth,windowHeight);
  bg=createSprite(displayWidth/2-20,displayHeight/2-40,20,20);
  bg.addImage(background1);
  
  peashooter=createSprite(displayWidth-1300,displayHeight-250,5,5)
  peashooter.addImage(pImg);
  peashooter.scale=0.25;

 
}

function draw() {
  background(0);
  if(keyWentDown("space")){
    createBall();
ball.velocityX=70;
  }
 
  Zombie();
  drawSprites();
   }

function Zombie(){
  if(frameCount%30===0){
    zombie=createSprite(random(1000,1500),random(500,800),10,10);

    zombie.addImage(zImg);
    zombie.scale=0.25;
   // zombie.lifetime=400;
    zombie.velocityX=-1;
   // zombieGroup.add(zombie)
  }
}
function createBall(){
  ball=createSprite(displayWidth-1300,displayHeight-250,5,5)
  ball.addImage(ballImg);
  ball.scale=0.1
}









