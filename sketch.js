var bgImage
var engine 
var world
var snowdrop = [];

function setup() {
  createCanvas(800,400);
 // createSprite(400, 200, 50, 50);
 engine = Matter.Engine.create();
   world = engine.world;
 for (
   var i = 0 ; i <4 ; i++
 ){
   
   var x = i * 150 +100
   console.log(i,x);

  snowdrop [i] = new Snow(x,0,80)
 }

 
}

function draw() {
  background(bgImage);
    Matter.Engine.update(
    engine
    )
    for(
      var i = 0 ; i< 4 ; i ++
    ) {
      snowdrop[i].display()
      
    }
    
  drawSprites();
}

function preload() {
bgImage = loadImage("snow2.jpg")


}