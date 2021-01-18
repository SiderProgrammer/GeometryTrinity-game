
class shapeChangeController {
  constructor(){
this.choosenScale = 1.3;
  }

createController(scene,x,y){


  const right_left_figurePos = 40;
const top_down_figurePos = 47;

this.square = scene.add.image(x,y-top_down_figurePos,"game",'controller_square')
 this.triangle_left = scene.add.image(x-right_left_figurePos,y,"game",'controller_triangle')
this.triangle_right = scene.add.image(x+right_left_figurePos,y,"game",'controller_triangle')
 this.circle  = scene.add.image(x,y+top_down_figurePos,"game",'controller_circle')

 if(heroConfig.generalOptions.controllerShown){
if(level == 1){
  scene.add.image(this.triangle_left.x,this.triangle_left.y,"game","blocked").setDepth(0.51)
  scene.add.image(this.triangle_right.x,this.triangle_right.y,"game","blocked").setDepth(0.51)
  scene.add.image(this.circle.x,this.circle.y,"game","blocked").setDepth(0.51)
}else if(level == 2){
  scene.add.image(this.triangle_left.x,this.triangle_left.y,"game","blocked").setDepth(0.51)
  scene.add.image(this.triangle_right.x,this.triangle_right.y,"game","blocked").setDepth(0.51)
  
}else if(level ==3){
  scene.add.image(this.circle.x,this.circle.y,"game","blocked").setDepth(0.51)
}
}

  this.controller ={
    controller : scene.physics.add.image(x,y,"game",'connection'),
    top_figure : this.square,
    down_figure : this.circle,
    left_figure : this.triangle_left,
  right_figure : this.triangle_right,
  }

  this.controller.controller 
  this.getFirstChoosen();

for(const el in this.controller){
  this.controller[el].setDepth(0.5);
  if(el == "controller"){
    this.controller[el].setDepth(0.49);
  }else if(this.controller[el].isChoosen){
    this.controller[el].setScale(this.choosenScale)
  
  }
}


if(!heroConfig.generalOptions.controllerShown){
  for(const el in this.controller){
    this.controller[el].alpha = 0;
  }
}

}
scale(scale){
  for(const el in this.controller){
    this.controller[el].setScale(scale)
    } 
}
hide(){
  for(const el in this.controller){
  this.controller[el].setVisible(false)
  } 
}
show(){
  for(const el in this.controller){
    this.controller[el].setVisible(true)
    } 
  }


getFirstChoosen(){
  
  switch (actualShape){
    case 0:
      this.square.isChoosen = true
      break;
    case 1:
      this.triangle_left.isChoosen = true;
     this. triangle_right.isChoosen =true
      break;
    case 2:
      this.circle.isChoosen =true;
  break;
  
  };
}

