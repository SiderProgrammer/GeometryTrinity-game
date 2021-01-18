

class shop extends Phaser.Scene{
  constructor(){
      super("shop");
  }


  create(){
  this.specialShopCost = 8000;
  this.specialShopLevel = 45;
game.shLevel.innerHTML = this.specialShopLevel;
game.shMoney.innerHTML = this.specialShopCost;
  
this.notEnoughWasShown = false;

    this.theme = soundManager.menu_music
    this.sound_3 = soundManager.sound_3
    this.lightSound = soundManager.lightSound
    this.purchaseSound = soundManager.purchaseSound

    javaHolder.sceneContext = this
    this.isFirstSkin = true;
   
    sceneIntro(this);
    this.shop = _shop

    this.squareShop = this.shop[0];
    this.triangleShop = this.shop[1];
    this.circleShop = this.shop[2];

  this.slotY = [gameHeight/2 -100,gameHeight/2,gameHeight/2+100,gameHeight/2+230,gameHeight/2-230];
    this.canChange = true;

    this.choosenScale = 1.01;
    this.unchoosenScale =1;
  this.showShop();
};


showShop(){
  const shopDiv = $('shop');
  shopDiv.show(1);
this.shopDiv = shopDiv;

this.notEnough = $("notEnough");
this.notEnough.hide();
this.skinReward = {}
  
this.getExitButton();
new background(this,'shopBG2');
this.add.sprite(gameWidth/2,gameHeight/2,"general","shopContainer")

this.getLevAndMoney()

this.skinRequirements=  $("skinRequirements");
this.skinRequirements.hide();

this.cost = $("moneyReq");
this.levelNeeded = $("heroLevelReq");

this.createContainers();
this.getBlinkingGuy();
this.getMovingMonster();
this.getLight();
this.shi = $("specialShopInfo")
this.canBuy = true;

this.anims.create({
  key:'candle',
  frames: this.anims.generateFrameNames('candle', { prefix: 'candle_', start: 1, end: 4}),
  frameRate: 10,
  repeat:-1,
})
const bigCandle = this.add.sprite(0,gameHeight,"candle").setDepth(1.02).setOrigin(0,1).setScale(0.8).play("candle")
bigCandle.displayHeight -= 20



this.getSpecialShopButton()
  }

