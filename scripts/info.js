class info extends Phaser.Scene{
    constructor(){
        super({key:"info"});
        
    }
    create(){
        new background(this,"levelSelectBG")
        makeBorder(this,'black_border')
       const infoDiv =  $("info");
       infoDiv.show();


       this.exitButton = game.exitButton
       this.exitButton.show();
       const sceneToStart = (context) => context.scene.start("menu");
       this.exitButton.onclick =()=>{
        infoDiv.hide();
        this.exitButton.hide();
        changeScene(this,sceneToStart);
  
       }
    }
}