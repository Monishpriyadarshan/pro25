
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var paper, slingShot;

box,boxImg;

function preload()
{
	boxImg = loadImage("dustbin.png");
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	boxleftSprite=createSprite(boxPosition, boxY, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxLeftBody);

 	boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
	 boxBase.shapeColor=color(255,0,0);
	 box.addImage("dustbin",boxImg); 
	 box.position.x = boxBase.position.x;
	 box.position.y = boxBase.position.y;


 	boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
 	World.add(world, boxBottomBody);

 	boxleftSprite=createSprite(boxPosition+200 , boxY, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
	 World.add(world, boxRightBody);

	 slingShot = new SlingShot(paper.body,{x:200,y:100});
	 World.add(world, slingShot);
	 
	 ground = createSprite(785,685,15,15);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("red");

  if(keycode === "UP ARROW"){
	  Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
  }
  paper.display();
  slingShot.display();
  drawSprites();
 
}