  getSpecialShopButton(){
    new button(this,45,gameHeight*0.12,"specialShop-button").on("pointerup",()=>{

      if(heroConfig.specialShopUnlocked){
        if(!heroConfig.generalOptions.musicMuted) this.theme.stop();
        this.scene.start("specialShop")
        return;
      }
    
      if(!this.canBuy) return
if(this.notEnough.isSeen()){
  this.notEnoughWasShown  = true;
  this.notEnough.hide();
}

      this.canBuy = false;
      this.dimness = makeBorder(this,"sceneChangeScreen").setDepth(10).setAlpha(0.8);
      this.info1 = this.add.text(gameWidth/2,gameHeight*0.35,
 "There are legendary\n items here\n\n  We advise you\n to prepare a lot of cash\n\nYou must buy\nthe legendary key\n to unlock access.",{
    font:"30px LuckiestGuy",
    align:"center"
      }).setOrigin(0.5).setDepth(11);
    
      this.key = this.add.sprite(gameWidth-100,this.info1.y+this.info1.height/2+30,"key").setOrigin(0.5,0).setDepth(11);
     this.glow  = this.add.sprite(this.key.x,this.key.y+this.key.displayHeight/2,"glow").setDepth(10);
    
    this.tweens.add({
    targets:this.glow,
    angle:360,
    duration:4500,
    repeat:-1,
    })
    
    
    
      const cord = calcCordToPercent(0,this.info1.y+this.info1.height/2+30)
      this.shi.show();
    this.shi.style.top = cord.y
    
      this.skinRequirements.hide();
    
    if(heroConfig.currentMoney >=this.specialShopCost && heroConfig.heroLevel >=this.specialShopLevel){
      this.$buyButton = new button(this,this.key.x,this.info1.y+this.info1.height/2+220,"buy-button").on("pointerup",()=>{

        if(!heroConfig.generalOptions.musicMuted)   this.theme.stop()

        if(!heroConfig.generalOptions.soundMuted){
          this.purchaseSound.play()
        }
        heroConfig.currentMoney -= this.specialShopCost;
        this.exitButton.hide()
        this.heroLevelDiv.hide();
        this.moneyDiv.moneyDiv.hide()
        this.shi.hide();
        heroConfig.specialShopUnlocked = true;
        saveProgress()

        this.scene.start("specialShop");
      
      }).setDepth(11)
    }
    
    this.okButton = new button(this,gameWidth/2,this.info1.y+this.info1.height/2+220,"ok-button").on("pointerup",()=>{
      this.dimness.destroy()
      this.info1.destroy()
      this.okButton.destroy()
      this.shi.hide();
      this.key.destroy()
      this.glow.destroy()
    this.notEnoughWasShown = false;
    this.notEnough.show()
      if(this.$buyButton) this.$buyButton.destroy();
      this.canBuy = true;
    }).setDepth(11)
    })
  }


getExitButton(){
  this.exitButton = $("shopExitButton");
  this.exitButton.show()
  const sceneToStart = (context) => context.scene.start("menu");
  this.exitButton.onclick = () =>{
    if(!this.canBuy) return
   changeScene(this,sceneToStart);
   this.heroLevelDiv.hide();
   this.moneyDiv.moneyDiv.hide()

    this.shopDiv.hide();
  };

}
  getLevAndMoney(){
    this.moneyDiv = getMoney();
    this.moneyDiv.moneyDiv.style.right = "20px";
    this.moneyDiv.moneyDiv.style.top = "10%"
    
    this.heroLevelDiv = $("heroLevelDiv");
    this.heroLevelDiv.show();
    this.heroLevelDiv.style.top = "15px";
    this.heroLevelDiv.style.right = "20px";
    this.heroLevelDiv.style.left = "";
  }
getLight(){
let isLightTurnOn = false;
let turnOffTimeout = false;
let turnOnTimeout = false;

  const light = this.add.image(gameWidth/2,gameHeight,"general","lighTurnedOn").setOrigin(0.5,0).setDepth(1.01)
  light.y -= light.displayHeight;
  turnOffLight();
  
  function turnOffLight(){
    light.alpha = 0;
    turnOnTimeout = setTimeout(turnOnLight,150);
  }
  function turnOnLight(){
    if(!isLightTurnOn) return;
     light.alpha = 1 
     chanceRoll(50)? turnOffTimeout = setTimeout(turnOffLight,Phaser.Math.Between(7000,8000))
     :
     turnOffTimeout = setTimeout(turnOffLight,Phaser.Math.Between(100,200))
 
  }
  
  this.highlightTheSkin = () =>{
    if(isLightTurnOn) return;
    lightButton.setFrame(1);
    isLightTurnOn = true;
    turnOnLight();
  }
 
  
  const lightButton = new shopSkinButton(this,gameWidth/2 + 160,gameHeight-150,"lightButton")
  lightButton.on("pointerdown",()=>{
    if(!heroConfig.generalOptions.soundMuted){
      this.lightSound.play();
    }
   
    clearTimeout(turnOffTimeout);
    clearTimeout(turnOnTimeout);
   !isLightTurnOn ? (function(){
     lightButton.setFrame(1)
     isLightTurnOn = true;
     turnOnLight();
   })() :(function(){
     lightButton.setFrame(0);
    isLightTurnOn = false;
    turnOffLight();
   })() 
  })
}

getBlinkingGuy(){

  const blink = this.add.sprite(gameWidth/2-55,gameHeight/2-363,"general","blink");
  blink.alpha = 0
setTimeout(closedEyes,2000)

  function closedEyes(){
    blink.alpha =  1
    setTimeout(openedEyes,100)

  }
  function openedEyes(){  
    blink.alpha =0;
    setTimeout(closedEyes,Phaser.Math.Between(5000,7000));
}


}


getMovingMonster(){
  const monsterMove = this.physics.add.sprite(gameWidth/2+196,gameHeight/2-111,"general","monsterMove")
  .setDepth(0);
  
  monsterMove.alpha = 0
  setTimeout(move,2000)
  
    function move(){
      monsterMove.alpha =  1
      setTimeout(unmove,2000)
  
    }
    function unmove(){  
      monsterMove.alpha =0;
      setTimeout(move,Phaser.Math.Between(5000,7000));
  }
  
}
skinClicked(array,index,item,shop,figureIndexInShop,figure){

  if(!heroConfig.generalOptions.soundMuted) soundManager.skinClick_sound.play();
this.figureIndexInShop = figureIndexInShop;
this.figure = figure;

if(array[index].unlocked){

this.select(array,index,item,shop);
}
else
{

  this.purchase(array,index,item,shop);
}
};


saveProgress($figureShop){
  _shop[this.figureIndexInShop] = $figureShop;
 
  heroConfig.shop = _shop
  saveProgress()

}

select(array,index,item,shop){
  
  
  this.putSkinOnTable(array,index,item,shop);
this.soldIcon = this.add.sprite(this.clickedSkin.x + 115,this.clickedSkin.y-20,"general","sold").setDepth(1.02)

let lastChoosen  = array.findIndex(item=>item.scale==this.choosenScale)
array[lastChoosen].setScale(this.unchoosenScale)
array[lastChoosen].selected = false

array[lastChoosen].tick.visible = false;


// change to item param
  array[index].tick.visible = true;
  array[index].setScale(this.choosenScale)
  array[index].selected = true;


  /// saving
shop[lastChoosen].selected = false;
shop[index].selected = true;

if(shop[index].ads){
  this._videoIcon = this.add.image(this.clickedSkin.x - 125,this.clickedSkin.y - 35,"video-icon").setDepth(1.02);
const text = `${shop[index].adsWatched}/${shop[index].ads}`
  this.videoText = this.add.text(this._videoIcon.x,this._videoIcon.y + this._videoIcon.displayHeight/2 + 20,text,{font:"20px LuckiestGuy"  })
  .setOrigin(0.5,0.5).setDepth(1.02);

}

eval(`skins.${this.figure}Skin = "${shop[index].skin}"`)
this.saveProgress(shop);

}

getRewardedVideoSkin(){
  this.theme.resume();
  this.skinReward.shop[this.skinReward.index].adsWatched ++;
  if(this.skinReward.shop[this.skinReward.index].adsWatched == this.skinReward.shop[this.skinReward.index].ads){
    this.videoIcon.destroy()
    this.videoIcon.glow.destroy()
    this.videoIcon.aura.destroy();
    this.skinReward.item.padlock.visible = false;
    this.skinReward.item.unlocked = true;
    this.skinReward.array[this.skinReward.index].unlocked = true;
    this.skinReward.shop[this.skinReward.index].unlocked = true
    if(!heroConfig.generalOptions.soundMuted) soundManager.sound_4.play();
    this.select(this.skinReward.array,this.skinReward.index,this.skinReward.item,this.skinReward.shop)
  }else{
    this.saveProgress(this.skinReward.shop);
  }
  this.videoText.setText(`${this.skinReward.shop[this.skinReward.index].adsWatched}/${this.skinReward.shop[this.skinReward.index].ads}`) 
}

purchase(array,index,item,shop){

  const  makePurchase = () =>{
    if(!heroConfig.generalOptions.soundMuted){
      this.purchaseSound.play()
    }
   
      this.skinRequirements.hide();
      this.deleteOldItem();
      heroConfig.currentMoney -=item.cost;
     this.moneyDiv.money.innerHTML = heroConfig.currentMoney;
     array[index].unlocked = true;
     item.unlocked=true;
     item.padlock.visible= false;

    /// saving
     shop[index].unlocked = true;
     this.saveProgress(shop);
   }


  this.putSkinOnTable(array,index,item,shop);

if(item.cost < heroConfig.currentMoney && item.level <= heroConfig.heroLevel && !shop[index].ads){
  this.buyButton = new button(this,this.clickedSkin.x + 115,this.clickedSkin.y-10,"buy-button")
  .on("pointerup",()=>makePurchase())
}   
else
{
  if(!shop[index].ads)
  this.notEnough.show();
}

};


deleteOldItem(){
  this.notEnough.hide()
  if(this.buyButton) this.buyButton.destroy();
  this.clickedSkin.destroy();
  this.skinRequirements.hide()
if(this.soldIcon) this.soldIcon.destroy();
if(this.videoIcon){
  this.videoIcon.destroy()
  this.videoIcon.glow.destroy()
  this.videoIcon.aura.destroy();
  this.videoText.destroy();
  this._videoIcon.destroy();
}

 }

putSkinOnTable(array,index,item,shop){
  if(this.isFirstSkin){
    this.highlightTheSkin();
  }


if(this.clickedSkin){
this.deleteOldItem();
}

this.clickedSkin = this.add.sprite(gameWidth/2+5,gameHeight-60,item.texture.key)

if(shop[index].ads && !shop[index].unlocked ){
  this.videoIcon = new button(this,this.clickedSkin.x + 115,this.clickedSkin.y-10,"videoButton")
  .on("pointerup",()=>{
    this.skinReward = {
      item:item,
      index:index,
      array:array,
      shop:shop,
    }

    if(!isDebugVersion){
      this.theme.pause()
      Android.showRewardedAd(2);
    }
 
  }).setDepth(1.03)
this.videoIcon.aura = this.add.sprite(this.videoIcon.x,this.videoIcon.y,"videoButtonAura").setDepth(1.02);
this.videoIcon.glow = this.add.sprite(this.videoIcon.x,this.videoIcon.y,"glow").setScale(0.9).setDepth(1.02);
this.tweens.add({
  targets:this.videoIcon.glow,
  angle:360,
  repeat:-1,
  duration:2500,
  scale:0.7,
})

this._videoIcon = this.add.sprite(this.clickedSkin.x - 125,this.clickedSkin.y - 35,"video-icon").setDepth(1.02);
const text = `${shop[index].adsWatched}/${shop[index].ads}`
  this.videoText = this.add.text(this._videoIcon.x,this._videoIcon.y + this._videoIcon.displayHeight/2 + 20,text,{font:"20px LuckiestGuy"  })
  .setOrigin(0.5,0.5).setDepth(1.02);

  }else if(!shop[index].ads){
    this.skinRequirements.show();
  };

  if(this.isFirstSkin){
    this.isFirstSkin = false;

    const skinRequirementsCord = calcCordToPercent(this.clickedSkin.x - 185,this.clickedSkin.y - 95);
    this.skinRequirements.style.left = skinRequirementsCord.x;
    this.skinRequirements.style.top = skinRequirementsCord.y;

      

      const notEnoughResCord = calcCordToPercent(this.clickedSkin.x +80,this.clickedSkin.y-60)
      this.notEnough.style.left = notEnoughResCord.x;
      this.notEnough.style.top = notEnoughResCord.y;
  }


  this.levelNeeded.innerHTML = array[index].level;
  this.cost.innerHTML = array[index].cost;

}

createSkins(x,array,button,shop,sprite,figureIndexInShop){
const selectedSkinIndex = shop.findIndex(el=>el.selected);
let moveSlotValue;
const shopLen = shop.length-1;


if(selectedSkinIndex == shopLen || selectedSkinIndex == shopLen-1){
moveSlotValue = shopLen-2
}
else if(selectedSkinIndex >=2 && selectedSkinIndex <=shopLen-2){
moveSlotValue = selectedSkinIndex-1
}
else{
moveSlotValue = 0;
}

for(let itemNumber in shop){

  const  button = new shopSkinButton(this,x,-200,`${shop[itemNumber].skin}`);
  button.setDepth(1)
  array.push(button);
  button.setScale(this.unchoosenScale);

      // ascribe slot to button
        button.slot = (Number(itemNumber)-moveSlotValue)

        // show 3 skins
        if( button.slot >= 0 &&  button.slot <3){
          button.y = this.slotY[button.slot];
        }

        button.tick = this.add.image(button.x,button.y,"general","sold").setDepth(1).setScale(0.6);
button.tick.visible = false;
   // enlarge choosen skin
   if(shop[itemNumber].selected){
    button.setScale(this.choosenScale)

    button.tick.visible = true;
  }


    button.padlock = this.add.image(button.x,button.y,"general",'locked').setScale(0.7,0.7);
    button.padlock.setDepth(1)
    button.level = shop[itemNumber].level;
    button.cost = shop[itemNumber].cost; 
    button.on('pointerup',()=>{
      if(this.canBuy)
      this.skinClicked(array,itemNumber,button,shop,figureIndexInShop,sprite)
    })

          if(!shop[itemNumber].unlocked){
            button.unlocked=false;
          }
          else
          {
            button.padlock.visible = false;
            button.unlocked=true
            
          }
       
    }
}

setButtonsInteractive(buttonDown,buttonUp,array){
buttonDown.on('pointerup',()=>{

  if(this.canChange){
//check if can scroll skins more
if(!heroConfig.generalOptions.soundMuted) this.sound_3.play()
    if(array[array.length-1].y == this.slotY[2])
        return;
//change every item slot 
    array.forEach((item)=>{
      this.changeSlot(item,1)
    })
  }
});
////
buttonUp.on('pointerup',()=>{

if(this.canChange){
  if(!heroConfig.generalOptions.soundMuted) this.sound_3.play()
  //check if can scroll skins more
if(array[0].y == this.slotY[0]){
return;
}

//change every item slot 
array.forEach((item) => {
 this.changeSlot(item,-1)
})
}
});


}


createContainers(){
const containersConfig = {
  upArrowY:gameHeight/2-200,
  downArrowY:gameHeight/2+200,
  sideShiftValue:130,
}

const {upArrowY,downArrowY,sideShiftValue} = containersConfig;

this.squareArray = new Array();
  this.triangleArray = new Array();
    this.circleArray= new Array();

//////  SQUARE BUTTONS
const squareContainerX = gameWidth/2- sideShiftValue
this.createSkins(squareContainerX,this.squareArray,this.squareButton,this.squareShop,"square",0);
this.squareSelectButtonUp = new shopArrowButton(this,squareContainerX,upArrowY,'arrow_button','up');
this.squareSelectButtonDown = new shopArrowButton(this,squareContainerX,downArrowY,'arrow_button','down');
this.squareSelectButtonUp.bringAlive(this)
this.squareSelectButtonDown.bringAlive(this)
this.setButtonsInteractive(this.squareSelectButtonDown,this.squareSelectButtonUp,this.squareArray);


///// TRIANGLE BUTTONS
this.createSkins(gameWidth/2,this.triangleArray,this.triangleButton,this.triangleShop,"triangle",1)
this.triangleSelectButtonUp = new shopArrowButton(this,gameWidth/2,upArrowY,'arrow_button','up')
this.triangleSelectButtonDown = new shopArrowButton(this,gameWidth/2,downArrowY,'arrow_button','down')
this.triangleSelectButtonUp.bringAlive(this)
this.triangleSelectButtonDown.bringAlive(this)

this.setButtonsInteractive(this.triangleSelectButtonDown,this.triangleSelectButtonUp,this.triangleArray)

////// CIRCLE BUTTONS
this.createSkins(gameWidth/2+sideShiftValue,this.circleArray,this.circleButton,this.circleShop,"circle",2)
this.circleSelectButtonUp = new shopArrowButton(this,gameWidth/2+sideShiftValue,upArrowY,'arrow_button','up')
this.circleSelectButtonDown = new shopArrowButton(this,gameWidth/2+sideShiftValue,downArrowY,'arrow_button','down')
this.circleSelectButtonUp.bringAlive(this)
this.circleSelectButtonDown.bringAlive(this)

this.setButtonsInteractive(this.circleSelectButtonDown,this.circleSelectButtonUp,this.circleArray)


};

showHideEffect(item){
  item.alpha = 0;
this.tweens.add({
  targets:item,
  alpha:1,
  duration:200,
})
}

changeSlot(item,slot){
this.canChange = false
this.padlock = item.padlock

this.tick = item.tick;
//show padlock

if(!item.unlocked){
item.padlock.x = item.x;
item.padlock.y = item.y;
}


const tweenArray = new Array(this.padlock,item,this.tick);

              // move skins

// clicked top arrow
if(slot ==1){
item.slot--;
  if(item.slot == 2){
    tweenArray.forEach(item=>item.y = this.slotY[3])
    this.showHideEffect(tweenArray)
  }
      else  if(item.slot == -1){
        tweenArray.forEach(item=>item.y = -200)
      }

}
// clicked bottom arrow
else if(slot ==-1){
item.slot++
  if(item.slot == 0){
    tweenArray.forEach(item=>item.y = this.slotY[4])
    this.showHideEffect(tweenArray)
  }
      if(item.slot == 3){
        tweenArray.forEach(item=>item.y = -200)
      }

};


// move tween
if(item.slot <3 && item.slot >-1){
this.tweens.add({
    targets: tweenArray,
  y:this.slotY[item.slot],
    duration: 200,
    ease: "Cubic.easeOut",
onComplete:()=>this.canChange = true
});
}


};

};








