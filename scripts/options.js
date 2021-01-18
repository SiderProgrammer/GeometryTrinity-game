let optionsConfig = {
hasListeners:false,
}

class options extends Phaser.Scene{
    constructor(){
        super({key:"options"});
        
    }
    create(){
      this.warningShown = false;
      sceneIntro(this);
        new background(this,'levelSelectBG');
       makeBorder(this,"black_border")
        this.specialCode = new $specialCode(this);
        const optionsDiv = $('options');
        this.optionsDiv = optionsDiv;
        this.optionsDiv.style.opacity = 1;
        optionsDiv.show(1);

  
        this.getFigureController();
      this.getMusicController();
      this.getSoundController()
      this.getPerformanceController();

      this.exitButton = $("exitButton");
      this.exitButton.show();

      function sceneToStart(context){
        context.scene.start("menu");
      }

      this.exitButton.onclick = ()=>{

        changeScene(this,sceneToStart);
        this.okayButton.hide();
        this.specialCode.reset();
        optionsDiv.hide();
        this.exitButton.hide();
      }

optionsConfig.hasListeners = true;

    }

    getFigureController(){
      const toggleShapeChange = $("toggleShapeChange");
 
      if(heroConfig.generalOptions.controllerShown){
        toggleShapeChange.children[1].children[0].checked = true
      }

   //   new text(this,10,gameHeight*0.17,"Figure Controller",35,0,0.5)
      
if(optionsConfig.hasListeners) return;

   toggleShapeChange.children[1].children[1].addEventListener('click',()=>{
    if(this.warningShown){
      toggleShapeChange.children[1].children[0].disabled = true;
      return;
    } 
    toggleShapeChange.children[1].children[0].disabled = false;

                if(heroConfig.generalOptions.controllerShown){
               
                  heroConfig.generalOptions.controllerShown = false
              
                  
                }else{
       
                  heroConfig.generalOptions.controllerShown= true;
                }
                localStorage.setItem("progress",JSON.stringify(heroConfig));
              });
             
         
    }

    getMusicController(){
      const toggleMusicChange = $("toggleMusicChange");
      
      if(!heroConfig.generalOptions.musicMuted){
        toggleMusicChange.children[1].children[0].checked = true
      }
      
    //  new text(this,10,gameHeight*0.37,"Music/Sound",35,0,0.5)

      if(optionsConfig.hasListeners) return;

      toggleMusicChange.children[1].children[1].addEventListener('click',()=>{
        if(this.warningShown){
          toggleMusicChange.children[1].children[0].disabled = true;
          return;
        } 
        toggleMusicChange.children[1].children[0].disabled = false;

                if(heroConfig.generalOptions.musicMuted){
          
                  heroConfig.generalOptions.musicMuted = false
              
                  
                }else{
                
                  heroConfig.generalOptions.musicMuted= true;
                  soundManager.menu_music.stop();
                }
                localStorage.setItem("progress",JSON.stringify(heroConfig));
              });
             
             
    }

    getSoundController(){
      const toggleSoundChange = $("toggleSoundChange");
      
      if(!heroConfig.generalOptions.soundMuted){
        toggleSoundChange.children[1].children[0].checked = true
      }
      
   

      if(optionsConfig.hasListeners) return;
      toggleSoundChange.children[1].children[1].addEventListener('click',()=>{
        if(this.warningShown){
          toggleSoundChange.children[1].children[0].disabled = true;
          return;
        } 
        toggleSoundChange.children[1].children[0].disabled = false;

                if(heroConfig.generalOptions.soundMuted){
       
                  heroConfig.generalOptions.soundMuted = false  
                  
                }else{
       
                  heroConfig.generalOptions.soundMuted= true;
                }
               localStorage.setItem("progress",JSON.stringify(heroConfig));
              });
             
             
    }

    getPerformanceController(){
      const okayButton = $("okayButton");
     this.okayButton = okayButton;

    const  showPerformanceBoostWarning = (e) =>{
      if(e)
      if(e.target.id == "boostInfo" && this.warningShown) return;
      
this.warningShown = true;
      this.optionsDiv.style.opacity = 0.1;
      const elements = [];

      elements[0]= new background(this,'endBG')

       const textX = gameWidth/2;
       const textY = gameHeight/2+100;

    

    elements[2]=  this.make.text({
      x: textX,
      y: 80,
      text: 'Warning !',
      origin: { x: 0.5, y: 0.5 },
      style: {
          font: '40px LuckiestGuy',
          fill: 'red',
          align:"center",
          wordWrap: { width: gameWidth*0.8 }
      }
  });


  elements[4]=  this.make.text({
    x: textX,
    y: elements[2].y + elements[2].height + 70,
    text:   'Boosting your performance will cause some graphics make worse',
    origin: { x: 0.5, y: 0.5 },
    style: {
        font: '30px LuckiestGuy',
        fill: 'yellow',
        align:"center",
        wordWrap: { width: gameWidth*0.8 }
    }
});

const middleText =  this.make.text({
  x: textX,
  y: elements[4].y +  elements[4].height + 30,
  text:'Also, some special effects will be turned off, e.g. departing particles',
 
  origin: { x: 0.5, y: 0.5 },
  style: {
      font: '30px LuckiestGuy',
      fill: 'yellow',
      align:"center",
      wordWrap: { width: gameWidth*0.8 }
  }
});

elements[1]=middleText;
  
 
  const downText = this.make.text({
    x: textX,
    y: middleText.y +  middleText.height/2 + 30,
    text: 'After changing this option, you must reset the application to apply the changes',
    origin: { x: 0.5, y: 0.5 },
    style: {
        font: '30px LuckiestGuy',
        fill: 'yellow',
        align:"center",
        wordWrap: { width: gameWidth*0.8 }
    }
});
downText.y +=downText.height/2

elements[3]=downText;

const cord = calcCordToPercent(textX,downText.y+downText.height/2+50);
okayButton.style.left = cord.x;
okayButton.style.top = cord.y;
okayButton.show();
okayButton.onclick = () =>{
  
  okayButton.hide();
  this.optionsDiv.style.opacity = 1;
  elements.forEach(el=>el.destroy());
  setTimeout(()=>this.warningShown=false,100);
}

      }

      const togglePerformanceChange = $("togglePerformanceChange");
      const boostInfoButton = $("boostInfo");

      if(!optionsConfig.hasListeners){
        boostInfoButton.addEventListener("click",(e)=>showPerformanceBoostWarning(e));
      }
   

      if(heroConfig.generalOptions.performanceBoost){
        togglePerformanceChange.children[1].children[0].checked = true

      }else{
        togglePerformanceChange.children[1].children[0].checked = false;
      
      }

 // new text(this,10,gameHeight*0.57,"Performance Boost",35,0,0.5)
  
         if(optionsConfig.hasListeners) return;

      togglePerformanceChange.children[1].children[1].addEventListener('click',()=>{
        if(this.warningShown){
          togglePerformanceChange.children[1].children[0].disabled = true;
          return;
        } 
        togglePerformanceChange.children[1].children[0].disabled = false;

                if(heroConfig.generalOptions.performanceBoost){
               
                  heroConfig.generalOptions.performanceBoost = false
              
                  
                }else{

                  heroConfig. generalOptions.performanceBoost= true;
                }
                showPerformanceBoostWarning();
                localStorage.setItem("progress",JSON.stringify(heroConfig));
              });
             
             
    }
}