let test

class basicLevel extends Phaser.Scene {
  constructor(){
    super({key:'basicLevel'})
  }
 preload(){
  const animations= getAnimations.bind(this); animations();
 }
 
  create(){
   
    this.checkIfHelp()
 
    if(eval(actualLevel).correctLine){
      this.cameras.main.setBackgroundColor(eval(actualLevel).correctLine)
    }
    
const music = eval(actualLevel).music

    this.theme = eval(`soundManager.${music}`);
    this.theme.setVolume(1);
    this.rotateSound = soundManager.rotate_sound
    this.monsterSound = soundManager.monster_sound
    this.laserPrepare = soundManager.laserPrepare
    this.laserShoot = soundManager.laserShoot
    this.winSound = soundManager.sound_2

    if(typeof javaHolder.sceneContext !== "undefined"){
    if(javaHolder.sceneContext.loadingLBmeesage)
    {javaHolder.sceneContext.loadingLBmeesage.destroy()}
    else if(javaHolder.sceneContext.loginButton)
    {
      javaHolder.sceneContext.loginButton.destroy();
      javaHolder.sceneContext.loginButton.tween.remove();
   }
    javaHolder.sceneContext = this;

   if(javaHolder.sceneContext.loadingLBmeesage)
   {javaHolder.sceneContext.loadingLBmeesage.destroy()}
   else if(javaHolder.sceneContext.loginButton)
   {
     javaHolder.sceneContext.loginButton.destroy();
     javaHolder.sceneContext.loginButton.tween.remove();
  }
}
    sceneIntro(this,300);

   const welcomeText= new text(this,gameWidth/2,gameHeight/2-150,"level "+level,70).setDepth(20).setAlpha(0.9);

this.tweens.add({
  targets:welcomeText,
  alpha:0,
  duration:3000,
  callBackScope:this,
  onComplete:function(){welcomeText.destroy()}
})

this.textureCreator = {};
this.swipe = {
  startY :0,
  endY :0,
  startX :0,
  endX :0,
}


this.tunnelsNumbers = 1;
if(level > 5){
  this.tunnelsNumbers  = 2;
}

if(level>11){
  this.tunnelsNumbers  =3;
}
if(level >14){
  this.tunnelsNumbers=  4;
}

if(level>18){
  this.tunnlesNumbers = 5
}


this.canvas = game.canvas

this.level = actualLevel;
actualShape = 0;

this.floorSpeed = 0
this._floorSpeed =0

this.heroStartX = 100;
const heroStartY = gameHeight/2
this.floorGroupY = gameHeight*0.5 +100;

this.distanceTravelledToNextWallSpecialEffect = 0;
this.piramidStairsLeft = 0;
this.flyingFloorStairsLeft = 0;
this.upperFlyingFloorsLeft = 0;
this.pastUpperFlyingFloors = 0;

const spacing = eval(actualLevel).spacing;
this.squareObstacleSpacing = spacing.squareObstacleSpacing
this.additionalObstacleSpacing = spacing.additionalObstacleSpacing;
this.doubleHeightObstacleSpacing=  spacing.doubleHeightObstacleSpacing
this.floorToFloorSpacing = spacing.floorToFloorSpacing;
this.floorToFlyingFloorSpacing = spacing.floorToFlyingFloorSpacing-10;


const skins = eval(actualLevel).skins;
const chances = eval(actualLevel).chances;
const tints = eval(actualLevel).tints;

this.floorAuraTint = tints.floorAuraTint
this.floorAuraUpTint = tints.floorAuraUpTint

this.obstacleTint = tints.obstacleTint;
this.shortBallFloorTint = tints.shortBallFloorTint;
this.spikeBarTint = tints.spikeBarTint;
this.blackBarTint = tints.blackBarTint;
this.backgroundTint = tints.backgroundTint;
this.lavaTint = tints.lavaTint;
this.floorTint = tints.floorTint;
this.sawTint = tints.sawTint;
this.wallSawTint = tints.wallSawTint;
this.shortFlyingFloorTint = tints.shortFlyingFloorTint
this.shurikenWallTint = tints.shurikenWallTint;
this.gearTint = tints.gearTint
this.bottomSpikeTint = tints.bottomSpikeTint 
this.blockObstacleTint = tints.blockObstacleTint
this.laserTint =  tints.laserTint; 
this.pulseTint = tints.pulseTint

this.obstacleChances = {
  spikeShowChance:chances.spikeShowChance,
  oneSpikeChance:chances.oneSpikeChance,
  doubleSpikeChance:chances.doubleSpikeChance,
  blockChance:chances.obstacleBlockChance,
  higherObstacleChance:chances.higherObstacleChance,
  spikeBarAboveChance:chances.spikeBarAboveChance,
};

if(eval(actualLevel).obstacleShift){
  this.obstacleShift =eval(actualLevel).obstacleShift
}else{
  this.obstacleShift = 0;
}
 

this.spikeBlockObstacleChance = chances.spikeBlockObstacleChance;
this.sawObstacleChance = chances.sawObstacleChance

this.floorObstacleChance = chances.floorObstacleChance;
  this.magicRodChance = chances.magicRodChance;
    this.flyingFloorChance =chances.flyingFloorChance;
    this.tunnelChance = chances.tunnelChance;
    this.shortBallFloorChance = chances.shortFloorWithBallChance;
    this.spikeMouthChance = chances.spikeMouthChance
    this.upperFloorChance = chances.upperFloorChance;
    this.lowerFloorChance = chances.lowerFloorChance;
    this.randomWallSpecialEffectChance = chances.randomWallSpecialEffectChance

  this.piramidModeChance = eval(actualLevel).piramidModeChance;

  this.additionalBottomShurikenChance = chances.additionalBottomShurikenChance
  this.additionalBottomWallSawChance = chances.additionalBottomWallSawChance
  this.bottomTextureChance = chances.bottomTextureChance

    this.heroSpeed = -eval(actualLevel).floorSpeed - 0.5;
    this.metersLeft = eval(actualLevel).meters - 20;

    const map = skins.map;
    this.obstacleSkin = skins.obstacleSkin
    this.flyingFloorSkin = `flying_floor_${Phaser.Math.Between(2,4)}Hit`;
    const floorSkinsKey = skins.floorSkins;

    this.floorSkins = eval(`floorSkins.${floorSkinsKey}`)
    
this.thunderEvent = eval(actualLevel).specialEvents.thunder;
this.flipHandsEvent = eval(actualLevel).specialEvents.flipHands;
this.caveEvent = eval(actualLevel).specialEvents.cave;
this.rotateEvent = eval(actualLevel).specialEvents.rotateMode;
this.bigMonsterEvent = eval(actualLevel).specialEvents.bigMonster
this.triangleBackModeEvent = eval(actualLevel).specialEvents.triangleBackMode;
this.createMetaMeters = eval(actualLevel).createMetaMeters - 3;

    this.timeOuts = []
    this.trianglesHitBox = []
    this.additionalColliders = [];
    this.specialEffects = [];
    this.rotatingSpecialEffects = [];
    this.blockingCollider = []
    this.rotatingSpecialEffectsPool = [];
    this.reverseObstacleArray = [];
    this.reverseTrianglesHitBox = [];
  this.everyLastFloorObstacles = [];

  this.metaCreated = false;
  this.gameStarted = false;
  this.gameLost = false;
  this.thunderInUse = false
  this.caveDoorsCreated = false;
this.inCave =false;
this.laserIsColliding = false;
this.rodCreated = false;
this.triangleBackModeActivated = false;
  this.rotateLineCreated = false;
  this.rotateModeActivated = false;
  this.startCreatingRotatedFloors = false;
this.checkHeroOverlapLine = false;
this.rotateLineLowerFloors = false;
this.bigMonsterCreated = false;
this.heroOverlapedCave = false;

  this.gameFlipX ={
    firstFlip:false,
    secondFlip:false,
   gameFlipped :false,
  }
  this.firstUpperFlyingFloor = ""

this.graphics = this.add.graphics({ lineStyle: { width: 5, color: 0xaaaa00 } })
//this.graphics.setDepth(0.3)
this.map = eval(`new ${map}Map(this)`)


this.getGoldChest();
this.getTipButton();
this.getLava();
this.createHUD()

 this.input.on('pointerdown',(pointer)=>{
  this.swipe.startX = pointer.x
  this.swipe.startY = pointer.y
 });

 this.input.on('pointerup', (pointer)=>this.changeShape(pointer));
 this.input.once("pointerdown",this.start,this);

//makeBorder(this,"black_border").setDepth(0.48);

      this.hero  =  new square(this,this.heroStartX,heroStartY)
      this.hero.spawn();

      this.hero.createStayingShadow(this)
      this.getTextureCreatorFunctions();
      this.createFloor();
      this.createObstacle()
      this.getEvents()
      this.createStartingDude();
      this.createOwl()
      this.createLamp()
      this.getMeters();

     this.gear =  this.add.image(Phaser.Math.Between(100,gameWidth),-50,"game","gear").setDepth(0).setTint(this.gearTint)
     
     // this.checkIfCreateDimness();
 this.getStars();
this.getStartingGear();

  };
checkIfHelp(){
let s = true;
  heroConfig.levelsTipsShown.forEach(tip=>{
    if(tip == level) s = false
  })

  if(!s) return;

  heroConfig.levelsTipsShown.push(level);
  saveProgress();

     if(eval(actualLevel).tip && eval(actualLevel).tut){

      const tipDiv = game.tipDiv;
      tipDiv.children[0].src = eval(actualLevel).tut;


      tipDiv.children[1].onclick = () => {
   
        tipDiv.children[0].src = eval(actualLevel).tip;
        tipDiv.children[1].onclick = () => tipDiv.hide();
      }
      tipDiv.show();
      
    }

   else if(eval(actualLevel).tip){
      const tipDiv = game.tipDiv;
tipDiv.children[0].src = eval(actualLevel).tip;
tipDiv.children[1].onclick = () => tipDiv.hide();
tipDiv.show();

    }

 else  if(eval(actualLevel).tut){
      const tipDiv = game.tipDiv;
tipDiv.children[0].src = eval(actualLevel).tut;
tipDiv.children[1].onclick = () =>{
  tipDiv.hide();
  
} 
tipDiv.show();

    }
}
getStartingGear(){
  const gear =  this.add.image(326,gameHeight*0.78+7,"game","gear").setDepth(0).setTint(this.gearTint)
  const smallerGear = this.add.image(gear.x,gear.y,"game","gear").setDepth(0).setTint(this.gearTint).setScale(0.4)
 gear.tween =  this.tweens.add({
    targets:gear,
    angle:360,
    duration:3000,
    repeat:-1,
  
  })
  
  smallerGear.tween = this.tweens.add({
    targets:smallerGear,
    angle:-360,
    duration:3000,
    repeat:-1,
  
  })
  
   this.specialEffects.push(gear,smallerGear)
 
}
  getStars(){
    this.star = this.add.image(-50,-50,"game","star").setDepth(0.25)
    this.reverseStar = this.add.image(-50,-50,"game","star").setDepth(0.25)
    this.tweens.add({
      targets:[this.star,this.reverseStar],
      scale:0.7,
      alpha:0,
      duration:800,
      yoyo:true,
      repeat:-1,
    })

  }

getTipButton(){

 this.tipButton =  new button(this,gameWidth-10,10,"tip-button").setOrigin(1,0).setDepth(0.5).
 on("pointerup",()=>{
  
   if(!isDebugVersion){

    this.pauseScene();
     Android.showRewardedAd(4);
   }
 });
 
this.tipButton.glow =this.add.image( this.tipButton.x - this.tipButton.displayWidth/2,
  this.tipButton.y+this.tipButton.displayHeight/2,"glow").setDepth(0.49).setScale(0.6)

this.tipButton.glow.tween = this.tweens.add({
  targets:this.tipButton.glow,
  angle:360,
  repeat:-1,
  duration:3000,
  scale:0.5,
})
}

