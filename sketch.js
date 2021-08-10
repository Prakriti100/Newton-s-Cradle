const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var bob1;
var bob2;
var bob3;
var bob4;
var bob5;


var rope1;
var rope2;
var rope3;
var rope4;
var rope5;

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var bob1_options ={
		restitution: 0.8
	}

	var bob2_options ={
		restitution: 0.8
	}

	var bob3_options ={
		restitution: 0.8
	}

	var bob4_options ={
		restitution: 0.8
	}

	var bob5_options ={
		restitution: 0.8
	}

	var roof_options={
		isStatic:true			
	}

	bob1 = Bodies.circle(200,50,10,bob1_options);
	World.add(world,bob1);

	bob2 = Bodies.circle(250,50,10,bob2_options);
	World.add(world,bob2);

	bob3 = Bodies.circle(300,50,10,bob3_options);
	World.add(world,bob3);

	bob4 = Bodies.circle(350,50,10,bob4_options);
	World.add(world,bob4);

	bob5 = Bodies.circle(400,50,10,bob5_options);
	World.add(world,bob5);

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	rope1 = new Rope(bob1,roof,-80,0);
	rope2 = new Rope(bob2,roof,-70,0);
	rope3 = new Rope(bob3,roof,-60,0);
	rope4 = new Rope(bob4,roof,-50,0);
	rope5 = new Rope(bob5,roof,-40,0);

	


    Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here

  
  //create ellipse shape for multiple bobs here
  ellipse(bob1.position.x,bob1.position.y,30);
  ellipse(bob2.position.x,bob2.position.y,30);
  ellipse(bob3.position.x,bob3.position.y,30);
  ellipse(bob4.position.x,bob4.position.y,30);
  ellipse(bob5.position.x,bob5.position.y,30);



  push();
  strokeWeight(2);
  stroke(255);
  line(rope1.x,rope1.y,bob1.x,bob1.y);
  line(rope2.x,rope2.y,bob2.x,bob2.y);
  line(rope3.x,rope3.y,bob3.x,bob3.y);
  line(rope4.x,rope4.y,bob4.x,bob4.y);
  line(rope5.x,rope5.y,bob5.x,bob5.y);
  pop();
  
 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.

function keyPressed(){
	if(keyCode==RIGHT_ARROW){
		Matter.Body.applyForce(bob1,{x:0,y:0},{x:-0.05,y:0});
	}
}