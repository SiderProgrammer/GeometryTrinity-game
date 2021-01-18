
class polygonMap{
constructor(scene){
   this.scene  = scene;
   this.BGspeed = 0.4;

 this.backgroundObj = new scrollingObject(scene,0,0,gameWidth,gameHeight,'polygonBG',0,{x:0,y:0});
 
    this.background = this.backgroundObj.getObject();
    this.background .setTint(scene.backgroundTint);

}
  scroll(){
this.backgroundObj.move(this.BGspeed)
  }

}


class startMap{
  constructor(scene){
     this.scene  = scene;
     this.BGspeed = 0.4;
  
   this.backgroundObj = new scrollingObject(scene,0,0,gameWidth,gameHeight,'startBG',0,{x:0,y:0});
   
      this.background = this.backgroundObj.getObject();
   
  
  }
    scroll(){
  this.backgroundObj.move(this.BGspeed)
    }
  
  }
class perspectiveMap{
  constructor(scene){
     this.scene  = scene;
     this.BGspeed = 0.4;
  
   this.backgroundObj = new scrollingObject(scene,0,0,gameWidth,gameHeight,'perspectiveBG',0,{x:0,y:0});
  
      this.background = this.backgroundObj.getObject();
      this.background .setTint(scene.backgroundTint);

  }
    scroll(){
  this.backgroundObj.move(this.BGspeed)
    }
  
  }

class tilesMap{
  constructor(scene){
     this.scene  = scene;
     this.BGspeed = 0.4;
  
   this.backgroundObj = new scrollingObject(scene,0,0,gameWidth,gameHeight,'tilesBG',0,{x:0,y:0});
  
      this.background = this.backgroundObj.getObject();
      this.background .setTint(scene.backgroundTint);
  
  
  }
    scroll(){
  this.backgroundObj.move(this.BGspeed)
    }
  
  }
  


class mountainMap{
    constructor(scene){
        this.scene = scene;
        this.BG_peaceup_speed  = 0.3;
        this.BG_peacedown_speed = 0.5
        this.clouds_speed = 0.2;
        
        const textures = game.textures.list.backgrounds2.frames

   this.cloudsObj = new scrollingObject(scene,0,0,gameWidth,
    textures.mountainBG_clouds.height,"backgrounds2",'mountainBG_clouds',{x:0,y:0});
       this.clouds = this.cloudsObj.getObject();

  this.upPeaceObj = new scrollingObject(scene,0,gameHeight-100,gameWidth,
    textures.mountainBG_up.height,"backgrounds2",'mountainBG_up',{x:0,y:1});
  this.upPeace = this.upPeaceObj.getObject();

  this.downPeaceObj = new scrollingObject(scene,0,gameHeight,gameWidth,
    textures.mountainBG_down.height,"backgrounds2",'mountainBG_down',{x:0,y:1});
  this.downPeace = this.downPeaceObj.getObject();
  

    }

    scroll(){
        this.upPeaceObj.move(this.BG_peaceup_speed)
       this.downPeaceObj.move( this.BG_peacedown_speed)
        this.cloudsObj.move(this.clouds_speed);
          }
       
}

class sunnyMap{
  constructor(scene){
      this.scene = scene;
      this.BG_peaceup_speed  = 0.3;
      this.BG_peacedown_speed = 0.5
      this.clouds_speed = 0.2;

      const textures = game.textures.list.backgrounds2.frames

 this.cloudsObj = new scrollingObject(scene,0,0,gameWidth,
  textures.sunnyBG_clouds.height,"backgrounds2",'sunnyBG_clouds',{x:0,y:0});
     this.clouds = this.cloudsObj.getObject();

this.upPeaceObj = new scrollingObject(scene,0,gameHeight-40,gameWidth,
  textures.sunnyBG_up.height,"backgrounds2",'sunnyBG_up',{x:0,y:1});
this.upPeace = this.upPeaceObj.getObject();

this.downPeaceObj = new scrollingObject(scene,0,gameHeight,gameWidth,
  textures.sunnyBG_down.height,"backgrounds2",'sunnyBG_down',{x:0,y:1});
this.downPeace = this.downPeaceObj.getObject();


  }

