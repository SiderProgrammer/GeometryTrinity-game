

class obstacleFundament extends Phaser.GameObjects.Image{
  constructor(scene,x,y,sprite,frame){
    super(scene,x,y,sprite,frame)
    this.setDepth(0.23)
    scene.add.existing(this)

  
    this.setTint(scene.obstacleTint)
    this.setName("triangle")

  }
  leftScreen(scene){
    if(!heroConfig.generalOptions.performanceBoost){
   const particles = scene.add.particles("game",this.frame.name);
   particles.createEmitter({
      y:this.y,
      
      x:{
        min:this.x+50,
        max:this.x
      },

        lifespan:1500,
        scale:0.3,
        alpha:{
          start:1,
          end:0,
        },
        gravityY:-350,
        accelerationX: 150,
  rotate:{
    start:0,
    end:220
  },
        maxParticles:10,
        quantity:1,
        frequency:1,
      
   
   })
  };
  
   this.aura.displayHeight = 62
   this.displayHeight = 50
 
this.removeObstacle(scene);
  
   
     }
}

class obstacle extends obstacleFundament{
  constructor(scene,x=0,y=0,sprite="game",frame="obstacle_11"){
    super(scene,x,y,sprite,frame)
    this.setOrigin(0.5,1)
    this.aura = scene.add.sprite(this.x,this.y-  this.displayHeight/2,"game","obstacleAura").setDepth(0.24);
     scene.obstacleArray.push(this)

     scene.trianglesHitBox.push(new Phaser.Geom.Triangle.BuildEquilateral())
   
  }

updateHitBox($scene,x){

  const scene = $scene;
  const obstacle = scene.obstacleArray[x];
  const hitbox = scene.trianglesHitBox[x];

hitbox.x1 = obstacle.x - obstacle.displayWidth/2
hitbox.y1 =obstacle.y
hitbox.y2 = obstacle.y
hitbox.x2  =  obstacle.x+obstacle.displayWidth/2
hitbox.y3 = obstacle.y -obstacle.displayHeight;
hitbox.x3  = obstacle.x
//scene.graphics.strokeTriangleShape(hitbox);

}


        removeObstacle(scene){
      this.setActive(false).setVisible(false)
      this.aura.setActive(false).setVisible(false)
       scene.obstacleArray.shift()
       scene.obstacleArrayPool.push(this);
       scene.trianglesHitBox.shift()
   
        }
};

class reverseObstacle extends obstacleFundament{
  constructor(scene,x,y,sprite="game",frame="obstacle_11"){
    super(scene,x,y,sprite,frame)
   
    this.aura = scene.add.sprite(this.x,this.y+this.displayHeight/2,"game","obstacleAura").setDepth(0.24);
    this.aura.flipY = true;
    scene.reverseObstacleArray.push(this);
    scene.reverseTrianglesHitBox.push(new Phaser.Geom.Triangle.BuildEquilateral())
    this.flipY = true;
    this.setOrigin(0.5,0);
  }
  updateHitBox($scene,x){

    const scene = $scene;
    const obstacle = scene.reverseObstacleArray[x];
    const hitbox = scene.reverseTrianglesHitBox[x];
  
  hitbox.x1 = obstacle.x - obstacle.displayWidth/2
  hitbox.y1 =obstacle.y 
  hitbox.y2 = obstacle.y 
  hitbox.x2  =  obstacle.x + obstacle.displayWidth/2
  hitbox.y3 = obstacle.y  + obstacle.displayHeight;
  hitbox.x3  = obstacle.x
  //scene.graphics.strokeTriangleShape(hitbox);
  }
  
  removeObstacle(scene){
    this.destroy()
    this.aura.destroy();
     scene.reverseObstacleArray.shift()
     scene.reverseTrianglesHitBox.shift()
      }

}

class saw extends Phaser.GameObjects.Sprite{
  constructor(scene,x,y,sprite="game",frame){
    super(scene,x,y,sprite,frame);
    scene.add.existing(this)
    scene.physics.world.enable(this);
    this.body.setImmovable(true)
    this.body.setCircle(this.displayWidth/2);

  }
  move(scene,startSpeed){
    const lastFloor = scene.floorArray[scene.floorArray.length-1];
    const rightAdditionalSpeed =  Math.abs(scene.floorSpeed+3.5)
  let floorSpeed = scene.floorSpeed
  let sawSpeedLeft = floorSpeed-1;
  let sawSpeedRight = floorSpeed+rightAdditionalSpeed;
  let sawSpeed;
  
if(startSpeed == "random"){
  if(chanceRoll(50)){
    sawSpeed = sawSpeedLeft
    }else{
      sawSpeed = sawSpeedRight 
    }
}else{
  switch(startSpeed){
    case "right": sawSpeed = sawSpeedRight;
    break;
    case "left" : sawSpeed = sawSpeedLeft;
    break;
  }
}
   
    const update = () =>{
     
    this.x+= sawSpeed 
      
      if(this.x - this.displayWidth/2 < lastFloor.x + 65){   
        sawSpeed = sawSpeedRight;
      }
      
      else if(this.x + this.displayWidth/2 > lastFloor.x + lastFloor.displayWidth - 65){
     sawSpeed = sawSpeedLeft;
      }
      
  if(lastFloor.x + lastFloor.displayWidth < 0 ){
 this.destroy()
    event.removeListener("postupdate",update)
    }  
};
  
  
   const event = scene.events.on('postupdate',update);
  }
}


class block extends Phaser.GameObjects.Sprite{
  constructor(scene,x,y,sprite = "game",frame="block"){
    super(scene,x,y,sprite,frame);
    scene.add.existing(this)
    scene.physics.world.enable(this);
    this.body.setImmovable(true)
    this.setName("block")
    this.setDepth(0.23)
    this.canTriangleBounce = false;
    this.canCircleBounce = true
    this.canSquareBounce = true;
    this.setOrigin(0.5,1)
    this.body.setOffset(-5,0);
    this.setTint(scene.blockObstacleTint); 
    this.aura = scene.add.sprite(this.x,this.y-this.displayHeight/2,"game","block_aura").setDepth(0.22)
 
  }
    kill(){ 
      this.aura.destroy()
      this.destroy()
    }
}