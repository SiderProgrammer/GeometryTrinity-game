

class basicLevel_2 extends Phaser.Scene{
    constructor(){
      super({key:'basicLevel_2'})
    }
    create(){
      this.floorGroupY = gameHeight*0.5+200;

      this.floorSpeed = eval(actualLevel).floorSpeed
      this.floorSpeedHitCenter = this.floorSpeed+this.floorSpeed/5;
      this.speed =  this.floorSpeed;

      this.actualScale =eval(actualLevel).scale

      this.floorShadowArray =[];
      this.firstBounce = true;
      this.gameWon = false;
   
      this.graphics = this.add.graphics({ lineStyle: { width: 0, color: 0xaaaa00 } })
        this.background = new background(this,'shopBG');
   //   this.resetStates();
 
          this.createShape(gameWidth*0.5);
          this.hero.body.gravity.y = 0;
         // this.timeBar = new progressBarExtension(this,gameOptions.mapTime,gameWidth/2,30);
     this.createHUD()
      this.createFloor();
  
      //  this.createObstacle(this)
      this.boost =   this.input.on('pointerdown', this.hero.boost, this.hero);
      this.input.on('pointerdown',this.start,this);

  
      this.physics.add.collider(this.hero,this.floorArray,this.heroCollideFloor,null,this)
    }
  start(){
    if(this.hero.body.gravity.y !=0)
    return;



    this.hero.body.gravity.y = 1700;
    this.hero.speedY = -800;
    this.hero.boostPower = 800;
    this.hero.createShadow(this)
  }
  
    update(){
      const floor = this.floorArray;
     const floorShadow = this.floorShadowArray;
     //this.checkHeroCollideObstacle(this);

     //debug floor
     if(floor[floor.length-1]&&this.gameWon)
floor[floor.length-1].x =   floor[floor.length-2].x + floor[floor.length-1].displayWidth;

    

      //check if floor left screen

this.floor.checkFloorLeftScreen(this)
//move floor
if(!this.firstBounce){
  floor.forEach(floor=>floor.x+=this.speed)
}


/*
// move bounce effect squares
if(this.bounceEffectSquares.length >0){
  this.bounceEffectSquares[0].x = floor[this.touchedFloorIndex].x
  this.bounceEffectSquares[0].y= floor[this.touchedFloorIndex].y
   }
*/


//move shadow
for(const x in floorShadow){
    floorShadow[x].follow(floor[x]);
}

  //this.obstacle.update(this)

//check if hero felt down
  if(this.hero.isAlive){
    if  (this.hero.y > gameHeight)
    this.heroCollideObstacle(this);
  }

  //if(this.checkTriangleObstacleHitBox)
  //this.obstacle.updateHitBox(this);
  
 //this.hero.update(this)

 //move meta
if(this.meta)
this.meta.x +=this.floorSpeed;

  if(this.checkMeta ){
    this.checkMetaOverlap = this.physics.add.overlap(this.meta,this.hero,this.heroOverlapMeta,null,this);
   this.checkMeta = false
  }

  };

  heroOverlapMeta(){
   this.winSound.play();
    this.hero.win();
    setTimeout(() => this.meta.overlaped(), 1000);
    
    this.launch("winMenu",{scene:this})
    this.bringToTop("winMenu")
    this.homeButton.kill()
    this.checkMetaOverlap.active = false
  this.input._events.pointerdown = null
 
  }

  heroCollideObstacle(){

 this.hero.kill();
  this.scene.launch("loseMenu",{scene:this})
  this.scene.bringToTop("loseMenu")
  this.input._events.pointerdown = null

  }
  
  
  heroCollideFloor(hero,floor){
   function replaceAt(variable,index, replacement) {
      return variable.substr(0, index) + replacement+ variable.substr(index + replacement.length);
  }


      if(floor.isCenter(hero)){
   this.hero.speedY = -1000;
   this.hero.boostPower = 1000;
  // this.hero.angleRotateDeg='+=120'
 this.hero.angleRotateDeg = replaceAt(this.hero.angleRotateDeg,0,'+')

floor.checkFallDown(2000);
this.speed = this.floorSpeedHitCenter
         }
         else
         {
           this.hero.speedY = -800;
           this.hero.boostPower = 800
         //  this.hero.angleRotateDeg='-=120'
         this.hero.angleRotateDeg = replaceAt(this.hero.angleRotateDeg,0,'-')
           if(floor.checkFallDown(1000)){
             this.speed=this.floorSpeed;
           }
              
         }

    this.hero.rotate(this)
    this.hero.bounce(floor)

//if hero was blocked  by floor left side
      if(this.hero.body.velocity.x != 0){
        this.heroCollideObstacle(this);
      }
      // if game is started
      if(this.firstBounce){
        this.firstBounce = false;
      }
  }
  
  createHUD(){
      this.homeButton = new sceneButton(this,20,20,'arrow','menu').setOrigin(0,0)
  };
  
  createFloor(){
    this.floorGroup = this.physics.add.group({immovable:true});
    this.floorArray = [];
    for(let i =0;i<6;i++){
      this.floor = new floorExtension(this)
    this.floor.x = this.hero.x+i* 230
    this. floorShadow = new floorShadow(this)
  
    }
  };
  
  createShape(x){
  switch (actualShape){
    case 0:
    this.hero = new square(this,x);
      break;
    case 1:
    this.hero = new triangle(this,x);
      break;
    case 2:
    this.hero = new circle(this,x);
    break;
  };
  
  }
  
  
  };
  