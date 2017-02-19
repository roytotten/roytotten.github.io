function setup() {
	createCanvas(600, 400);
	background(200);
}

function draw() {
  line(420, 400, 420, 0);
	if (mouseIsPressed) {
		fill(30);
    ellipse(mouseX, mouseY, 50, 50);
}
  mouseX = mouseX + 1;
	
	if (mouseX > 400) {
		background (200, 0, 0);
	}

}