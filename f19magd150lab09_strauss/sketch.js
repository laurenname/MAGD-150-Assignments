//Refrenced from code by Daniel Shiffman.
let jellies;
let mirror;

function preload(){
  soundFormats('mp3');
    song = loadSound('Kevin MacLeod Carefree.mp3');
}
// Loaded the main song here with sound type specified to mp3.
function setup() {
  song.setVolume(0.3);
  song.amp(1);
  song.rate(3);
  song.play();
// Adjusted the song's volume, rate, and amp here.
  createCanvas(820, 600);
  
  jellies = loadImage('6124-small-clear-jellyfish-pv.jpg'); 
  mirror = loadImage('mirror-2905397_1280.png'); 
// Loaded the images used inside of the script here.
}

function draw() {
  image(jellies, 0, 0);
  tint(200, 130, 200);
  image(jellies, 50,0);
  image(mirror, 0,0);
  filter (POSTERIZE, 3);
// Displays images and filters for the script here.
}