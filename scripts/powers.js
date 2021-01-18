class power extends Phaser.GameObjects.Sprite{
    constructor(scene,x,y,sprite = 'coin'){
        super(scene,x,y,sprite);
        scene.powersArray.push(this)
        scene.add.existing(this);
        scene.physics.world.enable(this);

    }
    caught(scene){
this.destroy();
const powerIndex = scene.powersArray.indexOf(this);
scene.powersArray.splice(powerIndex,1);

    }
}