  scroll(){
      this.upPeaceObj.move(this.BG_peaceup_speed)
     this.downPeaceObj.move( this.BG_peacedown_speed)
      this.cloudsObj.move(this.clouds_speed);
        }
      
}

class greenMap{
  constructor(scene){
      this.scene = scene;
      this.BG_peaceup_speed  = 0.3;
      this.BG_peacedown_speed = 0.5
      this.clouds_speed = 0.2;
      
      const textures = game.textures.list.backgrounds2.frames
 this.cloudsObj = new scrollingObject(scene,0,0,gameWidth,
  textures.greenBG_clouds.height,
  "backgrounds2",'greenBG_clouds',{x:0,y:0});

     this.clouds = this.cloudsObj.getObject();

this.upPeaceObj = new scrollingObject(scene,0,gameHeight-80,gameWidth,
  textures.greenBG_up.height,"backgrounds2",'greenBG_up',{x:0,y:1});
this.upPeace = this.upPeaceObj.getObject();

this.downPeaceObj = new scrollingObject(scene,0,gameHeight,gameWidth,
  textures.greenBG_down.height,"backgrounds2",'greenBG_down',{x:0,y:1});
this.downPeace = this.downPeaceObj.getObject();


  }

  scroll(){
      this.upPeaceObj.move(this.BG_peaceup_speed)
     this.downPeaceObj.move( this.BG_peacedown_speed)
      this.cloudsObj.move(this.clouds_speed);
        }
   
}

class cityMap{
  constructor(scene){
      this.scene = scene;
      this.BG_peaceup_speed  = 0.3;
      this.BG_peacedown_speed = 0.5
      this.sky_speed = 0.2;

      const textures = game.textures.list.backgrounds1.frames

 this.skyObj = new scrollingObject(scene,0,0,gameWidth,
  textures.cityBG_sky.height,"backgrounds1",'cityBG_sky',{x:0,y:0});
     this.sky = this.skyObj.getObject();

this.upPeaceObj = new scrollingObject(scene,0,gameHeight-57,gameWidth,
  textures.cityBG_up.height,"backgrounds1",'cityBG_up',{x:0,y:1});
this.upPeace = this.upPeaceObj.getObject();

this.downPeaceObj = new scrollingObject(scene,0,gameHeight,gameWidth,
  textures.cityBG_down.height,"backgrounds1",'cityBG_down',{x:0,y:1});
this.downPeace = this.downPeaceObj.getObject();


  }

  scroll(){
      this.upPeaceObj.move(this.BG_peaceup_speed)
     this.downPeaceObj.move( this.BG_peacedown_speed)
      this.skyObj.move(this.sky_speed);
        }
      
    
}

class pinkMountainMap{
  constructor(scene){
      this.scene = scene;
      this.BG_peaceup_speed  = 0.3;
      this.BG_peacedown_speed = 0.5
      this.sky_speed = 0.2;
      
      const textures = game.textures.list.backgrounds2.frames

 this.skyObj = new scrollingObject(scene,0,0,gameWidth,
  textures.pinkMountainsBG_sky.height,"backgrounds2",'pinkMountainsBG_sky',{x:0,y:0});
     this.sky = this.skyObj.getObject();

this.upPeaceObj = new scrollingObject(scene,0,gameHeight-50,gameWidth,
  textures.pinkMountainsBG_up.height,"backgrounds2",'pinkMountainsBG_up',{x:0,y:1});
this.upPeace = this.upPeaceObj.getObject();

this.downPeaceObj = new scrollingObject(scene,0,gameHeight,gameWidth,
  textures.pinkMountainsBG_down.height,"backgrounds2",'pinkMountainsBG_down',{x:0,y:1});
this.downPeace = this.downPeaceObj.getObject();


  }

