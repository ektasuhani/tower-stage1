
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}


function setup() {
  createCanvas(1200,800);
  stroke(255)
  
  engine = Engine.create();
	world = engine.world;

 
  ground = new Ground(500,780,width+200,20);
  ground2 = new Ground(900,250,300,20);
  ground3 = new Ground(500,500,300,20)
  box = new Box(800,100);
  box1 = new Box(850,100);
  box2 = new Box(900,100);
  box3 = new Box(950,100);
  box4 = new Box(1000,100);
  box5 = new Box(800,50);
  box6 = new Box(850,50);
  box7 = new Box(900,50);
  box8 = new Box(950,50);
  box9 = new Box(800,30);
  box10 = new Box(850,30);
  box11 = new Box(900,30);
  box12 = new Box(800,10);
  box13 = new Box(850,10);
  box14 = new Box(800,5);
  box15 = new Box (400,200);
  box16 = new Box(450,200);
  box17 = new Box(500,200);
  box18 = new Box(550,200);
  box19 = new Box(400,150)
  box20 = new Box(450,150)
  box21 = new Box(500,150)
  box22 = new Box(400,100)
  box23 = new Box(450,100)
  box24 = new Box(400,50)
  hexagon = new Hexagon(200,200)
  slingshot=new SlingShot(hexagon.body,{x:100,y:360})

}

function draw() {
 
  background("red");  
  
  Engine.update(engine)
 
ground.display();
ground2.display();
ground3.display();
box.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display()
box6.display()
box7.display()
box8.display()
box9.display()
box10.display()
box11.display()
box12.display()
box13.display()
box14.display()
box15.display()
box16.display()
box17.display()
box18.display()
box19.display()
box20.display()
box21.display()
box22.display()
box23.display()
box24.display()
hexagon.display();
slingshot.display();

 
 drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(hexagon.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
slingshot.fly()
}

function keyPressed ()
{
  if(keyCode === RIGHT_ARROW)
  {
  }

} 
