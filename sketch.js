let angle = 0;
let time = 0;
let wave = [];
let N=1;

function setup() {
  // put setup code here
  createCanvas(600, 400);
  input = createInput();
  input.position(20,350);
  button = createButton('Submit');
  button.position(input.x + input.width,350);
  button.mousePressed(changeValue);


}

function changeValue(){
	N = int(input.value());
}

function draw() {
  // put drawing code here
  background(0);

  push();
  textSize(32);
  noStroke();
  fill(150,150,150);
  text('Fourier Series Visualised', 10,30);
  textSize(16);
  text('(Approximation to square wave)', 10,55);
  textSize(24);
  text('# Enter number of sine waves', button.x + button.width + 10, button.y + 20)
  pop()

  translate(150,200);
  let x = 0;
  let y = 0;

  for(let i=0;i<N;i++){
  	  let n = i*2 + 1;
  	  let prevx = x;
  	  let prevy = y;

  	  let radius = 50 * (4 / ( n * PI));
  	  x += radius * cos(n * time);
	  y += radius * sin(n * time);
	  
  
	  stroke(255, 100);
	  noFill();
	  ellipse(prevx,prevy,radius*2);
	  
	 
	  // fill(255);
	  stroke(255);
	  line(prevx, prevy, x, y);
	  // ellipse(x, y, 8);

	  // translate(200, 0);
	  // line(x-200,y, 0, wave[0]);
  }
  wave.unshift(y);
  beginShape();
  noFill();
  for(let i = 0; i < wave.length; i++){
  	vertex(i, wave[i]);
  }
  endShape();

  time += 0.05;

  if(wave.length > 400){
  	wave.pop();
  }
}