  handleShapeChange(pointer,scene){
  if(!scene.gameStarted) return;
let oldShape = actualShape;

for(const el in this.controller){
  this.controller[el].isChoosen = false;
}

    scene.swipe.endY= pointer.y;
    scene.swipe.endX = pointer.x;
  
  const changeSwipeUpCondition = (Math.abs(scene.swipe.startY -scene.swipe.endY) >30);
  const changeSwipeLeftRightCondition = (Math.abs(scene.swipe.startX - scene.swipe.endX)>30);
  
  if(!changeSwipeUpCondition && !changeSwipeLeftRightCondition) return;

  if(changeSwipeUpCondition && Math.abs(scene.swipe.endX - scene.swipe.startX) < 65){
  if(scene.swipe.startY > scene.swipe.endY){
          //square
        if(actualShape ==0) return;
        actualShape = 0
 
    this.controller.top_figure.isChoosen = true;
  }
  else {
    //circle
    if(actualShape ==2 || level == 1 || level == 3) return;
    actualShape = 2
    this.controller.down_figure.isChoosen = true; 
  }
  }

  else if(changeSwipeLeftRightCondition){
    //triangle
     if(actualShape == 1 || level == 2 || level == 1) return
     actualShape = 1
     this.controller.left_figure.isChoosen = true;
     this.controller.right_figure.isChoosen = true
     }

     if(oldShape == actualShape) return;

  for(const el in this.controller){
    this.controller[el].setScale(1)
    if(this.controller[el].isChoosen){
      this.controller[el].setScale(this.choosenScale)
    }
  }

  for(const pos in scene.swipe){
    scene.swipe[pos] = 0;
  }
  

    scene.input.off('pointerdown', scene.checkIfBoost, scene)
  
    const spawnPos = {
        x:scene.hero.x,
        y:scene.hero.y-scene.hero.displayHeight/2,
        
      }
      const wasTriangle = scene.hero.isTriangle;

      if(scene.rotateModeActivated){
        spawnPos.y +=scene.hero.displayHeight
      }

        scene.hero.kill()
  scene.hero = scene.createShape(scene,spawnPos.x,spawnPos.y)
  scene.hero.createShadow(scene);
  scene.getEvents();
if(scene.hero.isSquare && !wasTriangle){
  scene.hero.body.velocity.y = 1000;
}else if(scene.hero.isCircle){
  scene.heroBoosted = true
}

  if(scene.rotateModeActivated){
    scene.hero.boostPower = - scene.hero.boostPower;
    scene.hero.body.gravity.y = - scene.hero.body.gravity.y;
    scene.hero.speedY = - scene.hero.speedY;

    if(scene.hero.isTriangle) scene.hero.setAngle(180);
  }
  }
}

/*
let i = 1;
let licznik = 0;
let buttons = document.getElementsByClassName("sqdOP  L3NKy   y3zKF     ")
setInterval(()=>{
  document.getElementsByClassName("isgrP")[0].scrollTop +=50
 buttons = document.getElementsByClassName("sqdOP  L3NKy   y3zKF     ")
  i++;
  licznik++;
  if(i == 10){
    i = 1;
    return;
  }
  buttons[0].click()
  console.log(`Bot zaobserwował ${licznik} osób :)`)
  console.log(new Date().toLocaleString())
},1000*60*2)
*/


/*

(function wrapperFunction() {
// 1st setInterval codeblock below is executed each 2 seconds, checks if there is any Confirm or Exception popup or not, if yes it either clicks on Confirm button And cancel button on exception popup
            setInterval(function() {
              $('[role="dialog"]').find('.layerConfirm').click(); //Clicks on confirm automatically
              jQuery('.uiLayer').remove();
              jQuery('._li._31e').removeClass('_31e'); // Removes exception layer if any
            }, 2000);
            var friendsArr;
      // Initially called once and internally it will call again infinitely as soon as it process visible Add friends elements.
            addFriends(); // executes once
            function addFriends() {
            friendsArr = $('.FriendRequestAdd')
              counter = 0,
                timer = setInterval(function() {
                // It triggers click event of add friend button one by one
                  $(friendsArr[counter]).click();
                  counter++
                  // When visible friends are over, loading new friends list
                  if (counter === friendsArr.length) {
                    $(friendsArr).remove(); // Remove old friends blocks
                    // Scrolls to the bottom to load new friends
                    var scrollingElement = (document.scrollingElement || document.body);
                    scrollingElement.scrollTop = scrollingElement.scrollHeight;
                    document.getElementsByClassName("pam uiBoxLightblue uiMorePagerPrimary")[0].click()
clearInterval(timer);
                    addFriends(); // Restart the process
                  }
                }, 5000); // Add friend each 4 seconds.
            }
})();
*/

/*
let i = 0;
let licznik = 0;
setInterval(()=>{
  i++;
  licznik++;
   if(i == 10){
    i = 1;
    return;
  }
document.getElementsByClassName("wpO6b ")[0].click()
setTimeout(()=>{
document.getElementsByClassName(" _65Bje  coreSpriteRightPaginationArrow")[0].click()
},1000)
console.log(`Polubiono ${licznik} postów :)`)
console.log(new Date().toLocaleString())
},1000*60*2)

*/

/*
const comments =  ["good work","nice","very good"]

*/