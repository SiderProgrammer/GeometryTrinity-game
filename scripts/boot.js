
let newWidt,newHeight,grayScreenPipeline;

function calculateDimensions(){
  var targetWidth = 480;
  var targetHeight =854;

  var deviceRatio = (window.innerWidth/window.innerHeight);

  var newRatio = (targetHeight/targetWidth)*deviceRatio;

  newWidth = targetWidth*newRatio;
  newHeight = targetHeight;

}

calculateDimensions();
const isProgressSaved = JSON.parse(localStorage.getItem("progress")) != null ? true : false;

if(isProgressSaved){
this.isPerfromanceBoostActivated =  JSON.parse(localStorage.getItem("progress")).generalOptions.performanceBoost == true ?true: false;

}else{
this.isPerfromanceBoostActivated = false
}
 
let  gameWidth = newWidth;  let  gameHeight = newHeight;
window.onload = () => {


config = {
  type: Phaser.WEBGL,
  width:gameWidth,
  height: gameHeight,
  enableDebug:false,
  scale: {
  mode:Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
  physics: {
    default: 'arcade',
    arcade: {
      tileBias:8,
      debug:false,
      gravity: false
    },
    
  },
 
  render: {  
antialias:this.isPerfromanceBoostActivated==true?false:true,
      clearBeforeRender:false,
    },
};
game = new Phaser.Game(config);


game.canvas = document.querySelector("canvas");
game.earnings = document.getElementById("earnings")
game.gameDiv = $("game");
game.lose = $("endGame");
game.table =$("table");
game.moneyEarned = $("moneyEarned")
game.ranking = $("ranking");
game.exitButton = $("exitButton");
game.heroLevLB = $("heroLevelLeaderboard");
game.unlockedLevLB= $("unlockedLevelsLeaderboard");
game.resumeButton =$("resumeButton")
game.pauseButton = $("pauseButton");
game.homeButton = $("homeButton");
game.shMoney = document.getElementById("shMoney")
game.shLevel = document.getElementById("shLevel")
game.tipDiv = $("tip")
game.tipOkButton = $("tipOkButton");

const GrayscalePipeline = new Phaser.Class({

  Extends: Phaser.Renderer.WebGL.Pipelines.TextureTintPipeline,

  initialize:

  function GrayscalePipeline (game)
  {
      Phaser.Renderer.WebGL.Pipelines.TextureTintPipeline.call(this, {
          game: game,
          renderer: game.renderer,
          fragShader:`
              precision mediump float;
              uniform sampler2D uMainSampler;
              varying vec2 outTexCoord;
              void main(void) {
              vec4 color = texture2D(uMainSampler, outTexCoord);
              float gray = dot(color.rgb, vec3(0.299, 0.587, 0.114));
              gl_FragColor = vec4(vec3(gray), 1.0);
              }`
      });
  } 
});
grayScreenPipeline = game.renderer.addPipeline('Grayscale', new GrayscalePipeline(game));


if(game.input.touch != null){
  game.input.mouse.enabled = false
  }
  
 function addScene(key){
  const $class = eval(key);
  game.scene.add(key,$class,false);
}
addScene('preloader')
addScene('loader')
addScene('menu');
addScene('levelSelect')
addScene('shop')
addScene('winMenu')
addScene('loseMenu')
addScene('basicLevel')
addScene('options');
addScene('info');
addScene('specialShop');
addScene('tutorial');
addScene('tutorial_2');
addScene('tutorial_3');
game.scene.start('preloader');

}




