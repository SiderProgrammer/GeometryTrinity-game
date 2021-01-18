


let isDebugVersion = false;
let actualRotate =  0;
let level;

const ads = {
chest_gold_levels:[],
games_to_fullScreenAd:{
start:7,
left:7,
},


};

const presentRewardsChances= {
expChance:50,
goldChance:50,
expGoldChance:25,
skinChance:15,
}

const default_heroConfig = {
  isAdmin:false,

  shop:_shop, 
  
  actualShape:0,
      levelsUnlocked:1,
      heroLevel:1,
      currentExp:0,
      currentMoney:0,
      expNeeded:10,

      specialShopUnlocked:false,
isFirstDailyReward:true,
tipNumber:1,
isFirstTutorial:true,
levelTutorial:1,
      generalOptions:{
        musicMuted:false,
        soundMuted:false,
        controllerShown:true,
        performanceBoost:false,
      },

      levelsTipsShown:[],
// have to be same as 1st skin in shop
      skins: {
        squareSkin:"square_9",
        triangleSkin:"triangle_9",
        circleSkin:"circle_9",
      },
      
      codes: [
        {code:"start11s",reward:3},
        {code:"reset",reward:4}, 
        {code:"sh0405shg",reward:5},
        {code:"a0405pip02",reward:6},
    ],
}

heroConfig = default_heroConfig;

function getProgress(){
  
  if(localStorage.getItem("progress") == null){
   saveProgress()
  }else{
    const savedProgress =  JSON.parse(localStorage.getItem("progress"));
  
    heroConfig = savedProgress
if(typeof heroConfig.levelsTipsShown == "undefined"){
  heroConfig.levelsTipsShown = [];
  saveProgress();
}
      if(isShopUpdateAvailable()){
      updateShop()
    }
    _shop = heroConfig.shop;
    
  }
}





