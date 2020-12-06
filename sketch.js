function preload() {
  backgroundImg = loadImage("Images.sprites/mushroomkingdom.png");
  MarioImg = loadAnimation("Images.sprites/mario.png");
  obstacleImg = loadAnimation("Images.sprites/coinblock.gif");
  enemyImg = loadImage("Images.sprites/thwomp.png");
  gameoverImg = loadImage("Images.sprites/gameover.jpg");
}

function setup() {
  createCanvas(2000, 700);
  Background = createSprite(1000, 350, 2000, 700);
  Background.addImage(backgroundImg);
  Background.scale = 0.5;
  Mario = createSprite(200, 500);
  Mario.addAnimation("mario", MarioImg);
  Mario.scale = 0.25;
  obstaclesGroup = createGroup();
  enemiesGroup = createGroup();
}

function draw() {
  background(0);  
  obstacles();
  enemies()
  Mario.velocityX = 0;
  if(keyDown("space")) {
    Mario.velocityY = -8;
  }
  if(keyDown("left")) {
    Mario.velocityX = -4;
  }
  if(keyDown("right")) {
    Mario.velocityX = 4;
  }
  Mario.velocityY += 0.2;
  Mario.collide(obstaclesGroup);
  if(Mario.isTouching(enemiesGroup)){
    Background.addImage(gameoverImg);
    Background.scale = 1.3;
  }
  drawSprites();
}

function obstacles() {
  if(frameCount % 105 === 0) {
    obstacle = createSprite(2000, random(350,650));
    obstacle.velocityX = -4;
    obstacle.addAnimation("Hi",obstacleImg);
    obstacle.scale = 0.25;
    obstaclesGroup.add(obstacle);
  }
}

function enemies() {
  if(frameCount % 150 === 0) {
    enemy = createSprite(2000, random(350,650));
    enemy.velocityX = -5;
    enemy.addImage(enemyImg);
    enemy.scale = 0.5;
    enemiesGroup.add(enemy);
  }
}