  checkIfCreateDimness(){
    if(eval(actualLevel).dimness){
      this.dimnessBG = new background(this,'sceneChangeScreen')
      .setOrigin(0,0).setAlpha(0).setDepth(30);
      let timeout;
      const dimness = () =>{
   
    this.dimnessTween  =   this.tweens.add({
            alpha:1,
            targets:this.dimnessBG,
            duration:500,
            
            yoyo:true,
            ease:"Bounce.easeIn",//
            onComplete:()=>{
         
              timeout = setTimeout(()=>dimness(),Phaser.Math.Between(500,3500))
         
            }
          })
  this.timeOuts.push(timeout)
      }
      dimness()
    }
    
  };

getGoldChest(){
  javaHolder.sceneContext = this;
  let chestLevel = 0;

 
if(heroConfig.heroLevel%5 == 0){
  chestLevel = heroConfig.heroLevel;
}


for(const lev in ads.chest_gold_levels){
  if(ads.chest_gold_levels[lev] ==  chestLevel) return;
}

  if(chestLevel > 0){

const chest = new button(this,120,gameHeight*0.74,"chest")
.setOrigin(0.5,0.5).setDepth(0.5).on("pointerup",()=>{ 

         if(!isDebugVersion){
          this.pauseScene();
             Android.showRewardedAd(3);
         }
     })
   chest.tween =   this.tweens.add({
       targets:chest,
       scale:0.8,
       duration:600,
       yoyo:true,
       repeat:-1
     })
this.chest = chest;

this.glow =this.add.image(chest.x,chest.y,"glow").setDepth(0.49).setScale(0.9)

this.glow.tween = this.tweens.add({
  targets:this.glow,
  angle:360,
  repeat:-1,
  duration:2500,
  scale:0.8,
})

     };

   
}

updateObstacles(){
  this.floorArray.forEach(floor=>floor.x+=this.floorSpeed);
this.obstacleArray.forEach(obstacle=>{
  obstacle.x+=this.floorSpeed
  obstacle.aura.x +=this.floorSpeed;
});
}
updateReverseObstacles(){
  this.reverseObstacleArray.forEach(ob=>{
    ob.x+=this.floorSpeed
    ob.aura.x+=this.floorSpeed
  })
}

updateStars(){
  if(this.obstacleArray.length >1){
    this.star.x =  this.obstacleArray[1].x-5;
    this.star.y = this.obstacleArray[1].y- this.obstacleArray[1].displayHeight;
    }else{
      this.star.x = -100
    }
  if(this.reverseObstacleArray.length >0){
    this.reverseStar.x =  this.reverseObstacleArray[0].x;
    this.reverseStar.y = this.reverseObstacleArray[0].y +  this.reverseObstacleArray[0].displayHeight;
  }else{
    this.reverseStar.x = -100
  }
  
}
  update(){
  
this.updateSpecialEffects();

  this.updateBackground();
this.checkHeroCollideObstacle(this);
this.checkFloorLeftScreen()
this.checkObstacleLeftScreen()
this.checkMeta();

this.updateReverseObstacles();

this.updateStars();

this.updateObstacles()


this.checkIfHeroFellDown();
this.graphics.clear();
this.updateObstaclesHitBox();
this.heroStrokeHitBox();
this.updateMeters();
this.updateNewTextures()

if(this.hero.x <0)  this.heroCollideObstacle(true)
  
 
};

createScreenShakingMouth(){
  if(!heroConfig.generalOptions.soundMuted){
    this.monsterSound.play();
  }
 
  const timeout = setTimeout(()=>{


    const monsterY = 250;
    const monster = this.add.image(gameWidth*2,monsterY,"game","bigMonster_1").setOrigin(1,0.5).setDepth(1)
    monster.x = gameWidth + monster.displayWidth
  monster.flipX = true;
  
  const down_peaceY = monster.y + monster.displayHeight/2 - 10
  const down_peace = this.add.image(gameWidth*2,down_peaceY,"game","bigMonster_2").setOrigin(1,0.5).setDepth(1);
    down_peace.x = gameWidth + down_peace.displayWidth
  down_peace.flipX = true;
  
  
  this.tweens.add({
    targets:[down_peace,monster],
    x:`-=${gameWidth*0.6}`,
    duration:500,
    onComplete:()=>{
      monsterTween();
    }
  })
  
  let shift = 70;
  const monsterTween = () =>{
    if(this.metersLeft <= this.bigMonsterEvent.monsterBackMeters){
      shift+=5;
    }
    this.tweens.add({
      targets:monster,
      duration:150,
      angle:10,
      y:"-=110",
      x:`+=${shift}`,
      
    })
  
    this.tweens.add({
      targets:down_peace,
      duration:150,
      angle:-2,
      y:"+=110",
      x:`+=${shift}`,
  
    })
  
  
    const timeout = setTimeout(()=>{
     if(!monster.active) return
   
      this.tweens.add({
        targets:monster,
        duration:30,
        angle:0,
        y:monsterY,
        x:"-=70",
     
        })
  
      this.tweens.add({
        targets:down_peace,
        duration:30,
        angle:0,
        y:down_peaceY,
        x:"-=70",
  
        onComplete:()=>{
          if(monster.x - monster.displayWidth > gameWidth){
            monster.destroy();
            down_peace.destroy();
            }else{
              shake();
             const timeout = setTimeout(()=>monsterTween(),500)
              this.timeOuts.push(timeout)
            }
       
        }
        })
       
    },400)
  
    this.timeOuts.push(timeout)
  
  };
},1700)
    const shake = () => this.cameras.main.shake(150);
  this.timeOuts.push(timeout)
  

}

cleanColliders(){
  for(const c in this.additionalColliders){
    if(this.additionalColliders[c].x  < - this.additionalColliders[c].displayWidth){
    this.additionalColliders.splice(c,1);
    }
    }
    
    for(const c in this.blockingCollider){
      if(this.blockingCollider[c].x < -this.blockingCollider[c].displayWidth){
      if(this.blockingCollider[c].kill){
        this.blockingCollider[c].kill();
      }else{
        this.blockingCollider[c].destroy();
      }
        this.blockingCollider.splice(c,1)
      }
    }
}
cleanSpecialEffects(){
  for(const c in this.rotatingSpecialEffects){
    if(this.rotatingSpecialEffects[c].x  < - this.rotatingSpecialEffects[c].displayWidth){
      this.rotatingSpecialEffects[c].setActive(false).setVisible(false);
  
   if(this.rotatingSpecialEffects[c].body != null) this.physics.world.disable(this.rotatingSpecialEffects[c])
      this.rotatingSpecialEffectsPool.push(this.rotatingSpecialEffects[c]);
    this.rotatingSpecialEffects.splice(c,1);
    }
    }


    for(const c in this.specialEffects){
      if(this.specialEffects[c].x  < - this.specialEffects[c].displayWidth){
        if(this.specialEffects[c].tween) this.specialEffects[c].tween.remove();
       
        this.specialEffects[c].destroy();
      this.specialEffects.splice(c,1);
    
     
      }
      }
    
}
  cleanItemsLeftScreen(){
 this.cleanSpecialEffects()
 this.cleanColliders();
  }

