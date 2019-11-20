// Sampled from example zip file 3D primitives file for push and pop. Camera is heavily influenced off of p5.js refrence| camera().
let sliderGroup = [];
let X;
let Y;
let Z;
let centerX;
let centerY;
let centerZ;
let a = 100;

let moose;

let vid;
let play;
let stop=false;

let chart;
function preload() {
  moose = loadModel('tengkorak-exported.obj', true);
  chart = loadTable('MooseWolfDataUpdated.csv', 'csv', 'header');
}

function setup() {
  createCanvas(800, 600, WEBGL);
  
  
  
  vid = createVideo(['Pexels Videos 2055060.mp4']);
    play = createButton('start');
    play.mousePressed(video);
  for (var b = 0; b < 6; b++) {
    if (b === 2) {
      sliderGroup[b] = createSlider(0, 800, 600);
    } else {
      sliderGroup[b] = createSlider(-600, 800, 0);
    }
    a = map(b, 0, 6, 5, 85);
    sliderGroup[b].position(10, height + a);
    sliderGroup[b].style('width', '80px');
  }  
  
  print(chart.getRowCount() + ' total rows in table');
  print(chart.getColumnCount() + ' total columns in table');

  print(chart.getColumn('name'));
  
  for (let b = 0; b < chart.getRowCount(); b++)
    for (let c = 0; c < chart.getColumnCount(); c++) {
      print(chart.getString(b, c));
    }
}
function draw() {
  background(220, 100, 100);
  vid.size (800,400);
  
  let lightX = mouseX - height / 5;
  let lightY = mouseY - width / 5;
  
  X = sliderGroup[0].value();
  Y = sliderGroup[1].value();
  Z = sliderGroup[2].value();
  centerX = sliderGroup[3].value();
  centerY = sliderGroup[4].value();
  centerZ = sliderGroup[5].value();
  camera(X, Y, Z, centerX, centerY, centerZ, 0, 1, 0);

  ambientLight(20, 20, 90);
  pointLight(255, lightX, lightY, 100,100,100)
  
 translate(-120, 0, 0);
  push();
  noStroke();
  rotateZ(frameCount * 0.02);
  rotateX(frameCount * 0.02);
  rotateY(frameCount * 0.02);
  translate(200,20,20);// i have no clue how that happened but it looks cool.
  specularMaterial(250);
  torus(85, 15);
  box(50, 50, 50);
  pop();
  
translate(220, 0, 0);
  push();
  noStroke();
  rotateZ(frameCount * 0.02);
  rotateX(frameCount * 0.02);
  rotateY(frameCount * 0.02);
  translate(-200,20,20);// i have no clue how that happened but it looks cool.
  specularMaterial(250);
  torus(85, 15);
  box(50, 50, 50);
  pop();
  
  translate(-100, 0, 0);
  push();
  scale(1.0);
  rotateZ(frameCount * 0.00);
  rotateX(frameCount * -0.05);
  rotateY(frameCount * -0.02);
  specularMaterial(250); 
  model(moose);
  pop();
 
  push();
  image(vid, 10, 10);
  image(vid, 150, 150); 
}

function video() {
  if (stop) {
    vid.pause();
    play.html('play');
  }else{
    vid.loop();
    play.html('pause');
  }
  stop = !stop;
   pop(); 
}