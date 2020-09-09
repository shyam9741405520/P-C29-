const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint= Matter.Constraint;

var engine, world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,ball;
var box11,box12,box13,box14;
var ground1;
var slingShot,canvas;

function setup(){
     canvas = createCanvas(1200,400);
    //engine = Engine.create();
    //world = engine.world;
engine=Engine.create()
world=engine.world;
   // ground1= new Ground(1000,150,170,20);
    ground2 = new Ground(975,250,150,20);
    ground1 = new Ground(425,200,150,20);
    box1=new Box(945,240,20,50)
    box2=new Box(975,210,20,50)
    box3=new Box(1000,220,20,50)
    box4=new Box(975,100,60,20)
    box5=new Box(957,150,20,50)
    box7=new Box(993,150,20,50)
    box8=new Box(330,135,20,50)
    box9=new Box(360,135,20,50)
    box10=new Box(390,135,20,50)
    box11=new Box(420,135,20,50)
    box12=new Box(450,135,20,50)
    box13=new Box(480,135,20,50)
    ball= new Ball(20,30)
    slingShot=new Slingshot(ball.body,{x:100,y:80});

   
}

function draw(){
    background("yellow");
    Engine.update(engine);
    fill("pink")
    ground2.display();
    fill("pink")
    ground1.display();
    fill("orange")
    box7.display();
    fill("orange")
    box9.display();
    fill("orange")
    box10.display();
    fill("orange")
    box11.display();
    fill("orange")
    box12.display();
    fill("orange")
    box13.display();
    fill("orange")
    box7.display();
    fill("green")
    box5.display();
    fill("white")
    box3.display();
    fill("yellow")
    box2.display();
    fill("grey")
    box1.display();
    fill("purple")
    box4.display();``
    ball.display();
   
}






function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    slingShot.fly();
}