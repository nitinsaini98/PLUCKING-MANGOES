
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stone,groundObject, launcherObject;
var mango1 ,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1120,90,30);
	mango2=new mango(1000,100,30);
	mango3=new mango(1150,140,30);
	mango4=new mango(1200,210,30);
	mango5=new mango(990,170,30);
	mango6=new mango(920,200,30);
	mango7=new mango(1110,200,30);
	mango8=new mango(1050,150,30);
	mango9=new mango(1000,240,30);
	mango10=new mango(1070,60,30);

	treeObj=new tree(1050,600);
	groundObject=new ground(width/2,600,width,20);
	

	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,370,200,300);

  /*detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);
  detectollision(stone,mango6);
  detectollision(stone,mango7);
  detectollision(stone,mango8);
  detectollision(stone,mango9);
  detectollision(stone,mango10);*/

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();

  groundObject.display();
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x: mouseX , y: mouseY})
}
function mouseReleased(){
    attach.fly();
}
function detectollision(lstone,lmango) {

	mangoBodyPosition = lmango.Body.Position
	stoneBodyPosition = lstone.Body.Position
 
	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y ,mangoBodyPosition.x , mangoBodyPosition.y)
    if(distance<= lmango.r + lstone.r){
       Matter.Body.setStatic(lmango.body,false);
	}  
}