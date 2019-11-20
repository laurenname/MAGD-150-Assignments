var a= 1;
function setup() {
  
  createCanvas(400, 400);
}

function draw() {
  
  if(keyIsPressed===true)
  {
  background('#F45400');
  }
  else
  {
    background('#FFD77A');
  }
  
    fill('#FF3C1C');
  ellipse(a+10,100,30,30);
  a++;
  
  if(keyIsPressed===true)
  {
  noStroke();
  fill('#CF5939')
  rect(100,100,300,300);
  }
  else
  {
    noStroke();
    fill('#FFCA6E');
    rect(100,100,300,300);
  } 
  

  noStroke();
  fill('#FFB86E');
  ellipse(250,250,300,300);
  noStroke();
  fill('#FFEC6E');
  ellipse(250,250,270,270);
  
  if(mouseIsPressed)
  {
  noStroke();
  fill('#FF3C1C');
  ellipse(270,270,30,30);
  ellipse(220,200,30,30);
  ellipse(320,320,30,30);
  ellipse(300,200,30,30);
  ellipse(190,300,30,30);
  ellipse(250,350,30,30);
  ellipse(260,140,30,30);
  ellipse(150,240,30,30);
  ellipse(350,240,30,30);}
else
{
} 
  for(let x=1;x<100;x++)
  {
  noFill();
  ellipse(width/2,height/2,(x*20),(x*20));
  loop();
  } 
  
}