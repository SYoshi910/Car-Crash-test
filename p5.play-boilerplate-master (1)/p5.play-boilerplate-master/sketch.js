var car, wall;
var speed, weight;

function setup() {
  createCanvas(1600,400);
  speed = random(55,90);
  weight = random(400,1500);
  car = createSprite(50,200,50,50);
  wall = createSprite(1500,200,40,height/2);
  car.shapeColor = "white";
  car.velocityX = speed;
}

function draw() {
  background(0,0,0);  
  //it looks like for some reason the car can sometimes only be detected after it goes past the wall when going too fast. It doesn't look like I can fix it.
  if(wall.x - car.x <= car.width/2 + wall.width/2){
    if((0.5*weight*speed*speed)/22500 <100){
      car.shapeColor = "lime";
    }
    else if((0.5*weight*speed*speed)/22500 <=180 && (0.5*weight*speed*speed)/22500 >=100){
      car.shapeColor = "yellow";
    }
    else if((0.5*weight*speed*speed)/22500 > 180){
      car.shapeColor = "red";
    }
    car.velocityX = 0;
  } 
  drawSprites();
}