  getMeters(){
  this.gameTimeIsPaused = false; 
  this.meters = new text(this,gameWidth/2,50,`${Math.round(this.metersLeft)}`,40).setDepth(20)
this.metersLeftText = new text(this,gameWidth/2,this.meters.y+20,"(meters left)",15).setDepth(20)

  }
createLamp(){
const lamp = this.add.sprite(10,this.floorArray[0].y+30,"lamp").play("lamp").setOrigin(0,1)
this.specialEffects.push(lamp)
}
createOwl(){
  const owl = this.add.sprite(this.startingRightHand.x+this.startingRightHand.displayWidth-82,this.startingRightHand.y+25,"owl")
  .setOrigin(0.5,1).setDepth(0);

  let owlSpeed;

  if(chanceRoll(50)){
owlSpeed = -2;
  }else if(chanceRoll(50)){
    owlSpeed= 2;
  }else{
    owlSpeed = 0;
  }
let owlHasStartedFly = false;

const update= ()=>{
  owl.x +=this.floorSpeed 
    if(!owlHasStartedFly && this.hero.x >= owl.x - owl.displayWidth){
     try{
        owl.play("owl");
     }catch(e){console.log(e)}
        owlHasStartedFly = true;  
    }
  else  if(owlHasStartedFly){
      owl.y -=4;
      owl.x +=owlSpeed;
      if(owl.y <0){
        owl.destroy();
        loop.removeListener('postupdate',update)
            }
          }
    }
  
 let loop=  this.events.on("postupdate",update)
}

updateNewTextures(){

  if(this.floorArray[this.floorArray.length -1].x + this.floorArray[this.floorArray.length-1].displayWidth < gameWidth){
    if(this.startCreatingRotatedFloors){
      
    const rotatedFloor = addingManager.createSimpleFloor(this,this.floorSkins.bigFloorSkin);
    rotatedFloor.flipY = true;
    
    if(!this.floorArray[this.floorArray.length-2].flipY) {
      rotatedFloor.y = 100;
    
      if(rotatedFloor.aura) rotatedFloor.aura.y = rotatedFloor.y
      if(rotatedFloor.aura_up) rotatedFloor.aura_up.y = rotatedFloor.y
    }
    
    if(rotatedFloor.aura){rotatedFloor.aura.flipY = true; rotatedFloor.aura.y = rotatedFloor.y+rotatedFloor.displayHeight/2};
    if(rotatedFloor.aura_up) {rotatedFloor.aura_up.flipY = true;rotatedFloor.aura_up.y += rotatedFloor.displayHeight+rotatedFloor.aura_up.displayHeight};
    
    this.everyLastFloorObstacles.length = 0;
    
      addingManager.addObstacle(this)
    
      let $obstacle,index,shift,newObs;
    
    for(const i in this.everyLastFloorObstacles){
      $obstacle = this.everyLastFloorObstacles[i];
      
      shift =  Math.abs(rotatedFloor.y - $obstacle.y) + rotatedFloor.y + rotatedFloor.displayHeight
      
    if($obstacle.name === "triangle"){
      index = this.obstacleArray.findIndex(obstacle => obstacle.x == $obstacle.x)
       newObs =  new reverseObstacle(this,$obstacle.x,$obstacle.y);
       newObs.displayHeight = $obstacle.displayHeight 
       newObs.aura.displayHeight = $obstacle.aura.displayHeight;
       newObs.y = shift;
       newObs.aura.y = newObs.y + newObs.displayHeight/2
    
       this.obstacleArrayPool.push($obstacle)
       $obstacle.setActive(false).setVisible(false)
       $obstacle.aura.setActive(false).setVisible(false);
       $obstacle.displayHeight = 50
       $obstacle.aura.displayHeight = 62
       
    this.obstacleArray.splice(index,1);
    this.trianglesHitBox.splice(index,1);
    }else{
      $obstacle.setOrigin(0.5,0)
      $obstacle.y = shift
      $obstacle.aura.y = $obstacle.y+$obstacle.displayHeight/2
    }
    
    }
    
      return
         };

         if(this.piramidStairsLeft >0){
   
          if(this.piramidStairsLeft == 1){
            addingManager.createShortBallFloor(this,this.floorSkins.smallFloorSkin);
            this.piramidStairsLeft --;
            return
          }else{
            let floor =   addingManager.createSimpleFloor(this,this.floorSkins.smallFloorSkin);
            floor.showObstacle = false;
            floor.isSimple = true;
          }
          this.piramidStairsLeft --;
         
          return;
        }else if(this.flyingFloorStairsLeft >0){
        
           addingManager.createFlyingFloor(this,this.flyingFloorSkin);
           this.flyingFloorStairsLeft --;
           return;
        }else if(this.upperFlyingFloorsLeft > 0){
         let flyingFloorY = this.floorArray[this.floorArray.length-1].y;
      
          if(this.upperFlyingFloorsLeft == 4 && flyingFloorY > gameHeight/2 + 100 ){
      
      const $floor = addingManager.createSimpleFloor(this,this.floorSkins.mediumFloorSkin);
      
      
      const $obstacle = new obstacle(this, $floor.x+$floor.displayWidth/2-40,$floor.y)
        const block_down = new block(this,$obstacle.x,$floor.y-2)
         this.blockingCollider.push(block_down);
          $obstacle.y -=block_down.displayHeight
          $obstacle.aura.y -=block_down.displayHeight;
      
      
      if(chanceRoll(70)){
       for(let i=0;i<2;i++){
         this.textureCreator.initalizeNewPulse(Phaser.Math.Between($floor.x+10+i*150+i*20,(i+1)*150+$floor.x),$floor.y)
       }
      }
      const $flyingFloor   = addingManager.createFlyingFloor(this,this.flyingFloorSkin);
      this.firstUpperFlyingFloor = $flyingFloor;
      $flyingFloor.isFirstFlyingUpperFloor = true
                 $flyingFloor.x = $floor.x + $floor.displayWidth*0.5-100;
                 $flyingFloor.y = $floor.y - 350;
                 this.upperFlyingFloorsLeft --;
                 this.events.on("postupdate",this.checkIfFlyingFloorIsInHalf,this);
                 return;
         }else if(this.firstUpperFlyingFloor != ""){
      
        
         const $flyingFloor   = addingManager.createFlyingFloor(this,this.flyingFloorSkin);
            $flyingFloor.y  = flyingFloorY;
            this.upperFlyingFloorsLeft --;
            if(this.upperFlyingFloorsLeft==0){
             this.pastUpperFlyingFloors = 3;
           }
            return;
           }
           
       }
 
   
   this.textureCreator.initalizeNewRandomObstacleFloor();
   this.textureCreator.initalizeNewObstacle();
   this.textureCreator.initalizeNewDownTexture();
   
   this.checkIfFlipXGame();
   this.checkIfThunderCanStrike(); 
  this.checkIfCreateCaveDoors();
  this.checkIfCreateRotateLine()
  this.checkIfCreateMonster();
  this.checkIfCreateTriangleBackMode()

  }
}
checkIfCreateTriangleBackMode(){
 
  if(this.triangleBackModeEvent.available && !this.triangleBackModeActivated &&this.metersLeft <= this.triangleBackModeEvent.createMeters){
    this.upperFlyingFloorsLeft = 4;
    this.triangleBackModeActivated  =true
  }
}

checkIfCreateMonster(){
  if(this.bigMonsterEvent.available && !this.bigMonsterCreated && this.metersLeft <= this.bigMonsterEvent.monsterShowsMeters ){
    this.createScreenShakingMouth();
    this.bigMonsterCreated = true;
  } 
}
checkIfCreateRotateLine(){
 
  if(this.rotateEvent.available && this.metersLeft <= this.rotateEvent.firstLineMeters && !this.rotateLineCreated){
      if(this.floorArray[this.floorArray.length-1].y > gameHeight*0.6){
    this.rotateLineCreated = true;
    this.rotateLineLowerFloors = false;
    this.startCreatingRotatedFloors = true;
    const lastFloor = this.floorArray[this.floorArray.length-1];

this.line = this.physics.add.sprite(lastFloor.x + lastFloor.displayWidth + this.floorToFloorSpacing/2,0,"game","line").setOrigin(0.5,0)
this.line.body.setSize(9,gameHeight).setOffset(9,0);
this.specialEffects.push(this.line);

this.checkRotatingLine = this.physics.add.overlap(this.hero,this.line,this.handleRotateMode,null,this);
this.checkHeroOverlapLine = true;
}else if(!this.rotateLineLowerFloors){
  this.rotateLineLowerFloors = true;
}
}
}
handleRotateMode(){
  const particles = this.add.particles("game","rotatePeace").setDepth(0.23)

  if(!heroConfig.generalOptions.soundMuted){
    this.rotateSound.play();
  }
  
  this.shadowEmitter = particles.createEmitter({
   x:this.line.x-this.line.displayWidth,
   y:{min:this.hero.y - this.hero.displayHeight/2,max:this.hero.y + this.hero.displayHeight/2},

   maxParticles:15,
  speedX:{
      min:50,
      max:150
  },
 speedY:{
   min:-200,
   max:200,
 },

  scale:{
    start:1,
    end:0.7,
  },
  alpha:{
    start:1,
    end:0
  },
  quantity:1,
  frequency:0,
  lifespan: 1200,
  
      });
  
  this.checkHeroOverlapLine = false;
  this.rotateModeActivated == false ? this.rotateModeActivated  = true :   this.rotateModeActivated = false;

  this.physics.world.removeCollider(this.checkRotatingLine)
let activating = this.rotateModeActivated;


    this.hero.boostPower = - this.hero.boostPower;
    this.hero.body.gravity.y = - this.hero.body.gravity.y;
    this.hero.speedY = - this.hero.speedY;
  
   if(activating)  this.events.on('postupdate',this.checkIfEndRotateMode,this)
};

checkIfEndRotateMode(){
  if(this.metersLeft <= this.rotateEvent.secondLineMeters){

    this.events.removeListener("postupdate",this.checkIfEndRotateMode);
    this.startCreatingRotatedFloors = false
    const  lastFloor = addingManager.createSimpleFloor(this,this.floorSkins.smallFloorSkin);
lastFloor.y +=350;
if(lastFloor.aura)lastFloor.aura.y +=350;
if(lastFloor.aura_up)lastFloor.aura_up.y +=350;
    this.line = this.physics.add.sprite(lastFloor.x + lastFloor.displayWidth + this.floorToFloorSpacing/2,0,"game","line").setOrigin(0.5,0);
    this.specialEffects.push(this.line);

    this.checkRotatingLine = this.physics.add.overlap(this.hero,this.line,this.handleRotateMode,null,this);
    this.checkHeroOverlapLine = true;
  }
}



updateCaveDoors(gettingIn = true){
this.caveDoors.x += this.floorSpeed;
if(this.caveDoors.x + this.caveDoors.displayWidth <= gameWidth){
  
  this.floorSpeed = 0;

  this.hero.x -= this._floorSpeed;

  if(!this.heroOverlapedCave){
    this.heroOverlapedCave = true;
  
      this.tweens.add({
        targets:this.hero,
        alpha:0,
        duration:300,
      })
   
  
  
    this.shadowBG = new background(this,'sceneChangeScreen').setOrigin(0,0).setAlpha(0).setDepth(20);

const doorsMove = () => {
  this.caveDoors.x += this.floorSpeed;
if(this.caveDoors.x + this.caveDoors.displayWidth < 0){
  this.caveDoorsUpdate.removeListener("postupdate",doorsMove);
  } 
};

const heroMove = () =>{
  if(this.hero.x < this.heroStartX){
    this.hero.x -= this.floorSpeed;
    this.hero.x = this.heroStartX;
  }else{
    this.hero.x = this.heroStartX;
    this.floorSpeed = eval(this.level).floorSpeed;
    this._floorSpeed = this.floorSpeed // ?
    this.caveDoorsUpdate.removeListener("postupdate",heroMove)
    this.events.on("postupdate",doorsMove);
  }
}



    this.tweens.add({
        alpha:1,
        targets:this.shadowBG,
        duration:500,
        repeat:0,
        yoyo:true,
        onYoyoScope:this,
        onYoyo:()=>{
            
    this.hero.speedY = 0;
  
    this._floorSpeed = 0;
          this.caveDoors.flipX = true
          this.caveDoors.x =0
          this.hero.x = 20
          this.events.on("postupdate",heroMove);  

        if(gettingIn){ 
          this.cameras.main.setRenderToTexture(grayScreenPipeline)
       //  this.caveBG = new background(this,"caveBG2");
       this.pastMap = this.map
this.map =  new scrollingObject(this,0,0,gameWidth,gameHeight,'caveBG2',0,{x:0,y:0});
this.map.scroll = ()=> this.map.move(0.5)

         this.inCave = true
         new obstacle(this,this.floorThatDoorsShow.x + this.floorThatDoorsShow.displayWidth - 100,this.floorThatDoorsShow.y);
        }else{
          this.inCave = false;
          this.cameras.main.clearRenderToTexture()
          this.map.getObject().destroy();
          this.map = this.pastMap;
   
        }

          this.tweens.add({
            targets:this.hero,
            alpha:1,
            duration:300,
          })
          this.hero.speedY = -1000
          if(gettingIn){
            this.caveDoorsUpdate.removeListener("postupdate",this.updateCaveDoors)
            this.events.on("postupdate",this.checkIfCloseCave,this);
          } else{
          this.events.removeListener("postupdate",this.updateClosingCaveDoors);
           }
        },
        onCompleteScope:this,
        onComplete:()=>{
          this.heroOverlapedCave = false;
          this.shadowBG.destroy()
        },

      })
      
   
      }
    }
};

updateClosingCaveDoors(){
  this.updateCaveDoors(false)
 
}
checkIfCloseCave(){
if(this.metersLeft <= this.caveEvent.closeCaveMeters){
  this.createCaveSprite();
  this.events.removeListener("postupdate",this.checkIfCloseCave);
  this.caveDoorsUpdate = this.events.on("postupdate",this.updateClosingCaveDoors,this);
}
};

createCaveSprite(){
  this.floorThatDoorsShow =  addingManager.createSimpleFloor(this,this.floorSkins.bigFloorSkin);
  this.caveDoorsCreated = true
  const x =  this.floorThatDoorsShow.x +  this.floorThatDoorsShow.displayWidth/2;
  const  y =  this.floorThatDoorsShow.y + 30
  this.caveDoors = this.physics.add.sprite(x,y,"game","doors").setOrigin(0,1).setImmovable(true).setDepth(0.21);

  addingManager.createTwoSmallObstacles(this,this.floorThatDoorsShow.x +80,this.floorThatDoorsShow)
  
}

checkIfCreateCaveDoors(){
if(this.caveEvent.available && this.metersLeft <= this.caveEvent.createCaveMeters && !this.caveDoorsCreated){
  this.createCaveSprite();
  this.caveDoorsUpdate = this.events.on("postupdate",this.updateCaveDoors,this);
}
}


checkIfFlipXGame(){
  if(this.flipHandsEvent.available && this.metersLeft <=  this.flipHandsEvent.firstHandMeters  && ! this.gameFlipX.gameFlipped ){
    this.gameFlipX.gameFlipped = true
   this.gameFlipX.firstFlip = true;
const spawnFloor = addingManager.createSimpleFloor(this,this.floorSkins.bigFloorSkin);
if(chanceRoll(70)){
  for(let i=0;i<2;i++){
    this.textureCreator.initalizeNewPulse(Phaser.Math.Between(spawnFloor.x+10+i*170+i*20,(i+1)*170+spawnFloor.x),spawnFloor.y)
  }
}
    const handX = spawnFloor.x+spawnFloor.displayWidth;
  this.hand =  this.physics.add.sprite(handX,spawnFloor.y,"game","wallHand").setOrigin(1,1);
    this.hand.body.setOffset(20,0)
  this.wallHandPostUpdate= this.events.on("postupdate",this.wallHandUpdate,this);

this.heroCollideWallHand = this.physics.add.collider(this.hero,this.hand,this.flipGame,null,this)
  }
}



backHand(){
  if(this.hand.x > 0 ){
    this.hand.x +=this.floorSpeed;
  }else{
    this.hand.destroy()
    this.tweens.add({
      targets:this.hero,
      x:this.heroStartX,
      duration:450,
    })
  this.events.removeListener("postupdate",this.backHand)
  }
}

wallHandUpdate(){

  this.hand.x += this.floorSpeed;
  if(this.hand.x-this.hand.displayWidth/2 < gameWidth){
    this.floorSpeed = 0;
    this.hero.x -=this._floorSpeed;
  }
}

flipGame(){

  this.gameFlipX.firstFlip = false
  this.physics.world.removeCollider(this.heroCollideWallHand);
  this.canvas.style.transform = "scaleX(-1)";
  this.hand.x = this.hand.displayWidth/2
  this.hand.flipX = true

 this.floorSpeed = eval(this.level).floorSpeed;
  this.meters.scaleX = -1;
this.meters.x -=this.meters.width
  this. metersLeftText.scaleX = -1;

  this.metersLeftText.x -= this.metersLeftText.width

this.wallHandPostUpdate.removeListener("postupdate",this.wallHandUpdate)

this.tweens.add({
  targets:this.hero,
  x:"+=50",
  duration:400,
})
this.events.on("postupdate",this.backHand,this)
const b = ()=>{
  
  let spawnFloor  =  addingManager.createSimpleFloor(this,this.floorSkins.bigFloorSkin);
  spawnFloor.isBig = true;
  if(chanceRoll(70)){
    for(let i=0;i<2;i++){
this.textureCreator.initalizeNewPulse(Phaser.Math.Between(spawnFloor.x+10+i*170+i*20,(i+1)*170+spawnFloor.x),spawnFloor.y)
    }
  }
  const handX = spawnFloor.x+spawnFloor.displayWidth;
  this.hand =  this.physics.add.sprite(handX,spawnFloor.y,"game","wallHand").setOrigin(1,1);
    this.hand.body.setOffset(20,0)
  this.wallHandPostUpdate= this.events.on("postupdate",this.wallHandUpdate,this);
  
  this.heroCollideWallHand = this.physics.add.collider(this.hero,this.hand,this.flipGameToBasic,null,this)
  this.gameFlipX.secondFlip = true;
}

const checkIfSecondHandShow = () =>{
  if(this.metersLeft <= this.flipHandsEvent.secondHandMeters){
    b();
    this.events.removeListener("postupdate",checkIfSecondHandShow)
  }
}
this.events.on("postupdate",checkIfSecondHandShow);

  }

flipGameToBasic(){
  this.gameFlipX.secondFlip =false;
  this.physics.world.removeCollider(this.heroCollideWallHand);
  this.canvas.style.transform = "";
  this.hand.x = this.hand.displayWidth/2
  this.hand.flipX = true
  this.floorSpeed = eval(this.level).floorSpeed;
  this.meters.scaleX = 1;
  this. metersLeftText.scaleX = 1;
  this.meters.x -=this.meters.width
  this.metersLeftText.x -= this.metersLeftText.width

  this.tweens.add({
    targets:this.hero,
    x:"+=50",
    duration:400,
  })
  this.events.on("postupdate",this.backHand,this)
this.wallHandPostUpdate.removeListener("postupdate",this.wallHandUpdate);
}

updateSpecialEffects(){
  this.gear.angle +=0.3

this.distanceTravelledToNextWallSpecialEffect -=this.floorSpeed;

this.blockingCollider.forEach(col=>{
  col.x+=this.floorSpeed
  if(col.aura)col.aura.x +=this.floorSpeed;
})

  this.specialEffects.forEach(effect=>{
    effect.x += this.floorSpeed;
  })

  this.rotatingSpecialEffects.forEach(effect=>{
    effect.angle +=effect.rotatingSpeed;
    effect.x += this.floorSpeed;
  })
/*
const filtered = this.specialEffects.filter(effect=>{
return effect.x >= -effect.displayWidth;
})

this.specialEffects = filtered;
*/
}

updateMeters(){
  if(!this.gameTimeIsPaused){
    this.metersLeft += this.floorSpeed/100;
if(Math.round(this.metersLeft) < this.metersLeft  ){
 
  this.meters.setText(`${Math.round(this.metersLeft)}`);

if(Math.round(this.metersLeft) <= this.createMetaMeters){
  if(!this.metaCreated){
    this.createMeta();
  }
}
}
if(this.metersLeft <= 0){
  
  this.gameTimeIsPaused = true;
}
    }
};

checkIfHeroFellDown(){
  if(this.hero.y > gameHeight || this.hero.y < 0){
     this.heroCollideObstacle(this)
   }
}
updateObstaclesHitBox(){
  for(const x in this.obstacleArray){
    if(this.hero.x + this.hero.displayWidth >= this.obstacleArray[x].x){
      this.obstacleArray[x].updateHitBox(this,x)
    }  
  }
//
for(const x in this.reverseObstacleArray){
  if(this.hero.x + this.hero.displayWidth >= this.reverseObstacleArray[x].x){
    this.reverseObstacleArray[x].updateHitBox(this,x)
  }
}

};

checkMeta(){
  if(this.metaCreated){
    if(this.meta[0].x > gameWidth-50){
      this.meta.forEach(el=>el.x +=this.floorSpeed);
    }else{
      this.floorSpeed = 0;
      if(this.hero.x < this.meta[1].x-this.meta[1].displayWidth/2+100){
        this.hero.x +=this.heroSpeed;
      }
    }
  }
}

updateBackground(){
  if(this.floorSpeed != 0){ 
    this.gear.x-=0.05
    this.map.scroll() 
   };
this.lava.move(-this.floorSpeed)
}

