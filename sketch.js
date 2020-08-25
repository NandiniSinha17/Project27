const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	roof = new Roof(width/2, 100, 400, 20)
	console.log(roof.x);
	bob1 = new Bob(350, 300, 25);
	bob2 = new Bob(375, 300, 25); 
	bob3 = new Bob(400, 300, 25);
	bob4 = new Bob(425, 300, 25);
	bob5 = new Bob(450, 300, 25);

	rope1 = new Rope(bob1.body, roof.body, -100, 0);
	rope2 = new Rope(bob2.body, roof.body, -50, 0);
	rope3 = new Rope(bob3.body, roof.body, 0, 0);
	rope4 = new Rope(bob4.body, roof.body, 50, 0);
	rope5 = new Rope(bob5.body, roof.body, 100, 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();  
  drawSprites();


}

function keyPressed(){
	if(keyCode === UP_ARROW){
		console.log(bob1.body.position);
		Matter.Body.applyForce(bob1.body, bob1.body.position, {x:-1200, y: -300});
	}
}



