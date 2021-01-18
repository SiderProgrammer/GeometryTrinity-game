

  const rotateGame = (option)=>{
    if(option == 'upsidedown'){
      game.canvas.style.transform = "scaleY(-1)"
    }else{
      game.canvas.style.transform = ""
    }
  
  }
  
  const $ = (el) =>{
    const element = document.getElementById(el)
   
    element.show = (index) => {
  
      const tab = [];
     tab[0] = element.style.display = 'inline-block';
     tab[1] = element.style.display = 'block';
     if(!index){
       return tab[0];
     }
     return tab[index];
    };
 


element.appear = opacity => element.style.opacity = opacity;

 element.hide = () => element.style.display = 'none' ; 
  
    element.isSeen  = () => {
      if(element.style.display !="none"){
        return true
      }else
       return false;
    }
  
    return element;
    }

    
    function calcCordToPercent(xArg,yArg){
      let x = (xArg/gameWidth)*100+"%";
      let y = (yArg/gameHeight)*100+"%";
      
      return {
        x:x.toString(),
        y:y.toString(),
      }
      };

       function calcHTMLCordToPercent(xArg,yArg){
      
         let numberedX = Number(xArg)
         let numberedY = Number(yArg); 

        const percentageX =  numberedX /window.innerWidth
        const percentageY =  numberedY/window.innerHeight;
      let x = gameWidth*percentageX;
      let y = gameHeight*percentageY
      
      return {
        x:x,
        y:y,
      }
      };
      

      function getMoney(){
      const money = $("money");
       money.innerHTML = heroConfig.currentMoney;
       const moneyDiv = $("moneyDiv");
       moneyDiv.show();
      
      return {
        moneyDiv:moneyDiv,
        money:money,
      }
      }

      