  createStartingDude(){ 
    const rightHand = this.add.image(245,this.floor.y+32,"game","startRightHand").setOrigin(0).setDepth(0.01);
    const head = this.add.image(92,this.floor.y+11,"game","startHead").setOrigin(0).setDepth(0.02);
    const leftHand = this.add.image(16,this.floor.y,"game","startLeftHand").setOrigin(0);
this.startingRightHand = rightHand;
   const arr = [rightHand,leftHand,head];
    arr.forEach(el=>el.y -=el.displayHeight)

  const update = () =>{
    arr.forEach(el=>el.x +=this.floorSpeed);
if(rightHand.x < -rightHand.displayWidth){
  arr.forEach(el=>el.destroy())
  arr.length = 0;
  event.removeListener("postupdate",update)
}
  }
const event = this.events.on("postupdate",update)


  }

  getLava(){
    this.lava = new scrollingObject(this,0,0,
      gameWidth,game.textures.list.game.frames.lava.height,"game",'lava',{x:0,y:0});
    this.lavaObj = this.lava.getObject().setDepth(0.3);
     this.lavaObj.y = gameHeight - this.lavaObj.displayHeight;
     this.lavaObj.setTint(this.lavaTint)
  }

  start(){
    this.tweens.add({
      targets:[this.chest,this.glow,this.tipButton,this.tipButton.glow],
      alpha:0,
      duration:300,
      onComplete:()=>   {
        if(this.chest){
          this.chest .destroy();
           this.chest.tween.remove()
           this.glow.tween.remove()
           this.glow.destroy()
          }
          if(this.tipButton){
            this.tipButton.glow.tween.remove()
            this.tipButton.destroy()

          }

  
      }
    })
 
    this.specialEffectsInterval  = setInterval(()=>this.cleanItemsLeftScreen(),1000);
    if(!heroConfig.generalOptions.musicMuted){
      this.theme.play();
    }
   
  this.gameStarted = true;
    this.hero.createShadow(this)
    this.floorSpeed = eval(actualLevel).floorSpeed  +0.5
    this._floorSpeed = this.floorSpeed;
  }

