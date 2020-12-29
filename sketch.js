
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
var drect1,drect2,drect3;

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Creating the Bodies
	 paper=new Paper(150,200,20);
	 
	 ground = new Ground(200,370,2000,10);

	 drect1=new Dustbin(745,320,15,90);
	 drect2=new Dustbin(915,320,15,90);
	 drect3=new Dustbin(830,355,155,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
 
  
  background(0);
  Engine.update(engine);

  paper.display();
  ground.display();
  drect1.display();
  drect2.display();
  drect3.display();


  
 
}


function keyPressed(){
	if (keyCode===UP_ARROW){

		Matter.Body.applyForce(paper.body,paper.body.position,{x:11,y:-11});
		console.log(paper.body.position.x,":",paper.body.position.y);
	}




} 
