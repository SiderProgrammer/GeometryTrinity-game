
let javaHolder = {

  doubleMoney:function(){
    if(!heroConfig.generalOptions.soundMuted) soundManager.sound_4.play();
javaHolder.sceneContext.doubleWonMoney();
  },

heroLevelNickNames:[],
heroLevelScores:[],

unlockedLevelsNickNames:[],
unlockedLevelsScores:[],

 getHeroLevelScores:function(values){
  javaHolder.heroLevelScores = values;
},

getUnlockedLevelsScores:function(values){
  javaHolder.unlockedLevelsScores = values;
},

getHeroLevelNicknames:function (heroLevelNickNames){

let nickNames2 = heroLevelNickNames.split(',');
for (let x in nickNames2){
nickNames2[x] = nickNames2[x].replace(/[\[\]]+/g,'');

}
javaHolder.heroLevelNickNames = nickNames2;


},

getUnlockedLevelsNicknames:function (unlockedLevelsNames){

  let nickNames2 = unlockedLevelsNames.split(',');
  for (let x in nickNames2){
  nickNames2[x] = nickNames2[x].replace(/[\[\]]+/g,'');

  }
  javaHolder.unlockedLevelsNickNames = nickNames2;
  javaHolder.showRankingInfo();
  },

showRankingInfo:function(){
 if(!javaHolder.sceneContext.scene.scene.settings.active) return;
 javaHolder.sceneContext.loadingLBmeesage.destroy();
  javaHolder.showInGameLeaderboards(javaHolder.sceneContext);
},
 
createLogInButton:function(){
  javaHolder.sceneContext.loginButton = new button(javaHolder.sceneContext,gameWidth/2,185,"login-button");
  javaHolder.sceneContext.loginButton.on("pointerup",function(){
if(isDebugVersion) return;
Android.login();
  });

  javaHolder.sceneContext.loginButton.tween = javaHolder.sceneContext.tweens.add({
    targets:javaHolder.sceneContext.loginButton,
    duration:1000,
    scale:{
      from:0.8,
      to:1,
    },
    yoyo:true,
    repeat:-1,
    ease:"Bounce.easeIn"
  })
},

showLoadingInfo:function(){

 javaHolder.sceneContext.loadingLBmeesage = javaHolder.sceneContext.add.text(gameWidth/2,200,"Loading leaderboards\n wait...",{

     font:"25px LuckiestGuy",
        stroke: '	#000000',
        strokeThickness: 3,
        align:"center",
    }).setOrigin(0.5)
},

showInGameLeaderboards:function(scene){
javaHolder.sceneContext.earningsArray.forEach(el=>el.destroy());


  const lose = game.lose
  lose.style.transform = "scale(1)"
game.table.show();
game.earnings.style.display = "grid";
let nickNameText,scoreText;
//hero level

const heroLev = game.heroLevLB
heroLev.show();

for(let i=0;i<3;i++){
  if(javaHolder.heroLevelScores[i] == null ||javaHolder.heroLevelScores[i] == 0 ) {

    javaHolder.heroLevelScores[i] = "XXX";
  javaHolder.heroLevelNickNames[i] = "XXX";
  }

 nickNameText = javaHolder.heroLevelNickNames[i].toString()
 scoreText =  javaHolder.heroLevelScores[i].toString();
heroLev.rows[i].cells[1].innerHTML = nickNameText
heroLev.rows[i].cells[2].innerHTML = scoreText;
}


//unlocked levels

const unlockedLev = game.unlockedLevLB
unlockedLev.show();

for(let i=0;i<3;i++){
  if(javaHolder.unlockedLevelsScores[i] == null ||javaHolder.unlockedLevelsScores[i] == 0 ) {

   javaHolder.unlockedLevelsScores[i] = "XXX";
    javaHolder.unlockedLevelsNickNames[i]= "XXX";
  }
  
nickNameText = javaHolder.unlockedLevelsNickNames[i].toString()
 scoreText =  javaHolder.unlockedLevelsScores[i].toString();
unlockedLev.rows[i].cells[1].innerHTML = nickNameText;
unlockedLev.rows[i].cells[2].innerHTML = scoreText;
}

const expBarTop = 94-1;
const loseContainerHeight = lose.offsetHeight/window.innerHeight*100;
lose.style.top = (expBarTop-loseContainerHeight)/2+"%";

if(javaHolder.sceneContext.refreshButton){
  javaHolder.sceneContext.refreshButton.y =335
  javaHolder.sceneContext.refreshButton.x = gameWidth;
  javaHolder.sceneContext.refreshButton.x -= javaHolder.sceneContext.refreshButton.displayWidth-10;
  javaHolder.sceneContext.refreshButton.setTexture("refresh-button-big")
  javaHolder.sceneContext.doubleMoneyButton. y = javaHolder.sceneContext.refreshButton.y;
javaHolder.sceneContext.doubleMoneyButton.x = javaHolder.sceneContext.doubleMoneyButton.displayWidth+ 10;
}else{
  javaHolder.sceneContext.nextButton.y =335
  javaHolder.sceneContext.nextButton.x = gameWidth;
  javaHolder.sceneContext.nextButton.x -= javaHolder.sceneContext.nextButton.displayWidth-10;
  javaHolder.sceneContext.nextButton.setTexture("nextLevel_button")
  javaHolder.sceneContext.doubleMoneyButton. y = javaHolder.sceneContext.nextButton.y;
javaHolder.sceneContext.doubleMoneyButton.x = javaHolder.sceneContext.doubleMoneyButton.displayWidth+ 10;
}


javaHolder.sceneContext.glow.x = javaHolder.sceneContext.doubleMoneyButton.x-javaHolder.sceneContext.doubleMoneyButton.displayWidth/2
javaHolder.sceneContext.glow.y = javaHolder.sceneContext.doubleMoneyButton. y
    },
getRewardedSkin:function(){
  javaHolder.sceneContext.getRewardedVideoSkin();
},
getGoldChest:function(){
 if(!heroConfig.generalOptions.soundMuted) soundManager.sound_4.play();

  javaHolder.sceneContext.chest.destroy();
  javaHolder.sceneContext.chest.tween.remove();
  javaHolder.sceneContext.glow.destroy()
  javaHolder.sceneContext.glow.tween.remove()
 
  ads.chest_gold_levels.push(heroConfig.heroLevel);
  const reward = heroConfig.heroLevel*35;
  
  heroConfig.currentMoney+=reward;
  const text = javaHolder.sceneContext.add.text(javaHolder.sceneContext.chest.x,javaHolder.sceneContext.chest.y,`+ ${reward} coins`,{
    font:"40px LuckiestGuy",
    color:"yellow",
  }).setOrigin(0.5,0.5).setDepth(30);

  javaHolder.sceneContext.tweens.add({
    targets:text,
    y:"-=70",
    duration:700,
    alpha:0,
  })
  saveProgress();
},
getTip:function(){
  const tipDiv = $("tip")
  let tip;
switch(heroConfig.tipNumber){
  case 1: tip="triangletip_2.svg"
  break;
  case 2:tip = "circletip_1.svg"
  break;
  case 3:tip= "triangletip_1.svg"
  break;
  default:return;
  
}

const c = javaHolder.sceneContext;
c.tipButton.destroy();
c.tipButton.glow.destroy();
c.tipButton.glow.tween.remove();

heroConfig.tipNumber++;
saveProgress();
tipDiv.children[0].src = tip;
tipDiv.children[1].onclick = () => tipDiv.hide();
tipDiv.show();

}
  };