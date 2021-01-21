var fixedRect,movingRect;
function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 50, 50);
  fixedRect.shapeColor="blue";
  movingRect=createSprite(700,200,50,50);
  movingRect.shapeColor="blue";
  ob1=createSprite(200,400,50,50);
  ob1.shapeColor="blue";
  movingRect.velocityX=-1;
}

function draw() {
  background(255,255,255); 
 //movingRect.x= World.mouseX;
 //movingRect.y=World.mouseY;
  if(isTouching(movingRect,ob1)){
    ob1.shapeColor="black";
    movingRect.shapeColor="black"
  }
  else{
   ob1.shapeColor="blue";
    movingRect.shapeColor="blue";
  }

bounceOff(movingRect, fixedRect);

  drawSprites();
}

