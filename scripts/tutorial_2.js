class tutorial_2 extends Phaser.Scene{
    constructor(){
        super({key:"tutorial_2"})
    }

changeShape(scene,pointer){
    if(this.tutorialStep ==0){
        this.floorSpeed = -4;
        this.tutorialStep++;
        this.finger.destroy()
        return;
    }
   
    
    scene.swipe.endY= pointer.y;
    scene.swipe.endX = pointer.x;
  
  const changeSwipeUpCondition = (Math.abs(scene.swipe.startY -scene.swipe.endY) >30);

  const changeSwipeLeftRightCondition = (Math.abs(scene.swipe.startX - scene.swipe.endX)>30);
  
  if(!changeSwipeUpCondition && !changeSwipeLeftRightCondition) return;
 
  if(changeSwipeUpCondition && Math.abs(scene.swipe.endX - scene.swipe.startX) < 40)
{ 
  if(scene.swipe.startY > scene.swipe.endY && this.tutorialStep == 4){
    scene.hero.kill()
    this.finger.destroy()
this.tutorialStep++;
    const spawnPos = {
        x:scene.hero.x,
        y:scene.hero.y-scene.hero.displayHeight/2,
      }
   this.floorSpeed = -4;

    scene.hero = new shape(scene,spawnPos.x,spawnPos.y,"square_9")
    scene.hero.body.gravity.y = 2500;
    scene.hero.body.velocity.y = 1000;
    scene.hero.body.setBounce(0,1);
 
    this.physics.add.collider(this.hero,this.floorArray,null,this.bounce,this);

  }
  else if(this.tutorialStep == 2){
     this.tutorialStep++;
    scene.hero.kill()
    this.finger.destroy()
    const spawnPos = {
        x:scene.hero.x,
        y:scene.hero.y-scene.hero.displayHeight/2,
      }
      this.floorSpeed = -4;
    scene.hero = new shape(scene,spawnPos.x,spawnPos.y,"circle_9")
  
    scene.hero.body.gravity.y = 2500;
    this.physics.add.collider(this.hero,this.floorArray,null,this.rotate,this);
  }
  }


}
    
    create(){
        this.floorArray  = []
        this.obstacleArray = []
        this.swipe = {
            startY :0,
            endY :0,
            startX :0,
            endX :0,
          }
        this.tutorialStep = 0;
        this.tutIsPaused = false;
        this.floorSpeed = 0;
  this.floorSkins = floorSkins.basic
        makeBorder(this,"tutorialBG");

        this.add.text(gameWidth/2,50,"tutorial",{
          font:"60px LuckiestGuy"
        }).setOrigin(0.5)
  
 this.floor =  new floor(this,0,gameHeight/2+200,"floors", this.floorSkins.mediumFloorSkin)
   const $floor =  new floor(this,this.floor.x+this.floor.displayWidth,gameHeight/2+200,"floors",this.floorSkins.bigFloorSkin)
   this.thirdFloor =  new floor(this,$floor.x+$floor.displayWidth + 130,gameHeight/2+200,"floors",this.floorSkins.smallFloorSkin)
  const scene = this
  this.secondFloor = $floor;
 let spikesBar = scene.physics.add.sprite($floor.x + $floor.displayWidth/2, $floor.y - 88,"game","spikesBar")
 .setTint("0x2988FF")
.setImmovable(true).setDepth(0.01)
  let spikesBarAura = scene.add.sprite(spikesBar.x, spikesBar.y,"game","spikesBarAura")

 let blackBar = scene.physics.add.sprite($floor.x + $floor.displayWidth/2, spikesBar.y - spikesBar.displayHeight,"game","blackBar")
 .setDepth(0.02).setTint("0x2988FF")
 let blackBarAura = scene.add.sprite(blackBar.x, blackBar.y ,"game","blackBarAura")

   scene.obstacleArray.push(spikesBar,blackBarAura,spikesBarAura,blackBar)
  
 let spikesBar2 = scene.physics.add.sprite( blackBar.x,  blackBar.y-blackBar.displayHeight+4 ,"game","spikesBar")
 .setTint("0x2988FF").setDepth(0.01)
 let spikesBarAura2 = scene.add.sprite( spikesBar2.x,  spikesBar2.y+1,"game","spikesBarAura")

 scene.obstacleArray.push(spikesBar2,spikesBarAura2)
 spikesBarAura2.setAngle(180);
 spikesBar2.setAngle(180)


  this.hero =   new square(this,100,gameHeight/2,"square_9")
  this.hero.body.gravity.y = 2500
  this.hero.body.setBounce(0,1)

  this.input.on('pointerdown',(pointer)=>{
    this.swipe.startX = pointer.x
    this.swipe.startY = pointer.y
   });
  
   this.input.on('pointerup', (pointer)=>this.changeShape(this,pointer));
this.physics.add.collider(this.hero,this.floorArray,null,this.bounce,this);
  
  this.showTapFinger();
      }

      rotate(hero){
          hero.angle +=3;
      }
      bounce(hero){
          hero.body.velocity.y = 1000;
      }
      update(){
        this.floorArray.forEach(floor=>floor.x += this.floorSpeed)
        this.obstacleArray.forEach(obs=>{
          obs.x +=this.floorSpeed
          if(obs.aura) obs.aura.x +=this.floorSpeed
        })

        this.checkIfStop()

        if(this.hero.x - this.thirdFloor.x > - 170 && this.tutorialStep == 3){
            
            this.tutorialStep++
            this.floorSpeed =0;
            this.tweens.killAll()
            this.createFingerTweenUp();
        }else if(this.hero.x - this.thirdFloor.x > 35 && this.tutorialStep == 5){
            this.tutorialStep ++;
            this.floorSpeed = 0;
            const nextButton = new button(this,gameWidth/2,200,"nextLevel_button_huge").
            on("pointerup",()=>{
              this.tweens.killAll();
              actualLevel = `levelsConfig.level2`;   
              const sceneToStart = (context) =>  context.scene.start("basicLevel");
              changeScene(this,sceneToStart);
            }).setAlpha(0)
          
            this.tweens.add({
              targets:nextButton,
              alpha:1,
              duration:500,
            })
        }
      }
checkIfStop(){
  
        if(this.secondFloor.x - this.hero.x <50 && this.tutorialStep == 1){
          this.tutorialStep  ++;
      
           this.createFingerTweenDown()
          this.floorSpeed = 0;
          this.hero.body.gravity.y = 0;
          this.hero.body.velocity.y = 0;
    
        }
      
}
      createFingerTweenDown(){
        this.finger = this.add.image(gameWidth/2,220,"finger2");

        const fingerTween = ()=>{
        this.fingerTween = this.tweens.add({
            targets:this.finger,
            y:"+=100",
            duration:700,
            onComplete:()=>
            {
                this.tweens.add({
      targets:this.finger,
      alpha:0,
      duration:200,
      onComplete:()=>{
          this.tweens.add({
              targets:this.finger,
              y:"-=100",
              duration:500,
              onComplete:()=>fingerTween()
       })
            }
                      })
                      
            
            
                  }
              })
            }
            fingerTween()

        }

        createFingerTweenUp(){
            this.finger = this.add.image(gameWidth/2,340,"finger3")
            const fingerTween = ()=>{
                this.finger.alpha = 1;
                
                  this.fingerTween = this.tweens.add({
                      targets:this.finger,
                      y:"-=100",
                      duration:700,
                      onComplete:()=>
                      {
                          this.tweens.add({
                targets:this.finger,
                alpha:0,
                duration:200,
                onComplete:()=>{
                    this.tweens.add({
                        targets:this.finger,
                        y:"+=100",
                        duration:500,
                        onComplete:()=>fingerTween()
                    })
                }
                          })
                          
                
                
                      }
                  })
                }
                
                fingerTween();
        }
        showTapFinger(){
            this.finger = this.add.image(gameWidth/2,220,"finger1");
    
            this.fingerTween = this.tweens.add({
                targets:this.finger,
                alpha:0,
                yoyo:true,
                repeat:-1,
                duration:500,
            })
        }
}