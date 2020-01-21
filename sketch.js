/*
let r;
let factor = 0;
let total;

function Heart(startx, starty) {
  this.startx = startx;
  this.starty = starty;
}

Heart.prototype.output = function() {
  translate(width / 2, height / 2);
  stroke(mouseX, mouseY, 30);
  strokeWeight(2);
  noFill();
  ellipse(startx, starty, r * 2);
}

Heart.prototype.lines = function() {
  const total = 30; //int(map(mouseX, 0, width, 0, 200));
  factor += 0.004;

  strokeWeight(2);
  for (let i = 0; i < total; i++) {
    const a = getVector(i, total);
    const b = getVector(i * factor, total);
    //line(a.x, a.y , b.x , b.y );
    line(a.x + startx, a.y + starty, b.x + startx, b.y + starty);
    
    //ellipse(this.startx+r,this.starty,5);

    if(startx+r <width)
    {
      ellipse(startx+r,starty,5);
      startx = startx +0.02;
    }
    else
    {
      startx= -startx;
    }
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  r = height / 4 - 16;
  startx = 0;
  starty = 0;
}

function getVector(index, total) {
  const angle = map(index % total, 0, total, 0, TWO_PI);
  const v = p5.Vector.fromAngle(angle + PI);
  v.mult(r);
  return v;
}

var heart1 = new Heart(10, 10);
var heart2 = new Heart(30, 7);
var heart3 = new Heart(20, 20);
var heart4 = new Heart(-10, -10);

function draw() {
  background(0);

  heart1.output();
  heart1.lines();

  heart2.output();
  heart2.lines();

  heart3.output();
  heart3.lines();
  
  heart4.output();
  heart4.lines();
}
*/


let r;
let factor = 0;
let startx;
let starty;

function setup() {
  createCanvas(600, 600);
  r = height / 2 - 16;
  startx = 50;
  starty = 50;
}

function getVector(index, total) {
  const angle = map(index % total, 0, total, 0, TWO_PI);
  const v = p5.Vector.fromAngle(angle + PI);
  v.mult(r);
  return v;
}

function draw() {
  background(0);
  const total = 50; //int(map(mouseX, 0, width, 0, 200));
  factor += 0.015;

  translate(width / 2, height / 2);
  stroke(mouseX,mouseY, 30);
  strokeWeight(2);
  noFill();
  ellipse(startx, starty, r * 2);

  strokeWeight(2);
  for (let i = 0; i < total; i++) {
    const a = getVector(i, total);
    const b = getVector(i * factor, total);
    line(a.x + startx, a.y + starty, b.x + startx, b.y + starty);
  }
}
