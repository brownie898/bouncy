var surface1, surface2, object2
var movingRectangle
function setup() {
  createCanvas(800,400);
 //object2 = createSprite(500,300,50,60)
 //movingRectangle = createSprite(300,100,80,50)
  surface1=createSprite(200,100,50,60)
  surface2=createSprite(400,100,50,60)
  surface1.shapeColor = "purple"
  surface2.shapeColor = "purple"
  //object2.shapeColor = "purple"
 //movingRectangle.shapeColor = "purple"
  surface1.velocityX = 2
  surface2.velocityX = -2
}

function draw() {
  background(255,255,255);   
  //console.log(movingRectangle.x)
  bounceoff(surface1, surface2)
  drawSprites();
}
