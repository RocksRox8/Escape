var StartBkgd;
var ButtonStart
var object;

var gameState="start";

var find_the_Thing_Background;
var MathBackground




function preload() {

  //bkgd=loadImage("Escape Room.jpg");


 

  StartBkgd=loadImage("Room You Escape.png");

  ButtonStart=loadImage("StartButtonImg.png");
  find_the_Thing_Background=loadImage("FindTheThingBackground.jpeg")
  object=loadImage("Thing.png")
  

  MathBackground=loadImage("mathBackground.jpg")

 

}

function setup() {
  createCanvas(displayWidth,displayHeight);
  StartButtonSprite=createButton("Start")
  StartButtonSprite.position(775, 100)
 
  




 
}

function draw() {
  
  
  
if(gameState==="start"){
  background(StartBkgd);
  

 StartButtonSprite.mousePressed(()=>{
   gameState="roomOne";
   StartButtonSprite.hide();
 })


}

if(gameState==="roomOne"){
 background(find_the_Thing_Background);
 fill("black")
 textSize(50)
 text("Find a Black Pole, then click on it", 400, 150)

 var ThingSprite=createSprite(300, 600, 10, 70);
 ThingSprite.shapeColor="red";
ThingSprite.setCollider("rectangle",0, 0, 10, 70);
  if(mousePressedOver(object)){
    gameState='roomTwo';
  }
}




if(gameState==="roomTwo"){
  background(MathBackground);

}
}