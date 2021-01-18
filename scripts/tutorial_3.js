class tutorial_3 extends Phaser.Scene{
    constructor(){
        super({key:"tutorial_3"})
    }
    create(){
this.specialEffects = []
     
this.anims.create({
    key: 'boost',
    frames: this.anims.generateFrameNames('boost', { prefix: 'boost_', start: 0, end: 3}),
    frameRate: 10,
    repeat: -1
  });
    this.floorArray  = []
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
        this.bg =    makeBorder(this,"tutorialBG");
           this.s = false
           this.tutEnd = false
           this.add.text(gameWidth/2,50,"tutorial",{
             font:"60px LuckiestGuy"
           }).setOrigin(0.5)
     
   this.floor =  new floor(this,0,gameHeight/2+200,"floors", this.floorSkins.mediumFloorSkin)
 this.floor_2 = new floorExtension(this,this.floor.x+this.floor.displayWidth + 175,gameHeight/2+200)
 this.floor_3 =  new floor(this,this.floor_2.x+200,gameHeight/2+200,"floors",this.floorSkins.smallFloorSkin)
 this.floor_4 = new floorExtension(this,this.floor_3.x+this.floor_3.displayWidth + 150,gameHeight/2+200)
   
   this.hero =   new square(this,200,gameHeight/2,"square_9")
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
   
update(){
    if(this.hero.x - this.floor_4.x > - 205 && !this.s){
        this.s = true
        this.createFingerTweenSide()
    }
    this.floorArray.forEach(f=>f.x+=this.floorSpeed);
    if(this.hero.x - this.floor_2.x > - 70 && this.tutorialStep == 1 && this.hero.y - this.floor_2.y < 0){
        this.tutorialStep = 2;
        this.floorSpeed = 0;
        this.createFingerTweenSide();
        this.hero.body.gravity.y = 0
        this.hero.body.velocity.y = 0;
    }
    else if(this.hero.x - this.floor_2.x > 140 && this.tutorialStep == 3){
        this.tutorialStep = 4;
        this.floorSpeed = 0;
        this.hero.body.gravity.y = 0
        this.hero.body.velocity.y = 0;
        this.createFingerTweenUp();

    }

    
    if(this.hero.y > gameHeight){
        this.scene.restart();
    }
    if(this.hero.x - this.floor_4.x > 10 && this.hero.isTriangle && !this.tutEnd){
        this.tutEnd = true
        this.floorSpeed = 0;
     setTimeout(()=>{
this.bg.setDepth(0.99)
        const a = this.add.image(20,20,"tutorial_4").setDepth(1).setOrigin(0);
      
            const nextButton = new button(this,gameWidth/2,gameHeight*0.92,"nextLevel_button_huge").
            on("pointerup",()=>{
              this.tweens.killAll();
              actualLevel = `levelsConfig.level3`;   
              const sceneToStart = (context) =>  context.scene.start("basicLevel");
              changeScene(this,sceneToStart);
            }).setAlpha(0)
          
            this.tweens.add({
              targets:nextButton,
              alpha:1,
              duration:500,
            })
        
        
     
nextButton.setDepth(1)

     },500)
    
}   
}

    changeShape(scene,pointer){
        if(this.tutorialStep ==0){
            this.floorSpeed = -4;
            this.tutorialStep = 1;
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
    this.tutorialStep = 5;
   
        const spawnPos = {
            x:scene.hero.x,
            y:scene.hero.y-scene.hero.displayHeight/2,
          }
       this.floorSpeed = -4;
       this.tweens.killAll()
        scene.hero = new shape(scene,spawnPos.x,spawnPos.y,"square_9")
        scene.hero.isSquare = true
        scene.hero.body.gravity.y = 2500;
        scene.hero.body.velocity.y = 1000;
        scene.hero.body.setBounce(0,1);
     
        this.physics.add.collider(this.hero,this.floorArray,null,this.bounce,this);
    
      }
    
      }else if(changeSwipeLeftRightCondition){
          if(this.tutorialStep == 2 || this.tutorialStep == 5){
              
        //triangle
        scene.hero.kill()
        this.orText.destroy()
        this.finger.destroy()
        this.finger_2.destroy();
        this.tweens.killAll()
        if(this.tutorialStep == 2){
            this.tutorialStep = 3;
        }else{
            this.finger.destroy()
            this.finger_2.destroy()
        }
   
        const spawnPos = {
            x:scene.hero.x,
            y:scene.hero.y-scene.hero.displayHeight/2,
          }
       this.floorSpeed = -4;
    
        scene.hero = new shape(scene,spawnPos.x,spawnPos.y,"triangle_9")
        scene.hero.isTriangle = true;
        scene.hero.body.gravity.y = 1850;
        scene.hero.body.velocity.y = 1000;
        scene.hero.body.setBounce(0,1);
     
        this.physics.add.collider(this.hero,this.floorArray,null,this.bounce,this);
       
        }
         }
    
    
    }
    bounce(hero,floor){
        if(hero.isSquare && floor.isFlying){
            hero.body.velocity.y = 0;
            this.scene.restart()
        }else if(hero.isSquare && !floor.isFlying){
            hero.body.velocity.y = 1000
        }
     if(hero.isTriangle && floor.isFlying){
            hero.body.velocity.y = 1000
        }else if(hero.isTriangle && !floor.isFlying){
            this.tweens.add({
                targets:this.hero,
                x:"-=150", 
                ease:"linear",
                duration:500,
              })
        }
            
        
             
            
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
                           duration:500
                           
                       })
                   }
                             })
                             
                   
                   
                         }
                     })
                   }
                   
                   fingerTween();
           }

           createFingerTweenSide(){
 
            this.orText = this.add.text(gameWidth/2,220,"OR",{
              font:"60px LuckiestGuy",
            }).setOrigin(0.5)
          
            this.finger = this.add.image(gameWidth/2-50,310,"finger5")
            this.finger_2 = this.add.image(gameWidth/2+50,310,"finger4")
            const fingerTween = (x1,x2,finger)=>{
                finger.alpha = 1;
                
                  this.fingerTween = this.tweens.add({
                      targets:finger,
                      x:`${x1}`,
                      duration:700,
                      onComplete:()=>
                      {
                          this.tweens.add({
                targets:finger,
                alpha:0,
                duration:200,
                onComplete:()=>{
                    this.tweens.add({
                        targets:finger,
                        x:`${x2}`,
                        duration:500,
                        onComplete:()=>fingerTween(x1,x2,finger)
                    })
                }
                          })
                          
                
                
                      }
                  })
                }
                
                fingerTween("-=100","+=100",this.finger);
                fingerTween("+=100","-=100",this.finger_2)
                
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