  createMeta(){
     this.metaCreated = true;
   
     this.tweens.add({
      targets:  this.theme,
      volume:   0,
      duration: this.createMetaMeters * 200,
  });

    const lastFloor =  addingManager.createSimpleFloor(this,this.floorSkins.bigFloorSkin);
    this.metaConstructor = new meta(this,{x:lastFloor.x+lastFloor.displayWidth/2,y:lastFloor.y});
this.meta = this.metaConstructor.getMetaPieces();

this.checkMetaOverlap =  this.physics.add.overlap(this.meta,this.hero,this.heroOverlapMeta,null,this);
  }

  getEvents(){
    this.physics.world.removeCollider(this.heroCollideWallHand);
    this.physics.world.removeCollider(this.floorArrCollider);
    this.physics.world.removeCollider(this.blockingArrCollider);
    this.physics.world.removeCollider(this.additonalArrCollider)
    this.physics.world.removeCollider(this.checkRotatingLine); // remove overlap not collider
    this.physics.world.removeCollider(this.laserCollider);

    this.floorArrCollider = this.physics.add.collider(this.hero,this.floorArray,this.heroCollideFloor,null,this)
  this.additonalArrCollider =  this.physics.add.collider(this.hero,this.additionalColliders,this.heroCollideObstacle,null,this);
    this.blockingArrCollider = this.physics.add.collider(this.hero,this.blockingCollider,this.heroCollideFloor,null,this);
    this.input.on('pointerdown', this.checkIfBoost, this);
      
  if(this.meta)  this.checkMetaOverlap = this.physics.add.overlap(this.meta,this.hero,this.heroOverlapMeta,null,this);

  if(this.gameFlipX.firstFlip){
    this.heroCollideWallHand =  this.physics.add.collider(this.hero,this.hand,this.flipGame,null,this)
  }else if(this.gameFlipX.secondFlip){
    this.heroCollideWallHand = this.physics.add.collider(this.hero,this.hand,this.flipGameToBasic,null,this)
  }

if(this.checkHeroOverlapLine) this.checkRotatingLine = this.physics.add.overlap(this.hero,this.line,this.handleRotateMode,null,this)
if(this.laserIsColliding) this.laserCollider = this.physics.add.overlap(this.hero,this.laser,this.heroCollideObstacle,null,this);
                              
  };
  


changeShape(pointer){
  this.shapeChangeController.handleShapeChange(pointer,this)
}

checkIfBoost(pointer){

  const pointerY = pointer.y
  const pointerX = pointer.x
  const checkMouseMove= ()=>{
    if(Math.abs(pointerY - this.input.y)<10 || Math.abs(pointerX - this.input.x) <10)
  {
    this.heroBoosted = true;
    this.hero.boost()
  } 
  else  { return }
  };

  setTimeout(checkMouseMove,40);
  }

rodBack(){
  if(this.rod.x - this.rod.displayWidth < gameWidth){
    this.rod.x +=3;
  }else{
    this.rodCreated = false;
    this.rod.destroy()
    this.events.removeListener("postupdate",this.rodBack);
  }
}

rodMove(){
  if(level >57 ){
    this.tweens.add({
      targets:this.rod,
       x:gameWidth,
       y:this.rodY,
       duration:200,
       onComplete:()=>this.events.on("postupdate",this.checkIfRodShoot,this)
    
       })
   
 return;
  }
   const flyDuration = this.floorSpeed*130 +1100;
   this.tweens.add({
     targets:this.rod,
      x:gameWidth/2,
      y:gameHeight*0.3,
      duration:flyDuration,
      onComplete:()=>{
        this.rod.flipX = false;
        this.tweens.add({
          targets:this.rod,
          x:gameWidth,
          y:this.rodY,
          duration:flyDuration,
          onComplete:()=>this.events.on("postupdate",this.checkIfRodShoot,this)
        })
      }
   })


    
  
}


