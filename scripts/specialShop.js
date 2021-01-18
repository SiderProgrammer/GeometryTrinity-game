class specialShop extends Phaser.Scene{
    constructor(){
        super({key:"specialShop"})

        
    }
    create(){
        this.theme = soundManager.specialShop_music
        if(!heroConfig.generalOptions.musicMuted){
            this.theme.play();
        }
        
        
        const bg1 =new background(this,"sceneChangeScreen")
        const bg2 = this.add.sprite(gameWidth/2,gameHeight/2,"general","specialShopBG")

       
        this.add.text(gameWidth/2,gameHeight/2-180,"COMING SOON!",{
            font:"45px LuckiestGuy",
            align:"center",
        }).setOrigin(0.5)


        this.exitButton = $("shopExitButton");
        this.exitButton.show()
        const sceneToStart = (context) => context.scene.start("menu");
        this.exitButton.onclick = () =>{
            this.exitButton.hide()
         changeScene(this,sceneToStart);
           
         
        };

      
    }
}