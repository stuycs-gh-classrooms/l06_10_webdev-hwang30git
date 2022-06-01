var rectx;
var recty;
var xspeed;
var yspeed;

function setup() {
  // put setup code here
  createCanvas(600, 400);
  background(0);
  
  rectx = int(random(1, width - 100));
  recty = int(random(1, height - 50));
  xspeed = int(random(-5, 6));
  yspeed = int(random(-5, 6));
  while (xspeed === 0 || yspeed === 0) {
    xspeed = int(random(-5, 6));
    yspeed = int(random(-5, 6));
  }
}

function draw() {
  // put drawing code here
  background(0);
  bounce();
}

function bounce() {
  fill(255);
  rect(rectx, recty, 100, 50);
  rectx += xspeed;
  recty += yspeed;
  if (rectx <= 0) {
    xspeed = -xspeed;
  }
  if (rectx + 100 >= width) {
    xspeed = -xspeed;
  }
  if (recty <= 0) {
    yspeed = -yspeed;
  }
  if (recty + 50 >= height) {
    yspeed = -yspeed;
  }
}
