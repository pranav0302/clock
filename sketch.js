

function setup() {
  createCanvas(800,400);
 // clock = createSprite(400, 200, 200, 200);
  angleMode(DEGREES);
}

function draw() {
  background("black"); 

translate(400,200);

var hr = hour();
var mn = minute();
var sc = second();

  scAngle = map(sc,0,60,0,360);
  mnAngle = map(mn,0,60,0,360);
  hrAngle = map(hr % 12,0,12,0,360);

  stroke("yellow");
  strokeWeight(7);
  fill("black")
  arc(0,0,290,290,270, scAngle + 270)

  stroke("blue");
  strokeWeight(7);
  fill("black")
  arc(0,0,270,270,270, mnAngle + 270)

  stroke("red");
  strokeWeight(7);
  fill("black")
  arc(0,0,250,250,270, hrAngle + 270)

 push();
  rotate(scAngle);
  stroke("yellow");
  strokeWeight(7);
  line(0,0,0,-100);
  pop();

  push();
  rotate(mnAngle);
  stroke("blue");
  strokeWeight(7);
  line(0,0,0,-75);
  pop();

 

  push();
  rotate(hrAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,0,-50);
  pop();

  drawSprites();

}