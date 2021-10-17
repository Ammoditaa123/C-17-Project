var PLAY;
var END;
var gameState = PLAY;

var monkey , monkey_running;

var banana ,bananaImage, Obstacle, obstacleImage;

var FoodGroup, obstacleGroup;

var score;


function preload(){
  
  monkey_running=loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function setup() {
  
  createCanvas(600, 400);
  
 monkey = createSprite(80, 315, 20, 20);
 monkey.addAnimation("monkey",monkey_running);
 monkey.scale = 0.1;
  
  
}


function draw() {

  background(255)
  
  spwanBanana()
  spwanObstacle()
  
  if (gameState === PLAY) {
    
    spwanBanana();
    spwanObstacle();
    
    monkey.y = World.mouseY;
  
  } else  {

    Banana.setVelocityX(0);
    Obstacle.setVelocityX(0);

  }
  
  if (monkey.isTouching(Obstacle)) {
    gameState = END;
  }
  
  drawSprites()
  
  text(mouseX + "," + mouseY, mouseX, mouseY)
}

function spwanBanana(){
  
  if( (frameCount % 50 === 0) && (frameCount<600)) {
  
  Banana = createSprite(600, 200, 20, 20);
  Banana.addImage("banana",bananaImage);
  Banana.scale = 0.1;
  Banana.velocityX = -2;
   
}
}

function spwanObstacle(){

  if ((frameCount % 100 === 0) && (frameCount < 500)) {

    Obstacle = createSprite(600, 300, 20, 20);
    Obstacle.addImage("Obstacle",obstacleImage);
    Obstacle.scale = 0.2;
    Obstacle.velocityX = -2;
  }
}