
class floor extends Phaser.GameObjects.Sprite{
constructor(scene,x,y,sprite = "floors",frame = scene.floorSkins.bigFloorSkin,displayAura=true){
    super(scene,x,y,sprite,frame)
    this.setOrigin(0,0)
    this.setDepth(0.2);
scene.add.existing(this);
scene.physics.world.enable(this);


this.setTint(scene.floorTint);
this.displayAura = displayAura
this.showObstacle= true
this.canTriangleBounce = false;
this.canSquareBounce = true;
this.canCircleBounce = true;
this.body.setImmovable(true)

scene.floorArray.push(this);
this.getAuraIfExists(scene,x,y,frame);

}
getAuraIfExists(scene,x,y,sprite){

  if(this.displayAura){
    const textureNumber = sprite.match(/\d+/)
    if(scene.floorSkins.floorAura && scene.floorSkins.floorUpAura){
      this.aura = new floorAura(scene,x,this.y+this.displayHeight/2,"floors",`floorAura_${textureNumber}`);
     this.aura_up = new floorUpAura(scene,x,this.y,"floors",`floorUpAura_${textureNumber}`);
    
      this.update = () =>{
        this.aura_up.x = this.x+this.displayWidth/2
        this.aura.x = this.x+this.displayWidth/2
      }
    }
    
    else if(scene.floorSkins.floorAura){
      this.aura = new floorAura(scene,x,this.y+this.displayHeight/2,"floors",`floorAura_${textureNumber}`);
     this.update = () =>{
        this.aura.x = this.x+this.displayWidth/2
      }
    }
    else if(scene.floorSkins.floorUpAura){
      this.aura_up = new floorUpAura(scene,x,this.y,"floors",`floorUpAura_${textureNumber}`);
      this.update = () =>{
        this.aura_up.x = this.x+this.displayWidth/2
       }
      }
      this.event = scene.events.on('postupdate',this.update)
    };
   
}  


activateTextureFromPool(scene,x,y,sprite,displayAura=true){
  this.isSimple = false;

  this.showObstacle = true;
  this.isBig = false
  this.x = x;
  this.y = y;
this.flipY = false;
  this.displayAura = displayAura
  this.setTexture("floors",sprite)
  
this.body.setImmovable(true)
this.body.setSize(this.displayWidth,this.displayHeight)
  const textureNumber = sprite.match(/\d+/)
  scene.floorArray.push(this);
  
this.setActive(true).setVisible(true)

if(!this.displayAura) return this;
if(this.aura && this.aura_up){
 

  this.aura.flipY = false;
  this.aura_up.flipY = false;
  this.aura.setTexture("floors",`floorAura_${textureNumber}`);
  this.aura_up.setTexture("floors",`floorUpAura_${textureNumber}`)
  this.aura.setVisible(true).setActive(true);
  this.aura_up.setVisible(true).setActive(true);

  this.update = () =>{
    this.aura.x = this.x+this.displayWidth/2
    this.aura_up.x = this.x+this.displayWidth/2
  }
  this.aura.y = this.y+this.displayHeight/2
  this.aura_up.y = this.y
}
else if(this.aura){
  this.aura.setTexture("floors",`floorAura_${textureNumber}`)
  this.aura.setVisible(true).setActive(true);
  this.update = () =>{
    this.aura.x = this.x+this.displayWidth/2
  }
  this.aura.y = this.y+this.displayHeight/2
 
  this.aura.flipY = false;
  
}else if(this.aura_up){
  this.aura_up.setTexture("floors",`floorUpAura_${textureNumber}`) 
  this.aura_up.setVisible(true).setActive(true);
  this.update = () =>{
    this.aura_up.x = this.x+this.displayWidth/2
  }
  this.aura_up.y = this.y
  this.aura_up.flipY = false;
}
this.event = scene.events.on('postupdate',this.update)
  return this
}

shine(scene,isBoost){


const shine = new floorUpAura(scene,this.x,this.y,"floors",this.aura_up.frame.name)
if(!isBoost) shine.setAlpha(0.4)
scene.tweens.add({
  targets:shine,
  alpha:0,
  duration:500,
  onComplete:()=>{
    scene.events.removeListener("postupdate",func);
  }
})
const func = ()=>{
  shine.x = this.x + this.displayWidth/2
  shine.y = this.y;
}

 scene.events.on("postupdate",func)

}

 leftScreen(scene){
  this.setVisible(false).setActive(false);
 if(this.aura)this.aura.setActive(false).setVisible(false) 
if(this.aura_up)this.aura_up.setActive(false).setVisible(false)
 
if(this.event)   this.event.removeListener('postupdate',this.update)
if(this.frame.name != "startingFloor" )scene.floorArrayPool.push(this)
    scene.floorArray.shift()
  }
};



class floorAura extends Phaser.GameObjects.Image{
  constructor(scene,x,y,sprite = "floors",frame){
    super(scene,x,y,sprite,frame);
    scene.add.existing(this)
this.setTint(scene.floorAuraTint)
    this.setDepth(0.21);
this.scene = scene;

  }
  
}

class floorUpAura extends Phaser.GameObjects.Image{
  constructor(scene,x,y,sprite = "floors",frame){
    super(scene,x,y,sprite,frame);
    scene.add.existing(this)
    this.setDepth(0.22);
this.setOrigin(0.5,1);
this.setTint(scene.floorAuraUpTint)
  }
}