  checkIfRodShoot(){
   
    if(this.hero.x >= this.floorThatRodShoot.x ){
     
      this.events.removeListener("postupdate",this.checkIfRodShoot);
    
      const rodAura = this.add.image(this.rod.x-40,this.rod.y,"game","rod_aura").setAlpha(0).setTint(this.laserTint);
 
      this.tweens.add({
        targets:rodAura,
        alpha:1,
        duration:500,
        onComplete:()=>{
          if(!heroConfig.generalOptions.soundMuted){
            this.laserPrepare.play()
          }
         
          const laser = this.physics.add.sprite(this.rod.x+35,this.rod.y,"game","laser_1")
          .setOrigin(1,0.5).setAlpha(0).setDepth(0.23).setTint(this.laserTint);
         this.laser = laser;
         laser.displayWidth = gameWidth+50;
          this.tweens.add({
            targets:laser,
            alpha:1,
            duration:200,
            onComplete:()=>{
let timeout,timeout_2;
            timeout =   setTimeout(()=>{
if(!this.sys.settings.active) return;

                this.laserIsColliding = true
this.laserCollider = this.physics.add.overlap(this.hero,this.laser,this.heroCollideObstacle,null,this);
if(!heroConfig.generalOptions.soundMuted){
  this.laserShoot.play()
}

                laser.setTexture("game","laser_2").setAlpha(0)
                laser.body.setSize(laser.displayWidth,laser.displayHeight)
                this.tweens.add({
                  targets:laser,
                  alpha:1,
                  duration:50,
                  onComplete:()=>{

                    laser.setTexture("game","laser_3").setAlpha(0)
                    laser.body.setSize(laser.displayWidth,laser.displayHeight)
                    this.tweens.add({
                      targets:laser,
                      alpha:1,
                      duration:50,
                      onComplete:()=>{

                        timeout_2 =  setTimeout(()=>{
    if(!laser.active) return
                          laser.body.setSize(laser.displayWidth,laser.displayHeight)
                          laser.setTexture("game","laser_2")
                          this.tweens.add({
                            targets:laser,
                            alpha:0,
                            duration:150,
                            onComplete:()=>{
                              this.laserIsColliding = false
this.physics.world.removeCollider(this.laserCollider);
                              laser.setTexture("game","laser_1")
                              this.tweens.add({
                                targets:laser,
                                alpha:0,
                                duration:150,
                                onComplete:()=>{
                                  this.tweens.add({
                                    targets:rodAura,
                                    alpha:0,
                                    duration:250,
                                    onComplete:()=>{
                                      rodAura.destroy()
                                      laser.destroy()
                                        this.events.on("postupdate",this.rodBack,this)
                                    }
                                  })
                                }
                              })
                            }
                            })
                          
                        
                        },100)
                        this.timeOuts.push(timeout_2)
                      }
                    })
                   
                  }
                })
  
              },400)
              this.timeOuts.push(timeout)
            }
          })

    
        }
      })
  
    }
  }
  getTextureCreatorFunctions(){
    this.textureCreator.sawsOnWall = ["bigSawBlur","bigSawFilled","bigSawClean","newSawBig1","newSawBig2","newSawBig3"]
    this.textureCreator.shurikensOnWall = ["shuriken1","shuriken2","shuriken3","shuriken4"]
this.textureCreator.smallSaws = ["smallSawBlur","smallSawClean","smallSawFilled","saw1","newSawSmall1","newSawSmall2","newSawSmall3"]

    const self = this;
    let floor;

    const tunnelFloor = function(){
      if(chanceRoll(self.tunnelChance)){
        floor = addingManager.createTunnel(self,self.floorSkins.bigFloorSkin)
        return true;
      }
      return false
    }

 const flyingFloor = function(){
if(chanceRoll(self.flyingFloorChance)){
  floor =  addingManager.createFlyingFloor(self,self.flyingFloorSkin);
  return true;
}
return false
}
 
const shortBallFloor=function(){
if(chanceRoll(self.shortBallFloorChance)){
floor = addingManager.createShortBallFloor(self,self.floorSkins.smallFloorSkin);
return true;
}
return false
}

const spikeMouth = function(){
  if(chanceRoll(self.spikeMouthChance)){
 floor =    addingManager.createSpikeMouth(self);
    return true;
  }
  return false
}

const magicRod = function(){
  if(chanceRoll(self.magicRodChance) && !self.rodCreated){
    
floor = addingManager.createMagicWandFloor(self);
for(let i=0;i<3;i++){
  if(chanceRoll(70)){
    self.textureCreator.initalizeNewPulse(Phaser.Math.Between(floor.x+10+i*190+i*20,(i+1)*190+floor.x),floor.y)
  }
}

self.floorThatRodShoot = floor;
return true
  }
  return false
}


const simpleFloor = function(){
 const numberOfPossibilites = 3;
const randFloor = Phaser.Math.Between(1,numberOfPossibilites);

 switch(randFloor){
case 1:
floor = addingManager.createSimpleFloor(self,self.floorSkins.mediumFloorSkin);
break;
case 2:
  if(chanceRoll(60)){
  floor =   addingManager.createSimpleFloor(self,self.floorSkins.smallFloorSkin);
  floor.showObstacle = false;
  floor.isSimple = true;
  if(chanceRoll(50)){
   self.textureCreator.initalizeNewPulse(floor.x+floor.displayWidth/2,floor.y);
  }
}else{
  simpleFloor();
}
  break;
  case 3:
    floor =   addingManager.createSimpleFloor(self,self.floorSkins.bigFloorSkin);
    floor.isBig = true;
    break;
 }
 
 return;
}

this.textureCreator.initalizeNewPulse = function(x,y){
  const stick = self.add.image(x,y,"game","stick").setOrigin(0.5,1)
  const pulse = self.add.image(stick.x,stick.y,"game","pulse").setOrigin(0.5,0.5).setTint(self.pulseTint)
  pulse.y -= stick.displayHeight;

 pulse.tween =  self.tweens.add({
    targets:pulse,
    scale:1.4,
    scaleY:0.6,
    duration:300,
    yoyo:true,
    repeat:-1,
    ease:"Bounce.easeOut"
  })

  
stick.displayHeight *=0.75
  self.specialEffects.push(stick,pulse)
}


this.textureCreator.initalizeNewRandomObstacleFloor = function(){
  if(chanceRoll(self.floorObstacleChance)){
  let _obstacle;
  do{
  let random = Phaser.Math.Between(1,5)
  switch(random){
     
    case 1:_obstacle = tunnelFloor();
      break;
      case 2:_obstacle = flyingFloor();
      break;
      case 3:_obstacle = shortBallFloor();
      break;
      case 4:_obstacle = spikeMouth();
      break;
      case 5:_obstacle = magicRod();
  }
}while(_obstacle === false);
}else{
  simpleFloor();
}
}

    this.textureCreator.initalizeNewObstacle = function(){
      let obstacle = "";
do{
switch(Phaser.Math.Between(1,2)){
  case 1:if(chanceRoll(self.spikeBlockObstacleChance))obstacle =  addingManager.addObstacle(self);
  break;
  case 2:if(chanceRoll(self.sawObstacleChance))obstacle =  addingManager.addSaw(self)
  break;
}
}
while(obstacle == "");
    };
  

    this.textureCreator.initalizeNewDownTexture = function(){
  if(!chanceRoll(self.bottomTextureChance)) return
  if(chanceRoll(50)){ // no properties
    const $monster = new downTexture(self,floor.x+floor.displayWidth,gameHeight).play("eat");
    $monster.x += self.floorToFloorSpacing/2
    $monster.y = gameHeight - $monster.displayHeight-30
  }else{
   let $spike = new downTexture(self,floor.x+floor.displayWidth,gameHeight,"spikeTexture").setOrigin(0,1).setTint( self.bottomSpikeTint )

   $spike.x += self.floorToFloorSpacing/2;
   $spike.y -=25;
   self.additionalColliders.push($spike);
   
 $spike =  new downTexture(self,floor.x+floor.displayWidth,0,"spikeTexture").setOrigin(0,0).setTint(self.bottomSpikeTint )
 self.additionalColliders.push($spike);
 $spike.y -=20;
 $spike.flipY = true;
  }

}

this.textureCreator.getRandomWallSpecialEffect  = function(which){
  const randSaw = Phaser.Math.Between(0,self.textureCreator.sawsOnWall.length-1);
const randShuriken = Phaser.Math.Between(0,self.textureCreator.shurikensOnWall.length-1)

  switch(which){
    case 1:
      let sawOnWall = addingManager.initalizeNewSawOnWall(self,randSaw);
      addingManager.initalizeNewShurikenOnWall(self,randShuriken,sawOnWall)
      break;
      case 2:
        addingManager.initalizeNewSawOnWall(self,randSaw);
        break;
        case 3:
          addingManager.initalizeNewShurikenOnWall(self,randShuriken)  
          break;
  }
}


  }
  
heroCollideFloor(hero,floor){
this.getNewRotatingSpecialEffect()


    if(floor.body.touching.up || floor.body.touching.down){
  if(hero.isSquare){
   this.squareCollideFloor(floor)
  }else if(hero.isCircle){
    this.circleCollideFloor(floor)
  }else{
    this.triangleCollideFloor(floor)
  }
  
 
 }else{
   hero.x +=this.floorSpeed
  }
 };



getNewRotatingSpecialEffect(){
  if(heroConfig.generalOptions.performanceBoost) return;
  if(this.distanceTravelledToNextWallSpecialEffect > 250){
    this.distanceTravelledToNextWallSpecialEffect = 0;
    if(chanceRoll(this.randomWallSpecialEffectChance)){
      this.textureCreator.getRandomWallSpecialEffect(Phaser.Math.Between(1,3))
    }
  }
}



checkFloorLeftScreen(){
  if(this.floorArray[0].x < - this.floorArray[0].displayWidth){
 this.floorArray[0].leftScreen(this);
  }
};

checkIfThunderCanStrike(){
  if(this.thunderEvent.available && !this.thunderInUse  && this.metersLeft <= this.thunderEvent.firstStrikeMeters){
    this.thunderInUse = true
    this.floorThatThunderShow = addingManager.createSimpleFloor(this,this.floorSkins.bigFloorSkin)
    this.floorThatThunderShow.isBig = true;
    const $floor = this.floorThatThunderShow
  this.createObsFloor($floor,3)
  
    for(let i=0;i<3;i++){
      if(chanceRoll(70)){
this.textureCreator.initalizeNewPulse(Phaser.Math.Between($floor.x+10+i*190+i*20,(i+1)*190+$floor.x),$floor.y)
      }
    }
    
    this.events.on("postupdate",this.strike,this);
  }
}

createObsFloor(f,blocks = 4){
  let $block
  let scene = this
    for(let i=0;i<blocks;i++){
  $block = new block(scene,f.x+f.displayWidth/2-80,f.y-2)
  $block.y -= $block.displayHeight*i-2;
  $block.aura.y -= $block.displayHeight*i-2;
     scene.blockingCollider.push($block);
     $block.body.checkCollision.up = false;
  
    }
  $block.body.checkCollision.up = true
     const spike =  new reverseObstacle(scene,$block.x,$block.y - 190);
     scene.blockingCollider.push(new block(scene,spike.x,spike.y));
  
}
strike(){
 
  if(this.hero.x >= this.floorThatThunderShow.x &&!this.gameLost){
    this.thunderStrike()
    this.events.removeListener('postupdate',this.strike)
  }
}

thunderStrike(){
let thunder;
const self = this;

const thunderHit = (callbackEv)=>{
  this.cameras.main.flash(500);
  soundManager.thunder_sound.play();
  const hit = () =>{

    let timeout =    setTimeout(()=>this.cameras.main.flash(2000),600)
    this.timeOuts.push(timeout)
    
   thunder = this.add.sprite(this.hero.x,this.hero.y,"thunder").play("thunder").setOrigin(0.5,1);
 
    thunder.on("animationcomplete",callbackEv)
      this.events.on("postupdate",updateXY,this)
  }
  let timeout =  setTimeout(hit,500);
  this.timeOuts.push(timeout) 
}

const thunderHitCallback = () =>{
  if(this.gameLost) return
  rotateGame("upsidedown")
 
 if(this.shapeChangeController) this.shapeChangeController.hide();
  this.meters.scaleY = -1;
  this.meters.y = 150;
  this.metersLeftText.x  = gameWidth/2
  this. metersLeftText.scaleY = -1;
  this.metersLeftText.y = 70;

  thunder.destroy();
self.events.removeListener("postupdate",updateXY)

const checkIfReverseHit = () =>{
  if(this.metersLeft <= this.thunderEvent.secondStrikeMeters){
    thunderHit(reverseThunderHitCallBack);
this.events.removeListener("postupdate",checkIfReverseHit);
  }
}

this.events.on("postupdate",checkIfReverseHit,this);

}

const reverseThunderHitCallBack = () =>{
  rotateGame()
  if(this.shapeChangeController) this.shapeChangeController.show();
  this.meters.scaleY = 1;
  this.meters.y = 50;
  this. metersLeftText.scaleY = 1;
  this.metersLeftText.y =  this.meters.y+30
  this.metersLeftText.x  = gameWidth/2

  thunder.destroy();
self.events.removeListener("postupdate",updateXY)
}

   const updateXY = () =>{
    thunder.y = this.hero.y+80
thunder.x = this.hero.x
  }

   thunderHit(thunderHitCallback)

}
checkObstacleLeftScreen(){
  if(this.obstacleArray.length != 0){
    if(this.obstacleArray[0].x < -this.obstacleArray[0].displayWidth){
      this.obstacleArray[0].leftScreen(this)
      }
  }

//

if(this.reverseObstacleArray.length !=0){
  if(this.reverseObstacleArray[0].x < -this.reverseObstacleArray[0].displayWidth){
    this.reverseObstacleArray[0].leftScreen(this)
    }
}

}


heroOverlapMeta(){
  this.metersLeft =0 ;
  this.meters.setText(`0`);

  if(!heroConfig.generalOptions.soundMuted){
    this.winSound.play();
  }

this.theme.stop()
  this.hero.win();
 
const goX = () =>{
  this.tweens.add({
    targets:this.hero,
    x:this.meta[1].x-this.meta[1].displayWidth/2+100,
    duration:300,
    onComplete:()=>goY(),
  })
}


const goY = () =>{
  this.tweens.add({
    targets:this.hero,
    y:this.meta[1].y - 5,
    duration:300,
    onComplete:()=>this.metaConstructor.overlaped()
  })
}
setTimeout(goX,400)
 

  this.scene.launch("winMenu",{scene:this})
  this.scene.bringToTop("winMenu")
  
  this.physics.world.removeCollider(this.checkMetaOverlap);
  this.input.removeAllListeners()
}

checkHeroCollideObstacle(){

if(!this.hero.isAlive)
return;

  this.trianglesHitBox.forEach((triangle)=>{
   if(this.hero.isIntersecting(this,triangle)){

   this.heroCollideObstacle(true)
   }

  })

  this.reverseTrianglesHitBox.forEach((triangle)=>{
    if(this.hero.isIntersecting(this,triangle)){
    this.heroCollideObstacle(true)
    }
 
   })


}

circleCollideFloor(floor){
  if(this.gameStarted)  this.hero.rotate(this)
  if(!floor.canCircleBounce) floor.checkFallDown(2500);
  if(!floor.isStartingFloor &&  floor.shine && this.heroBoosted){
    floor.shine(this,this.heroBoosted);
this.heroBoosted = false;    
  
  } 
}
squareCollideFloor(floor){

  if(floor.canSquareBounce){
   this.hero.bounce(floor)

   if(!floor.isStartingFloor &&  floor.shine){
    floor.shine(this,this.heroBoosted);
this.heroBoosted = false;    
  
  }
  /*
  else if(floor.name === "block"){
    const border = makeBorder(this,"colorful-border")
    this.tweens.add({targets:border,duration:800,alpha:0,onComplete:()=>border.destroy()});
  } 
*/
    if(this.gameStarted) this.hero.rotate(this)
  }else{
    if(floor.body.touching.up)
    floor.checkFallDown(2500);
  }
}
triangleCollideFloor(floor){
  if(floor.canTriangleBounce) {
    if(floor.body.touching.up){
      this.hero.rotate(this)
      floor.isCenter(this.hero)    

      if(!floor.isStartingFloor && this.heroBoosted){
        this.heroBoosted = false
        floor.shine(this);
      } 

      if(this.upperFlyingFloorsLeft == 2 && floor.isFirstFlyingUpperFloor){
        if(this.longBackJump){
          this.longBackJump.remove()
        }
     
        this.floorSpeed = eval(this.level).floorSpeed+0.5;
        this.events.removeListener("postupdate",this.checkIfFlyingFloorIsInHalf);
      }
    }
     
  } 
  else {
if(this.upperFlyingFloorsLeft == 0 ){
  this.tweens.add({
    targets:this.hero,
    x:"-=150", 
    ease:"linear",
    duration:500,
  })


}else{
 this.longBackJump =  this.tweens.add({
    targets:this.hero,
    x:"-=450", 
    ease:"linear",
    duration:1500,
  })

};

}

if(floor.body.touching.up)  this.hero.bounce(floor) 
};



checkIfFlyingFloorIsInHalf(){

  if(this.firstUpperFlyingFloor.x < 100){
    if(this.floorSpeed !=0){
      this.heroSpeed = 5
      this.floorSpeed = 0;
    }
    this.hero.x += this.heroSpeed;
  
    
  }
  }
  
