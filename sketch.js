var canvas;
var towerImage,doorImage;
var gameState="play";
var bullet,bulletImage;
var score=0;


function preload(){
    towerImg = loadImage("Tower.png");
    zombieImage = loadImage("Zombie.png");
    bulletImage=loadImage("Bullet.jpg"); 
}
    function setup(){

        createCanvas(windowWidth, windowHeight);


       
    tower = createSprite(width/2,height,width,2);
    tower.addImage(towerImg)
    tower.scale = 1.1
    tower.velocityY=1



    bullet=createSprite(width/2,height,width,2);
    bullet.addImage( bulletImage);
    bullet.scale=0.005;
    
    edges=createEdgeSprites();
    zombieGroup=new Group();
}

function draw() {
    
    

                        
  background(0) ; 


  if(gameState==="play"){
  if(tower.y>400){
      tower.y=300;
  }
}



if (keyIsDown(RIGHT_ARROW)) 
  {
    bullet.position.x =  bullet.position.x +5;
  }

    if (keyIsDown(LEFT_ARROW)) 
  {
    bullet.position.x=  bullet.position.x -5;
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    bullet.position.y =  bullet.position.y - 5;
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    bullet.position.y =  bullet.position.y + 5;
  }


 
if(frameCount % 250 === 0){
    zombie=createSprite(250,250);
    zombie.x=Math.round(random(180,550));
 
    zombie.addImage(zombieImage);
    zombie.scale=0.1;
    zombie.velocityY=1;
    zombieGroup.add(zombie);
    
}

if ( bullet.isTouching(edges[1])) {
    if( bullet.x > 600) {
     
      
     }
    
   }

if  (bullet.isTouching(zombieGroup)){
    score=score+2; 
    zombie.remove();
}
if (bullet.isTouching(zombieGroup)){
    gameState="end";
}

drawSprites();
textSize(25);
fill("red");
text("Score : "+score,500,50 );
}

if(gameState==="end"){
    fill("red");
    textSize(30);
    text("Game Over",(width/2,height/2- 50));
}




