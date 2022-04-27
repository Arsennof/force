const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball;

var up
var right


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
 
  up=createImg("up.png")
  up.position(40,40)
  up.size(50,50)
  right=createImg("right.png")
  right.position(340,40)
  right.size(50,50)

  rectMode(CENTER);
  ellipseMode(RADIUS);
  var ball_options={
    restitution:0.9
  }
  ball=Bodies.circle(200, 200, 20, ball_options)
  World.add(world,ball)
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
 ellipse(ball.position.x, ball.position.y, 20, 20);
  Engine.update(engine);
  
up.mouseClicked(herisontal)
right.mouseClicked(vertical)
}


function herisontal(){

  Matter.Body.applyForce(ball, { x: 0, y: 0 }, { x: 0.005, y: 0 })

}

function vertical(){

  Matter.Body.applyForce(ball, { x: 0, y: 0 }, { x: 0, y: 0.005 })

}

