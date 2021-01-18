
 let menuConfig = {
  hasListeners:false,
  hasDailyInterval:false,
  heroConfigUpdated:false,
}
/*
  <a class = "infoText link" id="infoLink" 
  href="https://play.google.com/store/apps/details?id=com.pip.circlerisk" 
  target="_blank">
  Checkout our first production called <span style="font-size: 35px;">Circle Risk</span>
  </a>
*/

let { actualShape,skins} = heroConfig

let menuMusic;
class menu extends Phaser.Scene{
 constructor(){
   super({key:'menu'})
   this.shapeSelectTweening = false;

 }

 
 create(){
  game.lose.style.display = "none";


 this.presentIsOpened = false;
if(!menuConfig.heroConfigUpdated){
  getProgress();
  skins = heroConfig.skins
}
 

this.theme = soundManager.menu_music;
this.sound_1 = soundManager.sound_1;
this.sound_2 = soundManager.sound_2;
this.sound_3 = soundManager.sound_3;

if(!heroConfig.generalOptions.musicMuted){
  if(!this.theme.isPlaying) this.theme.play();
} 


this.getDailyRewardTime();

  this.startShapeY = gameHeight/2-300;
  this.shapeScale = 1;

     this.getUnlockedSkins();
      sceneIntro(this);

 this.background = new background(this,'menubg3');
makeBorder(this,'black_border');
this.initHero();
this.getResizingShadow(300);

this.getPodiumButton();
this.createButtons();
this.expBar = new expBar()
this.expBar.updateBar();
this.expBar.updateLevel();
 /// make shadow under shape
this.getFloorToBounce();

this.getResources()
/// it stops bugs with shadow on menu
game.scene.stop('winMenu'); game.scene.stop('loseMenu')
///it stops bugs with not showing html input
game.canvas.style.transform = '';
this.physics.add.collider(this.choosenShape,this.invisibleFloor,null,this.bounce,this);

};

getResources(){
  this.moneyDiv = getMoney();
  this.moneyDiv.moneyDiv.style.right = "10px";
  this.moneyDiv.moneyDiv.style.top = "5px"
  
  this.heroLevelDiv = $("heroLevelDiv");
  this.heroLevelDiv.show();
  this.heroLevelDiv.style.top = "5px";
  this.heroLevelDiv.style.left = "20px";
  this.heroLevelDiv.style.right = "";
}


getPodiumButton(){
  this.rankingIsClicked = false;
  let self = this;
  const rankingButton = $("ranking");
  const cord = calcCordToPercent(0 ,110);
  rankingButton.style.top = cord.y
  rankingButton.style.left = "10px";
  rankingButton.style.right = "";
  rankingButton.style.transform = "translateY(-35%)"
  this.rankingButton = rankingButton;
  rankingButton.show();


  if(isDebugVersion || menuConfig.hasListeners) return;
 
const rankingDiv = $("rankingDiv");
const rankingButtons = $("rankingButtons").children;

const heroLev = rankingButtons[0];
const unlockedLev = rankingButtons[1];
const exit = rankingButtons[2];

exit.addEventListener("click",function(){rankingDiv.hide(); self.rankingIsClicked = false}) 
heroLev.addEventListener("click",function(){Android.showLB(1);})
unlockedLev.addEventListener("click",function(){Android.showLB(2);})  

rankingButton.addEventListener("click",function(){

  rankingDiv.show();
  self.rankingIsClicked = true
})  
 }

getUnlockedSkins(){

  this.skins= _shop
  this.unlockedSkins  = []
  
     this.skins.forEach(shapeArr=>{
  const s =   shapeArr.filter(el=>el.unlocked);
  this.unlockedSkins.push(s)
     })
}

initHero(){
 let s = this.switchShape(actualShape);
 this.choosenShape = new shape(this,gameWidth/2, this.startShapeY,s[0])
 .setScale(this.shapeScale);
 this.choosenShape.shadowShape = s[1];
 this.choosenShape.createShadow(this);
 


 this.choosenShape.body.setBounce(0,1)
}
bounce(hero){
    hero.body.velocity.y = 800;

}

getFloorToBounce(){
 this.invisibleFloor = this.add.sprite(gameWidth/2,this.startShapeY+180,'floor').setOrigin(0.5,0.5)
this.invisibleFloor.visible = false;
 this.physics.world.enable(this.invisibleFloor)
 this.invisibleFloor.body.immovable = true
}
getResizingShadow(delay){
 this.shapeShadow = this.add.sprite(gameWidth/2,this.startShapeY + 150,'shadow')
this.scalingShadow = this.tweens.add({
 targets:this.shapeShadow,
 scale:0.6,
 ease:"Linear",
 duration:320,
 yoyo:true,
 delay:delay,
repeat:-1
})
}

createButtons(){
const self = this;
 const menuDiv = $('menu');
 menuDiv.show(1);

const startScene = function(context,scene){
context.scene.start(scene);
}

const play_button = new button(this,gameWidth/2,gameHeight*0.45,"play-button") //.resizing(0.8,1000);
const shop_button = new button(this,gameWidth/2,gameHeight*0.6,"shop-button")
const options_button = new button(this,gameWidth/2,gameHeight*0.7,"options-button")
const info_button = new button(this,gameWidth/2,gameHeight*0.8,"info-button")

//Bounce.easeOut - good 
//play_button.resizing(0.8,1000,"Bounce.easeIn");
this.tweens.add({
  targets:play_button,
duration:1000,
scale:{
  from:0.9,
  to:1.1,
},
yoyo:true,
repeat:-1,
ease:"Bounce.easeOut"
})



 function addSceneListener(button,scene){

   button.on('pointerup',()=>{
    if(self.presentIsOpened || self.rankingIsClicked) return;
    self.rankingButton.hide();
     self.moneyDiv.moneyDiv.hide();
     self.heroLevelDiv.hide();
self.expBar.hide();
     menuDiv.hide();

   
     if(scene =="levelSelect"){
      self.theme.stop()
     }
   changeScene(self,startScene,scene);
   })
   };

     addSceneListener(options_button,'options');
     addSceneListener(shop_button,'shop');
     addSceneListener(info_button,'info');
     addSceneListener(play_button,"levelSelect")
     menuConfig.hasListeners = true;
   

 this.selectButtonLeft = new arrowButton(this,gameWidth/2-100,this.choosenShape.y+100,'arrow_button');
 this.selectButtonRight = new arrowButton(this,gameWidth/2+100,this.choosenShape.y+100,'arrow_button',true);
 this.selectButtonLeft.bringAlive(this)
 this.selectButtonRight.bringAlive(this)

 this.selectButtonLeft.on('pointerup',function(){
   if(!heroConfig.generalOptions.soundMuted) this.sound_3.play()
  actualShape--
 this.tweenChange('left')
 }.bind(this))

 this.selectButtonRight.on('pointerup',function(){
  if(!heroConfig.generalOptions.soundMuted) this.sound_3.play()
  actualShape++;
this.tweenChange('right')
 }.bind(this))


 this.selectSkinButtonLeft = new arrowButton(this,gameWidth/2-80,this.choosenShape.y+35,'arrow_button2').setScale(0.6);
 this.selectSkinButtonRight = new arrowButton(this,gameWidth/2+80,this.choosenShape.y+35,'arrow_button2',true).setScale(0.6);
 this.selectSkinButtonLeft.bringAlive(this)
 this.selectSkinButtonRight.bringAlive(this)

const change  = obj =>{
 this.skins[actualShape].forEach(el=>el.selected = false);
 const shape =this.switchShape(actualShape)[2]

 const actualSkin = eval(`skins.${shape}Skin`);
 const objectInArray = this.unlockedSkins[actualShape].find(el=>el.skin == actualSkin);
 let indexInArray = this.unlockedSkins[actualShape].indexOf(objectInArray);
 
 if(indexInArray ==obj.indexInArray){
   indexInArray = obj.newValue ; 
 }

 
  const nextSkin =  this.unlockedSkins[actualShape][indexInArray+obj.changeValue].skin;
  eval(`skins.${shape}Skin = "${nextSkin}"`)
  
const a = _shop[actualShape].find(el=>el.skin == nextSkin);
const b= _shop[actualShape].indexOf(a);

  _shop[actualShape][b].selected = true;
  saveProgress()
 

 
 this.tweenChange(obj.side)
}


this.selectSkinButtonLeft.on("pointerup",()=>{
  if(!heroConfig.generalOptions.soundMuted) this.sound_3.play()
 const props = {
   indexInArray:0,
   newValue:this.unlockedSkins[actualShape].length,
   changeValue:-1,
   side:"left",
 }

change(props)

})

this.selectSkinButtonRight.on("pointerup",()=>{
  if(!heroConfig.generalOptions.soundMuted) this.sound_3.play()
 const props = {
   indexInArray:this.unlockedSkins[actualShape].length-1,
   newValue:-1,
   changeValue:1,
   side:"right",
 }

change(props)
})


};


changeShape(){
this.shapeSelectTweening = false;

if(actualShape < 0)
 actualShape = 2
else if(actualShape >2)
 actualShape = 0



let changeTween = {
 ease:'Linear',
   alpha:1,
 duration:150,
 repeat:0,
 yoyo:false,
}

if(this.direction == 'left'){
 var shiftValue = 50
 var tweenShift = '-=50'
}else{
 var shiftValue =-50;
 var tweenShift ='+=50'
}

this.choosenShape.destroy()
this.choosenShape.shadowEmitter.stop();

const self = this;
function changeShadow(){
self.shapeShadow.destroy()
self.scalingShadow.stop();
self.getResizingShadow(300);
}

changeShadow()

let s = this.switchShape(actualShape);

this.choosenShape = new shape(this,gameWidth/2+shiftValue, this.startShapeY,s[0])
.setScale(this.shapeScale)



 this.choosenShape.shadowShape = s[1];
 this.choosenShape.createShadow(this);


 const character = [this.choosenShape];
character.forEach(el=>el.alpha=0)
this.tweens.add(Object.assign({},changeTween,{
   targets:character,
   x:tweenShift
}))
this.physics.add.collider(this.choosenShape,this.invisibleFloor,null,this.bounce,this);
this.choosenShape.body.setBounce(0,1)
};


tweenChange(direction){
 if(this.shapeSelectTweening)  return;

this.shapeSelectTweening = true;
 this.direction = direction
 let changeTween = {
   ease:'Linear',
     alpha:0,
   duration:150,
   repeat:0,
   yoyo:false,
 }


if(direction == 'left'){

 var shiftValue = '-=50'
}
else{
var shiftValue = '+=50'

}



 this.tweens.add(Object.assign({},changeTween,{
   targets:this.choosenShape,
   x:shiftValue,
   onComplete:()=>this.changeShape()
 }));

}


switchShape(actualShape){
 let choosenShape,shadowShape,shape;
 

 switch(actualShape){
   case 0:
   choosenShape = skins.squareSkin

   shadowShape = 'squareShadow_1'
   shape = "square"
   break;
     case 1:
     choosenShape = skins.triangleSkin
     shadowShape= 'triangleShadow_1'
   shape = "triangle"
     break;
       case 2:
       choosenShape = skins.circleSkin;
       shadowShape = 'circleShadow_1'
      shape="circle"
       break;

 }
 
 return [choosenShape,shadowShape,shape];
}



getDailyRewardTime(){
  this.present = new button(this,gameWidth*0.9,120,"present").setScale(0.7).setDepth(0.5)

if(menuConfig.hasDailyInterval) return;

  const time = $("dailyRewardTime");
  const timeDiv = $("dailyRewardTimeDiv");
  const timeCord = calcCordToPercent(this.present.x ,this.present.y+45);
  timeDiv.style.left = timeCord.x;
  timeDiv.style.top = timeCord.y;
timeDiv.style.transform = "translateX(-50%)"
  fetch("http://worldtimeapi.org/api/timezone/Europe/Paris")
  .then(response => {
   return response.json()
 })
 .then(data => {
  const oneHour = 1000*60*60;
   // minus one hour because if time is 24h, 25h is shown
  this.dailyRewardTime = 86400000-1000;

   if(heroConfig.unixtime == null){

     heroConfig.unixtime = data.unixtime
     saveProgress()
   }else{
 const difference = Math.abs(heroConfig.unixtime-data.unixtime);

   this.dailyRewardTime -= difference*1000
   }

   if(heroConfig.isFirstDailyReward){
    this.dailyRewardTime = 0 ;
   }
   let timeVar = this.dailyRewardTime;

let timeInterval;

if(timeVar > 0){
 
  time.innerHTML = new Date(timeVar-oneHour).toLocaleTimeString();
  
/// *TODO* MAKE IT WORKS ONLY IN MENU
  if(!menuConfig.hasDailyInterval){
    timeInterval = setInterval(()=>{
    
      if(timeVar <1){
        clearInterval(timeInterval);
        this.getDailyReward(time);
       
      }else{
        timeVar-=1000;   
      }
    
 if(this.scene.key === "menu") time.innerHTML = new Date(timeVar-oneHour).toLocaleTimeString();

      },1000)
      menuConfig.hasDailyInterval = true;
  }
 

}else{
 
  time.innerHTML = new Date(-oneHour).toLocaleTimeString()
  this.getDailyReward(time);
}
  
 })
 .catch(err => {
   time.innerHTML = "getting time failed"
   console.log(err);
   
   if(heroConfig.isFirstDailyReward){
    time.innerHTML = new Date(-1000*60*60).toLocaleTimeString();
    this.getDailyReward(time);
   }
 })





}

getDailyReward(){
 
   this.tweens.add({
    targets:this.present,
    scale:0.55,
    ease:"Linear",
    duration:600,
    yoyo:true,
 
   repeat:-1
   })

    
    const presentDiv = $("presentDiv");
const claimButton = $("claim")
this.rewardDiv = $("reward")
let rolled,rolledNumber;

this.rewardChances = presentRewardsChances;

 const claim = ()=>{
   if(!heroConfig.generalOptions.soundMuted){
     this.sound_2.play();
   }
     this.present.destroy();
presentDiv.hide();
heroConfig.unixtime = null;
// change saving to function
saveProgress()
menuConfig.hasDailyInterval=false;
this.getDailyRewardTime();
this.presentIsOpened = false;
 }


this.present.on("pointerup",()=>{
  if(this.presentIsOpened) return

  const rewardsByPercent = [
    this.rewardChances.expChance,
    this.rewardChances.goldChance,
    this.rewardChances.expGoldChance,
    this.rewardChances.skinChance
    ];
  this.presentIsOpened = true;

  do{
 rolledNumber = Phaser.Math.Between(0,3);

 const rewardNumber =rewardsByPercent[rolledNumber];
rolled =chanceRoll(rewardNumber)
}while(rolled != true)

if(!heroConfig.generalOptions.soundMuted){
  this.sound_1.play()
}

this.getRewardByNumber(rolledNumber+1);
 presentDiv.style.display = "inline-flex";
claimButton.onclick = claim;

})
}

getRewardByNumber(numb){

  const rewardText = $("reward")

  const getExpReward = () =>{
  
    $("glow").hide()
  heroConfig.currentExp+=heroConfig.expNeeded/2;
this.expBar.updateValues();
this.expBar.updateBar();
this.expBar.updateLevel();
rewardText.style.marginTop = "-80px";
rewardText.innerHTML = `current exp + 50% </br> <span style="font-size: 15px">(based on current level)</span>`
  }
let bouns;

  const getGoldReward = (isAlone = true) =>{
    if(isAlone) { this.rewardDiv.style.transform = "scale(1.4)" };
    $("glow").hide()
     bouns = heroConfig.heroLevel*50
     heroConfig.currentMoney+=bouns;
    this.moneyDiv.money.innerHTML = heroConfig.currentMoney
    rewardText.style.marginTop = "-80px";
     rewardText.innerHTML = `+ ${bouns}  <img src="coin-icon.svg" style="margin-left: 10px; position: absolute; margin-top: -5px;">
      </br> <span style="font-size:15px">(scaled by current level)</span>`
  }

  const getGoldExpReward = () =>{

    getGoldReward(false);
    getExpReward();
   
rewardText.innerHTML = `+ ${bouns} <img src="coin-icon.svg" style="margin-left: 10px; position: absolute; margin-top: -5px;">
  
    </br> <span style="font-size:15px">(scaled by current level)</span>
     </br></br>current exp + 50% </br> <span style="font-size:15px">(based on current level)</span>`

  }

  const getSkinReward = () =>{

    let check = [];
  _shop.forEach(el=>{
    check.push(el.some(skin=>skin.unlocked == (false || undefined)));
    })

if(check.every(el=>el == false) == true){
  getGoldExpReward();
  return
}

    rewardText.innerHTML = "Skin ( rare drop )"
    const skin = $("rewardSkinImage")
  
let elementNumber,figure;

do{
  figure = Phaser.Math.Between(0,2);
elementNumber =   Phaser.Math.Between(0,_shop[figure].length-1);
}while(_shop[figure][elementNumber].unlocked == true)
_shop[figure][elementNumber].unlocked = true;


const shape = this.switchShape(figure)[2];
const $shape = shape.charAt(0).toUpperCase() +  shape.slice(1); 
const skinNumber = _shop[figure][elementNumber].skin.match(/\d+/)

skin.src = `img/skins/${shape}/${$shape}Skin${skinNumber}.png`;
if(shape == "triangle"){
  skin.style.marginTop = "-8px";
}


  }

if(heroConfig.isFirstDailyReward){
  numb = 4
  heroConfig.isFirstDailyReward = false;
};
  switch(numb){
    case 1:
getExpReward();
    break;
    case 2:
    getGoldReward();
    break;
    case 3:
    getGoldExpReward();
    break;
    case 4:
    getSkinReward();
    break;

  }
 saveProgress();
}


};
function saveProgress(){
  if(!isDebugVersion)
  localStorage.setItem("progress",JSON.stringify(heroConfig));
}