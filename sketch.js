function setup() {
  createCanvas(400,400);
  
  
}

function draw() {
  background(255,255,255); 
  rectMode(CENTER);
  fill("red");
  circle(200,200,200,100)
  rect(200,250,350,200)
  fill("yellow");
  rect(275,225,30,300)
  rect(125,225,30,300)
  circle(125,70,40,40);
  circle(275,70,40,40);
  
  
  
  fill("brown");
  
  rect(200, 200, 50, 50);
  rect(200,300,150,150);
  triangle(175, 175, 200, 100, 225, 175);
  fill("white");
  rect(200,250,100,10)
  rect(200,325,100,100)


  
  drawSprites();
}