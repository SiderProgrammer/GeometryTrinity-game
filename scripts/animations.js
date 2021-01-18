function getAnimations(){
    this.anims.create({
        key: 'eat',
        frames: this.anims.generateFrameNames('monster', { prefix: 'monster_eat', start: 1, end: 2}),
        frameRate: 3,
        repeat: -1
      });
      
      
      this.anims.create({
        key: 'boost',
        frames: this.anims.generateFrameNames('boost', { prefix: 'boost_', start: 0, end: 3}),
        frameRate: 10,
        repeat: -1
      });

      this.anims.create({
        key: 'lamp',
        frames: this.anims.generateFrameNames('lamp', { prefix: 'lamp_', start: 1, end: 4}),
        frameRate: 10,
        repeat: -1
      });
      
      this.anims.create({
        key: 'owl',
        frames: this.anims.generateFrameNames('owl', { prefix: 'owl_', start: 1, end: 3}),
        frameRate: 10,
        repeat: -1
      });
      this.anims.create({
        key:'thunder',
        frames: this.anims.generateFrameNames('thunder', { prefix: 'thunder_', start: 1, end: 10}),
        frameRate: 25,
        repeat: 1
      })
      this.anims.create({
        key:'dieEffect',
        frames: this.anims.generateFrameNames('dieEffect', { prefix: 'Die', start: 1, end: 10}),
        frameRate: 55,
        repeat: 0
      })

      this.anims.create({
        key:'spawnEffect',
        frames: this.anims.generateFrameNames('dieEffect', { prefix: 'Die', start: 1, end: 10}),
        frameRate: 55,
        repeat: 0,
        forward:false,
      })


}

