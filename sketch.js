let scribble;
var distance;


function setup() {
  createCanvas(windowWidth, windowHeight);
    

 
  gui = new Gui();
  
  let gui_setup = new dat.GUI();
  gui_setup.add(gui, 'Circles', 0, 15).step(1).onChange(update);
  gui_setup.add(gui, 'Scale', 10, 75).step(1).onChange(update);
  gui_setup.add(gui, 'strokeWeight', 1, 10).step(1).onChange(update);
  gui_setup.add(gui, 'randomScale');
 rectMode(CENTER);



  noFill();
  scribble = new Scribble();
}

function draw() {
  background(gui.bColor);

  if(windowWidth>479){

  for (let i = windowWidth * gui.margin; i <= windowWidth * (1 - gui.margin); i += windowWidth * gui.xspacing) {
    for (let y = windowHeight * gui.ymargin; y <= windowHeight * (1-gui.ymargin); y += windowHeight * gui.yspacing) {
      if (gui.randomScale) {
        distance = random(gui.Scale);
      } else {
        distance = gui.Scale;
      }
      target(i, y, distance, gui.Circles);
    }
  }


  noLoop();
  } else {
    rect(windowWidth/2,windowHeight/2,100,100);
  }
}

function target(xPos, yPos, steps, num) { 
  strokeWeight(gui.strokeWeight);
  stroke(gui.color);
  for (var i = 0; i <= num; i++) {
    scribble.scribbleEllipse(xPos, yPos, steps * i, steps * i);
  }
}

function update() {
  redraw();
}



function Gui() {
  this.Circles = 4;
  this.Scale = 50;
  this.strokeWeight = 4;
  this.margin = .25;
  this.ymargin = .25;
  this.xspacing = .25;
  this.yspacing = .25;
  this.randomScale = false;
  this.color = '#FFB6C1';
  this.bColor = '#fed8b1';

}

function mouseDragged() {
  ellipse(mouseX, mouseY, 50, 50); 
  return false;
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}