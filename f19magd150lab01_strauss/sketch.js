function setup() {
createCanvas(300,300);
}

function draw() {
	background (200);
	fill(255);
	strokeWeight(0);
	(ellipse (30,30,50,50));
	strokeWeight(2);
	fill(90);
	(ellipse (250,100,100,20));

	strokeWeight(0);
	rect (50,230,150,100);
	strokeWeight(2);
	line(50,200,250,200);
	line(50,110,250,220);
	line(50,200,250,100);
	rect (200,100,100,200);
	rect (10,90,50,300);

	point (90,150);
	point (150,20);
	point (200,90);

	rectMode(CORNER);
	fill (100);
	rect(10,50,50,50);

}