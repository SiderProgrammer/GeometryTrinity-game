const specialCodeConfig = {
    hasListeners:false,
}

class $specialCode {
    constructor(scene){
this.scene = scene
        this.specialCodeCont = this.getSpecialCodeContainer();

        this.specialCodeCont.container.show();

        this.specialCodeButton = this.specialCodeCont.submitButton
        this.specialCode = this.specialCodeCont.input;

      
        this.codes = heroConfig.codes;
        this.parent = this;
    }
    getContext(){
return this.scene
    }

getSpecialCodeContainer(){
    const sf = {};
  this.sf = sf;

    sf.container = $('container');
    sf.form = document.querySelector('.container > #singular-form');
    sf.trigger = document.querySelector('.container > #singular-form > button#trigger');
    sf.input = document.querySelector('.container>#singular-form>#input-container>input');
    sf.submitButton = document.querySelector('.container > #singular-form > #input-container > button');
    sf.successMessage = document.querySelector('.container > #singular-form > #success');
    sf.wrongMessage = document.querySelector('.container > #singular-form > #wrong');
    sf.submitDelay = 1500;
    sf.input2 = document.querySelector('.container>#singular-form>#input-container');

    sf.input.value = "";
    sf.clickHandler = (e) => {
  
        switch (e.target) {
            case sf.trigger:
             
                sf.container.style.width = '70%'
                e.target.classList.remove('shown');
                sf.input.classList.add('shown');
                sf.submitButton.classList.add('shown');
                sf.input.focus();
                break;
            case sf.submitButton:
            const prototype = Object.getPrototypeOf(this)
                if(prototype.checkCode(this.parent))
                sf.submitForm(true);
                else
                sf.submitForm(false)
                break;
               
        }    
    }
    
    sf.submitForm = (conclusion) => {

     if(conclusion){
        sf.input.style.transition = 'all .4s ease';
        sf.submitButton.style.transition = 'all .4s ease';
        sf.input.classList.remove('shown');
        sf.submitButton.classList.remove('shown');
        sf.container.style.transition = 'all .4s cubic-bezier(0.47, 0.47, 0.27, 1.20) .4s';
        sf.container.style.width = '';
      sf.successMessage.classList.add('shown');
    
           }
        else
        {
            sf.input.style.transition = 'all .4s ease';
            sf.submitButton.style.transition = 'all .4s ease';
            sf.input.classList.remove('shown');
            sf.submitButton.classList.remove('shown');
            sf.container.style.transition = 'all .4s cubic-bezier(0.47, 0.47, 0.27, 1.20) .4s';
            sf.container.style.width = '';
           sf.wrongMessage.classList.add('shown');
         
        }
    }
                ///prevent adding more than one listener
    if(specialCodeConfig.hasListeners) {
        return sf;
    }else{
        specialCodeConfig.hasListeners = true;
    }
   
    sf.input.addEventListener("focusout",()=>{
        try{
        if(Android){
            Android.hideNavBar();
        }
      
    }catch(e){
        console.log(e)
    }
    })

    sf.input2.addEventListener('click',(e)=>{
        e.preventDefault();
        if(e.target.id === "input-container"){
                sf.wrongMessage.classList.remove('shown')
                sf.successMessage.classList.remove('shown')
          setTimeout(()=>  sf.trigger.classList.add('shown'),300)    
        }
     
    })
 
    sf.trigger.addEventListener('click', (e) => sf.clickHandler(e));
    sf.submitButton.addEventListener('click', (e) => sf.clickHandler(e));
   
    return sf;
}

reset(){
    this.sf.wrongMessage.classList.remove('shown');
    this.sf.successMessage.classList.remove('shown');
     this.sf.submitButton.classList.remove('shown');
     this.sf.input.classList.remove('shown');
     this.sf.container.style.width = ''
    this.sf.trigger.classList.add('shown');
}

checkCode(s){
 
    this.value = s.specialCode.value.toLowerCase();

    const codes  = s.codes;
    s.specialCode.value = "";

   for(const code in codes){
     if(codes[code].code === s.value && !heroConfig.codes[code].isUsed){
      
    heroConfig.codes[code].isUsed = true;
    
       const message =  s.rewardUser(codes[code].reward);
       saveProgress()
   
        this.showRewardMessage(message,s);
        return true;
     }
   }  
   if(!heroConfig.generalOptions.soundMuted) soundManager.sound_6.play()
}
showRewardMessage(message,s){
  const context = s.getContext()
    if(message.isArray){
        const arr = []
        arr[0] = context.add.text(gameWidth/2,70,message[1],{
            font:"30px LuckiestGuy",
            stroke: '	#000000',
            strokeThickness: 3,      
            align:"center",

          }).setOrigin(0.5)   

        arr[1] = context.add.text(gameWidth/2,100,message[0],{
          font:"30px LuckiestGuy",
          stroke: '	#000000',
          strokeThickness: 3,      
          align:"center",
        }).setOrigin(0.5);

        context.tweens.add({
            targets:arr,
            y:0,
            alpha:0,
            duration:4000,
        })  
        return;
    }
   
const text = context.add.text(gameWidth/2,70,message,{
          font:"30px LuckiestGuy",
          color:"yellow",
          stroke: '	#000000',
          strokeThickness: 3,      
          align:"center",
        }).setOrigin(0.5);

context.tweens.add({
    targets:text,
    y:0,
    alpha:0,
    duration:4000,
})
}

rewardUser(which){
    let message,reward;
    if(!heroConfig.generalOptions.soundMuted) soundManager.sound_4.play()
switch(which){
            case 3:
               message = new Array(2);
                reward = 50;
                message[0] = `current exp + ${reward/(heroConfig.heroLevel*2)*100}%`;
                heroConfig.currentExp +=reward;
                reward = 250;
                message[1] = `+ ${reward} coins`
                heroConfig.currentMoney +=reward;
                break;     
                case 4:
                    message = "progres restarted"
                    localStorage.clear();
                    heroConfig = default_heroConfig;
                break;
                    case 5:
        heroConfig.specialShopUnlocked = true;
        message = "SpecialShop unlocked !"
                        break;
                    case 6:
                heroConfig.isAdmin = true;
                    heroConfig.currentMoney += 99999999;
                    heroConfig.currentExp +=9999999;
                    heroConfig.levelsUnlocked = 80;
                    message = "Admin mode activated !"
                        break;
}

return message;
}
};