  scroll(){
      this.upPeaceObj.move(this.BG_peaceup_speed)
     this.downPeaceObj.move( this.BG_peacedown_speed)
      this.skyObj.move(this.sky_speed);
        }
   
}

class pinkForestMap{
  constructor(scene){
      this.scene = scene;
      this.BG_peaceup_speed  = 0.3;
      this.BG_peacedown_speed = 0.5
      this.sky_speed = 0.2;
      
      const textures = game.textures.list.backgrounds3.frames

 this.skyObj = new scrollingObject(scene,0,0,gameWidth,
  textures.pinkForestBG3.height,"backgrounds3",'pinkForestBG3',{x:0,y:0});
     this.sky = this.skyObj.getObject();

this.upPeaceObj = new scrollingObject(scene,0,gameHeight-40,gameWidth,
  textures.pinkForestBG2.height,"backgrounds3",'pinkForestBG2',{x:0,y:1});
this.upPeace = this.upPeaceObj.getObject();

this.downPeaceObj = new scrollingObject(scene,0,gameHeight,gameWidth,
  textures.pinkForestBG1.height,"backgrounds3",'pinkForestBG1',{x:0,y:1});
this.downPeace = this.downPeaceObj.getObject();


  }

  scroll(){
      this.upPeaceObj.move(this.BG_peaceup_speed)
     this.downPeaceObj.move( this.BG_peacedown_speed)
      this.skyObj.move(this.sky_speed);
        }
   
}

class caveMap{
  constructor(scene){
      this.scene = scene;
      this.BG_speed  = 0.6;
      this.BG_middle_speed = 0.8
      
      const textures = game.textures.list.backgrounds1.frames

this.middlePeaceObj = new scrollingObject(scene,0,0,gameWidth,
  textures.caveBG_middle.height,"backgrounds1",'caveBG_middle',{x:0,y:0});
this.middlePeace = this.middlePeaceObj.getObject();

this.backgroundPeaceObj = new scrollingObject(scene,0,0,gameWidth,
  textures.caveBG.height,"backgrounds1",'caveBG',{x:0,y:0});
this.backgroundPeace = this.backgroundPeaceObj.getObject();


  }

  scroll(){
    this.middlePeaceObj.move(this.BG_middle_speed)
    this.backgroundPeaceObj.move(  this.BG_speed)
     
        }
 
}

class simpleMap{
  constructor(scene){
      this.scene = scene;
      this.BG_speed  = 0.6;
      this.BG_middle_speed = 0.8
      
      const textures = game.textures.list

this.backgroundPeaceObj = new scrollingObject(scene,0,0,gameWidth,
  854,'simpleBG',0,{x:0,y:0});
this.backgroundPeace = this.backgroundPeaceObj.getObject();

this.middlePeaceObj = new scrollingObject(scene,0,150,gameWidth,
  textures.simpleBG_line.height,'simpleBG_line',0,{x:0,y:0});
this.middlePeace = this.middlePeaceObj.getObject();


  }

  scroll(){
    this.middlePeaceObj.move(this.BG_middle_speed)
    this.backgroundPeaceObj.move(  this.BG_speed)
     
        }
 
}

class circlesMap{
  constructor(scene){
      this.scene = scene;
      this.BG_speed  = 0.6;
    
this.backgroundPeaceObj = new scrollingObject(scene,0,0,gameWidth,gameHeight,'circlesBG',0,{x:0,y:0});
this.backgroundPeace = this.backgroundPeaceObj.getObject();
this.backgroundPeace.setTint(scene.backgroundTint);


  }

  scroll(){
    this.backgroundPeaceObj.move(  this.BG_speed)
     
        }
 
}

class bricksMap{
  constructor(scene){
      this.scene = scene;
      this.BG_speed  = 0.6;
    
this.backgroundPeaceObj = new scrollingObject(scene,0,0,gameWidth,0,'bricksBG',0,{x:0,y:0});
this.backgroundPeace = this.backgroundPeaceObj.getObject();
this.backgroundPeace.setTint(scene.backgroundTint);


  }

