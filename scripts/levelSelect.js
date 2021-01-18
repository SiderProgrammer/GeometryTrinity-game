

let levelSelectOptions = {
    colors: ["0xffffff","0x00FFFF","0x00ff00","0xb632d7","0xffff00","0xffc0cb","0xA9FF00","0x5d5d5d","0x0000ff","0xff0000"],
    columns: 2,
    rows: 4,
    thumbWidth: 131.5,
    thumbHeight: 127.5,
    spacing: 30,
    hasListeners:false,
}
const {colors,columns,rows,thumbWidth,thumbHeight,spacing} = levelSelectOptions;

class levelSelect extends Phaser.Scene{
    constructor(){
        super({key:"levelSelect"});
    }

    create(){
this.duringTutorial = false;
/*
const fps= new text(this,100,300,game.loop.actualFps,15).setDepth(20)
this.input.on('pointerup',()=>{
 fps.setText(game.loop.actualFps)
})
*/

this.theme = soundManager.levelSelect_music
if(!heroConfig.generalOptions.musicMuted){
    this.theme.play();
}

this.playSound = soundManager.play_sound

        this.canMove = false;

          sceneIntro(this);
          this.pages_amount = colors.length;
          this.createButtons();
       
        this.itemGroup = this.add.group();
   
            new background(this,"levelSelectBG");
       

            
      this.fog =  this.add.image(gameWidth/2,gameHeight,"general","levelSelect_down").setOrigin(0.5,1);
           setGameSize(this.fog,true,false)
     
              
        this.scrollingMap = this.add.tileSprite(0, 0, colors.length * gameWidth, gameHeight,"general", "invisiblePoint");
       
        this.scrollingMap.alpha= 0.0001
 
        this.scrollingMap.setOrigin(0, 0);

        this.currentPage = 0;
        this.pageSelectors = [];

        let rowLength = thumbWidth * columns + spacing * (columns - 1);
        let leftMargin = (gameWidth - rowLength) / 2 + thumbWidth / 2;
        let colHeight = thumbHeight * rows + spacing * (rows - 1);
        let topMargin = (gameHeight - colHeight) / 2 + thumbHeight / 2 - 50;

   
       this.goldText =  this.add.text(gameWidth - 70,35,`gold x1`,{
        font:"25px LuckiestGuy",
        }).setOrigin(0.5)
    


        for(let k = 0; k < colors.length; k++){
            for(let i = 0; i < columns; i++){
                for(let j = 0; j < rows; j++){
               
  let thumb = this.add.image(k * gameWidth + leftMargin + i * (thumbWidth + spacing), topMargin + j * (thumbHeight + spacing), "levelRect",1);
thumb.setTint(colors[k]);
const thumbAura = this.add.image(thumb.x,thumb.y,"levelRect_aura",0);

     thumb.levelNumber = k * (rows * columns) + j * columns + i+1;

        this.itemGroup.add(thumb);
                    this.itemGroup.add(thumbAura)
                                  
        if(thumb.levelNumber <= heroConfig.levelsUnlocked) {
                   

                      thumb.setFrame(0).setInteractive().on("pointerup",()=>{
                            if(thumb.levelNumber != this.clickedNumber) return;
                            this.theme.stop()
                            if(!heroConfig.generalOptions.soundMuted){
                                this.playSound.play()
                            }
                            
                        
                        this.exitButton.hide();
                        this.levelSelectDiv.hide();  
                        level = thumb.levelNumber;

                changeScene(this,this.getLevelAlert,thumb.levelNumber);
                  
                      })
                            thumb.on("pointerdown",()=>{
                                this.clickedNumber = thumb.levelNumber
                            })

                      const levelText= new text(this,thumb.x,thumb.y+15,thumb.levelNumber,40);        
                    this.itemGroup.add(levelText);
                    }else{
                        thumbAura.setFrame(1)
                        thumb.setInteractive().on("pointerup",()=>soundManager.sound_6.play())
                    }

                }
            }
       

        }

        const lastLevelPage = ((heroConfig.levelsUnlocked-1)/8).toString().charAt(0)     
        this.changePage(Number(lastLevelPage),true);

  levelSelectOptions.hasListeners = true;
  this.createTutSet()
    }

addDragListeners(){
    this.scrollingMap.setInteractive();
    this.input.setDraggable(this.scrollingMap);

    this.input.on("dragstart", function(pointer, gameObject){
          
        gameObject.startPosition = gameObject.x;
        gameObject.currentPosition = gameObject.x;

    });

    this.input.on("drag", function(pointer, gameObject, dragX, dragY){

if(pointer.y > gameHeight -150 ) return;

        if(dragX <= 0 && dragX >= -gameObject.width + gameWidth ){
            gameObject.x = dragX;
            let delta = gameObject.x - gameObject.currentPosition;
            gameObject.currentPosition = dragX;
            this.itemGroup.children.iterate(function(item){
                item.x += delta;
            });
        }
    }, this);

    this.input.on("dragend", function(pointer, gameObject){
        if(this.duringTutorial) return
 
gameObject.disableInteractive();
        this.canMove = false;
        let delta = gameObject.startPosition - gameObject.x;
        if(delta == 0){
            this.canMove = true;
      
    
        }
        if(delta > gameWidth / 8){
            this.changePage(1);
        }
        else{
            if(delta < -gameWidth / 8){
                this.changePage(-1);
            }
            else{
                this.changePage(0);
            }
        }
}, this);
}
    getLevelAlert(context,levelToStart){   
        if(heroConfig.levelTutorial <= 3 && level <= 3){  
            
            if(level == 1 && heroConfig.levelTutorial == 1){
                context.scene.start("tutorial");
            }    else if( level == 2 && heroConfig.levelTutorial ==2)  {
                context.scene.start("tutorial_2");
            }else if(level ==3 && heroConfig.levelTutorial == 3){
                context.scene.start("tutorial_3");
            }else{
               actualLevel = `levelsConfig.level`+levelToStart;
                    context.scene.start("basicLevel");
                    return
            }

            
            heroConfig.levelTutorial++;
            saveProgress()
            return;
        }
        actualLevel = `levelsConfig.level`+levelToStart;
        
        context.scene.start("basicLevel");
    }
    

