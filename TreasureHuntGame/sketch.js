var gameState= 0;
var girl
var boy
var invisibleGround;
var gem;
function preload(){
  girlImg1= loadAnimation("Girlfinal1.png","Girlfinal2.png");
  dayBg= loadImage ("daybg.jpg")
  instructions=loadImage("instructions (1).png")
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  form= new Form();
 
  girl=createSprite(60, height-350,50,50);
  girl.addAnimation("girl1", girlImg1);
  boy= createSprite(width/2- 100, height/2, 50,50)
  invisibleGround= createSprite (width/2, height-180, width, 10);
  invisibleGround.visible=false;
  gem=createSprite(width-200,height-150,30,30)
  
}

function draw() {
  background("lightBlue");  
  image(instructions,40,60);
  girl.collide(invisibleGround);
  form.display();
  if(gameState===1){
  image(dayBg, 0, 0, width,height);
  drawSprites();

  if( keyDown(RIGHT_ARROW)){
    girl.x=girl.x+2;
  }
 if (keyDown('SPACE')){
   girl.velocityY= -5;
 }
  girl.velocityY=girl.velocityY+0.5;


 
}}