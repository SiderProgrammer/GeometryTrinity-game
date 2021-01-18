
//button without sprite frames
class button extends Phaser.GameObjects.Sprite {
  constructor(scene,x,y,sprite,state){
    super(scene,x,y,sprite)
scene.add.existing(this)
this.setInteractive();
this.scene = scene;
  }
  kill(){
    this.destroy();
  }
  resizing(scale=0.7,time=900,ease="linear"){
  this.scene.tweens.add({
      targets:this,
      scale:scale,
      yoyo:true,
      repeat:-1,
      ease:ease,
      duration:time,
    })
  
  }
rotate(angle=360,duration=2400){
  this.scene.tweens.add({
    targets:this,
    angle:angle,
    repeat:-1,
    duration:duration,
  

  })
}


};


//button with sprite frames
class shopSkinButton extends Phaser.GameObjects.Sprite {
  constructor(scene,x,y,sprite,frame){
    super(scene,x,y,sprite,frame)
scene.add.existing(this)
this.setInteractive();
  }
};


class arrowButton extends button {
  constructor(scene,x,y,sprite,flip = false){
    super(scene,x,y,sprite)
      this.moveDistanceY = '+=0';
this.setScale(0.9)
switch(flip){
  case true:
  this.moveDistanceX= '+=5'
  this.angle = 90;
  this.flipX = true
    break;
  case false:
    this.moveDistanceX='-=5'
    this.angle = -90;
      break;
}
  }

bringAlive(scene){
 scene.tweens.add({
    targets:this,
  x:this.moveDistanceX,
  y:this.moveDistanceY,
    ease:'Linear',
    duration:700,
    repeat:-1,
    yoyo:true
  })

}

}


class shopArrowButton extends arrowButton{
  constructor(scene,x,y,sprite,flip){
    super(scene,x,y,sprite)
this.moveDistanceX = '+=0';
this.setScale(0.8)
this.setOrigin(0.5,0.5)
      switch(flip){
        case 'down':
        this.moveDistanceY = '-=5'
        this.angle = 180
        break;
        case 'up':
        this.angle = 0;
        this.moveDistanceY = '+=5'
        break;
      }

  }
}


class text extends Phaser.GameObjects.Group{
  constructor(scene,x,y,text,size,origX = 0.5,origY=0.5){
    super(scene)

   this.text = scene.add.bitmapText(x, y, 'myfont', text, size,{
     align:"center"
   })
   .setOrigin(origX,origY);
   return this.text;
  }

 
}

class boost extends Phaser.GameObjects.Sprite{
  constructor(scene,x,y,sprite = "boost"){
    super(scene,x,y,sprite);
scene.add.existing(this);
this.play("boost");
this.angle = 45;
this.setScale(1.1)
scene.specialEffects.push(this)
}
}

class downTexture extends Phaser.GameObjects.Sprite{
  constructor(scene,x,y,sprite = "monster"){
    super(scene,x,y,sprite);
scene.add.existing(this)
this.setDepth(0.25)
this.setOrigin(0.5,0)

scene.specialEffects.push(this)

  }
}




function makeBorder(scene,sprite,frame=0){
     const border = scene.add.sprite(0,0,sprite,frame).setOrigin(0)
     border.displayHeight = gameHeight;
     border.displayWidth = gameWidth;
     return border;
  }



class background {
  constructor(scene,sprite){
    
    this.background =  scene.add.image(0,0,sprite)
    this.background.setOrigin(0)

    setGameSize(this.background);
    return this.background;
  }
}

class scrollingObject {
  constructor(scene,x,y,w,h,sprite,frame,obj){
    this.obj = scene.add.tileSprite(x,y,w,h,sprite,frame).setOrigin(obj.x,obj.y);
    

  }
  getObject(){
    return this.obj;
  }
  move(speedX){
    this.obj.tilePositionX +=speedX;
  }
 
}

function setGameSize(el,width=true,height=true){

if(width){
 // if(el.displayWidth>gameWidth) return;
    el.displayWidth = gameWidth;
}
if(height){
  el.displayHeight = gameHeight;
}
}

function chanceRoll(chanceToWin){
   if(chanceToWin >= Phaser.Math.Between(1, 100))
     return true
}


const changeScene = (context,func,sceneToStart)=>{

  const blackScreen =  new background(context,"sceneChangeScreen").setAlpha(0.1).setDepth(1.2);
      context.tweens.add({
        targets:blackScreen,
        alpha:1,
        duration:150,
        onComplete:()=>{
   
         func(context,sceneToStart);
        }
      })
}

const sceneIntro = (context,duration=150) =>{
  const blackScreen =  new background(context,"sceneChangeScreen").setDepth(1.2)
  

context.tweens.add({
    targets:blackScreen,
    alpha:0,
    duration:duration,
    onComplete:()=>{
      blackScreen.destroy();
    }
  })
}