  heroCollideObstacle(isDied = false){
    if(!this.hero.isAlive) return;

    if(this.dimnessBG) {
      this.dimnessTween.remove();
      this.dimnessBG.destroy()
    };
   
    if(!heroConfig.generalOptions.soundMuted)  soundManager.die_sound.play();
   
    this.theme.stop()
  this.hero.kill(isDied);
  this.gameLost = true;

  this.input.removeAllListeners();
  }


createFloor(){
 this.floorArrayPool = [];
  this.floorArray = [];

    this.floor = new floor(this,0,this.floorGroupY,"floors","startingFloor",false);
    this.floor.isStartingFloor = true
  new floor(this,this.floor.x + this.floor.displayWidth-3,this.floorGroupY,"floors",this.floorSkins.mediumFloorSkin);
        addingManager.createSimpleFloor(this,this.floorSkins.bigFloorSkin)
  this.floor.setTint("0xffffff")


};


createObstacle(){
    this.obstacleArray = [];
    this.obstacleArrayPool = [];
    addingManager.addObstacle(this)     
}


createShape(scene,x,y){
switch(actualShape){
  case 0:
    return new square(scene,x,y);
    case 1:
      return new triangle(scene,x,y);
      case 2:
        return new circle(scene,x,y);

}
}

createHUD(){
  this.shapeChangeController = new shapeChangeController();
  this.shapeChangeController.createController(this,70,gameHeight - 75)
 
const gameDiv =game.gameDiv;
gameDiv.show();

let dimness,pauseButton,resumeButton,homeButton;

const getHomeButton = ()=>{
homeButton = game.homeButton

const sceneToStart = (context) => context.scene.start("menu");
  
homeButton.onclick = () =>{
  if(this.dimnessBG) {this.dimnessTween.stop();this.dimnessBG.destroy()}

this.theme.stop();
  this.floorSpeed = 0
  this.events._events.postupdate.length = 1


  clearInterval(this.specialEffectsInterval);

  this.timeOuts.forEach(timeout=>{
    clearTimeout(timeout);
  })

  this.timeOuts.length =0;
  this.scene.resume()
gameDiv.hide();
changeScene(this,sceneToStart);

};
}




const getPauseButton = () =>{
pauseButton = game.pauseButton
pauseButton.onclick =()=>pauseScene();
}

const pauseScene = () =>{
  this.theme.pause()
  pauseButton.hide();
  this.scene.pause();
   dimness = new background(this,"endBG");
  this.physics.world.enable(dimness);
  dimness.setDepth(1)
  resumeButton.show();
  homeButton.show();
  this.gameTimeIsPaused = true;
}
this.pauseScene = pauseScene;

const getResumeButton = () =>{

resumeButton = game.resumeButton;
resumeButton.onclick = () =>{
  this.theme.resume();
  this.scene.resume();
  pauseButton.show();
  resumeButton.hide()
  homeButton.hide();
  dimness.destroy();
  this.gameTimeIsPaused = false;
}
}


getPauseButton();
getResumeButton();
getHomeButton();

pauseButton.show();
resumeButton.hide();
homeButton.hide();

};



};
