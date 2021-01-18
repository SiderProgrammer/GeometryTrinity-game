

class shape extends Phaser.GameObjects.Sprite {
  constructor(scene,x= 120,y= gameHeight/2 - 300, sprite){
    super(scene,x,y,sprite)
    this.self = scene;
    this.sprite = sprite;

    scene.add.existing(this)
      scene.physics.world.enable(this);
this.isAlive = true;
      this.boostPower = 1000;
      this.body.gravity.y = 2500;
    this.speedY = -1000
            this.angleRotateDeg = '+=90';
this.canRotate = true;
this.setDepth(0.22);
this.setScale(0.6625)
this.createHitBox(scene)


};

spawn(){
  const removeSpawnSprite = () => spawn.destroy();
 const spawn =  this.self.add.sprite(this.x,this.y,"dieEffect").anims.playReverse("spawnEffect").setDepth(30)
 spawn.on("animationcomplete",removeSpawnSprite);
}

createHitBox(scene){
    return   scene.heroHitBox;
}

createShadow(scene){
 if(this.shadowEmitter) this.shadowEmitter.stop()
  const particles = scene.add.particles(this.texture.key)
  
this.shadowEmitter = particles.createEmitter({
 
speedX:{
    min:-200,
    max:-200
},

scale: {
    start: 0.6,
    end: 0
        },
alpha: {
      start: 0.8,
      end: 0
        },
frequency: 80,
lifespan: 600,

    });



    this.shadowEmitter.startFollow(this);
}

createStayingShadow(scene){
 
  const particles = scene.add.particles(this.texture.key)
  
this.shadowEmitter = particles.createEmitter({
 
speedX:0,
scale: {
    start: 0.6,
    end: 0
        },
alpha: {
      start: 0.8,
      end: 0
        },
frequency: 80,
lifespan: 600,

    });



    this.shadowEmitter.startFollow(this);
    
}

rotate(scene){
if(this.canRotate){
  const rotateElements = [this]
  this.canRotate = false;
 scene.tweens.add({
  targets:rotateElements,
  angle:this.angleRotateDeg,
  ease:'Linear',
  duration:300,
  repeat:0,
  yoyo:false
})

setTimeout(()=> this.canRotate = true,300);
}
};


boost(){
  if(!this.body) return;
this.body.velocity.y = this.boostPower;
    }

bounce(floor){
 if(!this.body) return
this.body.velocity.y = this.speedY

/*
const lifespan  = 500;
 const particles = this.self.add.particles(this.shadowShape)
 
 const sparkEmitter = particles.createEmitter({
  x:this.x-this.displayWidth*0.5,

  y: floor.y,
  speedX:{
    min:-300,
    max:-100
  },

  speedY:-200,
  scale: 0.1,
  lifespan: lifespan,
})
setTimeout(() => particles.destroy(), lifespan);
*/
  }

kill(isDie){

  this.isAlive = false;
  if(this.shadowEmitter) this.shadowEmitter.stop();

  this.destroy()
 
 if(!heroConfig.generalOptions.performanceBoost){
  const particles = this.self.add.particles(this.sprite);

 const emitter = particles.createEmitter({
                            speed: {
                                min: -60,
                                max: 60
                            },
                            gravityY:-300,
                            scale:0.15,
                           // blendMode: 'ADD',
                            alpha: {
                                start: 1,
                                end: 0
                            },
                            lifespan: 2000
                        })
 
                        emitter.explode(20, this.x, this.y);
                      };
                        if(!isDie) return;
                      
 this.self.add.sprite(this.x,this.y,"dieEffect").play("dieEffect").on("animationcomplete",()=>{
  this.self.scene.launch("loseMenu",{scene:this.self})
  this.self.scene.bringToTop("loseMenu")
 })
 
};

win(){
this.setDepth(1.01)
this.body.velocity.y = 0;
this.body.gravity.y = 0;
this.shadowEmitter.stop();
}


};


class square extends shape {
  constructor(scene,x,y, sprite = skins.squareSkin){
    super(scene,x,y, sprite)
    this.isSquare = true;


    this.shadowShape = 'squareShadow_1'
scene.heroHitBox = new Phaser.Geom.Rectangle(this.x-this.displayWidth/2,this.y,this.displayWidth,this.displayHeight)

  scene.heroStrokeHitBox = () =>{
scene.heroHitBox.y = this.y - this.displayHeight/2
scene.heroHitBox.x =this.x-this.displayWidth/2
 //  scene.graphics.strokeRectShape(scene.heroHitBox)
    }

  }
  isIntersecting(scene,triangle){
return   Phaser.Geom.Intersects.RectangleToTriangle(scene.heroHitBox,triangle)
  }
}



class triangle extends shape {
  constructor(scene,x,y, sprite = skins.triangleSkin){
    super(scene,x,y, sprite )
    this.isTriangle = true;
    this.body.gravity.y = 700

    this.angleRotateDeg = '+=120';

this.setOrigin(0.5,0.668)
    this.shadowShape = 'triangleShadow_1'

scene.heroHitBox =new  Phaser.Geom.Triangle.BuildEquilateral(this.x, this.y, this.displayWidth);

scene.heroStrokeHitBox = () =>{

scene.heroHitBox.x1 = this.x - this.displayWidth/2;
scene.heroHitBox.y1 = this.y + this.displayHeight*(1-0.668);
scene.heroHitBox.x2 = this.x + this.displayWidth/2;
scene.heroHitBox.y2 = this.y +this.displayHeight*(1-0.668);
scene.heroHitBox.x3 = this.x;
scene.heroHitBox.y3 = this.y - this.displayHeight*(1-0.668)
//scene.graphics.strokeTriangleShape(scene.heroHitBox)
}

  }
  isIntersecting(scene,triangle){
return   Phaser.Geom.Intersects.TriangleToTriangle(scene.heroHitBox,triangle)
  }
}



class circle extends shape {
  constructor(scene,x,y, sprite = skins.circleSkin){
    super(scene,x,y, sprite)
    this.boostPower = 0
this.isCircle = true;
this.body.gravity.y = 6000
    this.shadowShape = 'circleShadow_1'
scene.heroHitBox = new Phaser.Geom.Circle(this.x,this.y,this.displayWidth/2)
scene.heroStrokeHitBox = () => {
     scene.heroHitBox.y = this.y
     scene.heroHitBox.x = this.x
   //   scene.graphics.strokeCircleShape(scene.heroHitBox)
}

  }
  isIntersecting(scene,triangle){
return   Phaser.Geom.Intersects.TriangleToCircle(triangle,scene.heroHitBox)
  }

  rotate(){
   this.angle+=5;
    };
}




