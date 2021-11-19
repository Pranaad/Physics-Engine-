const World = Matter.World;
const Bodies = Matter.Bodies;
const Engine = Matter.Engine;


var world,engine;
var box;
var ground;
var ball;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

var box_options ={
  restitution : 3
}

box = Bodies.rectangle(200,200,40,60,box_options);
World.add(world,box);


var ground_options ={
  isStatic : false 
}

ground= Bodies.rectangle(200,390,400,20,ground_options);
World.add(world,ground);

var ball_options={
  restitution : 2 
}

ball= Bodies.circle(100,100,20,ball_options);
World.add(world,ball);

console.log(box);

}
function draw() {
  Engine.update(engine);

  background("black");  
  ellipseMode(RADIUS);
  rectMode(CENTER);
  rect(box.position.x,box.position.y,40,60);
  rect(ground.position.x,ground.position.y,400,20);
  ellipse(ball.position.x,ball.position.y,20,20);

}