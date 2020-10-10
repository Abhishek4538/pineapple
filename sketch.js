const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

let db5
var engine, world;
var ground
var db,db2,db3,db4
var paper
function preload(){
db5 = loadImage("dustbingreen.png")
}

function setup(){
    var canvas = createCanvas(windowWidth,windowHeight);
    engine = Engine.create();
    world = engine.world;
    db = new Dustbin(windowWidth-200,windowHeight-40,120,20)
    db2 = new Dustbin(windowWidth-260,windowHeight-90,20,115)
    db3 = new Dustbin(windowWidth-130,windowHeight-90,20,115)
    
    db4 = new Dustbin(windowWidth-200,windowHeight-40,10,10)
    
    paper = new Paper(100,0)
    ground = new Ground(windowWidth/2,windowHeight-20,windowWidth,20)
    keyPressed();
}

function draw(){
    background(255);
    Engine.update(engine); 
    
    
    db.display();
    db2.display()
    db3.display();
    paper.display();
    ground.display();
    image(db5,windowWidth-275,windowHeight-180,163,150)
    
}

function keyPressed(){
    if(keyCode=== UP_ARROW){
        Matter.Body.applyForce(paper.body,paper.body.position,{x:250,y:-200})
    }
}