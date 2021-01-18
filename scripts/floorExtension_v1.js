
class floorExtension extends Phaser.GameObjects.Sprite{
  constructor(scene,x=0,y=0,sprite = "floors",frame ="flying_floor_2Hit"){
    super(scene,x,y,sprite,frame)
   this.setOrigin(0.5,0)
    this.setDepth(0.2);
    this.scene = scene;
scene.add.existing(this);
scene.physics.world.enable(this);
this.body.setImmovable(true);
scene.floorArray.push(this)
this.isFlying = true;
this.showObstacle = false;
this.name = "flying"
this.canTriangleBounce = true;
this.canSquareBounce = false;
this.canCircleBounce = false;
this.setTint(scene.shortFlyingFloorTint)

this.shadow = new floorShadow(scene,x,y,"floors","flying_floor_2aura")
this.shadow.setTint(scene.floorAuraUpTint)
this.hitCenter = new floorShadow(scene,x,y,"floors","flying_floor_2HitCenter").setDepth(0.21).setOrigin(0.5,0).setVisible(false);

this.elements = [this.shadow,this.hitCenter]

this.update = () =>{
  this.elements.forEach(el=>{
    el.follow(this.x,this.y)
  })
}
this.event = scene.events.on('postupdate',this.update)
  }
 
  activateTextureFromPool(scene,x,y,sprite,displayAura = true){
    this.x = x;
    this.y = y;
    this.setOrigin(0.5,0)
    this.setDepth(0.2);

    this.setTexture("floors",sprite)
    this.canTriangleBounce = true;
    this.canSquareBounce = false;
    this.canCircleBounce = false;
    this.body.setImmovable(true)
 
    scene.floorArray.push(this);
    
  this.setActive(true).setVisible(true)
    this.elements.forEach(el=>el.setVisible(true).setActive(true)); 
    this.hitCenter.setVisible(false);

    this.update = () =>{
      this.elements.forEach(el=>{
        el.follow(this.x,this.y)
      })
    }
    this.event = scene.events.on('postupdate',this.update)
    
    return this
  }

  leftScreen(scene){
    this.isFirstFlyingUpperFloor = false;
     this.setVisible(false).setActive(false)
this.elements.forEach(el=>el.setVisible(false).setActive(false));
  this.event.removeListener("postupdate",this.update)
  scene.floorArrayPool.push(this);
     scene.floorArray.shift()
   };

isCenter(hero){
const centerPower = 500;
const otherPower = 400;

  if(Math.abs(this.x  - hero.x) <=30){
new boost(this.scene,this.x+30,this.y - 200,"boost")
 
   this.hitCenter.setVisible(true);
   hero.speedY = -centerPower ;
   hero.boostPower= centerPower ;
  }else {

    hero.speedY= -otherPower 
    hero.boostPower= otherPower ;
  }
}

shine(scene){

  const shine = new floorUpAura(scene,this.x,this.y,"floors",this.shadow.frame.name);
  scene.tweens.add({
    targets:shine,
    alpha:0,
    duration:500,
    onComplete:()=>{
      scene.events.removeListener("postupdate",func);
    }
  })
  const func = ()=>{
    shine.x = this.x 
    shine.y = this.y;
  }
  
   scene.events.on("postupdate",func)

   
}


checkFallDown(gravity){
  if(this.body.gravity.y == gravity) return;

 const $boost=  new boost(this.scene,this.x+this.displayWidth/2,this.y -140,"boost").setTint("0xff0000")
$boost.angle = 180;
  this.body.gravity.y =gravity;

  return true;
}


}


class floorShadow extends Phaser.GameObjects.Sprite{
  constructor(scene,x,y,sprite="floors",frame="flying_floor_2aura"){
    super(scene,x,y,sprite,frame)
    scene.add.existing(this);
    this.setOrigin(0.5,1)

  }

  follow(x,y){
this.x =x
this.y = y

  }



}

