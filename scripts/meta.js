class meta  {
  constructor(scene,originPoints){
    this.self = scene  
   let  {x,y} = originPoints;


const upperHand = scene.physics.add.sprite(x+65,y-360,"game","upperHand");
const downHand = scene.physics.add.sprite(x,y-45,"game","downHand").setDepth(1) ;

this.metaPieces = [upperHand,downHand]

this.pointing = scene.tweens.add({
targets:upperHand,
y:"+=50",
yoyo:true,
duration:400,
repeat:-1,
})


  }
  getMetaPieces(){
    return this.metaPieces
  }

overlaped(){
  const flashTime = 1000;

  if(this.self.cameras.main)
  this.self.cameras.main.flash(flashTime)

const arr = [this.metaPieces[1],this.self.hero]

this.hideDownHand = () =>{
  this.self.tweens.add({
    targets:arr,
    x:"+=450",
    duration:700,
  })
}

this.hideUpperHand = () =>{
  this.self.tweens.add({
    targets:this.metaPieces[0],
    x:"+=250",
    duration:600,
    onComplete:()=>this.hideDownHand(),
  })
}

this.pointing.stop();
this.hideUpperHand();
  //setTimeout(this.hideUpperHand,flashTime)
  /*
const spacing = gameWidth/3;
const particles = this.self.add.particles('squareShadow_1');


for(let i=0;i<3;i++){
  particles.createEmitter({
    x: 70 + spacing *i,
    y: this.y - 10,
    lifespan: 2500,
    speed: { min: 0, max: 20},
    
    gravityY: -200,
    scale: { start: 0.4, end: 0 },
    quantity: 2,
    blendMode: 'ADD'
});
}
*/

}
};
