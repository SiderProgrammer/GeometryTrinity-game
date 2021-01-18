
let soundManager = {};

class preloader extends Phaser.Scene{
  constructor(){
    super({key:'preloader'})
  }

preload(){
  this.load.image("dot","img/loader/dot.png");
  this.load.image("loadScreen_figures","img/loader/loadScreen_figures.png");
  this.load.image("loadScreenBG","img/loader/loadScreenBG.png");
  this.load.image("loadScreenText","img/loader/loadScreenText.png");
// images to loading screen

}
  create(){
    this.scene.start('loader')
  }
}



class loader extends Phaser.Scene{
  constructor(){
    super({key:'loader'})
  }



loadHeroSkins(){
  const skins_amount =42;
 
  for(let i=4;i<=skins_amount;i++){
    this.load.image(`square_${i}`,`img/skins/square/SquareSkin${i}.png`);
    this.load.image(`triangle_${i}`,`img/skins/triangle/TriangleSkin${i}.png`);
    this.load.image(`circle_${i}`,`img/skins/circle/CircleSkin${i}.png`);
  }
 
}

loadBackgrounds(){
 
  this.load.image("tutorialBG","img/backgrounds/tutorialBG.png");
  this.load.image("caveBG2","img/backgrounds/caveBG2.png");
  this.load.image("tilesBG","img/backgrounds/levelsBackgrounds/tilesBG.png");
  this.load.image("polygonBG","img/backgrounds/levelsBackgrounds/polygonBG.png");
  this.load.image("perspectiveBG","img/backgrounds/levelsBackgrounds/perspectiveBG.png");
  this.load.image("tilesBG","img/backgrounds/levelsBackgrounds/tilesBG.png");
  this.load.image("bricksBG","img/backgrounds/levelsBackgrounds/bricksBG.png");
  this.load.image("circlesBG","img/backgrounds/levelsBackgrounds/circlesBG.png");
  this.load.image('endBG','img/backgrounds/endBG.png');
  this.load.image("startBG","img/backgrounds/levelsBackgrounds/startBG.png");
  this.load.image("simpleBG","img/backgrounds/levelsBackgrounds/simpleBG.png");
  this.load.image("simpleBG_line","img/backgrounds/levelsBackgrounds/simpleBG_line.png");

  this.load.image("shopBG2", 'img/backgrounds/shopBG2.png');

  this.load.image("menubg3",'img/backgrounds/menubg3.png');

  this.load.image("sceneChangeScreen","img/backgrounds/sceneChangeScreen.png");
  this.load.image('levelSelectBG','img/backgrounds/levelSelectBG3.png');

}
loadButtons(){
  this.load.image('specialShop-button','img/buttons/specialShop-button.png')
  this.load.image('play-button','img/buttons/play-button.png')
  this.load.image('buy-button','img/buttons/buy-button.png')
  this.load.image('refresh-button-huge','img/buttons/refresh-button-huge.png')
  this.load.image('refresh-button-big','img/buttons/refresh-button-big.png')
  this.load.image('login-button','img/buttons/login-button.png')
  this.load.image('info-button','img/buttons/info-button.png')
  this.load.image('options-button','img/buttons/options-button.png')
  this.load.image('shop-button','img/buttons/shop-button.png')
  this.load.image('tutorial-button','img/buttons/tutorial-button.png')
  this.load.image('tip-button','img/buttons/tip-button.png')
  this.load.image('ok-button','img/buttons/ok-button.png')
  this.load.image('arrow_button','img/buttons/arrow_button3.png')
  this.load.image('arrow_button2','img/buttons/arrow_button2.png')
  this.load.image('top3','img/buttons/top3.png')
  this.load.image('nextLevel_button','img/buttons/nextLevel_button.png')
  this.load.image('nextLevel_button_huge','img/buttons/nextLevel_button_huge.png')
}
loadShopAdditives(){
  this.load.atlas("candle","img/shop_additives/candle/candle.png","img/shop_additives/candle/candle.json");
  this.load.spritesheet('lightButton','img/shop_additives/lightButton.png',{frameWidth:54.5,frameHeight:56});
}
loadLevelSelectAdditives(){
 

  this.load.image("levelSelect_up","img/level_select_additives/levelSelect_up.png");
  this.load.spritesheet("levelRect_aura", 'img/level_select_additives/levelRect_aura.png',{frameWidth:111,frameHeight:111});
this.load.spritesheet("levelRect", 'img/level_select_additives/levelRect2.png',{frameWidth:111,frameHeight:111});
}
loadLevelAdditives(){
 
  this.load.atlas('monster', 'img/level_additives/monster.png', 'img/level_additives/monster.json');

 

  this.load.image("spikeTexture","img/level_additives/spikeTexture.png");

  this.load.atlas("boost","img/level_additives/boost.png","img/level_additives/boost.json");
  this.load.atlas("lamp","img/level_additives/lamp/lamp.png","img/level_additives/lamp/lamp.json");
  this.load.atlas("owl","img/level_additives/owl/owl.png","img/level_additives/owl/owl.json");
  this.load.atlas("thunder","img/level_additives/thunder/thunder.png","img/level_additives/thunder/thunder.json");
  
  this.load.atlas("dieEffect","img/level_additives/dieEffect/dieEffect.png","img/level_additives/dieEffect/dieEffect.json");
}
loadGeneral(){
  this.load.image('video-icon','img/general/video-icon.png');
  this.load.image('doubleMoney','img/general/doubleMoney.png');
  this.load.image('shadow','img/general/shadow2.png');

  this.load.image("chest","img/general/chest.png");
  this.load.image('present','img/general/present.png');
  this.load.image('videoButton','img/general/videoButton.png');
  this.load.image('videoButtonAura','img/general/videoButtonAura.png');
  this.load.image("glow",'img/general/glow.png')
  this.load.image("key",'img/general/key.png')
  this.load.image("tut-arrow",'img/general/tut-arrow.png')
}
loadBorders(){
  this.load.image('in-game-border','img/borders/in-game-border.png');
  this.load.image('black_border','img/borders/black_border.png');
 // this.load.image('colorful-border','img/borders/colorful-border.png');
}

loadFont(){
  this.load.bitmapFont('myfont', 'font.png', 'font.fnt');
}

loadSound(){
  for(let i =1;i<=7;i++){
    this.load.audio(`music_${i}`, `sound/music_${i}.mp3`);
  }
  for(let i =1;i<=5;i++){
    this.load.audio(`sound_${i}`, `sound/sound_${i}.ogg`);
  }

  this.load.audio("sound_6","sound/sound_6.mp3");

  this.load.audio("specialShop_music","sound/specialShop_music.mp3");
  this.load.audio('rotate_sound', 'sound/rotate_sound.ogg');
  this.load.audio('monster_sound', 'sound/monster_sound.mp3');
  this.load.audio('levelSelect_music', 'sound/levelSelect_music.mp3');
  this.load.audio('play_sound', 'sound/play_sound.mp3');
  this.load.audio('light_sound', 'sound/light_sound.mp3');

  this.load.audio('laser_prepare', 'sound/rodShot_prepare.ogg');
  this.load.audio('laser_shoot', 'sound/rodShot_sound.ogg');
  this.load.audio('buy_sound', 'sound/buy_sound.ogg');

  this.load.audio('die_sound', 'sound/die_sound.mp3');
  this.load.audio('thunder_sound', 'sound/thunder_sound.mp3')
  this.load.audio('menu_music', 'sound/menu_music.mp3');

  this.load.audio('skinClick_sound', 'sound/skinClick_sound.mp3');
  
}

loadFingers(){
  this.load.image('finger1','img/finger1.png');
  this.load.image('finger2','img/finger2.png');
  this.load.image('finger3','img/finger3.png');
  this.load.image('finger4','img/finger4.png');
   this.load.image('finger5','img/finger5.png');
}
preload(){
  const bg = this.add.image(gameWidth/2,gameHeight/2,"loadScreenBG")
    setGameSize(bg);
    this.add.image(gameWidth/2-40,gameHeight/2+130,"loadScreen_figures")
   
    this.add.image(gameWidth/2,100,"loadScreenText")
   
    const dots = new Array(3)
    for(let i=0;i<3;i++){
     dots[i] = this.add.image(gameWidth/2+119+18*i,170,"dot")
    }
   
    let dot = 0;

    const animateDots = ()=>{
      
     this.tweens.add({
       targets:dots[dot],
       y:"-=15",
       duration:250,
    yoyo:true,
       onComplete:()=>{
         dot++;
          
        if(dot == 3) dot =0
        animateDots()
       }
     })
     
    }
   animateDots()

this.loadFingers()
  this.loadBorders();
this.loadHeroSkins();

this.loadBackgrounds();

this.loadButtons();
this.loadSound();
this.loadShopAdditives();
this.loadLevelSelectAdditives();
this.loadLevelAdditives();
this.loadGeneral();
this.loadFont();
this.load.image('coin','coin.png');
this.load.image('controler','img/controler.png');
this.load.svg("tutorial_4","tutorial_4.svg")

this.load.atlas("floors","floors.png","floors.json");
this.load.atlas("game","game.png","game.json");
this.load.atlas("general","general.png","general.json");
this.load.atlas("backgrounds1","backgrounds1.png","backgrounds1.json");
this.load.atlas("backgrounds2","backgrounds2.png","backgrounds2.json");
this.load.atlas("backgrounds3","backgrounds3.png","backgrounds3.json");
}
  create(){
    
    soundManager ={
      sound_1:  this.sound.add("sound_1").setVolume(0.3),
      sound_2:this.sound.add("sound_2").setVolume(0.15),
      sound_3: this.sound.add("sound_3").setVolume(0.55),
      sound_4:this.sound.add("sound_4"),
      sound_5:this.sound.add("sound_5").setVolume(0.8),
      sound_6:this.sound.add("sound_6"),
     
      skinClick_sound:this.sound.add("skinClick_sound").setVolume(0.1),
      
      menu_music: this.sound.add("menu_music").setLoop(true),
      
     lightSound:this.sound.add("light_sound"),
     purchaseSound:this.sound.add("buy_sound"),
     levelSelect_music:this.sound.add("levelSelect_music").setLoop(true),
     
     play_sound:this.sound.add("play_sound"),
     
     music_1:this.sound.add("music_1").setVolume(0.9),
     music_2:this.sound.add("music_2").setVolume(0.8),
     music_3:this.sound.add("music_3"),
     music_4:this.sound.add("music_4"),
     music_5:this.sound.add("music_5"),
     music_6:this.sound.add("music_6"),
     music_7:this.sound.add("music_7"),
  
     thunder_sound: this.sound.add("thunder_sound").setVolume(0.7),
     die_sound:this.sound.add("die_sound").setVolume(0.3),
     rotate_sound: this.sound.add("rotate_sound").setRate(0.6),
     monster_sound: this.sound.add("monster_sound"),
     laserPrepare:this.sound.add("laser_prepare"),
     laserShoot:this.sound.add("laser_shoot"),
     specialShop_music: this.sound.add("specialShop_music"),
     
      }



    this.scene.start('menu')
    
  }

};
