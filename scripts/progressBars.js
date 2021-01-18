

class expBar {
  constructor(){
this.bar = $('expbar');
this.bar.show();
this.barfill = this.bar.children[0];
this.barfill.style.display = 'inline-block';

this.expPercent = $("expPercent");

    this.currentExp=  heroConfig.currentExp;
    this.level = heroConfig.heroLevel;
    this.expNeeded = heroConfig.expNeeded
  
  }
updateBar(){

  let proportions = this.currentExp/this.expNeeded;
  proportions*=100;
  this.expPercent.innerHTML = `${round(proportions,2).toString()} %`
  const transformToWidth = proportions.toString() +'%';
this.barfill.style.width = transformToWidth

while(this.currentExp >= this.expNeeded){
 
 this.level++;
const rest =this.currentExp - this.expNeeded;
    this.expNeeded =heroConfig.expNeeded;
    let proportions= rest/this.expNeeded;
    proportions*=100;

    const transformToWidth = proportions.toString() +'%';
  
  this.barfill.style.width = transformToWidth
    this.expPercent.innerHTML = `${round(proportions,2).toString()} %`
  heroConfig.currentExp = rest
this.currentExp = heroConfig.currentExp;
heroConfig.heroLevel = this.level;


heroConfig.expNeeded = calculateExpNeeded();
saveProgress()
}
};

hide(){
  this.bar.hide();
}
disappear(){
this.bar.style.opacity = 0;
}
appear(){
this.bar.appear(1);
}
updateValues(){
  this.currentExp=  heroConfig.currentExp;
  this.level = heroConfig.heroLevel;
  this.expNeeded = heroConfig.expNeeded;
}

updateLevel(){
  const heroLevel = $('heroLevel')
heroLevel.innerHTML = this.level;

}

};

function calculateExpNeeded(){
  const newExp = heroConfig.expNeeded + 10 + (heroConfig.heroLevel-1)*5; 
  return newExp;
};
