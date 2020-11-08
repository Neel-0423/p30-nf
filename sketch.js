  
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var gameState = "onSling";

function preload()
{
	 
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,685,800,20);
	ground2 = new Ground(400,350,250,20);
	ground3 = new Ground(600,550,250,20);
	ground4 = new Ground(600,150,250,20);

	b1 = new Box(300,275,30,40);
	b2 = new Box(330,275,30,40);
	b3 = new Box(360,275,30,40);
	b4 = new Box(390,275,30,40);
	b5 = new Box(420,275,30,40);
	b6 = new Box(450,275,30,40);
	b7 = new Box(480,275,30,40);
	b8 = new Box(330,235,30,40);
	b9 = new Box(360,235,30,40);
	b10 = new Box(390,235,30,40);
	b11 = new Box(420,235,30,40);
	b12 = new Box(450,235,30,40);
	b13 = new Box(360,195,30,40);
	b14 = new Box(390,195,30,40);
	b15 = new Box(420,195,30,40);
	b16 = new Box(390,155,30,40);

	b17 = new Box(600,70,30,40);
	b18 = new Box(570,100,30,40);
	b19 = new Box(600,100,30,40);
	b20 = new Box(630,100,30,40);
	b21 = new Box(660,100,30,40);
	b22 = new Box(540,100,30,40);
	b23 = new Box(630,70,30,40);
	b24 = new Box(570,70,30,40);
	b25 = new Box(600,40,30,40);

	b26 = new Box(600,470,30,40);
	b27 = new Box(570,500,30,40);
	b28 = new Box(600,500,30,40);
	b29 = new Box(630,500,30,40);
	b30 = new Box(660,500,30,40);
	b31 = new Box(540,500,30,40);
	b32 = new Box(630,470,30,40);
	b33 = new Box(570,470,30,40);
	b34 = new Box(600,440,30,40);

	polygon = new Polygon(50,500,30,30);
	
	slingshot = new SlingShot(polygon.body,{x:100,y:500});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
  
  slingshot.display();

  ground.display();
  ground2.display();
  ground4.display();
  ground3.display();

  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  b13.display();
  b14.display();
  b15.display();
  b16.display();
  
  b17.display();
  b18.display();
  b19.display();
  b20.display();
  b20.display();
  b21.display();
  b22.display();
  b23.display();
  b24.display();
  b25.display();

  b26.display();
  b27.display();
  b28.display();
  b29.display();
  b30.display();
  b31.display();
  b32.display();
  b33.display();
  b34.display();

  polygon.display();

  drawSprites();
 
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
        Matter.Body.setPosition(polygon.body, {x:100 , y: 500});
        slingshot = new SlingShot(polygon.body,{x:100,y:500});
       slingshot.attach(polygon.body);
     mouseDragged();
     mouseReleased();
        
    }
    
  
}