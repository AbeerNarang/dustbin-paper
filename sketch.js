const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper;
var ground;
var box1;  
function setup() {
createCanvas(800, 400);
engine = Engine.create();
world = engine.world;
paper = new Paper(100,200,70);
ground = new Ground(400,335,800,20);
box1 = new Box(600,260,120,130);
Engine.run(engine); 
}
function draw() {
background("white");
if(keyCode === UP_ARROW){
Matter.Body.applyForce(paper.body,paper.body.position,{x:50,y:-350});
}
if(keyCode === DOWN_ARROW){
Matter.Body.applyForce(paper.body,paper.body.position,{x:0,y:5});
}
paper.display();
ground.display();
box1.display();
drawSprites();
}