  scroll(){
    this.backgroundPeaceObj.move(  this.BG_speed)
     
        }
 
}

class graveyardMap{
  constructor(scene){
      this.scene = scene;
      this.BG_peaceup_speed  = 0.3;
      this.BG_peacedown_speed = 0.5
      this.sky_speed = 0.2;
      
      const textures = game.textures.list.backgrounds1.frames

 this.skyObj = new scrollingObject(scene,0,0,gameWidth,
  textures.graveyardBG_up.height,"backgrounds1",'graveyardBG_up',{x:0,y:0});
     this.sky = this.skyObj.getObject();

this.upPeaceObj = new scrollingObject(scene,0,250,gameWidth,
  textures.graveyardBG_middle.height,"backgrounds1",'graveyardBG_middle',{x:0,y:0});
this.upPeace = this.upPeaceObj.getObject();

this.downPeaceObj = new scrollingObject(scene,0,gameHeight,gameWidth,
  textures.graveyardBG_down.height,"backgrounds1",'graveyardBG_down',{x:0,y:1});
this.downPeace = this.downPeaceObj.getObject();



  }

  scroll(){
      this.upPeaceObj.move(this.BG_peaceup_speed)
     this.downPeaceObj.move( this.BG_peacedown_speed)
      this.skyObj.move(this.sky_speed);
        }
   
}


class cakeMap{
  constructor(scene){
      this.scene = scene;
      this.BG_peaceup_speed  = 0.3;
      this.BG_peacedown_speed = 0.5
      this.sky_speed = 0.2;
      
      const textures = game.textures.list.backgrounds1.frames

 this.skyObj = new scrollingObject(scene,0,0,gameWidth,
  textures.cakeBG_up.height,"backgrounds1",'cakeBG_up',{x:0,y:0});
     this.sky = this.skyObj.getObject();

this.upPeaceObj = new scrollingObject(scene,0,gameHeight-23,gameWidth,
  textures.cakeBG_middle.height,"backgrounds1",'cakeBG_middle',{x:0,y:1});
this.upPeace = this.upPeaceObj.getObject();

this.downPeaceObj = new scrollingObject(scene,0,gameHeight,gameWidth,
  textures.cakeBG_down.height,"backgrounds1",'cakeBG_down',{x:0,y:1});
this.downPeace = this.downPeaceObj.getObject();



  }

  scroll(){
      this.upPeaceObj.move(this.BG_peaceup_speed)
     this.downPeaceObj.move( this.BG_peacedown_speed)
      this.skyObj.move(this.sky_speed);
        }
   
}

class snowMap{
  constructor(scene){
      this.scene = scene;
      this.BG_peaceup_speed  = 0.3;
      this.BG_peacedown_speed = 0.5
      this.sky_speed = 0.2;
      
      const textures = game.textures.list.backgrounds2.frames

 this.skyObj = new scrollingObject(scene,0,0,gameWidth,
  textures.snowBG_up.height,"backgrounds2",'snowBG_up',{x:0,y:0});
     this.sky = this.skyObj.getObject();

this.upPeaceObj = new scrollingObject(scene,0,gameHeight-85,gameWidth,
  textures.snowBG_middle.height,"backgrounds2",'snowBG_middle',{x:0,y:1});
this.upPeace = this.upPeaceObj.getObject();

this.downPeaceObj = new scrollingObject(scene,0,gameHeight,gameWidth,
  textures.snowBG_down.height,"backgrounds2",'snowBG_down',{x:0,y:1});
this.downPeace = this.downPeaceObj.getObject();

  }

  scroll(){
      this.upPeaceObj.move(this.BG_peaceup_speed)
     this.downPeaceObj.move( this.BG_peacedown_speed)
      this.skyObj.move(this.sky_speed);
        }
   
}