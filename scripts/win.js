class winMenu extends Phaser.Scene{
  constructor(){
    super({key:"winMenu"})
  }
  init(data){
    this.scene = data.scene
  }

    
  
create(){
  this.nextLevelSound = soundManager.play_sound;

  ads.games_to_fullScreenAd.left--;
if(ads.games_to_fullScreenAd.left == 0){
if(!isDebugVersion){
 Android.showFullScreenAd()
 ads.games_to_fullScreenAd.left = ads.games_to_fullScreenAd.start
}
}

if(!isDebugVersion){
Android.showBannerAd();
}
  
const upd = getExpGold(this)
this.moneyEarn =upd.moneyEarn
this.expEarn = upd.expEarn

javaHolder.sceneContext = this;

  clearInterval(this.scene.specialEffectsInterval);
  rotateGame();
 
this.scene.timeOuts.forEach(timeout=>{
  clearTimeout(timeout);
})
this.scene.timeOuts.length =0;

  function round(n, k)
{
var factor = Math.pow(10, k);
return Math.round(n*factor)/factor;
}

this.intervals = [];

game.earnings.style.display = "none";

game.gameDiv.hide();

game.ranking.show();
game.ranking.style.right = "10px";
game.ranking.style.top = "10px";
game.ranking.style.left = "";

game.ranking.style.transform = ""
game.ranking.style.transform = "scale(0.8);";
game.ranking.style.transformOrigin  = "top";


game.exitButton.show();

javaHolder.sceneContext = this;
this.shadowBG = new background(this,'endBG').setOrigin(0,0).setAlpha(0);

this.expBar = new expBar()

game.lose.style.display = "grid";

const barWidth = `${Math.round((eval(this.scene.level).meters - this.scene.metersLeft)*100/eval(this.scene.level).meters)}%`;
const levelCompletePercent = $("levelCompletePercent");
levelCompletePercent.innerHTML ="completed " + barWidth;

const levelCompleteBar = $("levelCompleteBar");

levelCompleteBar.style.width = barWidth

  this.tweens.add({
    alpha:1,
    targets:this.shadowBG,
    duration:1500,
    repeat:0,
    yoyo:false
  })

 const expBarTop = 94-1;
 const loseContainerHeight = game.lose.offsetHeight/window.innerHeight*100;
const dividedHeight = (expBarTop-loseContainerHeight)/2;

  game.lose.style.top = dividedHeight+10+"%";
  game.lose.style.transform = "scale(1.3)"
  
  const cord = calcHTMLCordToPercent(0,game.lose.offsetTop + game.lose.offsetHeight);


this.nextButton = new button(this,gameWidth/2,cord.y + 100,"nextLevel_button_huge")
.on("pointerup",()=>{
  

  if(this.topButton) this.topButton.destroy();
  
if(!isDebugVersion){
Android.hideBannerAd();
}



if(!heroConfig.generalOptions.soundMuted){
  this.nextLevelSound.play()
}

  this.intervals.forEach(interval=>clearInterval(interval))

 game.table.hide()
  game.lose.hide();
  if(this.loginButton) this.loginButton.destroy();
 this.expBar.hide();
game.exitButton.hide()
game.ranking.hide();
   this.scene.scene.stop("winMenu")
   this.scene.events._events.postupdate.length = 1

   actualLevel = `levelsConfig.level`+(level+1);
   level++;

   if(heroConfig.levelTutorial <= 3 && level <= 3){  
            
    if(level == 1 && heroConfig.levelTutorial == 1){
        this.scene.scene.start("tutorial");
    }    else if( level == 2 && heroConfig.levelTutorial ==2)  {
        this.scene.scene.start("tutorial_2");
    }else if(level ==3 && heroConfig.levelTutorial == 3){
        this.scene.scene.start("tutorial_3");
    }

    heroConfig.levelTutorial++;
    saveProgress()
    return;
}

   
   this.scene.scene.start("basicLevel");
 })


 const cordInPercent = game.lose.style.top
 const textCord = Number(cordInPercent.split("%")[0])
 
this.expText = new text(this,gameWidth/2 - 70,gameHeight*(textCord-12)/100,"exp ",60).setTint("0x6495ED");
this.expEarned = new text(this,gameWidth/2-10,this.expText.y,`+ 0%`,60,0)

this.moneyIcon = this.add.sprite(gameWidth/2-70,this.expText.y +10,"coin").setOrigin(0.5,0);
this.moneyEarned = new text(this,gameWidth/2-10,this.expText.y +15,` + 0`,60,0,0);

this.doubleMoneyButton = new button(this,this.moneyIcon.x,this.moneyIcon.y+this.moneyIcon.displayHeight/2,"doubleMoney")
.setOrigin(1,0.5).setDepth(20).on("pointerup",()=>{
if(!isDebugVersion){
Android.showRewardedAd(1);
}
})
this.doubleMoneyButton.x  -= this.moneyIcon.displayWidth/2 - 20

this.glow =this.add.sprite(this.doubleMoneyButton.x-this.doubleMoneyButton.displayWidth/2,this.doubleMoneyButton.y,"glow")
.setScale(0.7)
this.tweens.add({
  targets:this.glow,
  angle:360,
  repeat:-1,
  duration:2500,
  scale:0.6,
})

this.earningsArray = [this.expText,this.expEarned,this.moneyIcon,this.moneyEarned];

let expEarned = round(this.expEarn*100/this.expBar.expNeeded,2)

 this.expBarUpdated = false;

 this.expEarned.setText(`+ ${expEarned}%`);
const  moneyInterval = () =>{
  
  let effectTime = 700;
  effectTime/=this.moneyEarn;
  let money = 0;
let addValue= 1;
if(this.moneyEarn> 500){
  addValue = 10;
}if(this.moneyEarn > 2000){
  addValue = 100;
}
  const moneyEarnInterval  = setInterval(()=>{
 
    money+=addValue;
   this.moneyEarned.setText(`+ ${money}`);

  if(money >= this.moneyEarn){
  clearInterval(moneyEarnInterval)
  } 
  },effectTime)
  this.intervals.push(moneyEarnInterval)
 }

 if(this.moneyEarn > 0){
  moneyInterval();
 }else{
  this.moneyEarned.setText(`+ 0`);
 }
 game.earnings.children[0].innerHTML = `exp <span style="color:white">+ ${expEarned}%</span>`
  game.moneyEarned.innerHTML =`+ ${this.moneyEarn}` 


  this.updateHero()
  this.expBar.updateValues()
   this.expBar.updateBar()
   this.expBar.updateLevel();

   if(!heroConfig.isAdmin && !isDebugVersion) {
    Android.updateLeaderboardScore(heroConfig.heroLevel,heroConfig.levelsUnlocked);
  }

   this.topButton = new button(this,gameWidth/2,185,"top3").on("pointerup",()=>{
    this.topButton.destroy()
    if(!isDebugVersion){
      if(!heroConfig.isAdmin) {
        Android.updateLeaderboardScore(heroConfig.heroLevel,heroConfig.levelsUnlocked);
      }
        Android.getLBscores()
      }
  })
   game.exitButton.onclick = ()=>{
   
    this.scene.theme.stop()
    this.intervals.forEach(interval=>clearInterval(interval))
 game. table.hide()
  game.lose.hide();
  if(this.loginButton){this.loginButton.destroy();this.loginButton.tween.remove()}
    game.exitButton.hide()
    if(!isDebugVersion){
    Android.hideBannerAd();
    }
  this.scene.scene.start("menu")
  }

}

doubleWonMoney(){
  this.scene.theme.resume();
this.doubleMoneyButton.destroy();
heroConfig.currentMoney += this.moneyEarn;
 game.moneyEarned.innerHTML =`+ ${this.moneyEarn*2}`
 this.moneyEarned.setText(`+ ${this.moneyEarn*2}`);
 saveProgress()
}
updateHero(){
 
  // const levelNumber = actualLevel.charAt(actualLevel.length-1);
if(heroConfig.levelsUnlocked < 72)
{
  if(heroConfig.levelsUnlocked - level == 0)
  heroConfig.levelsUnlocked++;
}
   
   heroConfig.currentExp+=  this.expEarn;
   heroConfig.currentMoney+= this.moneyEarn
   saveProgress();
 }

}
