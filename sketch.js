 var runner,run
 var black,road
 var line,lin


  function preload() {
  run = loadAnimation("Runner-1.png", "Runner-2.png");
  

  road = loadAnimation("path.png")
 }

 function setup() {
  createCanvas(1300, 600);
  
  black = createSprite(650,180,400,20);
  black.addAnimation("cake",road);
  black.velocityY = 4;
  
  runner = createSprite(650,300,20,50);
  runner.addAnimation("running", run);
  runner.scale=0.1
  runner=World.mouseX

  line=createSprite(510,300,20,900)
  lin=createSprite(795,300,20,900)
  
  if(runner.colide=line){
    runner.x=650
  }
  
  if(runner.colide=lin){
    runner.x=650
  } 

 }

 function draw() {
  background(220);

 drawSprites()

  if(black.y>400){
    black.y = height/2
  }}