// Based on code by Daniel Shiffman
var pdf
var e1
var e2
var e3

// Array identified here for the moving title.
headlines = [
  "A CLOCKWORK ORANGE"]

var a; 
var y;
var b; 
var z;
var index = 0;
function setup() {
  createCanvas(600, 600);
  pdf = createPDF();
  pdf.beginRecord();
  e1 = new Ellipse();
  e2 = new Ellipse();
  e3 = new Ellipse();
  
  a = loadFont( "Timepiece.TTF");
  y = loadFont("Bernound Rough.ttf");
  b = width;
  z = loadStrings("hope.txt");
}

function draw() {
   background(250,100,10);
  noStroke();
  fill(255,210,200);
  
  textFont(y)
  textSize(45);
  textAlign (LEFT);
  text("Film By Stanley Kubrick", 5,570)

  // Displays the array with subtitle and at x location.
  textFont(a);
  textSize(45);
  textAlign (LEFT);

  text(headlines[index], b, height -120); 

  b = b - 3;

  // Since variable b is a negative width,the text starts off the screen. While textWidth is used to calculate the width of the current String.
  let c = textWidth(headlines[index]); 
  if (b < -c) {
    b = width;

    index = (index + 10) % headlines.length;
  }
  
  text(z);

  noStroke();
  fill(255,210,185);
  ellipse(300,275,375,230);
  e1.update();
  e1.display();
  e2.update();
  e2.display();
  e3.update();
  e3.display();
}

class Ellipse {
  constructor() {
    this.position1 = createVector(300, 275);
    this.velocity1 = createVector(2.5, 5);
    this.position2 = createVector(300, 275);
    this.velocity2 = createVector(2.5, 5);
    this.position3 = createVector(300, 275);
    this.velocity3 = createVector(2.5, 5);
  }

  update() {
    // Shows/commands the vector's velocities.
    this.position1.add(this.velocity1);
    if ((this.position1.x > 0) || (this.position1.x <0)) {
      this.velocity1.x = this.velocity1.x * -1;
    }
    if ((this.position1.y > 0) || (this.position1.y < 0)) {
      this.velocity1.y = this.velocity1.y * -1;
    }
    this.position2.sub(this.velocity2);
    if ((this.position2.x > 0) || (this.position2.x < 0)){
      this.velocity2.x = this.velocity2.x * -1;
    }
    if ((this.position2.y > 0) ||(this.position2.y < 0)) {
      this.velocity2.y = this.velocity2.y * -1;
    }
    this.position3.sub(this.velocity2);
    if ((this.position3.x > 0) || (this.position3.x < 0)){
      this.velocity3.x = this.velocity3.x * -1;
    }
    if ((this.position3.y > 0) ||(this.position3.y < 0)) {
      this.velocity3.y = this.velocity3.y * -1;
    }
  }
  display() {
    // Displays the ellipses according to the x position.
    stroke(0);
    fill(255,210,185);
    ellipse(this.position3.x, this.position3.y, 375, 230);
    fill(20,160,170);
    ellipse(this.position2.x, this.position2.y, 175, 175);
    fill(0);
    ellipse(this.position1.x,this.position1.y, 70, 70);
    
  }
}
function mousePressed(){
       pdf.save();
}