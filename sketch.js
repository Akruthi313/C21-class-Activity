var fixedRect,movingRect,object1,object2,rect1,rect2;

function setup() {
  createCanvas(800,400);

  movingRect= createSprite(200,200,50,70) ;
  movingRect.shapeColor="green";
  movingRect.debug=true;

  fixedRect= createSprite(300, 200, 50, 50);
  fixedRect.shapeColor="blue";
  fixedRect.debug=true;

  object1= createSprite(400,200,50,70) ;
  object1.shapeColor="blue";

  object2= createSprite(500,200,50,70) ;
  object2.shapeColor="blue";

  rect1=createSprite(50,20,50,50);
  rect1.shapeColor="orange";
  rect1.velocityY=5;

  rect2=createSprite(150,300,50,50);
  rect2.shapeColor="green";
  rect2.velocityY=-5;

}

function draw() {
  background(255,255,255);  

  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;


  if(isTouching(movingRect,fixedRect) || isTouching(movingRect,object1) || isTouching(movingRect,object2)){
    movingRect.shapeColor="black";
  }
  else{
    movingRect.shapeColor="green";
  }


  bounce(rect1,rect2);

  drawSprites();
}

