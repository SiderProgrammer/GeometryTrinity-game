class tutorial extends Phaser.Scene{
    constructor(){
        super({key:"tutorial"});

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

    checkIfBoost(pointer){
      
      if(this.tutorialStep == 0){
        this.floorSpeed = -4;
        return;

      }else if(this.tutorialStep == 1){
        this.tutorialStep++;
        this.hero.body.gravity.y = 2500;
        this.floorSpeed = -4;
        this.finger.destroy();
        this.fingerTween.remove();
      };
            const pointerY = pointer.y
            const pointerX = pointer.x
            const checkMouseMove= ()=>{
              if(Math.abs(pointerY - this.input.y)<10 || Math.abs(pointerX - this.input.x) <10)
            {
            
              this.hero.boost()
            } 
            else  { return }
            };
          
            setTimeout(checkMouseMove,40);
            }


            checkIfStopBeforeObstacle(){
              if(this.triangle){
                if(this.triangle.x - this.hero.x < 120 && this.tutorialStep == 0){
        
                  this.floorSpeed = 0;
                  this.hero.body.gravity.y = 0;
                  this.hero.body.velocity.y = 0;
                this.tutorialStep++;
                this.finger.destroy()
                this.showTapFinger();
                } 
              }
            }
            bounce(hero){
              hero.body.velocity.y = 1000;
          }
    create(){
      this.floorArray  = []
      this.obstacleArray = []
      this.trianglesHitBox = []
      this.tutorialStep = 0;
      this.tutIsPaused = false;
      this.floorSpeed = 0;
this.floorSkins = floorSkins.basic
      makeBorder(this,"tutorialBG");
      this.add.text(gameWidth/2,50,"tutorial",{
        font:"60px LuckiestGuy"
      }).setOrigin(0.5)

      this.floor =  new floor(this,0,gameHeight/2+200,"floors", this.floorSkins.bigFloorSkin)
  new floor(this,this.floor.x+this.floor.displayWidth,gameHeight/2+200,"floors",this.floorSkins.bigFloorSkin)

      this.triangle = new obstacle(this,350,this.floor.y).setTint("0x0000FF")
        this.triangle_2 = new obstacle(this,650,this.floor.y).setTint("0x0000FF")
        this.triangle_3 = new obstacle(this,850,this.floor.y).setTint("0x0000FF")
        this.triangle_4 = new obstacle(this,1000,this.floor.y).setTint("0x0000FF")
this.hero =   new square(this,100,gameHeight/2,"square_9")
this.hero.body.gravity.y = 2500
this.hero.body.setBounce(0,1)
this.input.on('pointerdown', this.checkIfBoost, this);
  this.physics.add.collider(this.hero,this.floorArray,null,this.bounce,this);

this.showTapFinger();
    }

  
   update(){
    this.heroStrokeHitBox();
    this.floorArray.forEach(floor=>floor.x += this.floorSpeed)
    this.obstacleArray.forEach(obs=>{
      obs.x +=this.floorSpeed
      if(obs.aura) obs.aura.x +=this.floorSpeed
    })

if(this.hero.x - this.triangle_4.x > 120){
  this.floorSpeed = 0
  const nextButton = new button(this,gameWidth/2,200,"nextLevel_button_huge").
  on("pointerup",()=>{
    
    this.tweens.killAll();
    actualLevel = `levelsConfig.level1`;   
    const sceneToStart = (context) =>  context.scene.start("basicLevel");
    changeScene(this,sceneToStart);
  }).setAlpha(0)

  this.tweens.add({
    targets:nextButton,
    alpha:1,
    duration:500,
  })
}
    this.checkIfStopBeforeObstacle();
    this.triangle.updateHitBox(this,0)
        this.triangle_2.updateHitBox(this,1);
        this.triangle_3.updateHitBox(this,2);
        this.triangle_4.updateHitBox(this,3);

    this.trianglesHitBox.forEach((triangle)=>{
      if(this.hero.isIntersecting(this,triangle)){
      this.scene.restart();
      }
   
     })
   }
 
 
}
