
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine ,world ,box1 ,box2, box3, box4, box5, ground, pig1, pig2, log1, log2, log3, log4, log5, log6, bird;
function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(600,390,1200,20);
  box1 = new Box(700,320,70,70);
  box2 = new Box(920,320,70,70);
  pig1 = new Pig(810,350);
  log1 = new Log(810,260,300,PI/2);
  box3 = new Box(700,230,70,70);
  box4 = new Box(920,230,70,70); 
  pig2 = new Pig(810,230);
  log2 = new Log(810,170,300,PI/2);
  box5 = new Box(810,150,70,70);
  log5 = new Log(760,130,150,PI/7);
  log6 = new Log(870,130,150,-PI/7);
  bird = new Bird(100,100);
} 

function draw(){
  background(0);
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  pig1.display();
  log1.display();
  box3.display();
  box4.display();
  pig2.display();
  log2.display();
  box5.display();
  log5.display();
  log6.display();
  bird.display();
}