    changePage(page,isIntro = false){
        this.currentPage += page;

        this.goldText.setText(`gold x${this.currentPage + 1}`)
        if((this.currentPage + page) != this.currentPage){
            if(this.tutorialButton){
                this.tutorialButton.destroy()
               if(this.leftArrow) this.leftArrow.destroy()
       
            } 
         this.createTutSet()
        }
       
      
        this.fog.setTint(colors[this.currentPage]);
      

        let currentPosition = this.scrollingMap.x;
        this.tweens.add({
            targets: this.scrollingMap,
            x: this.currentPage * -gameWidth,
            duration: 300,
            ease: "Cubic.easeOut",
            callbackScope: this,
            onUpdate: function(tween, target){
                let delta = target.x - currentPosition;
                currentPosition = target.x;
                this.itemGroup.children.iterate(function(item){
                    item.x += delta;
                });
            },
            onComplete: function(){
                if(isIntro){
this.addDragListeners();
                }
                  this.scrollingMap.setInteractive();
            }
        });
    }
    createButtons(){
        this.levelSelectDiv = $("levelSelect");
        this.levelSelectDiv.show();

this.getExitButton();
this.getMiddleButton();
this.getLastPageButtons()

    }
createTutSet(){
    if(this.currentPage == 0){
        const tutorial = $("tutorial")
        let tutPage = 1;
        const showPage = sign  =>{     
           if(sign == "+"&&tutPage <4) tutPage++;
           if(sign =="-" && tutPage>1) tutPage--;
            
            tutorial.children[3].src = `tutorial_${tutPage}.svg`
            if(tutPage == 4){
                tutorial.children[3].style.height = "110%";
                tutorial.children[2].style.display = "none"
                tutorial.children[0].style.display = "block"
            }else{
                tutorial.children[2].style.display = "block"
                tutorial.children[0].style.display = "none"
            }

            if(tutPage == 1){
                tutorial.children[1].style.display = "none";
            }else{
                tutorial.children[1].style.display = "block";
            }
        }
 


        tutorial.children[0].onclick = () =>{
            this.duringTutorial = false;
            tutPage = 1;
            if(this.leftArrow){
                this.leftArrow.destroy()
             
            }
            tutorial.children[3].style.height = "100%";
            tutorial.hide();
            tutorial.children[2].style.display = "block"
            tutorial.children[0].style.display = "none"
        }
        tutorial.children[2].onclick = () => showPage("+");
        tutorial.children[1].onclick = () =>showPage("-");

this.tutorialButton =  new button(this,gameWidth/2,10,"tutorial-button")
.setOrigin(0.5,0).on("pointerup",()=>{
           this.duringTutorial = true;
        tutorial.show()
        heroConfig.isFirstTutorial = false;
        showPage(tutPage);
        saveProgress()
       });
       if(heroConfig.isFirstTutorial){
          
        this.leftArrow = this.add.image(gameWidth/2,this.tutorialButton.y + this.tutorialButton.displayHeight + 50,"tut-arrow").setAngle(-90);
       
      
       this.tweens.add({
        targets:this.leftArrow,
        y:"-=15",
        duration:500,
        repeat:-1,
        yoyo:true
    })
       }
       } 
}
getLastPageButtons(){
    const lastPageLeft = $("jumpLastPageLeft");
    const lastPageRight = $("jumpLastPageRight")

    if(this.hasListener()) return;
    lastPageLeft.addEventListener("click",()=> {
    
        if(!this.canMove ) return;   
         this.canMove=false;
        this.scrollingMap.disableInteractive();
        this.changePage(-this.currentPage)

    })

    lastPageRight.addEventListener("click",()=> {

        if(!this.canMove ) return;
        this.canMove=false;
        this.scrollingMap.disableInteractive();
        const shift = this.pages_amount-1 - this.currentPage;
      
        this.changePage(shift)

    })

}

getMiddleButton(){
const middleButton = $("jumpLastLevel");

if(this.hasListener()) return;
middleButton.addEventListener("click",()=>{
    if(!this.canMove ) return
    this.canMove = false;
   this.scrollingMap.disableInteractive();
  const lastLevelPage = ((heroConfig.levelsUnlocked-1)/8).toString().charAt(0)    

  const numberedLastLevelPage = Number(lastLevelPage)
  const pageMove = Math.abs(numberedLastLevelPage -  this.currentPage);

      
  if(this.currentPage > numberedLastLevelPage){

      this.changePage(-pageMove)
  }else{
      this.changePage(pageMove)
  }
  
 
})
}

    getExitButton(){
        this.exitButton = $("exitButton");
        this.exitButton.show();

function sceneToStart(context){
    context.scene.start("menu");
}


        
        this.exitButton.onclick = ()=>{           
         this.theme.stop()
            changeScene(this,sceneToStart);
            this.exitButton.hide();
            this.levelSelectDiv.hide();
        }
    }
   hasListener(){
        if(levelSelectOptions.hasListeners) return true;   
    }
 
}

