


 class addingManager {

        static getPosition(scene){
     
            let nextFloorX;
            let nextFloorY;
            
                let floorGroup = scene.floorArray
              const lastFloor = floorGroup[floorGroup.length-1];
          

              if(scene.piramidStairsLeft ==0 && scene.flyingFloorStairsLeft ==0){
              
                if(chanceRoll(scene.upperFloorChance)){
                  nextFloorY = lastFloor.y -70
              
              }else if(chanceRoll(scene.lowerFloorChance)){
                  nextFloorY = lastFloor.y+70
              }
              else {
                  nextFloorY = lastFloor.y
                }
  
              }else{
                nextFloorY = lastFloor.y -70
              }
              
           
      
              if(nextFloorY > gameHeight - 130|| nextFloorY < gameHeight/2-50){
           
                if(chanceRoll(scene.piramidModeChance) &&  nextFloorY > gameHeight - 130){ 
             
                    if(chanceRoll(50)){ 
            
                      scene.piramidStairsLeft = 4;
                      nextFloorY = lastFloor.y
                    }else{
                     
                      scene.flyingFloorStairsLeft = 4;
                      nextFloorY = lastFloor.y
                    }
      
                }
                else{
                  nextFloorY = lastFloor.y
                }
              }
            

 if((scene.upperFlyingFloorsLeft >0 && nextFloorY <= gameHeight/2 + 100) ||scene.pastUpperFlyingFloors >0 ){
   scene.pastUpperFlyingFloors --;
                nextFloorY = lastFloor.y + 70;
              };
          if(scene.rotateLineLowerFloors){
            nextFloorY = lastFloor.y + 70;
          }

                let space = scene.floorToFloorSpacing ;
                if(this.lastFloorType == "flying"){
                    space = Phaser.Math.Between(120,150);
                    this.lastFloorType = "";
                }
                nextFloorX  = lastFloor.x+space;
           
    
             const obj = {
               nextFloorX:nextFloorX,
               nextFloorY:nextFloorY,
               lastFloor:lastFloor,
             }

            return obj;
    }
static getFloorFromPool(pos,sprite,scene,hasAura = true){

  const {nextFloorX,nextFloorY,lastFloor} = pos;

  if(scene.floorArrayPool.length >0 && scene.floorArrayPool.findIndex(floor=>!floor.isFlying) != -1){
   
    const index = scene.floorArrayPool.findIndex(floor=>!floor.isFlying)
      let $floor =   scene.floorArrayPool[index].activateTextureFromPool(scene,nextFloorX+ lastFloor.displayWidth,nextFloorY,sprite,hasAura);
            scene.floorArrayPool.splice(index,1);
              return $floor
          }else{
            return new floor(scene,nextFloorX+ lastFloor.displayWidth,nextFloorY,"floors",sprite,hasAura ) 
          }
}
static getFlyingFloorFromPool(pos,sprite,scene){
 const {nextFloorX,nextFloorY,lastFloor } = pos;
  if(scene.floorArrayPool.length >0 && scene.floorArrayPool.findIndex(floor=>floor.isFlying) != -1){
    const index = scene.floorArrayPool.findIndex(floor=>floor.isFlying)
            let $floor =   scene.floorArrayPool[index].activateTextureFromPool(scene,nextFloorX+ lastFloor.displayWidth,nextFloorY,sprite);
            scene.floorArrayPool.splice(index,1);
              return $floor
  }
  else{
    return new floorExtension(scene,nextFloorX+ lastFloor.displayWidth,nextFloorY,"floors",sprite)
  }
}

  static  createSimpleFloor(scene,sprite){
      const pos = this.getPosition(scene);
return addingManager.getFloorFromPool(pos,sprite,scene)
    }

    static  createTunnel(scene,sprite){
      const pos = this.getPosition(scene);

      let $floor;
      $floor =  addingManager.getFloorFromPool(pos,sprite,scene,true)
      $floor.showObstacle =false;
let blackBar;
  const sawSkinNumber = scene.textureCreator.sawsOnWall[Phaser.Math.Between(0,scene.textureCreator.sawsOnWall.length-1)]
  if(chanceRoll(50)){
  let spikesBar = scene.physics.add.sprite($floor.x + $floor.displayWidth/2, $floor.y - 100,"game","spikesBar")
  .setTint(scene.spikeBarTint).setImmovable(true).setDepth(0.01)
      let spikesBarAura = scene.add.sprite(spikesBar.x, spikesBar.y,"game","spikesBarAura")
      spikesBar.setImmovable = true;
      scene.additionalColliders.push(spikesBar)

 blackBar = scene.physics.add.sprite($floor.x + $floor.displayWidth/2, spikesBar.y - spikesBar.displayHeight,"game","blackBar").setDepth(0.02).setTint(scene.blackBarTint)
let blackBarAura = scene.add.sprite(blackBar.x, blackBar.y ,"game","blackBarAura").setDepth(0.01)
      scene.specialEffects.push(spikesBar,blackBarAura,spikesBarAura)
      blackBar.canSquareBounce = true
      scene.blockingCollider.push(blackBar)
const a = () =>{
   addingManager.initalizeCustomSawOnWall(scene,spikesBar.x-150,spikesBar.y - 150,sawSkinNumber,6).setDepth(0);
 addingManager.initalizeCustomSawOnWall(scene,spikesBar.x+150,spikesBar.y -150,sawSkinNumber,-6).setDepth(0);  
}

const b= () =>{
 let spikesBar2 = scene.physics.add.sprite( blackBar.x,  blackBar.y-blackBar.displayHeight +4,"game","spikesBar")
 .setTint(scene.spikeBarTint).setDepth(0.01)
 
 let spikesBarAura2 = scene.add.sprite(spikesBar2.x,  spikesBar2.y+1,"game","spikesBarAura")
  spikesBar2.setImmovable = true;
  scene.specialEffects.push(spikesBar2,spikesBarAura2)
  scene.additionalColliders.push(spikesBar2)
  spikesBar2.setAngle(180)
  spikesBarAura2.setAngle(180);
}


switch(Phaser.Math.Between(1,2)){
  case 1 :a();
  break;
  case 2:b();
  break;
 
}
}else{

  const a = () =>{
    const smalSawSkinNumber =scene.textureCreator.smallSaws[Phaser.Math.Between(0,scene.textureCreator.smallSaws.length-1)];

    let blackBar = scene.physics.add.sprite($floor.x + $floor.displayWidth/2, $floor.y- 140,"game","blackBar").setDepth(0.02).setTint(scene.blackBarTint)
    let blackBarAura = scene.add.sprite(blackBar.x, blackBar.y ,"game","blackBarAura").setDepth(0.01)
    
      scene.blockingCollider.push(blackBar)
      scene.specialEffects.push(blackBarAura)
      blackBar.canSquareBounce = true
     
      addingManager.initalizeCustomSawOnWall(scene,blackBar.x-150,blackBar.y-30 ,sawSkinNumber,6).setDepth(0);
      addingManager.initalizeCustomSawOnWall(scene,blackBar.x+150,blackBar.y -30,sawSkinNumber,-6).setDepth(0);  
      addingManager.initalizeCustomSawOnWall(scene,blackBar.x,blackBar.y+20 ,smalSawSkinNumber,-6).setDepth(0); 
  }

  const b =()=>{
    addingManager.initalizeCustomSawOnWall(scene,$floor.x + 120,$floor.y-180 ,sawSkinNumber,6).setDepth(0).setScale(0.85)
    addingManager.initalizeCustomSawOnWall(scene,$floor.x + $floor.displayWidth - 120,$floor.y-180,sawSkinNumber,-6).setDepth(0).setScale(0.85);  
    new obstacle(scene,$floor.x+$floor.displayWidth/2,$floor.y);
      
  }
  const c= () =>{
 
    const smalSawSkinNumber = scene.textureCreator.smallSaws[Phaser.Math.Between(0,scene.textureCreator.smallSaws.length-1)];
     addingManager.initalizeCustomSawOnWall(scene,$floor.x + 190,$floor.y-220 ,smalSawSkinNumber,6).setDepth(0);
     addingManager.initalizeCustomSawOnWall(scene,$floor.x+$floor.displayWidth-190,$floor.y-220 ,smalSawSkinNumber,-6).setDepth(0);
     new obstacle(scene,$floor.x+80,$floor.y);
     new obstacle(scene,$floor.x+$floor.displayWidth-80,$floor.y);
     new obstacle(scene,$floor.x+$floor.displayWidth/2,$floor.y);
   }

   const d= () =>{
     let $block
     for(let i=0;i<4;i++){
   $block = new block(scene,$floor.x+$floor.displayWidth/2-80,$floor.y-2)
   $block.y -= $block.displayHeight*i;
   $block.aura.y -= $block.displayHeight*i;
      scene.blockingCollider.push($block);
      $block.body.checkCollision.up = false;
     
     }
     $block.body.checkCollision.up = true
      const spike =  new reverseObstacle(scene,$block.x,$block.y - 190);
      scene.blockingCollider.push(new block(scene,spike.x,spike.y));

      const smalSawSkinNumber = scene.textureCreator.smallSaws[Phaser.Math.Between(0,scene.textureCreator.smallSaws.length-1)];
      
      addingManager.initalizeCustomSawOnWall(scene,$floor.x+$floor.displayWidth-120,$floor.y,smalSawSkinNumber,-6).setDepth(0).body.setImmovable(true);
   }

   const e =()=>{
    const smalSawSkinNumber = scene.textureCreator.smallSaws[Phaser.Math.Between(0,scene.textureCreator.smallSaws.length-1)];
    const smalSawSkinNumber2 = scene.textureCreator.smallSaws[Phaser.Math.Between(0,scene.textureCreator.smallSaws.length-1)];

    addingManager.initalizeCustomSawOnWall(scene,$floor.x + 120,$floor.y-120 ,smalSawSkinNumber,6).setDepth(0).body .setImmovable(true);
    addingManager.initalizeCustomSawOnWall(scene,$floor.x+$floor.displayWidth-120,$floor.y-120,smalSawSkinNumber,-6).setDepth(0).body.setImmovable(true);
    addingManager.initalizeCustomSawOnWall(scene,$floor.x+$floor.displayWidth/2,$floor.y,smalSawSkinNumber2,-6).setDepth(0).body.setImmovable(true);
   }

  switch(Phaser.Math.Between(1,scene.tunnelsNumbers)){
    case 1 :a();
    break;
    case 2:b();
    break;
    case 3:c();
    break;
    case 4:d();
    break;
    case 5:e();
    break;
  }
  
}
        return $floor;
    }

    static createMagicWandFloor(scene){
      let  $floor =   this.createSimpleFloor(scene,scene.floorSkins.bigFloorSkin) ;
      $floor.showObstacle = false;
      if(chanceRoll(40)){ scene.rodY = $floor.y - 163} else {scene.rodY = $floor.y - 40};
      if(level<58){
        scene.rod = scene.add.sprite(0,gameHeight*0.7,"game","rod").setOrigin(0.5,0.5).setDepth(0.21)
        scene.rod.x -= scene.rod.displayWidth/2;
 scene.rod.flipX = true;
      }else{
        scene.rod = scene.add.sprite(gameWidth+100,gameHeight*0.7,"game","rod").setOrigin(0.5,0.5).setDepth(0.21)
      }
  
scene.rodMove();
   
scene.rodCreated = true;
      return $floor;
    }

    static createFlyingFloor(scene,skin){
       const pos = this.getPosition(scene);
   
     pos.nextFloorX +=scene.floorToFlyingFloorSpacing
      this.lastFloorType = "flying";
    
      return  addingManager.getFlyingFloorFromPool(pos,skin,scene)
     
    }
static createShortBallFloor(scene,sprite){
  const pos = this.getPosition(scene);

  let $floor;
  $floor =  addingManager.getFloorFromPool(pos,sprite,scene)
  $floor.showObstacle = false;
  $floor.isSimple = true;

if(chanceRoll(50)){ // no properties
  const chain_ball = scene.physics.add.sprite($floor.x,$floor.y - 400,"game","flyingBall2")
  .setOrigin(0).setTint(scene.shortBallFloorTint)

  const flyingHand = scene.add.sprite(chain_ball.x-15,chain_ball.y-110,"game","flyingHand2")
  .setOrigin(0).setDepth(0.5)
  
  chain_ball.setImmovable(true);
  chain_ball.setDepth(0.4)
  
  scene.additionalColliders.push(chain_ball);
  scene.specialEffects.push(chain_ball,flyingHand);
}
else{
  const $block = new block(scene,$floor.x+$floor.displayWidth/2,$floor.y - 220);
   new reverseObstacle(scene,$block.x,$block.y);
   scene.blockingCollider.push($block);
   if(chanceRoll(50)){
    const chain = scene.add.sprite($block.x,$block.y,"game","chain").setOrigin(0.5,1) //.setTint(scene.chainTint)
    chain.y -= $block.displayHeight
   scene.specialEffects.push(chain)
   }
}
return $floor;
}

static createSpikeMouth(scene){

const $floor = this.createSimpleFloor(scene,scene.floorSkins.bigFloorSkin) /// GET FLOOR FROM POOL
$floor.showObstacle = false;
if($floor.y + 70  < gameHeight - 130){
$floor.y +=70;
if($floor.aura) $floor.aura.y +=70;
if($floor.aura_up) $floor.aura_up.y +=70
}
const pos = this.getPosition(scene);
const {lastFloor} = pos;
const downFloor = scene.physics.add.sprite(lastFloor.x+lastFloor.displayWidth/2,lastFloor.y,"game","spikeMouthDown")
.setOrigin(0.5,1).setImmovable(true).setDepth(0.3)
const upFloor = scene.physics.add.sprite(lastFloor.x+lastFloor.displayWidth/2,lastFloor.y - 530,"game","spikeMouthUp")
.setOrigin(0.5,0).setImmovable(true).setDepth(0.3)

downFloor.canSquareBounce = true
downFloor.canCircleBounce = true

scene.blockingCollider.push(downFloor,upFloor)

new obstacle(scene,downFloor.x - 100,downFloor.y-downFloor.displayHeight);
new obstacle(scene,downFloor.x + 100,downFloor.y-downFloor.displayHeight);

new reverseObstacle(scene,upFloor.x,upFloor.y+upFloor.displayHeight);
if(chanceRoll(50) && level > 15){ // no properties
  new reverseObstacle(scene,upFloor.x-200,upFloor.y+upFloor.displayHeight);
  new reverseObstacle(scene,upFloor.x+200,upFloor.y+upFloor.displayHeight);
}

return $floor;
}

static createTwoSmallObstacles(scene,startX,lastFloor){
  let obW = 51;
let $obstacle;

if(startX + obW*2 > lastFloor.x + lastFloor.displayWidth - 30){
  $obstacle = scene.obstacleArrayPool.shift()
  $obstacle.setActive(true).setVisible(true)
  $obstacle.aura.setActive(true).setVisible(true)
  $obstacle.y = lastFloor.y 
  $obstacle.x = startX
  $obstacle.aura.x = $obstacle.x
  $obstacle.aura.y = $obstacle.y - $obstacle.displayHeight/2;
  scene.obstacleArray.push($obstacle)
  scene.trianglesHitBox.push(new Phaser.Geom.Triangle.BuildEquilateral())
  scene.everyLastFloorObstacles.push($obstacle);
  return
}
else{

  for(let i=0;i<2;i++){
    if(scene.obstacleArrayPool.length >0){
      $obstacle = scene.obstacleArrayPool.shift()
      $obstacle.setActive(true).setVisible(true)
      $obstacle.aura.setActive(true).setVisible(true)
      $obstacle.y = lastFloor.y -1.5
  
      scene.obstacleArray.push($obstacle)
      scene.trianglesHitBox.push(new Phaser.Geom.Triangle.BuildEquilateral());
    }else{
      $obstacle = new obstacle(scene, startX,lastFloor.y -1.5)
    }
    $obstacle.aura.displayHeight -=15;
   $obstacle.displayHeight -=15;
   $obstacle.aura.y = $obstacle.y - $obstacle.displayHeight/2 
    $obstacle.x = startX+obW*i;
    $obstacle.aura.x =  startX+obW*i;
    scene.everyLastFloorObstacles.push($obstacle);
      }
     
}



}

static createOneSmallObstacle(scene,startX,lastFloor){
  let $obstacle;
  $obstacle = scene.obstacleArrayPool.shift();

      $obstacle.x = startX
      $obstacle.y = lastFloor.y 
      $obstacle.aura.x = $obstacle.x
      $obstacle.aura.y = $obstacle.y - $obstacle.displayHeight/2
      $obstacle.setActive(true).setVisible(true)
      $obstacle.aura.setActive(true).setVisible(true)
      scene.obstacleArray.push($obstacle)
      scene.trianglesHitBox.push(new Phaser.Geom.Triangle.BuildEquilateral())
      scene.everyLastFloorObstacles.push($obstacle);
      return $obstacle
}
    static addObstacle(scene){

          const lastFloor = scene.floorArray[scene.floorArray.length-1];
            const preLastFloor = scene.floorArray[scene.floorArray.length-2];

const obstacleProperties = scene.obstacleChances;

  let $obstacle,obstacleX,multiplier,block_down ,random;
const firstObstacleShift = 30;
  let position = 0;
  let obW = 51;
let shiftValue = 0;
let isFirstSpike = true;
let doubleSpike = false;
let anyRolled = false;


shiftValue+=scene.obstacleShift;

  if(preLastFloor.y <= lastFloor.y){
    multiplier = 0.5;
    }else{
      multiplier = 1.5;
  }


  if(!lastFloor.showObstacle) return

  const roll = () =>{
    random = Phaser.Math.Between(1,3)
    switch(random){
      case 1:
       if(chanceRoll(obstacleProperties.doubleSpikeChance)){
         addingManager.createTwoSmallObstacles(scene,obstacleX,lastFloor); 
         doubleSpike = true;
         shiftValue +=obW;
         anyRolled = true;
       }
                 break;
       case 2:
         if(chanceRoll(obstacleProperties.oneSpikeChance)){
           $obstacle =  addingManager.createOneSmallObstacle(scene,obstacleX,lastFloor);
           anyRolled = true;
         }
               break;     
       case 3:
         if(chanceRoll(obstacleProperties.blockChance)){
           $obstacle= new block(scene,obstacleX,lastFloor.y-2).setTint(scene.blockObstacleTint)
           scene.blockingCollider.push($obstacle);
           anyRolled = true;
           scene.everyLastFloorObstacles.push($obstacle);
           if($obstacle.name === 'block'){
            shiftValue+=scene.squareObstacleSpacing
          }
         }
              break;
    } 
    if(!anyRolled)  roll();  
  }

do{
obstacleX = firstObstacleShift + lastFloor.x + obW*multiplier+ (obW*2.7*position)+shiftValue;

if(obstacleX + obW> lastFloor.x + lastFloor.displayWidth) break;

doubleSpike = false;
anyRolled = false;

  if(chanceRoll(obstacleProperties.spikeShowChance)){

   if(scene.obstacleArrayPool.length > 0){
    roll();
   }

   else
      {
       $obstacle = new obstacle(scene, obstacleX,lastFloor.y)
       scene.everyLastFloorObstacles.push($obstacle);
       }
    
    if(chanceRoll(obstacleProperties.higherObstacleChance) && !isFirstSpike && !doubleSpike){  
       block_down = new block(scene,$obstacle.x,lastFloor.y-2)
     scene.blockingCollider.push(block_down);
      $obstacle.y -=block_down.displayHeight
      $obstacle.aura.y -=block_down.displayHeight;
     
    shiftValue +=scene.doubleHeightObstacleSpacing;
  
    scene.everyLastFloorObstacles.push(block_down)
    }

  
}else if(chanceRoll(60)){
  scene.textureCreator.initalizeNewPulse(obstacleX,lastFloor.y)
}

position++; 
isFirstSpike = false;
shiftValue+=scene.additionalObstacleSpacing
}
while(obstacleX + obW< lastFloor.x + lastFloor.displayWidth)

if(chanceRoll(obstacleProperties.spikeBarAboveChance) && lastFloor.isBig){
     
  let spikesBar = scene.physics.add.sprite(lastFloor.x + lastFloor.displayWidth/2, lastFloor.y - 290,"game","spikesBar").setTint(scene.spikeBarTint)
  .setImmovable(true).setDepth(0.01)
  let spikesBarAura = scene.add.sprite(spikesBar.x, spikesBar.y,"game","spikesBarAura")
  scene.additionalColliders.push(spikesBar)
  spikesBar.setImmovable = true;
let blackBar = scene.physics.add.sprite(lastFloor.x + lastFloor.displayWidth/2, spikesBar.y - spikesBar.displayHeight,"game","blackBar")
.setDepth(0.01).setTint(scene.blackBarTint)
blackBar.canSquareBounce = true
let blackBarAura = scene.add.sprite(blackBar.x, blackBar.y ,"game","blackBarAura")
  scene.specialEffects.push(spikesBar,blackBarAura,spikesBarAura)
  scene.blockingCollider.push(blackBar)
  }

};



static addSaw(scene){
  
 const sawSkin =  scene.textureCreator.smallSaws[Phaser.Math.Between(0,scene.textureCreator.smallSaws.length-1)];

  const lastFloor = scene.floorArray[scene.floorArray.length-1];
  if(!lastFloor.showObstacle) return

  let startSpeed = "random"
  let saws_amount = 1;
  let $saw;
  let x = lastFloor.x+lastFloor.displayWidth

if(lastFloor.isBig){
  saws_amount = 2;
  startSpeed = "left"
  x = lastFloor.x+lastFloor.displayWidth*0.5;
}

for(let i=0;i<saws_amount;i++){
 
 $saw= new saw(scene,x,lastFloor.y,"game",sawSkin)
.setOrigin(0.5,0.5).setDepth(0).setTint(scene.sawTint);

$saw.move(scene,startSpeed)
  scene.tweens.add({
    targets:$saw,
    angle:360,
    duration:1000,
    repeat:-1,
  })
  scene.additionalColliders.push($saw);
  startSpeed = "right"; // make next saw move to the right
}

}
       


static initalizeNewShurikenOnWall(scene,which,saw){
  let self = scene;
  let speed,scale,rotatingShuriken;

  const shurikenSkin = self.textureCreator.shurikensOnWall[which];
const lastFloor = self.floorArray[self.floorArray.length-1]

if(self.rotatingSpecialEffectsPool.length >0){
rotatingShuriken = self.rotatingSpecialEffectsPool.shift();
rotatingShuriken.setTexture("game",shurikenSkin)
rotatingShuriken.setActive(true).setVisible(true)
}else{
  rotatingShuriken =  self.add.image(0,0,"game",shurikenSkin)
}
rotatingShuriken.setDepth(0.01)
rotatingShuriken.setTint(self.shurikenWallTint);
if(typeof saw == "undefined") {
  speed = Phaser.Math.Between(5,2)
  scale = Phaser.Math.Between(7,9)/10;

 rotatingShuriken.x = gameWidth + rotatingShuriken.displayWidth;
 rotatingShuriken.y = Phaser.Math.Between(0,lastFloor.y - 450);

}else{
 speed = saw.rotatingSpeed
rotatingShuriken.y= saw.y;
rotatingShuriken.x = saw.x
scale= saw.scale
}
rotatingShuriken.setScale(scale)
rotatingShuriken.rotatingSpeed = -speed


self.rotatingSpecialEffects.push(rotatingShuriken);

if(chanceRoll(scene.additionalBottomShurikenChance)){
  let secondShuriken 
  if(self.rotatingSpecialEffectsPool.length >0){
    secondShuriken = self.rotatingSpecialEffectsPool.shift();
   secondShuriken.setTexture("game",shurikenSkin)
    secondShuriken.setActive(true).setVisible(true)
    secondShuriken.x = gameWidth+secondShuriken.displayWidth
    
    secondShuriken.y = gameHeight;
    }else{
      secondShuriken = self.add.sprite(800+20,gameHeight,"game",shurikenSkin).setTint(self.shurikenWallTint)
      secondShuriken.rotatingSpeed = -speed;

    }
 secondShuriken.setDepth(0.24);
  self.rotatingSpecialEffects.push(secondShuriken);
}
}

static initalizeCustomSawOnWall(scene,x,y,which,speed){
  let self= scene;
  let sawSkin,rotatingSaw;
  if(typeof which == 'number'){
    sawSkin = self.textureCreator.sawsOnWall[which];
  }else{
    sawSkin = which;
  }
  
  if(self.rotatingSpecialEffectsPool.length >0){
    rotatingSaw = self.rotatingSpecialEffectsPool.shift();
    rotatingSaw.setTexture("game",sawSkin)
    rotatingSaw.setActive(true).setVisible(true)
    rotatingSaw.x = x
rotatingSaw.y = y 
    }else{
      rotatingSaw =  self.add.sprite(x,y,"game",sawSkin);
    }
    scene.physics.world.enable(rotatingSaw)
  
rotatingSaw.setScale(1)
    rotatingSaw.rotatingSpeed = speed;
    rotatingSaw.setTint(self.wallSawTint);
    rotatingSaw.setDepth(0.25)
    rotatingSaw.body.setCircle(rotatingSaw.displayWidth/2)
self.rotatingSpecialEffects.push(rotatingSaw);
self.additionalColliders.push(rotatingSaw)
return rotatingSaw;
}


static initalizeNewSawOnWall(scene,which){
let self= scene;
  const sawSkin = self.textureCreator.sawsOnWall[which];
  const lastFloor = self.floorArray[self.floorArray.length-1]
  let rotatingSaw;
  
  if(self.rotatingSpecialEffectsPool.length >0){
    rotatingSaw = self.rotatingSpecialEffectsPool.shift();
    rotatingSaw.setTexture("game",sawSkin)
    rotatingSaw.setActive(true).setVisible(true)
    }else{
      rotatingSaw =  self.add.image(0,0,"game",sawSkin)
    }
  
    rotatingSaw.setDepth(0.02)
    rotatingSaw.setTint(self.sawWallTint);
  let scale = Phaser.Math.Between(7,9)/10;

  rotatingSaw.x = gameWidth+rotatingSaw.displayWidth;
  rotatingSaw.y =  Phaser.Math.Between(0,lastFloor.y - 450);
    
  rotatingSaw.setScale(scale)
  rotatingSaw.setTint(self.wallSawTint);
  
  if(chanceRoll(50)){ // no properties
    rotatingSaw.rotatingSpeed = Phaser.Math.Between(5,2)
  }else{
    rotatingSaw.rotatingSpeed = Phaser.Math.Between(-5,-2)
  }
  self.rotatingSpecialEffects.push(rotatingSaw);
  
  if(chanceRoll(scene.additionalBottomWallSawChance)){
    let secondSaw
    if(self.rotatingSpecialEffectsPool.length >0){
      secondSaw = self.rotatingSpecialEffectsPool.shift()
      secondSaw.setTexture("game",sawSkin)
      secondSaw.setActive(true).setVisible(true)

      }else{       
     secondSaw = self.add.sprite(gameWidth,gameHeight,"game",sawSkin).setTint(self.wallSawTint)
      }
      secondSaw.y = gameHeight;
  secondSaw.x =gameWidth+  secondSaw.displayWidth ;

  secondSaw.setDepth(0.24)
    secondSaw.rotatingSpeed = -rotatingSaw.rotatingSpeed;
    self.rotatingSpecialEffects.push(secondSaw);
  }
  
  return rotatingSaw;
  };

    }
