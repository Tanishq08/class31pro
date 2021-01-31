
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var particles=[];
var divisions=[];
var plinkos=[];
var divisionHeight=300;
var random;
function preload(){
   
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
  world = engine.world;
  
  ground1 = new Ground(400,695,800,20);
 
  for (var j=40;j<width;j=j+50){
    plinkos.push(new Plinko(j,75,10))
  }
  for (var j=15;j<width-10;j=j+50){
    plinkos.push(new Plinko(j,175,10))
  }

  for (var j=40;j<width;j=j+50){
    plinkos.push(new Plinko(j,275,10))
  }

  for (var j=15;j<width-10;j=j+50){
    plinkos.push(new Plinko(j,375,10))
  }

  for (var k=0; k <=width;k=k+80){
    divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
  }
  
 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground1.display();

 for(var j=0;j<plinkos.length;j++){
   plinkos[j].display()
 }

 if(frameCount%60===0){
  particles.push(new Particle(random(width/2-30, width/2+30), 10,10));

}
 
for (var p = 0; p < particles.length; p++) {
   
  particles[p].display();
}

for (var k=0;k<divisions.length;k++){
  divisions[k].display()
}

 
 
  drawSprites();

}	





