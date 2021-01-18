let actualLevel;

const basicColors = {
  green:"0x00ff00",
  white:"0xffffff",
 brown:"0x4e0633",
 red:"0xfd2b28",
 purple:"0xb632d7",
 pink:"0xffc0cb",
 blue:"0xC600FF",
 gray:"0x5d5d5d",
 prettyDark:"0x04102f",
 yellow:"0xfdff00"

}

  

const levelsTints = {
  level1:"0x79B0EE",
  level2:"0xFF8200",
  level3:"0x676C77",
  level4:"0x00FF00",
  level5:"0xFF84B3",
  level6:"0x00FFFD",
  level7:"0xFF00A1",
  level8:"0x5C3D00",
  level9:"0xFF0000",
  level10:"0x676C77",
  level11:"0xFF383E",
  level12:"0xFFFFFF",
  level13:"0xFFFFFF",
  level14:"0x061749",
  level15:"0xC6EE17",
  level16:"0x7B14E9",
  level17:"0xFF0009",
  level18:"0x00FFAC",
  level19:"0xDEFF00",
  level20:"0x6792E9",
  level21:"0xFF0000",
  level22:"0xFFFF00",
  level23:"0xFFFF00",
  level24:"0x7D7C11",
  level25:"0x00FF00",
  level26:"0xCCFFFF",
  level27:"0x6872AE",
  level28:"0x2F39FF",
  level29:"0x18FFA3",
   level30:"0xC600FF",
   level31:"0x6F2712",
   level32:"0xFF0BD1",
     level33:"0x1F7F00",
     level34:"0xC02F28",
       level35:"0xF0CC3B",
       level36:"0x000000",
       level37:"0xFFFFFF",
       level38:"0x542422",
       level39:"0xAAA18D",
       level40:"0x6CFF93",
       level41:"0x0000FF",
       level42:"0x0000FF",
       level43:"0x0000FF",
       level44:"0x0000FF",
       level45:"0x0000FF",
       level46:"0x0000FF",
       level47:"0x0000FF",
       level48:"0x0000FF",
       level49:"0x0000FF",
       level50:"0x0000FF",

}

const levelsConfig = {

    level1:{     
         meters:140,
        createMetaMeters:10,
        floorSpeed: -5,
        dimness:false,

        skins:{
        map:"start",
        floorSkins:"grid",
        obstacleSkin:"obstacle_11",
       
      },

      music:"music_1",
      
      spacing:{
        floorToFloorSpacing:80,
        additionalObstacleSpacing:50,
        doubleHeightObstacleSpacing:25,
        floorToFlyingFloorSpacing:130,
        squareObstacleSpacing:10,
        
    },
      piramidModeChance:0,
      obstacleShift:55,
        chances:{
          upperFloorChance:0,
          lowerFloorChance:0,

          floorObstacleChance:0,
              flyingFloorChance:0,
              shortFloorWithBallChance:0,
              spikeMouthChance:0,
              tunnelChance:0,
              magicRodChance:0,
          
          spikeBlockObstacleChance:100,
          sawObstacleChance:0,

  spikeBarAboveChance:0, 
  spikeShowChance:40,
      oneSpikeChance:50,
      doubleSpikeChance:0,
      obstacleBlockChance:100,
      higherObstacleChance:0,
          
  randomWallSpecialEffectChance:10,
      additionalBottomShurikenChance:50,
      additionalBottomWallSawChance:50,
      bottomTextureChance:30,
  
        },
       tints:{
        backgroundTint:levelsTints.level1,
        lavaTint:"0x007FFF", 
        pulseTint:"0x0000FF",

          obstacleTint:"0x0000FF", 
          blockObstacleTint:"0x0000FF",
          sawTint:"0xffffff",

          spikeBarTint:levelsTints.level1,
          blackBarTint:levelsTints.level1,

          shortBallFloorTint:levelsTints.level1,  

          floorTint:"0xffffff", 
          floorAuraUpTint:"0xFF0000",
          floorAuraTint:"0xffff00",
          shortFlyingFloorTint:"0x00C4FF", 
 
          shurikenWallTint:levelsTints.level1, 
          wallSawTint:levelsTints.level1, 
          bottomSpikeTint:levelsTints.level1,

          gearTint:levelsTints.level1,    
          
          laserTint:"0xC600FF",
         
        },

        specialEvents:{
          triangleBackMode:{
            available:false,
            createMeters:90,
          },
            thunder:{
              available:false,
              firstStrikeMeters:70,
              secondStrikeMeters:30,
            },
              flipHands:{
                available:false,
                firstHandMeters:70,
                secondHandMeters:30,
              },
              cave:{
                available:false,
                createCaveMeters:80,
                closeCaveMeters:50,
              },
              rotateMode:{
                available:false,
                firstLineMeters:90,
                secondLineMeters:80,
              },
              bigMonster:{
                available:false,
                    monsterShowsMeters:90,
                    monsterBackMeters:70,
              }
        },
     
    
    },

    level2:{     
      meters:145,
        createMetaMeters:10,
        floorSpeed: -5.025,
        dimness:false,
correctLine:"0xffffff",

      skins:{
        map:"sunny",
  floorSkins:"triangles",
        obstacleSkin:"obstacle_11",
     
      },
      obstacleShift:55,
      music:"music_2",

      spacing:{
        floorToFloorSpacing:80,
        additionalObstacleSpacing:50,
        doubleHeightObstacleSpacing:25,
        floorToFlyingFloorSpacing:130,
        squareObstacleSpacing:10,
    },
      piramidModeChance:0,

        chances:{
          upperFloorChance:0,
          lowerFloorChance:0,

          floorObstacleChance:18,
              flyingFloorChance:0,
              shortFloorWithBallChance:0,
              spikeMouthChance:0,
              tunnelChance:100,
              magicRodChance:0,
          
          spikeBlockObstacleChance:100,
          sawObstacleChance:0,

  spikeBarAboveChance:0, 
  spikeShowChance:40,
      oneSpikeChance:50,
      doubleSpikeChance:0,
      obstacleBlockChance:100,
      higherObstacleChance:0,
 
  randomWallSpecialEffectChance:10,
      additionalBottomShurikenChance:50,
      additionalBottomWallSawChance:50,
      bottomTextureChance:20,
  
        },
       tints:{
        backgroundTint:"0xffffff",
        floorAuraUpTint:"0x000000",
        floorAuraTint:"0x000000",
    
        lavaTint:"0xffffff", 
    shortFlyingFloorTint:"0xE8CD00", 
     laserTint:"0xC600FF",
       

          obstacleTint:levelsTints.level2, 
          blockObstacleTint:levelsTints.level2,

          spikeBarTint:levelsTints.level2,
          blackBarTint:levelsTints.level2,

          shortBallFloorTint:levelsTints.level2,  

         

        
          sawTint:"0xFF0C00",
         
         

          shurikenWallTint:levelsTints.level2, 
          wallSawTint:"0xF30000" ,
          bottomSpikeTint:levelsTints.level2,

          gearTint:levelsTints.level2,    
          
          laserTint:"0xffffff",
          pulseTint:"0xFF9F00",
        },

        specialEvents:{
          triangleBackMode:{
            available:false,
            createMeters:90,
          },
            thunder:{
              available:false,
              firstStrikeMeters:70,
              secondStrikeMeters:30,
            },
              flipHands:{
                available:false,
                firstHandMeters:70,
                secondHandMeters:30,
              },
              cave:{
                available:false,
                createCaveMeters:80,
                closeCaveMeters:50,
              },
              rotateMode:{
                available:false,
                firstLineMeters:90,
                secondLineMeters:80,
              },
              bigMonster:{
                available:false,
                    monsterShowsMeters:90,
                    monsterBackMeters:70,
              }
        },
     
  
},
level3:{     
  meters:150,
  createMetaMeters:9,
  floorSpeed: -5.05,
  dimness:false,
      //tut:"tutorial_2.svg", 
    // tut:"tutorial_1.svg",
    // 
    // //tut:"tutorial_3.svg",
  music:"music_3",
  obstacleShift:55,
skins:{
  map:"bricks",
  floorSkins:"castle",

  obstacleSkin:"obstacle_11",

},

spacing:{
  floorToFloorSpacing:80,
  additionalObstacleSpacing:50,
  doubleHeightObstacleSpacing:25,
  floorToFlyingFloorSpacing:130,
  squareObstacleSpacing:10,
},
piramidModeChance:0,

  chances:{
    upperFloorChance:0,
    lowerFloorChance:0,

    floorObstacleChance:50,
        flyingFloorChance:100,
        shortFloorWithBallChance:0,
        spikeMouthChance:0,
        tunnelChance:0,
        magicRodChance:0,
    
    spikeBlockObstacleChance:100,
    sawObstacleChance:0,

spikeBarAboveChance:0, 
spikeShowChance:40,
oneSpikeChance:50,
doubleSpikeChance:0,
obstacleBlockChance:100,
higherObstacleChance:0,

randomWallSpecialEffectChance:10,
additionalBottomShurikenChance:50,
additionalBottomWallSawChance:50,
bottomTextureChance:20,

  },
  tints:{
    backgroundTint:levelsTints.level10,
  
      obstacleTint:levelsTints.level10, 
      blockObstacleTint:levelsTints.level10,
  
      spikeBarTint:levelsTints.level10,
      blackBarTint:levelsTints.level10,
  
      shortBallFloorTint:levelsTints.level10,  
  
      floorTint:"0xffc0cb", 
      floorAuraUpTint:"0x00B800",
      floorAuraTint:"0xb632d7",
  
      lavaTint:"0x4EB252", 
      sawTint:"0x00FF00",
     
      shortFlyingFloorTint:"0x4D426D", 
  
      shurikenWallTint:levelsTints.level10, 
      wallSawTint:levelsTints.level10, 
      bottomSpikeTint:levelsTints.level10,
  
      gearTint:levelsTints.level10,    
      
      laserTint:"0xC600FF",
      pulseTint:"0xBFB6BE",
    },

  specialEvents:{
    triangleBackMode:{
      available:false,
      createMeters:90,
    },
      thunder:{
        available:false,
        firstStrikeMeters:70,
        secondStrikeMeters:30,
      },
        flipHands:{
          available:false,
          firstHandMeters:70,
          secondHandMeters:30,
        },
        cave:{
          available:false,
          createCaveMeters:80,
          closeCaveMeters:50,
        },
        rotateMode:{
          available:false,
          firstLineMeters:90,
          secondLineMeters:80,
        },
        bigMonster:{
          available:false,
              monsterShowsMeters:90,
              monsterBackMeters:70,
        }
  },


},
level4:{     
  meters:155,
  createMetaMeters:9,
  floorSpeed: -5.075,
  dimness:false,
  correctLine:"0xffffff",
  music:"music_4",
  obstacleShift:55,
skins:{
  map:"green",
  floorSkins:"basic",
  obstacleSkin:"obstacle_11",

},

spacing:{
  floorToFloorSpacing:80,
  additionalObstacleSpacing:50,
  doubleHeightObstacleSpacing:25,
  floorToFlyingFloorSpacing:130,
  squareObstacleSpacing:15,
},
piramidModeChance:0,

  chances:{
    upperFloorChance:5,
    lowerFloorChance:5,

    floorObstacleChance:25,
        flyingFloorChance:60,
        shortFloorWithBallChance:0,
        spikeMouthChance:0,
        tunnelChance:25,
        magicRodChance:0,
    
    spikeBlockObstacleChance:100,
    sawObstacleChance:0,

spikeBarAboveChance:0, 
spikeShowChance:40,
oneSpikeChance:50,
doubleSpikeChance:0,
obstacleBlockChance:100,
higherObstacleChance:0,

randomWallSpecialEffectChance:10,
additionalBottomShurikenChance:50,
additionalBottomWallSawChance:40,
bottomTextureChance:25,

  },
 tints:{
  backgroundTint:"0xffffff",

    obstacleTint:levelsTints.level4, 
    blockObstacleTint:levelsTints.level4,

    spikeBarTint:levelsTints.level4,
    blackBarTint:levelsTints.level4,

    shortBallFloorTint:levelsTints.level4,  

    floorTint:"0xffffff", 
    floorAuraUpTint:"0x9000FF",
    floorAuraTint:"0xFF00FF",

    lavaTint:"0x2EF200", 
    sawTint:"0x006200",
   
    shortFlyingFloorTint:"0x2EF200", 

    shurikenWallTint:levelsTints.level4, 
    wallSawTint:levelsTints.level4, 
    bottomSpikeTint:levelsTints.level4,

    gearTint:levelsTints.level4,    
    
    laserTint:"0xC600FF",
    pulseTint:"0x00A900",
  },

  specialEvents:{
    triangleBackMode:{
      available:false,
      createMeters:90,
    },
      thunder:{
        available:false,
        firstStrikeMeters:70,
        secondStrikeMeters:30,
      },
        flipHands:{
          available:false,
          firstHandMeters:70,
          secondHandMeters:30,
        },
        cave:{
          available:false,
          createCaveMeters:80,
          closeCaveMeters:50,
        },
        rotateMode:{
          available:false,
          firstLineMeters:90,
          secondLineMeters:80,
        },
        bigMonster:{
          available:false,
              monsterShowsMeters:90,
              monsterBackMeters:70,
        }
  },

},
level5:{     
  meters:160,
  createMetaMeters:9,
  floorSpeed: -5.1,
  dimness:false,
  correctLine:"0xffffff",
 music:"music_5",
 obstacleShift:54,
skins:{
  map:"cake",
  floorSkins:"cake",
  obstacleSkin:"obstacle_11",
  flyingFloorSkin:"flying_floor_3Hit",
},

spacing:{
  floorToFloorSpacing:90,
  additionalObstacleSpacing:47,
  doubleHeightObstacleSpacing:25,
  floorToFlyingFloorSpacing:135,
  squareObstacleSpacing:14,
},
piramidModeChance:0,

  chances:{
    upperFloorChance:10,
    lowerFloorChance:10,

    floorObstacleChance:30,
        flyingFloorChance:70,
        shortFloorWithBallChance:0,
        spikeMouthChance:0,
        tunnelChance:27,
        magicRodChance:0,
    
    spikeBlockObstacleChance:90,
    sawObstacleChance:15,

spikeBarAboveChance:10, 
spikeShowChance:43,
oneSpikeChance:40,
doubleSpikeChance:0,
obstacleBlockChance:90,
higherObstacleChance:0,

randomWallSpecialEffectChance:15,
additionalBottomShurikenChance:50,
additionalBottomWallSawChance:40,
bottomTextureChance:25,

  },
 tints:{
  backgroundTint:levelsTints.level5,

    obstacleTint:"0xC600FF", 
    blockObstacleTint:"0xC600FF",

    spikeBarTint:"0xC600FF",
    blackBarTint:levelsTints.level5,

    shortBallFloorTint:levelsTints.level5,  

    floorTint:"0xffffff", 
    floorAuraUpTint:"0xFF00FF",
    floorAuraTint:"0xFF00FF",

    lavaTint:"0xFFFF44", 
    sawTint:"0xFF0E00",
   
    shortFlyingFloorTint:"0xFFFF44", 

    shurikenWallTint:levelsTints.level5, 
    wallSawTint:levelsTints.level5, 
    bottomSpikeTint:levelsTints.level5,

    gearTint:levelsTints.level5,    
    
    laserTint:"0xC600FF",
    pulseTint:"0xFFFF00",
  },

  specialEvents:{
    triangleBackMode:{
      available:false,
      createMeters:90,
    },
      thunder:{
        available:false,
        firstStrikeMeters:70,
        secondStrikeMeters:30,
      },
        flipHands:{
          available:false,
          firstHandMeters:70,
          secondHandMeters:30,
        },
        cave:{
          available:false,
          createCaveMeters:80,
          closeCaveMeters:50,
        },
        rotateMode:{
          available:false,
          firstLineMeters:90,
          secondLineMeters:80,
        },
        bigMonster:{
          available:false,
              monsterShowsMeters:90,
              monsterBackMeters:70,
        }
  },
},
level6:{     
  meters:165,
  createMetaMeters:9,
  floorSpeed: -5.125,
  dimness:false,
  obstacleShift:53,
 music:"music_6",

skins:{
  map:"polygon",
  floorSkins:"basic",
  obstacleSkin:"obstacle_11",
},

spacing:{
  floorToFloorSpacing:90,
  additionalObstacleSpacing:46,
  doubleHeightObstacleSpacing:25,
  floorToFlyingFloorSpacing:135,
  squareObstacleSpacing:13,
},
piramidModeChance:0,

  chances:{
    upperFloorChance:15,
    lowerFloorChance:15,

    floorObstacleChance:25,
        flyingFloorChance:100,
        shortFloorWithBallChance:0,
        spikeMouthChance:0,
        tunnelChance:30,
        magicRodChance:0,
    
    spikeBlockObstacleChance:100,
    sawObstacleChance:20,

spikeBarAboveChance:10, 
spikeShowChance:43,

oneSpikeChance:30,
doubleSpikeChance:10,
obstacleBlockChance:100,
higherObstacleChance:0,

randomWallSpecialEffectChance:20,
additionalBottomShurikenChance:50,
additionalBottomWallSawChance:40,
bottomTextureChance:25,

  },
 tints:{
  backgroundTint:levelsTints.level6,

    obstacleTint:levelsTints.level6, 
    blockObstacleTint:levelsTints.level6,

    spikeBarTint:levelsTints.level6,
    blackBarTint:levelsTints.level6,

    shortBallFloorTint:levelsTints.level6,  

    floorTint:levelsTints.level6, 
    floorAuraUpTint:"0xFF0000",
    floorAuraTint:"0xFFFFFF",

    lavaTint:"0x00FBFF", 
    sawTint:"0x000EFF",
   
    shortFlyingFloorTint:"0x00FBFF", 

    shurikenWallTint:levelsTints.level6, 
    wallSawTint:"0x0000FF", 
    bottomSpikeTint:levelsTints.level6,

    gearTint:levelsTints.level6,    
    
    laserTint:"0xffffff",
    pulseTint:"0x00BE7C",
  },

  specialEvents:{
    triangleBackMode:{
      available:false,
      createMeters:90,
    },
      thunder:{
        available:false,
        firstStrikeMeters:70,
        secondStrikeMeters:30,
      },
        flipHands:{
          available:false,
          firstHandMeters:70,
          secondHandMeters:30,
        },
        cave:{
          available:false,
          createCaveMeters:80,
          closeCaveMeters:50,
        },
        rotateMode:{
          available:false,
          firstLineMeters:90,
          secondLineMeters:80,
        },
        bigMonster:{
          available:false,
              monsterShowsMeters:90,
              monsterBackMeters:70,
        }
  },

},
    level7:{
      meters:170,
      createMetaMeters:9,
      floorSpeed: -5.150,
      dimness:false,

      obstacleShift:52,

      music:"music_7",
      correctLine:"0xffffff",
    skins:{
      map:"pinkMountain",
      floorSkins:"grid",
      obstacleSkin:"obstacle_11",
 
    },
    
    spacing:{
      floorToFloorSpacing:90,
      additionalObstacleSpacing:45,
      doubleHeightObstacleSpacing:25,
      floorToFlyingFloorSpacing:135,
      squareObstacleSpacing:15,
    },
    piramidModeChance:0,
    
      chances:{
        upperFloorChance:17,
        lowerFloorChance:17,
    
        floorObstacleChance:25,
            flyingFloorChance:80,
            shortFloorWithBallChance:0,
            spikeMouthChance:0,
            tunnelChance:20,
            magicRodChance:0,
        
        spikeBlockObstacleChance:90,
        sawObstacleChance:25,
    
    spikeBarAboveChance:15, 
    spikeShowChance:43,
    
    oneSpikeChance:30,
    doubleSpikeChance:10,
    obstacleBlockChance:100,
    higherObstacleChance:0,
    
    randomWallSpecialEffectChance:20,
    additionalBottomShurikenChance:60,
    additionalBottomWallSawChance:40,
    bottomTextureChance:30,
    
      },
     tints:{
      backgroundTint:"0xffffff",
    
        obstacleTint:levelsTints.level7, 
        blockObstacleTint:levelsTints.level7,
    
        spikeBarTint:levelsTints.level7,
        blackBarTint:levelsTints.level7,
    
        shortBallFloorTint:levelsTints.level7,  
    
        floorTint:"0xFF7E03", 
        floorAuraUpTint:"0x0000E3",
        floorAuraTint:"0x780087",
    
        lavaTint:"0xFF7933", 
        sawTint:levelsTints.level7,
       
        shortFlyingFloorTint:"0xFF7933", 
    
        shurikenWallTint:levelsTints.level7, 
        wallSawTint:levelsTints.level7, 
        bottomSpikeTint:levelsTints.level7,
    
        gearTint:levelsTints.level7,    
        
        laserTint:"0xC600FF",
        pulseTint:"0xFF0000",
      },
    
      specialEvents:{
        triangleBackMode:{
          available:false,
          createMeters:90,
        },
          thunder:{
            available:false,
            firstStrikeMeters:140,
            secondStrikeMeters:90,
          },
            flipHands:{
              available:false,
              firstHandMeters:70,
              secondHandMeters:30,
            },
            cave:{
              available:false,
              createCaveMeters:80,
              closeCaveMeters:50,
            },
            rotateMode:{
              available:true,
              firstLineMeters:140,
              secondLineMeters:90,
            },
            bigMonster:{
              available:false,
                  monsterShowsMeters:90,
                  monsterBackMeters:70,
            }
      },
    
    },
    level8:{
      meters:175,
      createMetaMeters:9,
      floorSpeed: -5.175,
      dimness:false,
      obstacleShift:51,
      music:"music_1",

    skins:{
      map:"cave",
      floorSkins:"triangles",
      obstacleSkin:"obstacle_11",
     
    },
    
    spacing:{
      floorToFloorSpacing:90,
      additionalObstacleSpacing:44,
      doubleHeightObstacleSpacing:30,
      floorToFlyingFloorSpacing:135,
      squareObstacleSpacing:13,
    },
    piramidModeChance:0,
    
      chances:{
        upperFloorChance:20,
        lowerFloorChance:20,
    
        floorObstacleChance:25,
            flyingFloorChance:80,
            shortFloorWithBallChance:0,
            spikeMouthChance:25,
            tunnelChance:35,
            magicRodChance:0,
        
        spikeBlockObstacleChance:80,
        sawObstacleChance:35,
    
    spikeBarAboveChance:15, 
    spikeShowChance:43,
    
    oneSpikeChance:60,
    doubleSpikeChance:10,
    obstacleBlockChance:20,
    higherObstacleChance:5,
    
    randomWallSpecialEffectChance:20,
    additionalBottomShurikenChance:60,
    additionalBottomWallSawChance:40,
    bottomTextureChance:30,
    
      },
     tints:{
      backgroundTint:"0xffffff",
    
        obstacleTint:levelsTints.level8, 
        blockObstacleTint:levelsTints.level8,
    
        spikeBarTint:levelsTints.level8,
        blackBarTint:levelsTints.level8,
    
        shortBallFloorTint:levelsTints.level8,  
    
        floorTint:"0x000600", 
        floorAuraUpTint:"0xFEEE15",
        floorAuraTint:"0xFEEE15",
    
        lavaTint:"0xFFFF00", 
        sawTint:"0xFEEE15",
       
        shortFlyingFloorTint:"0xFFFF00", 
    
        shurikenWallTint:levelsTints.level8, 
        wallSawTint:levelsTints.level8, 
        bottomSpikeTint:levelsTints.level8,
    
        gearTint:levelsTints.level8,    
        
        laserTint:"0xC600FF",
        pulseTint:"0x6F0000",
      },
    
      specialEvents:{
        triangleBackMode:{
          available:false,
          createMeters:90,
        },
          thunder:{
            available:false,
            firstStrikeMeters:70,
            secondStrikeMeters:30,
          },
            flipHands:{
              available:false,
              firstHandMeters:70,
              secondHandMeters:30,
            },
            cave:{
              available:false,
              createCaveMeters:80,
              closeCaveMeters:50,
            },
            rotateMode:{
              available:false,
              firstLineMeters:90,
              secondLineMeters:80,
            },
            bigMonster:{
              available:false,
                  monsterShowsMeters:90,
                  monsterBackMeters:70,
            }
      },
    
    },
    level9:{
      meters:180,
      createMetaMeters:9,
      floorSpeed: -5.2,
      dimness:false,
     music:"music_2",
    skins:{
      map:"tiles",
      floorSkins:"cake",
      obstacleSkin:"obstacle_11",
  
    },
    obstacleShift:50,
    spacing:{
      floorToFloorSpacing:90,
      additionalObstacleSpacing:43,
      doubleHeightObstacleSpacing:30,
      floorToFlyingFloorSpacing:135,
      squareObstacleSpacing:12.5,
    },
    piramidModeChance:0,
    
      chances:{
        upperFloorChance:25,
        lowerFloorChance:25,
    
        floorObstacleChance:25,
            flyingFloorChance:50,
            shortFloorWithBallChance:0,
            spikeMouthChance:20,
            tunnelChance:20,
            magicRodChance:0,
        
        spikeBlockObstacleChance:80,
        sawObstacleChance:25,
    
    spikeBarAboveChance:15, 
    spikeShowChance:46,
    
    oneSpikeChance:30,
    doubleSpikeChance:15,
    obstacleBlockChance:100,
    higherObstacleChance:5,
    
    randomWallSpecialEffectChance:25,
    additionalBottomShurikenChance:60,
    additionalBottomWallSawChance:40,
    bottomTextureChance:30,
    
      },
     tints:{
      backgroundTint:"0xFFA0B8",
    
        obstacleTint:levelsTints.level9, 
        blockObstacleTint:levelsTints.level9,
    
        spikeBarTint:levelsTints.level9,
        blackBarTint:levelsTints.level9,
    
        shortBallFloorTint:levelsTints.level9,  
    
        floorTint:"0xffffff", 
        floorAuraUpTint:"0x000000",
        floorAuraTint:"0x000000",
    
        lavaTint:"0xFF1FFF", 
        sawTint:levelsTints.level9,
       
        shortFlyingFloorTint:"0xFF1FFF", 
    
        shurikenWallTint:levelsTints.level9, 
        wallSawTint:levelsTints.level9, 
        bottomSpikeTint:levelsTints.level9,
    
        gearTint:levelsTints.level9,    
        
        laserTint:"0xC600FF",
        pulseTint:"0xFF8F5E",
      },
    
      specialEvents:{
        triangleBackMode:{
          available:false,
          createMeters:90,
        },
          thunder:{
            available:true,
            firstStrikeMeters:155,
            secondStrikeMeters:115,
          },
            flipHands:{
              available:false,
              firstHandMeters:70,
              secondHandMeters:30,
            },
            cave:{
              available:false,
              createCaveMeters:80,
              closeCaveMeters:50,
            },
            rotateMode:{
              available:false,
              firstLineMeters:140,
              secondLineMeters:100,
            },
            bigMonster:{
              available:false,
                  monsterShowsMeters:90,
                  monsterBackMeters:70,
            }
      },
    
    },
    level10:{
      meters:185,
      createMetaMeters:9,
      floorSpeed: -5.225,
      dimness:false,
      music:"music_3",
      tip:"circletip_1.svg",
    skins:{
      map:"circles",
      floorSkins:"castle",
      obstacleSkin:"obstacle_11",
      
    },
    obstacleShift:48,
    spacing:{
      floorToFloorSpacing:90,
      additionalObstacleSpacing:42,
      doubleHeightObstacleSpacing:30,
      floorToFlyingFloorSpacing:135,
      squareObstacleSpacing:12,
    },
    piramidModeChance:20,
    
      chances:{
        upperFloorChance:30,
        lowerFloorChance:30,
    
        floorObstacleChance:25,
            flyingFloorChance:100,
            shortFloorWithBallChance:30,
            spikeMouthChance:30,
            tunnelChance:30,
            magicRodChance:0,
        
        spikeBlockObstacleChance:80,
        sawObstacleChance:25,
    
    spikeBarAboveChance:20, 
    spikeShowChance:46,
    
    oneSpikeChance:30,
    doubleSpikeChance:15,
    obstacleBlockChance:100,
    higherObstacleChance:5,
    
    randomWallSpecialEffectChance:25,
    additionalBottomShurikenChance:60,
    additionalBottomWallSawChance:40,
    bottomTextureChance:30,
    
      },
      tints:{
        backgroundTint:levelsTints.level30, 
      
          obstacleTint:levelsTints.level30, 
          blockObstacleTint:levelsTints.level30, 
      
          spikeBarTint:levelsTints.level30, 
          blackBarTint:levelsTints.level30, 
      
          shortBallFloorTint:levelsTints.level30,  
      
          floorTint:levelsTints.level30, 
          floorAuraUpTint:"0xFF3E0F", 
          floorAuraTint:"0xFF3E0F", 
      
          lavaTint:"0xF33DC3",
          sawTint:"0xFFFF00", 
         
          shortFlyingFloorTint:"0xF33DC3", 
      
          shurikenWallTint:levelsTints.level30, 
          wallSawTint:levelsTints.level30, 
          bottomSpikeTint:levelsTints.level30, 
      
          gearTint:levelsTints.level30,  
          
          laserTint:"0xFF0000", 
          pulseTint:"0xFFFF00", 
        },
    
      specialEvents:{
        triangleBackMode:{
          available:false,
          createMeters:90,
        },
          thunder:{
            available:false,
            firstStrikeMeters:70,
            secondStrikeMeters:30,
          },
            flipHands:{
              available:false,
              firstHandMeters:70,
              secondHandMeters:30,
            },
            cave:{
              available:false,
              createCaveMeters:80,
              closeCaveMeters:50,
            },
            rotateMode:{
              available:false,
              firstLineMeters:90,
              secondLineMeters:80,
            },
            bigMonster:{
              available:false,
                  monsterShowsMeters:90,
                  monsterBackMeters:70,
            }
      },
    
    },
    level11:{
      meters:190,
      createMetaMeters:9,
      floorSpeed: -5.25,
      dimness:false,
      correctLine:"0xffffff",
      music:"music_4",
    skins:{
      map:"mountain",
      floorSkins:"basic",
      obstacleSkin:"obstacle_11",
  
    },
    obstacleShift:46,
    spacing:{
      floorToFloorSpacing:90,
      additionalObstacleSpacing:41,
      doubleHeightObstacleSpacing:30,
      floorToFlyingFloorSpacing:135,
      squareObstacleSpacing:11.5,
    },
    piramidModeChance:50,
    
      chances:{
        upperFloorChance:35,
        lowerFloorChance:35,
    
        floorObstacleChance:25,
            flyingFloorChance:80,
            shortFloorWithBallChance:40,
            spikeMouthChance:20,
            tunnelChance:20,
            magicRodChance:0,
        
        spikeBlockObstacleChance:70,
        sawObstacleChance:30,
    
    spikeBarAboveChance:20, 
    spikeShowChance:46,
    
    oneSpikeChance:30,
    doubleSpikeChance:15,
    obstacleBlockChance:100,
    higherObstacleChance:5,
    
    randomWallSpecialEffectChance:25,
    additionalBottomShurikenChance:60,
    additionalBottomWallSawChance:50,
    bottomTextureChance:30,
    
      },
     tints:{
      backgroundTint:"0xffffff",
    
        obstacleTint:levelsTints.level11, 
        blockObstacleTint:levelsTints.level11,
    
        spikeBarTint:levelsTints.level11,
        blackBarTint:levelsTints.level11,
    
        shortBallFloorTint:levelsTints.level11,  
    
        floorTint:levelsTints.level11, 
        floorAuraUpTint:"0xfdff00",
        floorAuraTint:"0xb632d7",
    
        lavaTint:"0xFFC76D", 
        sawTint:levelsTints.level11,
       
        shortFlyingFloorTint:"0xFFC76D", 
    
        shurikenWallTint:levelsTints.level11, 
        wallSawTint:levelsTints.level11, 
        bottomSpikeTint:levelsTints.level11,
    
        gearTint:levelsTints.level11,    
        
        laserTint:"0xC600FF",
        pulseTint:"0xFF8900",
      },
    
      specialEvents:{
        triangleBackMode:{
          available:false,
          createMeters:90,
        },
          thunder:{
            available:false,
            firstStrikeMeters:100,
            secondStrikeMeters:45,
          },
            flipHands:{
              available:false,
              firstHandMeters:70,
              secondHandMeters:30,
            },
            cave:{
              available:false,
              createCaveMeters:80,
              closeCaveMeters:50,
            },
            rotateMode:{
              available:true,
              firstLineMeters:100,
              secondLineMeters:45,
            },
            bigMonster:{
              available:false,
                  monsterShowsMeters:90,
                  monsterBackMeters:70,
            }
      },
    
    },
   
  
    level12:{
      meters:191,
      createMetaMeters:9,
      floorSpeed: -5.275,
      dimness:true,
      music:"music_5",
    skins:{
      map:"graveyard",
      floorSkins:"black",
      obstacleSkin:"obstacle_11",
     
    },
    obstacleShift:44,
    spacing:{
      floorToFloorSpacing:90,
      additionalObstacleSpacing:40,
      doubleHeightObstacleSpacing:30,
      floorToFlyingFloorSpacing:145,
      squareObstacleSpacing:11,
    },
    piramidModeChance:100,
    
      chances:{
        upperFloorChance:0,
        lowerFloorChance:100,
    
        floorObstacleChance:10,
            flyingFloorChance:100,
            shortFloorWithBallChance:15,
            spikeMouthChance:20,
            tunnelChance:20,
            magicRodChance:20,
        
        spikeBlockObstacleChance:70,
        sawObstacleChance:30,
    
    spikeBarAboveChance:20, 
    spikeShowChance:46,
    
    oneSpikeChance:30,
    doubleSpikeChance:15,
    obstacleBlockChance:100,
    higherObstacleChance:5,
    
    randomWallSpecialEffectChance:25,
    additionalBottomShurikenChance:50,
    additionalBottomWallSawChance:60,
    bottomTextureChance:30,
    
      },
     tints:{
      backgroundTint:"0xffffff",
    
        obstacleTint:levelsTints.level12, 
        blockObstacleTint:levelsTints.level12,
    
        spikeBarTint:levelsTints.level12,
        blackBarTint:levelsTints.level12,
    
        shortBallFloorTint:"0x000000",  
    
        floorTint:"0x000600", 
        floorAuraUpTint:levelsTints.level12,
        floorAuraTint:levelsTints.level12,
    
        lavaTint:"0xFF2510", 
        sawTint:"0xFF0500",
       
        shortFlyingFloorTint:"0x1B2242", 
    
        shurikenWallTint:levelsTints.level12, 
        wallSawTint:levelsTints.level12, 
        bottomSpikeTint:"0xFF0500",
    
        gearTint:levelsTints.level12,    
        
        laserTint:"0xC600FF",
        pulseTint:levelsTints.level12,
      },
    
      specialEvents:{
        triangleBackMode:{
          available:false,
          createMeters:90,
        },
          thunder:{
            available:false,
            firstStrikeMeters:70,
            secondStrikeMeters:30,
          },
            flipHands:{
              available:false,
              firstHandMeters:70,
              secondHandMeters:30,
            },
            cave:{
              available:false,
              createCaveMeters:80,
              closeCaveMeters:50,
            },
            rotateMode:{
              available:false,
              firstLineMeters:90,
              secondLineMeters:80,
            },
            bigMonster:{
              available:false,
                  monsterShowsMeters:90,
                  monsterBackMeters:70,
            }
      },
    
    },
    level13:{
      meters:192,
      createMetaMeters:9,
      floorSpeed: -5.3,
      dimness:false,
      correctLine:"0xffffff",
      music:"music_6",
      tip:"triangletip_1.svg",
    skins:{
      map:"snow",
      floorSkins:"black",
      obstacleSkin:"obstacle_11",
     
    },
    obstacleShift:42,
    spacing:{
      floorToFloorSpacing:90,
      additionalObstacleSpacing:39,
      doubleHeightObstacleSpacing:30,
      floorToFlyingFloorSpacing:145,
      squareObstacleSpacing:10.5,
    },
    piramidModeChance:50,
    
      chances:{
        upperFloorChance:100,
        lowerFloorChance:10,
    
        floorObstacleChance:20,
            flyingFloorChance:100,
            shortFloorWithBallChance:25,
            spikeMouthChance:30,
            tunnelChance:30,
            magicRodChance:0,
        
        spikeBlockObstacleChance:70,
        sawObstacleChance:30,
    
    spikeBarAboveChance:20, 
    spikeShowChance:40,
    
    oneSpikeChance:40,
    doubleSpikeChance:20,
    obstacleBlockChance:100,
    higherObstacleChance:10,
    
    randomWallSpecialEffectChance:25,
    additionalBottomShurikenChance:50,
    additionalBottomWallSawChance:60,
    bottomTextureChance:30,
    
      },
     tints:{
      backgroundTint:"0xffffff",
    
        obstacleTint:levelsTints.level13, 
        blockObstacleTint:levelsTints.level13, 
    
        spikeBarTint:levelsTints.level13, 
        blackBarTint:levelsTints.level13, 
    
        shortBallFloorTint:levelsTints.level13,  
    
        floorTint:"0xFFFFFF", 
        floorAuraUpTint:"0x4B00FF",
        floorAuraTint:"0x4B00FF",
    
        lavaTint:levelsTints.level13, 
        sawTint:"0x000000",
       
        shortFlyingFloorTint:levelsTints.level13, 
    
        shurikenWallTint:levelsTints.level13, 
        wallSawTint:levelsTints.level13, 
        bottomSpikeTint:levelsTints.level13,
    
        gearTint:levelsTints.level13,    
        
        laserTint:"0xC600FF",
        pulseTint:"0x009CFF",
      },
    
      specialEvents:{
        triangleBackMode:{
          available:true,
          createMeters:140,
        },
          thunder:{
            available:false,
            firstStrikeMeters:70,
            secondStrikeMeters:30,
          },
            flipHands:{
              available:false,
              firstHandMeters:70,
              secondHandMeters:30,
            },
            cave:{
              available:false,
              createCaveMeters:80,
              closeCaveMeters:50,
            },
            rotateMode:{
              available:false,
              firstLineMeters:90,
              secondLineMeters:80,
            },
            bigMonster:{
              available:false,
                  monsterShowsMeters:90,
                  monsterBackMeters:70,
            }
      },
    
    },
   
    level14:{
      meters:193,
      createMetaMeters:8,
      floorSpeed: -5.325,
      dimness:false,
      music:"music_7",
    skins:{
      map:"simple",
      floorSkins:"triangles",
      obstacleSkin:"obstacle_11",
   
    },
    obstacleShift:40,
    spacing:{
      floorToFloorSpacing:90,

      additionalObstacleSpacing:38,
      doubleHeightObstacleSpacing:30,
      floorToFlyingFloorSpacing:145,
      squareObstacleSpacing:10,
    },
    piramidModeChance:50,
    
      chances:{
        upperFloorChance:40,
        lowerFloorChance:40,
    
        floorObstacleChance:20,
            flyingFloorChance:40,
            shortFloorWithBallChance:20,
            spikeMouthChance:20,
            tunnelChance:20,
            magicRodChance:20,
        
        spikeBlockObstacleChance:50,
        sawObstacleChance:50,
    
    spikeBarAboveChance:20, 
    spikeShowChance:41,
    
    oneSpikeChance:40,
    doubleSpikeChance:20,
    obstacleBlockChance:100,
    higherObstacleChance:10,
    
    randomWallSpecialEffectChance:30,
    additionalBottomShurikenChance:60,
    additionalBottomWallSawChance:60,
    bottomTextureChance:30,
    
      },
     tints:{
      backgroundTint:"0xffffff",
    
        obstacleTint:"0x060094", 
        blockObstacleTint:"0x060094",
    
        spikeBarTint:"0x060094",
        blackBarTint:"0x060094",
    
        shortBallFloorTint:levelsTints.level14,  
    
        floorTint:"0xFFFF00", 
        floorAuraUpTint:"0x80D5FF",
        floorAuraTint:"0xffffff",
    
        lavaTint:"0xffffff", 
        sawTint:"0xFF0500",
       
        shortFlyingFloorTint:"0xffffff", 
    
        shurikenWallTint:levelsTints.level14, 
        wallSawTint:levelsTints.level14, 
        bottomSpikeTint:levelsTints.level14,
    
        gearTint:levelsTints.level14,    
        
        laserTint:"0xC600FF",
        pulseTint:"0x060094",
      },
    
      specialEvents:{
        triangleBackMode:{
          available:true,
          createMeters:50,
        },
          thunder:{
            available:false,
            firstStrikeMeters:70,
            secondStrikeMeters:30,
          },
            flipHands:{
              available:false,
              firstHandMeters:70,
              secondHandMeters:30,
            },
            cave:{
              available:false,
              createCaveMeters:80,
              closeCaveMeters:50,
            },
            rotateMode:{
              available:false,
              firstLineMeters:90,
              secondLineMeters:80,
            },
            bigMonster:{
              available:false,
                  monsterShowsMeters:90,
                  monsterBackMeters:70,
            }
      },
    
    },

    level15:{
      meters:194,
      createMetaMeters:8,
      floorSpeed: -5.35,
      dimness:false,
      correctLine:"0xAE00FF",
      music:"music_1",
    skins:{
      map:"pinkForest",
      floorSkins:"triangles",
      obstacleSkin:"obstacle_11",

    },
    obstacleShift:38,
    spacing:{
      floorToFloorSpacing:90,
      additionalObstacleSpacing:37,
      doubleHeightObstacleSpacing:30,
      floorToFlyingFloorSpacing:145,
      squareObstacleSpacing:10,
    },
    piramidModeChance:50,
    
      chances:{
        upperFloorChance:50,
        lowerFloorChance:80,
    
        floorObstacleChance:20,
            flyingFloorChance:50,
            shortFloorWithBallChance:15,
            spikeMouthChance:15,
            tunnelChance:30,
            magicRodChance:0,
        
        spikeBlockObstacleChance:100,
        sawObstacleChance:10,
    
    spikeBarAboveChance:20, 
    spikeShowChance:42,
    
    oneSpikeChance:45,
    doubleSpikeChance:20,
    obstacleBlockChance:100,
    higherObstacleChance:10,
    
    randomWallSpecialEffectChance:30,
    additionalBottomShurikenChance:70,
    additionalBottomWallSawChance:70,
    bottomTextureChance:30,
    
      },
     tints:{
      backgroundTint:levelsTints.level15,
    
        obstacleTint:"0xFF63FB", 
        blockObstacleTint:"0xFF63FB",
    
        spikeBarTint:levelsTints.level15,
        blackBarTint:levelsTints.level15,
    
        shortBallFloorTint:levelsTints.level15,  
    
        floorTint:"0xFF00FF", 
        floorAuraUpTint:"0xFF0000",
        floorAuraTint:"0xFF0000",
    
        lavaTint:"0xFF03FF", 
        sawTint:levelsTints.level15,
       
        shortFlyingFloorTint:"0xFF034A", 
    
        shurikenWallTint:levelsTints.level15, 
        wallSawTint:levelsTints.level15, 
        bottomSpikeTint:levelsTints.level15,
    
        gearTint:levelsTints.level15,    
        
        laserTint:"0xC600FF",
        pulseTint:"0xFF2831",
      },
    
      specialEvents:{
        triangleBackMode:{
          available:false,
          createMeters:50,
        },
          thunder:{
            available:false,
            firstStrikeMeters:70,
            secondStrikeMeters:15,
          },
            flipHands:{
              available:false,
              firstHandMeters:70,
              secondHandMeters:30,
            },
            cave:{
              available:false,
              createCaveMeters:80,
              closeCaveMeters:50,
            },
            rotateMode:{
              available:true,
              firstLineMeters:70,
              secondLineMeters:15,
            },
            bigMonster:{
              available:false,
                  monsterShowsMeters:90,
                  monsterBackMeters:70,
            }
      },
    
    },

    level16:{
      meters:195,
      createMetaMeters:8,
      floorSpeed: -5.375,
      dimness:false,
      obstacleShift:36,
      music:"music_2",
    skins:{
      map:"city",
      floorSkins:"castle",
      obstacleSkin:"obstacle_11",
 
    },
    
    spacing:{
      floorToFloorSpacing:100,
      additionalObstacleSpacing:36,
      doubleHeightObstacleSpacing:34,
      floorToFlyingFloorSpacing:145,
      squareObstacleSpacing:10,
    },
    piramidModeChance:50,
    
      chances:{
        upperFloorChance:70,
        lowerFloorChance:50,
    
        floorObstacleChance:50,
            flyingFloorChance:50,
            shortFloorWithBallChance:20,
            spikeMouthChance:20,
            tunnelChance:20,
            magicRodChance:0,
        
        spikeBlockObstacleChance:100,
        sawObstacleChance:20,
    
    spikeBarAboveChance:0, 
    spikeShowChance:42,
    
    oneSpikeChance:40,
    doubleSpikeChance:20,
    obstacleBlockChance:100,
    higherObstacleChance:10,
    
    randomWallSpecialEffectChance:30,
    additionalBottomShurikenChance:50,
    additionalBottomWallSawChance:50,
    bottomTextureChance:30,
    
      },
     tints:{
      backgroundTint:levelsTints.level16,
    
        obstacleTint:levelsTints.level16, 
        blockObstacleTint:levelsTints.level16,
    
        spikeBarTint:levelsTints.level16,
        blackBarTint:levelsTints.level16,
    
        shortBallFloorTint:levelsTints.level16,  
    
        floorTint:levelsTints.level16, 
        floorAuraUpTint:"0xFFFF00",
        floorAuraTint:"0x89FF00",
    
        lavaTint:"0xffffff", 
        sawTint:"0xFF00FF",
       
        shortFlyingFloorTint:"0x0071FF", 
    
        shurikenWallTint:levelsTints.level16, 
        wallSawTint:levelsTints.level16, 
        bottomSpikeTint:levelsTints.level16,
    
        gearTint:levelsTints.level16,    
        
        laserTint:"0xC600FF",
        pulseTint:"0x00FEFF",
      },
    
      specialEvents:{
        triangleBackMode:{
          available:false,
          createMeters:120,
        },
          thunder:{
            available:false,
            firstStrikeMeters:150,
            secondStrikeMeters:170,
          },
            flipHands:{
              available:false,
              firstHandMeters:70,
              secondHandMeters:30,
            },
            cave:{
              available:false,
              createCaveMeters:80,
              closeCaveMeters:50,
            },
            rotateMode:{
              available:false,
              firstLineMeters:90,
              secondLineMeters:80,
            },
            bigMonster:{
              available:false,
                  monsterShowsMeters:90,
                  monsterBackMeters:70,
            }
      },
    
    },


    level17:{
      meters:196,
      createMetaMeters:8,
      floorSpeed: -5.4,
      dimness:false,

      music:"music_3",
      correctLine:"0xffffff",
    skins:{
      map:"sunny",
      floorSkins:"triangles",
      obstacleSkin:"obstacle_11",
     
    },
     
    spacing:{
      floorToFloorSpacing:100,
      additionalObstacleSpacing:35,
      doubleHeightObstacleSpacing:34,
      floorToFlyingFloorSpacing:145,
      squareObstacleSpacing:10,
    },
    piramidModeChance:50,
    
      chances:{
        upperFloorChance:70,
        lowerFloorChance:50,
    
        floorObstacleChance:40,
            flyingFloorChance:80,
            shortFloorWithBallChance:20,
            spikeMouthChance:25,
            tunnelChance:25,
            magicRodChance:20,
        
        spikeBlockObstacleChance:100,
        sawObstacleChance:20,
    
    spikeBarAboveChance:10, 
    spikeShowChance:42,
    
    oneSpikeChance:45,
    doubleSpikeChance:20,
    obstacleBlockChance:90,
    higherObstacleChance:15,
    
    randomWallSpecialEffectChance:30,
    additionalBottomShurikenChance:50,
    additionalBottomWallSawChance:50,
    bottomTextureChance:35,
    
      },
     tints:{
      backgroundTint:levelsTints.level17,
    
        obstacleTint:levelsTints.level17, 
        blockObstacleTint:levelsTints.level17,
    
        spikeBarTint:levelsTints.level17,
        blackBarTint:levelsTints.level17,
    
        shortBallFloorTint:levelsTints.level17,  
    
        floorTint:"0xFF7999", 
        floorAuraUpTint:"0x0000FF",
        floorAuraTint:"0xFF0000",
    
        lavaTint:"0xffffff", 
        sawTint:levelsTints.level17,
       
        shortFlyingFloorTint:"0xBF034A", 
    
        shurikenWallTint:levelsTints.level17, 
        wallSawTint:levelsTints.level17, 
        bottomSpikeTint:levelsTints.level17,
    
        gearTint:levelsTints.level17,    
        
        laserTint:"0xC600FF",
        pulseTint:"0xD43D86",
      },
    
      specialEvents:{
        triangleBackMode:{
          available:false,
          createMeters:50,
        },
          thunder:{
            available:true,
            firstStrikeMeters:150,
            secondStrikeMeters:100,
          },
            flipHands:{
              available:false,
              firstHandMeters:70,
              secondHandMeters:30,
            },
            cave:{
              available:false,
              createCaveMeters:80,
              closeCaveMeters:50,
            },
            rotateMode:{
              available:false,
              firstLineMeters:90,
              secondLineMeters:80,
            },
            bigMonster:{
              available:false,
                  monsterShowsMeters:90,
                  monsterBackMeters:70,
            }
      },
    
    },

    level18:{
      meters:197,
      createMetaMeters:7,
      floorSpeed: -5.425,
      dimness:false,
      music:"music_4",
      correctLine:"0xffffff",
    skins:{
      map:"green",
      floorSkins:"black",
      obstacleSkin:"obstacle_11",
     
    },
    obstacleShift:34,
    spacing:{
      floorToFloorSpacing:100,
      additionalObstacleSpacing:34,
      doubleHeightObstacleSpacing:34,
      floorToFlyingFloorSpacing:145,
      squareObstacleSpacing:10,
    },
    piramidModeChance:50,
    
      chances:{
        upperFloorChance:50,
        lowerFloorChance:50,
    
        floorObstacleChance:90,
            flyingFloorChance:100,
            shortFloorWithBallChance:0,
            spikeMouthChance:0,
            tunnelChance:0,
            magicRodChance:0,
        
        spikeBlockObstacleChance:100,
        sawObstacleChance:25,
    
    spikeBarAboveChance:0, 
    spikeShowChance:42,
    
    oneSpikeChance:45,
    doubleSpikeChance:20,
    obstacleBlockChance:85,
    higherObstacleChance:15,
    
    randomWallSpecialEffectChance:30,
    additionalBottomShurikenChance:50,
    additionalBottomWallSawChance:50,
    bottomTextureChance:35,
    
      },
     tints:{
      backgroundTint:levelsTints.level18, 
    
        obstacleTint:"0x77C876", 
        blockObstacleTint:"0xC77C876",
    
        spikeBarTint:"0x77C876",
        blackBarTint:"0x77C876",
    
        shortBallFloorTint:levelsTints.level18,  
    
        floorTint:levelsTints.level18, 
        floorAuraUpTint:"0x002400",
        floorAuraTint:"0x002400",
    
        lavaTint:levelsTints.level18, 
        sawTint:levelsTints.level18,
       
        shortFlyingFloorTint:"0x00FFAC", 
    
        shurikenWallTint:levelsTints.level18, 
        wallSawTint:levelsTints.level18, 
        bottomSpikeTint:levelsTints.level18,
    
        gearTint:levelsTints.level18,    
        
        laserTint:"0xC600FF",
        pulseTint:"0x00FF00",
      },
    
      specialEvents:{
        triangleBackMode:{
          available:false,
          createMeters:50,
        },
          thunder:{
            available:false,
            firstStrikeMeters:70,
            secondStrikeMeters:30,
          },
            flipHands:{
              available:false,
              firstHandMeters:70,
              secondHandMeters:30,
            },
            cave:{
              available:false,
              createCaveMeters:80,
              closeCaveMeters:50,
            },
            rotateMode:{
              available:false,
              firstLineMeters:90,
              secondLineMeters:80,
            },
            bigMonster:{
              available:false,
                  monsterShowsMeters:90,
                  monsterBackMeters:70,
            }
      },
    
    },
    level19:{
      meters:198,
      createMetaMeters:7,
      floorSpeed: -5.45,
      dimness:false,
      music:"music_5",
      correctLine:"0xffffff",
      obstacleShift:32,
    skins:{
      map:"cake",
      floorSkins:"grid",
      obstacleSkin:"obstacle_11",
      
    },

    spacing:{
      floorToFloorSpacing:100,
      additionalObstacleSpacing:33,
      doubleHeightObstacleSpacing:34,
      floorToFlyingFloorSpacing:145,
      squareObstacleSpacing:10,
    },
    piramidModeChance:50,
    
      chances:{
        upperFloorChance:50,
        lowerFloorChance:50,
    
        floorObstacleChance:20,
            flyingFloorChance:50,
            shortFloorWithBallChance:20,
            spikeMouthChance:20,
            tunnelChance:20,
            magicRodChance:0,
        
        spikeBlockObstacleChance:70,
        sawObstacleChance:25,
    
    spikeBarAboveChance:0, 
    spikeShowChance:42,
    
    oneSpikeChance:45,
    doubleSpikeChance:25,
    obstacleBlockChance:90,
    higherObstacleChance:15,
    
    randomWallSpecialEffectChance:30,
    additionalBottomShurikenChance:50,
    additionalBottomWallSawChance:50,
    bottomTextureChance:35,
    
      },
     tints:{
      backgroundTint:levelsTints.level19, 
    
        obstacleTint:"0xFF9400", 
        blockObstacleTint:"0xFF9400", 
    
        spikeBarTint:levelsTints.level19, 
        blackBarTint:levelsTints.level19, 
    
        shortBallFloorTint:levelsTints.level19,  
    
        floorTint:levelsTints.level19, 
        floorAuraUpTint:"0xFF0000", 
        floorAuraTint:levelsTints.level19, 
    
        lavaTint:levelsTints.level19, 
        sawTint:levelsTints.level19,
       
        shortFlyingFloorTint:levelsTints.level19, 
    
        shurikenWallTint:levelsTints.level19, 
        wallSawTint:levelsTints.level19, 
        bottomSpikeTint:levelsTints.level19,
    
        gearTint:levelsTints.level19,    
        
        laserTint:levelsTints.level19, 
        pulseTint:"0x11FF00", 
      },
    
      specialEvents:{
        triangleBackMode:{
          available:false,
          createMeters:50,
        },
          thunder:{
            available:false,
            firstStrikeMeters:70,
            secondStrikeMeters:30,
          },
            flipHands:{
              available:false,
              firstHandMeters:70,
              secondHandMeters:30,
            },
            cave:{
              available:true,
              createCaveMeters:130,
              closeCaveMeters:70,
            },
            rotateMode:{
              available:false,
              firstLineMeters:90,
              secondLineMeters:80,
            },
            bigMonster:{
              available:false,
                  monsterShowsMeters:90,
                  monsterBackMeters:70,
            }
      },
    
    },

    level20:{
      meters:199,
      createMetaMeters:7,
      floorSpeed: -5.475,
      dimness:false,
      music:"music_6",
      obstacleShift:30,
    skins:{
      map:"polygon",
      floorSkins:"cake",
      obstacleSkin:"obstacle_11",
      
    },
    tip:"triangletip_2.svg",
    spacing:{
      floorToFloorSpacing:100,
      additionalObstacleSpacing:32,
      doubleHeightObstacleSpacing:32,
      floorToFlyingFloorSpacing:145,
      squareObstacleSpacing:10,
    },
    piramidModeChance:50,
    
      chances:{
        upperFloorChance:50,
        lowerFloorChance:50,
    
        floorObstacleChance:20,
            flyingFloorChance:50,
            shortFloorWithBallChance:20,
            spikeMouthChance:20,
            tunnelChance:30,
            magicRodChance:20,
        
        spikeBlockObstacleChance:70,
        sawObstacleChance:25,
    
    spikeBarAboveChance:20, 
    spikeShowChance:42,
    
    oneSpikeChance:45,
    doubleSpikeChance:25,
    obstacleBlockChance:85,
    higherObstacleChance:15,
    
    randomWallSpecialEffectChance:30,
    additionalBottomShurikenChance:50,
    additionalBottomWallSawChance:50,
    bottomTextureChance:40,
    
      },
     tints:{
      backgroundTint:"0x861A00",  
    
        obstacleTint:levelsTints.level20,  
        blockObstacleTint:levelsTints.level20,  
    
        spikeBarTint:levelsTints.level20,  
        blackBarTint:levelsTints.level20,  
    
        shortBallFloorTint:levelsTints.level20,  
    
        floorTint:"0x54C256",   
        floorAuraUpTint:"0xEFA317",  
        floorAuraTint:"0xEFA317"  ,
    
        lavaTint:levelsTints.level20, 
        sawTint:levelsTints.level20,
       
        shortFlyingFloorTint:levelsTints.level20,  
    
        shurikenWallTint:levelsTints.level20, 
        wallSawTint:levelsTints.level20, 
        bottomSpikeTint:levelsTints.level20,
    
        gearTint:levelsTints.level20,    
        
        laserTint:levelsTints.level20,  
        pulseTint:"0x1FBEA3",  
      },
    
      specialEvents:{
        triangleBackMode:{
          available:false,
          createMeters:50,
        },
          thunder:{
            available:false,
            firstStrikeMeters:70,
            secondStrikeMeters:30,
          },
            flipHands:{
              available:false,
              firstHandMeters:70,
              secondHandMeters:30,
            },
            cave:{
              available:false,
              createCaveMeters:80,
              closeCaveMeters:50,
            },
            rotateMode:{
              available:true,
              firstLineMeters:150,
              secondLineMeters:100,
            },
            bigMonster:{
              available:false,
                  monsterShowsMeters:90,
                  monsterBackMeters:70,
            }
      },
    
    },
    level21:{
      meters:200,
      createMetaMeters:7,
      floorSpeed: -5.5,
      dimness:true,
      music:"music_7",
      obstacleShift:30,
    skins:{
      map:"graveyard",
      floorSkins:"castle",
      obstacleSkin:"obstacle_11",

    },
  
    spacing:{
      floorToFloorSpacing:100,
      additionalObstacleSpacing:31,
      doubleHeightObstacleSpacing:30,
      floorToFlyingFloorSpacing:145,
      squareObstacleSpacing:10,
    },
    piramidModeChance:0,
    
      chances:{
        upperFloorChance:50,
        lowerFloorChance:50,
    
        floorObstacleChance:0,
            flyingFloorChance:50,
            shortFloorWithBallChance:10,
            spikeMouthChance:10,
            tunnelChance:10,
            magicRodChance:0,
        
        spikeBlockObstacleChance:0,
        sawObstacleChance:100,
    
    spikeBarAboveChance:15, 
    spikeShowChance:100,
    
    oneSpikeChance:100,
    doubleSpikeChance:0,
    obstacleBlockChance:0,
    higherObstacleChance:105,
    
    randomWallSpecialEffectChance:30,
    additionalBottomShurikenChance:50,
    additionalBottomWallSawChance:50,
    bottomTextureChance:40,
    
      },
     tints:{
      backgroundTint:levelsTints.level21, 
    
        obstacleTint:levelsTints.level21, 
        blockObstacleTint:levelsTints.level21, 
    
        spikeBarTint:levelsTints.level21, 
        blackBarTint:levelsTints.level21, 
    
        shortBallFloorTint:levelsTints.level21,  
    
        floorTint:levelsTints.level21,  
        floorAuraUpTint:levelsTints.level21, 
        floorAuraTint:levelsTints.level21, 
    
        lavaTint:levelsTints.level21, 
        sawTint:levelsTints.level21,
       
        shortFlyingFloorTint:"0xffffff", 
    
        shurikenWallTint:levelsTints.level21, 
        wallSawTint:levelsTints.level21, 
        bottomSpikeTint:levelsTints.level21,
    
        gearTint:levelsTints.level21,    
        
        laserTint:levelsTints.level21, 
        pulseTint:levelsTints.level21, 
      },
    
      specialEvents:{
        triangleBackMode:{
          available:false,
          createMeters:50,
        },
          thunder:{
            available:false,
            firstStrikeMeters:70,
            secondStrikeMeters:30,
          },
            flipHands:{
              available:false,
              firstHandMeters:70,
              secondHandMeters:30,
            },
            cave:{
              available:false,
              createCaveMeters:80,
              closeCaveMeters:50,
            },
            rotateMode:{
              available:false,
              firstLineMeters:90,
              secondLineMeters:80,
            },
            bigMonster:{
              available:false,
                  monsterShowsMeters:90,
                  monsterBackMeters:70,
            }
      },
    
    },
    level22:{
      meters:201,
      createMetaMeters:7,
      floorSpeed: -5.525,
      dimness:false,
      music:"music_1",
      correctLine:"0xffffff",
      obstacleShift:27,
    skins:{
      map:"pinkMountain",
      floorSkins:"cake",
      obstacleSkin:"obstacle_11",

    },
    
    spacing:{
      floorToFloorSpacing:100,
      additionalObstacleSpacing:30,
      doubleHeightObstacleSpacing:30,
      floorToFlyingFloorSpacing:145,
      squareObstacleSpacing:10,
    },
    piramidModeChance:50,
    
      chances:{
        upperFloorChance:50,
        lowerFloorChance:50,
    
        floorObstacleChance:25,
            flyingFloorChance:40,
            shortFloorWithBallChance:10,
            spikeMouthChance:10,
            tunnelChance:20,
            magicRodChance:20,
        
        spikeBlockObstacleChance:90,
        sawObstacleChance:15,
    
    spikeBarAboveChance:15, 
    spikeShowChance:45,
    
    oneSpikeChance:45,
    doubleSpikeChance:25,
    obstacleBlockChance:80,
    higherObstacleChance:15,
    
    randomWallSpecialEffectChance:30,
    additionalBottomShurikenChance:70,
    additionalBottomWallSawChance:70,
    bottomTextureChance:50,
    
      },
     tints:{
      backgroundTint:levelsTints.level22, 
    
        obstacleTint:"0x00F639", 
        blockObstacleTint:"0x00F639", 
    
        spikeBarTint:levelsTints.level22, 
        blackBarTint:levelsTints.level22, 
    
        shortBallFloorTint:levelsTints.level22,  
    
        floorTint:levelsTints.level22, 
        floorAuraUpTint:"0x004800", 
        floorAuraTint:"0xBB00FF", 
    
        lavaTint:"0xffffff",
        sawTint:levelsTints.level22,
       
        shortFlyingFloorTint:"0xA9D41B", 
    
        shurikenWallTint:levelsTints.level22, 
        wallSawTint:levelsTints.level22, 
        bottomSpikeTint:levelsTints.level22,
    
        gearTint:levelsTints.level22,    
        
        laserTint:"0xE60000", 
        pulseTint:"0x00FFBB", 
      },
    
      specialEvents:{
        triangleBackMode:{
          available:false,
          createMeters:50,
        },
          thunder:{
            available:false,
            firstStrikeMeters:70,
            secondStrikeMeters:30,
          },
            flipHands:{
              available:false,
              firstHandMeters:70,
              secondHandMeters:30,
            },
            cave:{
              available:true,
              createCaveMeters:150,
              closeCaveMeters:100,
            },
            rotateMode:{
              available:false,
              firstLineMeters:90,
              secondLineMeters:80,
            },
            bigMonster:{
              available:false,
                  monsterShowsMeters:90,
                  monsterBackMeters:70,
            }
      },
    
    },

    level23:{
      meters:202,
      createMetaMeters:7,
      floorSpeed: -5.5,
      dimness:false,
      obstacleShift:24,
      music:"music_2",
    skins:{
      
      map:"cave",
      floorSkins:"grid",
      obstacleSkin:"obstacle_11",
     
    },
    
    spacing:{
      floorToFloorSpacing:100,
      additionalObstacleSpacing:29,
      doubleHeightObstacleSpacing:30,
      floorToFlyingFloorSpacing:145,
      squareObstacleSpacing:5,
    },
    piramidModeChance:50,
    
      chances:{
        upperFloorChance:50,
        lowerFloorChance:50,
    
        floorObstacleChance:25,
            flyingFloorChance:40,
            shortFloorWithBallChance:25,
            spikeMouthChance:25,
            tunnelChance:25,
            magicRodChance:20,
        
        spikeBlockObstacleChance:90,
        sawObstacleChance:15,
    
    spikeBarAboveChance:20, 
    spikeShowChance:45,
    
    oneSpikeChance:45,
    doubleSpikeChance:20,
    obstacleBlockChance:70,
    higherObstacleChance:15,
    
    randomWallSpecialEffectChance:30,
    additionalBottomShurikenChance:70,
    additionalBottomWallSawChance:70,
    bottomTextureChance:50,
    
      },
     tints:{
      backgroundTint:levelsTints.level23,  
    
        obstacleTint:levelsTints.level23,   
        blockObstacleTint:levelsTints.level23,  
    
        spikeBarTint:levelsTints.level23,  
        blackBarTint:levelsTints.level23,  
    
        shortBallFloorTint:levelsTints.level23,  
    
        floorTint:levelsTints.level23,   
        floorAuraUpTint:levelsTints.level23,  
        floorAuraTint:levelsTints.level23,  
    
        lavaTint:levelsTints.level23, 
        sawTint:levelsTints.level23,
       
        shortFlyingFloorTint:levelsTints.level23,   
    
        shurikenWallTint:levelsTints.level23, 
        wallSawTint:levelsTints.level23, 
        bottomSpikeTint:levelsTints.level23,
    
        gearTint:levelsTints.level23,    
        
        laserTint:"0xFF6E00",  
        pulseTint:levelsTints.level23,  
      },
    
      specialEvents:{
        triangleBackMode:{
          available:false,
          createMeters:50,
        },
          thunder:{
            available:false,
            firstStrikeMeters:70,
            secondStrikeMeters:30,
          },
            flipHands:{
              available:true,
              firstHandMeters:140,
              secondHandMeters:90,
            },
            cave:{
              available:false,
              createCaveMeters:80,
              closeCaveMeters:50,
            },
            rotateMode:{
              available:false,
              firstLineMeters:90,
              secondLineMeters:80,
            },
            bigMonster:{
              available:false,
                  monsterShowsMeters:90,
                  monsterBackMeters:70,
            }
      },
    
    },

    level24:{
      meters:203,
      createMetaMeters:7,
      floorSpeed: -5.575,
      dimness:false,
      obstacleShift:21,
      music:"music_3",
    skins:{
      
      map:"tiles",
      floorSkins:"basic",
      obstacleSkin:"obstacle_11",
 
    },
    
    spacing:{
      floorToFloorSpacing:100,
      additionalObstacleSpacing:28,
      doubleHeightObstacleSpacing:30,
      floorToFlyingFloorSpacing:145,
      squareObstacleSpacing:5,
    },
    piramidModeChance:50,
    
      chances:{
        upperFloorChance:90,
        lowerFloorChance:50,
    
        floorObstacleChance:25,
            flyingFloorChance:40,
            shortFloorWithBallChance:25,
            spikeMouthChance:15,
            tunnelChance:30,
            magicRodChance:20,
        
        spikeBlockObstacleChance:90,
        sawObstacleChance:15,
    
    spikeBarAboveChance:25, 
    spikeShowChance:45,
    
    oneSpikeChance:50,
    doubleSpikeChance:20,
    obstacleBlockChance:65,
    higherObstacleChance:15,
    
    randomWallSpecialEffectChance:30,
    additionalBottomShurikenChance:70,
    additionalBottomWallSawChance:70,
    bottomTextureChance:50,
    
      },
     tints:{
      backgroundTint:levelsTints.level24, 
    
        obstacleTint:levelsTints.level24,  
        blockObstacleTint:levelsTints.level24, 
    
        spikeBarTint:levelsTints.level24, 
        blackBarTint:levelsTints.level24, 
    
        shortBallFloorTint:levelsTints.level24,  
    
        floorTint:levelsTints.level24,  
        floorAuraUpTint:"0xFFFF00", 
        floorAuraTint:"0xFFFF00", 
    
        lavaTint:levelsTints.level24, 
        sawTint:levelsTints.level24,
       
        shortFlyingFloorTint:levelsTints.level24,  
    
        shurikenWallTint:levelsTints.level24, 
        wallSawTint:levelsTints.level24, 
        bottomSpikeTint:levelsTints.level24,
    
        gearTint:levelsTints.level24,    
        
        laserTint:"0x600000", 
        pulseTint:levelsTints.level24, 
      },
    
      specialEvents:{
        triangleBackMode:{
          available:false,
          createMeters:50,
        },
          thunder:{
            available:false,
            firstStrikeMeters:70,
            secondStrikeMeters:30,
          },
            flipHands:{
              available:false,
              firstHandMeters:70,
              secondHandMeters:30,
            },
            cave:{
              available:false,
              createCaveMeters:80,
              closeCaveMeters:50,
            },
            rotateMode:{
              available:true,
              firstLineMeters:100,
              secondLineMeters:50,
            },
            bigMonster:{
              available:false,
                  monsterShowsMeters:90,
                  monsterBackMeters:70,
            }
      },
    
    },
    level25:{
      meters:204,
      createMetaMeters:7,
      floorSpeed: -5.6,
      dimness:false,
      music:"music_4",
    skins:{
      map:"bricks",
      floorSkins:"cake",
      obstacleSkin:"obstacle_11",
  
    },
    obstacleShift:18,
    spacing:{
      floorToFloorSpacing:100,
      additionalObstacleSpacing:27,
      doubleHeightObstacleSpacing:27,
      floorToFlyingFloorSpacing:145,
      squareObstacleSpacing:5,
    },
    piramidModeChance:50,
    
      chances:{
        upperFloorChance:50,
        lowerFloorChance:50,
    
        floorObstacleChance:30,
            flyingFloorChance:40,
            shortFloorWithBallChance:15,
            spikeMouthChance:15,
            tunnelChance:20,
            magicRodChance:10,
        
        spikeBlockObstacleChance:80,
        sawObstacleChance:20,
    
    spikeBarAboveChance:20, 
    spikeShowChance:48,
    
    oneSpikeChance:55,
    doubleSpikeChance:20,
    obstacleBlockChance:60,
    higherObstacleChance:15,
    
    randomWallSpecialEffectChance:35,
    additionalBottomShurikenChance:70,
    additionalBottomWallSawChance:70,
    bottomTextureChance:55,
    
      },
     tints:{
      backgroundTint:levelsTints.level25, 
    
        obstacleTint:"0x000000", 
        blockObstacleTint:"0x000000", 
    
        spikeBarTint:levelsTints.level25, 
        blackBarTint:levelsTints.level25, 
    
        shortBallFloorTint:levelsTints.level25,  
    
        floorTint:levelsTints.level25,  
        floorAuraUpTint:"0x000F34", 
        floorAuraTint:levelsTints.level25, 
    
        lavaTint:levelsTints.level25, 
        sawTint:"0x000000",
       
        shortFlyingFloorTint:levelsTints.level25,  
    
        shurikenWallTint:levelsTints.level25, 
        wallSawTint:levelsTints.level25, 
        bottomSpikeTint:levelsTints.level25,
    
        gearTint:levelsTints.level25,    
        
        laserTint:"0x0000FF", 
        pulseTint:"0x000000", 
      },
    
      specialEvents:{
        triangleBackMode:{
          available:false,
          createMeters:50,
        },
          thunder:{
            available:true,
            firstStrikeMeters:130,
            secondStrikeMeters:100,
          },
            flipHands:{
              available:false,
              firstHandMeters:70,
              secondHandMeters:30,
            },
            cave:{
              available:true,
              createCaveMeters:120,
              closeCaveMeters:80,
            },
            rotateMode:{
              available:false,
              firstLineMeters:90,
              secondLineMeters:80,
            },
            bigMonster:{
              available:false,
                  monsterShowsMeters:90,
                  monsterBackMeters:70,
            }
      },
    
    },
    level26:{
      meters:205,
      createMetaMeters:7,
      floorSpeed: -5.625,
      dimness:false,
      music:"music_5",
      correctLine:"0xffffff",
    skins:{
      map:"mountain",
      floorSkins:"cake",
      obstacleSkin:"obstacle_11",
    
    },
    obstacleShift:15,
    spacing:{
      floorToFloorSpacing:100,
      additionalObstacleSpacing:26,
      doubleHeightObstacleSpacing:27,
      floorToFlyingFloorSpacing:145,
      squareObstacleSpacing:5,
    },
    piramidModeChance:50,
    
      chances:{
        upperFloorChance:50,
        lowerFloorChance:50,
    
        floorObstacleChance:0,
            flyingFloorChance:40,
            shortFloorWithBallChance:25,
            spikeMouthChance:20,
            tunnelChance:25,
            magicRodChance:20,
        
        spikeBlockObstacleChance:90,
        sawObstacleChance:25,
    
    spikeBarAboveChance:20, 
    spikeShowChance:48,
    
    oneSpikeChance:60,
    doubleSpikeChance:20,
    obstacleBlockChance:55,
    higherObstacleChance:15,
    
    randomWallSpecialEffectChance:35,
    additionalBottomShurikenChance:50,
    additionalBottomWallSawChance:50,
    bottomTextureChance:55,
    
      },
     tints:{
      backgroundTint:levelsTints.level26,
    
        obstacleTint:levelsTints.level26, 
        blockObstacleTint:levelsTints.level26,
    
        spikeBarTint:levelsTints.level26,
        blackBarTint:levelsTints.level26,
    
        shortBallFloorTint:levelsTints.level26,  
    
        floorTint:levelsTints.level26, 
        floorAuraUpTint:"0x006900",
        floorAuraTint:levelsTints.level26,
    
        lavaTint:levelsTints.level26, 
        sawTint:"0x000000",
       
        shortFlyingFloorTint:levelsTints.level26, 
    
        shurikenWallTint:levelsTints.level26, 
        wallSawTint:levelsTints.level26, 
        bottomSpikeTint:levelsTints.level26,
    
        gearTint:levelsTints.level26,    
        
        laserTint:levelsTints.level26,
        pulseTint:levelsTints.level26,
      },
    
      specialEvents:{
        triangleBackMode:{
          available:false,
          createMeters:50,
        },
          thunder:{
            available:false,
            firstStrikeMeters:70,
            secondStrikeMeters:30,
          },
            flipHands:{
              available:false,
              firstHandMeters:70,
              secondHandMeters:30,
            },
            cave:{
              available:false,
              createCaveMeters:80,
              closeCaveMeters:50,
            },
            rotateMode:{
              available:false,
              firstLineMeters:90,
              secondLineMeters:80,
            },
            bigMonster:{
              available:true,
                  monsterShowsMeters:150,
                  monsterBackMeters:120,
            }
      },
    
    },
    level27:{
      meters:206,
      createMetaMeters:7,
      floorSpeed: -5.65,
      dimness:false,
    music:"music_6",
    correctLine:"0xffffff",
    skins:{
      map:"snow",
      floorSkins:"grid",
      obstacleSkin:"obstacle_11",
    
    },
    obstacleShift:12,
    spacing:{
      floorToFloorSpacing:100,
      additionalObstacleSpacing:25,
      doubleHeightObstacleSpacing:27,
      floorToFlyingFloorSpacing:145,
      squareObstacleSpacing:5,
    },
    piramidModeChance:50,
    
      chances:{
        upperFloorChance:50,
        lowerFloorChance:50,
    
        floorObstacleChance:30,
            flyingFloorChance:40,
            shortFloorWithBallChance:25,
            spikeMouthChance:25,
            tunnelChance:25,
            magicRodChance:20,
        
        spikeBlockObstacleChance:90,
        sawObstacleChance:15,
    
    spikeBarAboveChance:25, 
    spikeShowChance:48,
    
    oneSpikeChance:10,
    doubleSpikeChance:50,
    obstacleBlockChance:40,
    higherObstacleChance:20,
    
    randomWallSpecialEffectChance:35,
    additionalBottomShurikenChance:50,
    additionalBottomWallSawChance:50,
    bottomTextureChance:55,
    
      },
     tints:{
      backgroundTint:levelsTints.level27, 
    
        obstacleTint:levelsTints.level27,  
        blockObstacleTint:levelsTints.level27, 
    
        spikeBarTint:levelsTints.level27, 
        blackBarTint:levelsTints.level27, 
    
        shortBallFloorTint:levelsTints.level27,  
    
        floorTint:levelsTints.level27,  
        floorAuraUpTint:"0xF8B522", 
        floorAuraTint:"0xF8B522", 
    
        lavaTint:levelsTints.level27, 
        sawTint:levelsTints.level27,
       
        shortFlyingFloorTint:levelsTints.level27, 
    
        shurikenWallTint:levelsTints.level27, 
        wallSawTint:levelsTints.level27, 
        bottomSpikeTint:levelsTints.level27,
    
        gearTint:levelsTints.level27,    
        
        laserTint:levelsTints.level27, 
        pulseTint:levelsTints.level27, 
      },
    
      specialEvents:{
        triangleBackMode:{
          available:true,
          createMeters:80,
        },
          thunder:{
            available:false,
            firstStrikeMeters:70,
            secondStrikeMeters:30,
          },
            flipHands:{
              available:false,
              firstHandMeters:70,
              secondHandMeters:30,
            },
            cave:{
              available:false,
              createCaveMeters:80,
              closeCaveMeters:50,
            },
            rotateMode:{
              available:false,
              firstLineMeters:90,
              secondLineMeters:80,
            },
            bigMonster:{
              available:false,
                  monsterShowsMeters:90,
                  monsterBackMeters:70,
            }
      },
    
    },

    level28:{
      meters:207,
      createMetaMeters:7,
      floorSpeed: -5.675,
      dimness:false,
      music:"music_7",
    skins:{
      map:"simple",
      floorSkins:"basic",
      obstacleSkin:"obstacle_11",
 
    },
    obstacleShift:9,
    spacing:{
      floorToFloorSpacing:100,
      additionalObstacleSpacing:24,
      doubleHeightObstacleSpacing:30,
      floorToFlyingFloorSpacing:145,
      squareObstacleSpacing:12,
    },
    piramidModeChance:50,
    
      chances:{
        upperFloorChance:50,
        lowerFloorChance:50,
    
        floorObstacleChance:0,
            flyingFloorChance:40,
            shortFloorWithBallChance:25,
            spikeMouthChance:25,
            tunnelChance:25,
            magicRodChance:20,
        
        spikeBlockObstacleChance:90,
        sawObstacleChance:15,
    
    spikeBarAboveChance:100, 
    spikeShowChance:50,
    
    oneSpikeChance:0,
    doubleSpikeChance:0,
    obstacleBlockChance:100,
    higherObstacleChance:70,
    
    randomWallSpecialEffectChance:35,
    additionalBottomShurikenChance:50,
    additionalBottomWallSawChance:50,
    bottomTextureChance:55,
    
      },
     tints:{
      backgroundTint:levelsTints.level28,  
    
        obstacleTint:levelsTints.level28,   
        blockObstacleTint:levelsTints.level28,  
    
        spikeBarTint:levelsTints.level28,  
        blackBarTint:levelsTints.level28,  
    
        shortBallFloorTint:levelsTints.level28,  
    
        floorTint:levelsTints.level28,   
        floorAuraUpTint:levelsTints.level28,  
        floorAuraTint:levelsTints.level28,  
    
        lavaTint:levelsTints.level28, 
        sawTint:levelsTints.level28,
       
        shortFlyingFloorTint:levelsTints.level28,   
    
        shurikenWallTint:levelsTints.level28, 
        wallSawTint:levelsTints.level28, 
        bottomSpikeTint:levelsTints.level28,
    
        gearTint:levelsTints.level28,    
        
        laserTint:levelsTints.level28,  
        pulseTint:levelsTints.level28,  
      },
    
      specialEvents:{
        triangleBackMode:{
          available:false,
          createMeters:50,
        },
          thunder:{
            available:false,
            firstStrikeMeters:70,
            secondStrikeMeters:30,
          },
            flipHands:{
              available:false,
              firstHandMeters:70,
              secondHandMeters:30,
            },
            cave:{
              available:false,
              createCaveMeters:80,
              closeCaveMeters:50,
            },
            rotateMode:{
              available:false,
              firstLineMeters:90,
              secondLineMeters:80,
            },
            bigMonster:{
              available:false,
                  monsterShowsMeters:90,
                  monsterBackMeters:70,
            }
      },
    
    },

    level29:{
      meters:208,
      createMetaMeters:7,
      floorSpeed: -5.7,
      dimness:false,
      music:"music_1",
    skins:{
      map:"perspective",
      floorSkins:"triangles",
      obstacleSkin:"obstacle_11",

    },
    obstacleShift:5,
    spacing:{
      floorToFloorSpacing:100,
      additionalObstacleSpacing:23,
      doubleHeightObstacleSpacing:27,
      floorToFlyingFloorSpacing:145,
      squareObstacleSpacing:5,
    },
    piramidModeChance:50,
    
      chances:{
        upperFloorChance:50,
        lowerFloorChance:80,
    
        floorObstacleChance:30,
            flyingFloorChance:35,
            shortFloorWithBallChance:25,
            spikeMouthChance:25,
            tunnelChance:25,
            magicRodChance:25,
        
        spikeBlockObstacleChance:90,
        sawObstacleChance:35,
    
    spikeBarAboveChance:30, 
    spikeShowChance:51,
    
    oneSpikeChance:30,
    doubleSpikeChance:50,
    obstacleBlockChance:40,
    higherObstacleChance:25,
    
    randomWallSpecialEffectChance:35,
    additionalBottomShurikenChance:50,
    additionalBottomWallSawChance:50,
    bottomTextureChance:55,
    
      },
     tints:{
      backgroundTint:levelsTints.level29,
    
        obstacleTint:levelsTints.level29, 
        blockObstacleTint:levelsTints.level29,
    
        spikeBarTint:levelsTints.level29,
        blackBarTint:levelsTints.level29,
    
        shortBallFloorTint:levelsTints.level29,  
    
        floorTint:levelsTints.level29, 
        floorAuraUpTint:"0xF80000",
        floorAuraTint:"0xF80000",
    
        lavaTint:levelsTints.level29, 
        sawTint:levelsTints.level29,
       
        shortFlyingFloorTint:levelsTints.level29, 
    
        shurikenWallTint:levelsTints.level29, 
        wallSawTint:levelsTints.level29, 
        bottomSpikeTint:levelsTints.level29,
    
        gearTint:levelsTints.level29,    
        
        laserTint:"0x0000FF",
        pulseTint:"0x00FF00",
      },
    
      specialEvents:{
        triangleBackMode:{
          available:false,
          createMeters:50,
        },
          thunder:{
            available:true,
            firstStrikeMeters:120,
            secondStrikeMeters:40,
          },
            flipHands:{
              available:false,
              firstHandMeters:70,
              secondHandMeters:30,
            },
            cave:{
              available:false,
              createCaveMeters:80,
              closeCaveMeters:50,
            },
            rotateMode:{
              available:false,
              firstLineMeters:90,
              secondLineMeters:80,
            },
            bigMonster:{
              available:false,
                  monsterShowsMeters:90,
                  monsterBackMeters:70,
            }
      },
    
    },

    level30:{
      meters:209,
      createMetaMeters:7,
      floorSpeed: -5.725,
      dimness:false,
      music:"music_2",
    skins:{
      map:"circles",
      floorSkins:"castle",
      obstacleSkin:"obstacle_11",

    },
    
    spacing:{
      floorToFloorSpacing:100,
      additionalObstacleSpacing:22,
      doubleHeightObstacleSpacing:30,
      floorToFlyingFloorSpacing:145,
      squareObstacleSpacing:5,
    },
    piramidModeChance:50,
    
      chances:{
        upperFloorChance:50,
        lowerFloorChance:50,
    
        floorObstacleChance:30,
            flyingFloorChance:35,
            shortFloorWithBallChance:25,
            spikeMouthChance:25,
            tunnelChance:25,
            magicRodChance:20,
        
        spikeBlockObstacleChance:90,
        sawObstacleChance:25,
    
    spikeBarAboveChance:35, 
    spikeShowChance:51,
    
    oneSpikeChance:60,
    doubleSpikeChance:20,
    obstacleBlockChance:35,
    higherObstacleChance:30,
    
    randomWallSpecialEffectChance:35,
    additionalBottomShurikenChance:70,
    additionalBottomWallSawChance:70,
    bottomTextureChance:57,
    
      },
     tints:{
      backgroundTint:levelsTints.level30, 
    
        obstacleTint:levelsTints.level30, 
        blockObstacleTint:levelsTints.level30, 
    
        spikeBarTint:levelsTints.level30, 
        blackBarTint:levelsTints.level30, 
    
        shortBallFloorTint:levelsTints.level30,  
    
        floorTint:levelsTints.level30, 
        floorAuraUpTint:"0xFF3E0F", 
        floorAuraTint:"0xFF3E0F", 
    
        lavaTint:"0xF33DC3",
        sawTint:"0xFFFF00", 
       
        shortFlyingFloorTint:"0xF33DC3", 
    
        shurikenWallTint:levelsTints.level30, 
        wallSawTint:levelsTints.level30, 
        bottomSpikeTint:levelsTints.level30, 
    
        gearTint:levelsTints.level30,  
        
        laserTint:"0xFF0000", 
        pulseTint:"0xFFFF00", 
      },
    
      specialEvents:{
        triangleBackMode:{
          available:false,
          createMeters:50,
        },
          thunder:{
            available:false,
            firstStrikeMeters:70,
            secondStrikeMeters:30,
          },
            flipHands:{
              available:false,
              firstHandMeters:70,
              secondHandMeters:30,
            },
            cave:{
              available:true,
              createCaveMeters:150,
              closeCaveMeters:120,
            },
            rotateMode:{
              available:false,
              firstLineMeters:90,
              secondLineMeters:80,
            },
            bigMonster:{
              available:false,
                  monsterShowsMeters:90,
                  monsterBackMeters:70,
            }
      },
    
    },

    level31:{
      meters:210,
      createMetaMeters:7,
      floorSpeed: -5.75,
      dimness:false,
      music:"music_3",
      correctLine:"0xffffff",
    skins:{
      map:"sunny",
      floorSkins:"black",
      obstacleSkin:"obstacle_11",
    
    },
    
    spacing:{
      floorToFloorSpacing:100,
      additionalObstacleSpacing:21,
      doubleHeightObstacleSpacing:27,
      floorToFlyingFloorSpacing:145,
      squareObstacleSpacing:5,
    },
    piramidModeChance:50,
    
      chances:{
        upperFloorChance:50,
        lowerFloorChance:50,
    
        floorObstacleChance:30,
            flyingFloorChance:30,
            shortFloorWithBallChance:25,
            spikeMouthChance:25,
            tunnelChance:25,
            magicRodChance:50,
        
        spikeBlockObstacleChance:90,
        sawObstacleChance:15,
    
    spikeBarAboveChance:35, 
    spikeShowChance:51,

    oneSpikeChance:40,
    doubleSpikeChance:20,
    obstacleBlockChance:30,
    higherObstacleChance:30,
    
    randomWallSpecialEffectChance:40,
    additionalBottomShurikenChance:70,
    additionalBottomWallSawChance:70,
    bottomTextureChance:57,
    
      },
     tints:{
      backgroundTint:levelsTints.level31,    
    
        obstacleTint:levelsTints.level31,     
        blockObstacleTint:levelsTints.level31,    
    
        spikeBarTint:levelsTints.level31,    
        blackBarTint:levelsTints.level31,    
    
        shortBallFloorTint:levelsTints.level31,  
    
        floorTint:levelsTints.level31,     
        floorAuraUpTint:"0x3CC1D5",    
        floorAuraTint:"0x3CC1D5",    
    
        lavaTint:levelsTints.level31, 
        sawTint:levelsTints.level31,
       
        shortFlyingFloorTint:levelsTints.level31,     
    
        shurikenWallTint:levelsTints.level31, 
        wallSawTint:levelsTints.level31, 
        bottomSpikeTint:levelsTints.level31,
    
        gearTint:levelsTints.level31,    
        
        laserTint:"0xFFFF00",    
        pulseTint:"0xFFFF00",    
      },
    
      specialEvents:{
        triangleBackMode:{
          available:false,
          createMeters:50,
        },
          thunder:{
            available:false,
            firstStrikeMeters:70,
            secondStrikeMeters:30,
          },
            flipHands:{
              available:false,
              firstHandMeters:70,
              secondHandMeters:30,
            },
            cave:{
              available:false,
              createCaveMeters:80,
              closeCaveMeters:50,
            },
            rotateMode:{
              available:false,
              firstLineMeters:90,
              secondLineMeters:80,
            },
            bigMonster:{
              available:false,
                  monsterShowsMeters:90,
                  monsterBackMeters:70,
            }
      },
    
    },
    level32:{
      meters:211,
      createMetaMeters:7,
      floorSpeed: -5.775,
      dimness:true,
      music:"music_4",
    skins:{
      map:"graveyard",
      floorSkins:"basic",
      obstacleSkin:"obstacle_11",
    
    },
    
    spacing:{
      floorToFloorSpacing:100,
      additionalObstacleSpacing:20,
      doubleHeightObstacleSpacing:25,
      floorToFlyingFloorSpacing:145,
      squareObstacleSpacing:5,
    },
    piramidModeChance:50,
    
      chances:{
        upperFloorChance:50,
        lowerFloorChance:50,
    
        floorObstacleChance:30,
            flyingFloorChance:30,
            shortFloorWithBallChance:25,
            spikeMouthChance:25,
            tunnelChance:25,
            magicRodChance:50,
        
        spikeBlockObstacleChance:90,
        sawObstacleChance:15,
    
    spikeBarAboveChance:35, 
    spikeShowChance:51,

    oneSpikeChance:40,
    doubleSpikeChance:30,
    obstacleBlockChance:10,
    higherObstacleChance:30,
    
    randomWallSpecialEffectChance:40,
    additionalBottomShurikenChance:70,
    additionalBottomWallSawChance:70,
    bottomTextureChance:57,
    
      },
     tints:{
      backgroundTint:levelsTints.level32, 
    
        obstacleTint:levelsTints.level32,  
        blockObstacleTint:"0xBEC200", 
    
        spikeBarTint:levelsTints.level32, 
        blackBarTint:levelsTints.level32, 
    
        shortBallFloorTint:levelsTints.level32,  
    
        floorTint:levelsTints.level32,  
        floorAuraUpTint:levelsTints.level32, 
        floorAuraTint:"0x057AFF", 
    
        lavaTint:"0xffffff",
        sawTint:levelsTints.level32,
       
        shortFlyingFloorTint:"0xF33D44", 
    
        shurikenWallTint:"0xF5FF44", 
        wallSawTint:levelsTints.level32, 
        bottomSpikeTint:levelsTints.level32,
    
        gearTint:"0x057AFF",    
        
        laserTint:"0xF33D44", 
        pulseTint:"0xFFFFFF", 
      },
    
      specialEvents:{
        triangleBackMode:{
          available:false,
          createMeters:50,
        },
          thunder:{
            available:false,
            firstStrikeMeters:70,
            secondStrikeMeters:30,
          },
            flipHands:{
              available:false,
              firstHandMeters:70,
              secondHandMeters:30,
            },
            cave:{
              available:false,
              createCaveMeters:80,
              closeCaveMeters:50,
            },
            rotateMode:{
              available:false,
              firstLineMeters:90,
              secondLineMeters:80,
            },
            bigMonster:{
              available:true,
                  monsterShowsMeters:125,
                  monsterBackMeters:80,
            }
      },
    
    },

    level33:{
      meters:212,
      createMetaMeters:7,
      floorSpeed: -5.8,
      dimness:false,
      music:"music_5",
    skins:{
      map:"polygon",
      floorSkins:"triangles",
      obstacleSkin:"obstacle_11",
   
    },
    
    spacing:{
      floorToFloorSpacing:100,
      additionalObstacleSpacing:19,
      doubleHeightObstacleSpacing:25,
      floorToFlyingFloorSpacing:145,
      squareObstacleSpacing:5,
    },
    piramidModeChance:50,
    
      chances:{
        upperFloorChance:50,
        lowerFloorChance:50,
    
        floorObstacleChance:30,
            flyingFloorChance:25,
            shortFloorWithBallChance:25,
            spikeMouthChance:25,
            tunnelChance:15,
            magicRodChance:40,
        
        spikeBlockObstacleChance:90,
        sawObstacleChance:15,
    
    spikeBarAboveChance:35, 
    spikeShowChance:54,

    oneSpikeChance:40,
    doubleSpikeChance:100,
    obstacleBlockChance:10,
    higherObstacleChance:30,
    
    randomWallSpecialEffectChance:45,
    additionalBottomShurikenChance:70,
    additionalBottomWallSawChance:70,
    bottomTextureChance:57,
    
      },
     tints:{
      backgroundTint:levelsTints.level33,  
    
        obstacleTint:levelsTints.level33,   
        blockObstacleTint:levelsTints.level33,  
    
        spikeBarTint:levelsTints.level33,  
        blackBarTint:levelsTints.level33,  
    
        shortBallFloorTint:levelsTints.level33,  
    
        floorTint:levelsTints.level33,   
        floorAuraUpTint:"0xffffff",  
        floorAuraTint:levelsTints.level33,  
    
        lavaTint:levelsTints.level33, 
        sawTint:"0xFFFFFF",
       
        shortFlyingFloorTint:levelsTints.level33,   
    
        shurikenWallTint:levelsTints.level33, 
        wallSawTint:levelsTints.level33, 
        bottomSpikeTint:levelsTints.level33,
    
        gearTint:levelsTints.level33,    
        
        laserTint:"0x730000",  
        pulseTint:"0xFFFFFF",  
      },
    
      specialEvents:{
        triangleBackMode:{
          available:true,
          createMeters:110,
        },
          thunder:{
            available:false,
            firstStrikeMeters:70,
            secondStrikeMeters:30,
          },
            flipHands:{
              available:true,
              firstHandMeters:120,
              secondHandMeters:50,
            },
            cave:{
              available:false,
              createCaveMeters:80,
              closeCaveMeters:50,
            },
            rotateMode:{
              available:false,
              firstLineMeters:90,
              secondLineMeters:80,
            },
            bigMonster:{
              available:false,
                  monsterShowsMeters:90,
                  monsterBackMeters:70,
            }
      },
    
    },
    
    level34:{
      meters:213,
      createMetaMeters:6,
      floorSpeed: -5.825,
      dimness:false,
      music:"music_6",
    skins:{
      map:"simple",
      floorSkins:"castle",
      obstacleSkin:"obstacle_11",
    
    },
    
    spacing:{
      floorToFloorSpacing:100,
      additionalObstacleSpacing:18,
      doubleHeightObstacleSpacing:30,
      floorToFlyingFloorSpacing:145,
      squareObstacleSpacing:15,
    },
    piramidModeChance:100,
    
      chances:{
        upperFloorChance:50,
        lowerFloorChance:50,
    
        floorObstacleChance:30,
            flyingFloorChance:40,
            shortFloorWithBallChance:25,
            spikeMouthChance:25,
            tunnelChance:15,
            magicRodChance:40,
        
        spikeBlockObstacleChance:90,
        sawObstacleChance:20,
    
    spikeBarAboveChance:100, 
    spikeShowChance:55,

    oneSpikeChance:15,
    doubleSpikeChance:0,
    obstacleBlockChance:100,
    higherObstacleChance:80,
    
    randomWallSpecialEffectChance:45,
    additionalBottomShurikenChance:70,
    additionalBottomWallSawChance:70,
    bottomTextureChance:57,
    
      },
     tints:{
      backgroundTint:levelsTints.level34, 
    
        obstacleTint:levelsTints.level34,  
        blockObstacleTint:levelsTints.level34, 
    
        spikeBarTint:levelsTints.level34, 
        blackBarTint:levelsTints.level34, 
    
        shortBallFloorTint:levelsTints.level34,  
    
        floorTint:levelsTints.level34,  
        floorAuraUpTint:levelsTints.level34, 
        floorAuraTint:levelsTints.level34, 
    
        lavaTint:levelsTints.level34, 
        sawTint:levelsTints.level34,
       
        shortFlyingFloorTint:levelsTints.level34,  
    
        shurikenWallTint:levelsTints.level34, 
        wallSawTint:levelsTints.level34, 
        bottomSpikeTint:levelsTints.level34,
    
        gearTint:levelsTints.level34,    
        
        laserTint:"0x0000FF", 
        pulseTint:levelsTints.level34, 
      },
    
      specialEvents:{
        triangleBackMode:{
          available:false,
          createMeters:50,
        },
          thunder:{
            available:false,
            firstStrikeMeters:70,
            secondStrikeMeters:30,
          },
            flipHands:{
              available:false,
              firstHandMeters:70,
              secondHandMeters:30,
            },
            cave:{
              available:false,
              createCaveMeters:80,
              closeCaveMeters:50,
            },
            rotateMode:{
              available:true,
              firstLineMeters:80,
              secondLineMeters:10,
            },
            bigMonster:{
              available:false,
                  monsterShowsMeters:90,
                  monsterBackMeters:70,
            }
      },
    
    },
    level35:{
      meters:214,
      createMetaMeters:6,
      floorSpeed: -5.85,
      dimness:false,
      music:"music_7",
      correctLine:"0xffffff",
    skins:{
      map:"mountain",
      floorSkins:"black",
      obstacleSkin:"obstacle_11",
      
    },
    
    spacing:{
      floorToFloorSpacing:100,
      additionalObstacleSpacing:17,
      doubleHeightObstacleSpacing:25,
      floorToFlyingFloorSpacing:145,
      squareObstacleSpacing:5,
    },
    piramidModeChance:100,
    
      chances:{
        upperFloorChance:50,
        lowerFloorChance:50,
    
        floorObstacleChance:50,
            flyingFloorChance:50,
            shortFloorWithBallChance:25,
            spikeMouthChance:25,
            tunnelChance:15,
            magicRodChance:40,
        
        spikeBlockObstacleChance:0,
        sawObstacleChance:100,
    
    spikeBarAboveChance:35, 
    spikeShowChance:54,

    oneSpikeChance:100,
    doubleSpikeChance:30,
    obstacleBlockChance:10,
    higherObstacleChance:10,
    
    randomWallSpecialEffectChance:45,
    additionalBottomShurikenChance:70,
    additionalBottomWallSawChance:70,
    bottomTextureChance:57,
    
      },
     tints:{
      backgroundTint:levelsTints.level35,
    
        obstacleTint:"0xEEA500", 
        blockObstacleTint:"0xEEA500",
    
        spikeBarTint:levelsTints.level35,
        blackBarTint:levelsTints.level35,
    
        shortBallFloorTint:levelsTints.level35,  
    
        floorTint:levelsTints.level35, 
        floorAuraUpTint:"0x0000FF",
        floorAuraTint:"0xFF0000",
    
        lavaTint:levelsTints.level35, 
        sawTint:levelsTints.level35,
       
        shortFlyingFloorTint:levelsTints.level35, 
    
        shurikenWallTint:levelsTints.level35, 
        wallSawTint:levelsTints.level35, 
        bottomSpikeTint:levelsTints.level35,
    
        gearTint:levelsTints.level35,    
        
        laserTint:"0xEEA500",
        pulseTint:levelsTints.level35,
      },
    
      specialEvents:{
        triangleBackMode:{
          available:false,
          createMeters:50,
        },
          thunder:{
            available:true,
            firstStrikeMeters:70,
            secondStrikeMeters:30,
          },
            flipHands:{
              available:false,
              firstHandMeters:70,
              secondHandMeters:30,
            },
            cave:{
              available:true,
              createCaveMeters:80,
              closeCaveMeters:50,
            },
            rotateMode:{
              available:false,
              firstLineMeters:90,
              secondLineMeters:80,
            },
            bigMonster:{
              available:false,
                  monsterShowsMeters:90,
                  monsterBackMeters:70,
            }
      },
    
    },
    level36:{
      meters:215,
      createMetaMeters:6,
      floorSpeed: -5.875,
      dimness:false,
      music:"music_1",
      correctLine:"0xffffff",
    skins:{
      map:"snow",
      floorSkins:"grid",
      obstacleSkin:"obstacle_11",
      
    },
    
    spacing:{
      floorToFloorSpacing:100,
      additionalObstacleSpacing:16,
      doubleHeightObstacleSpacing:30,
      floorToFlyingFloorSpacing:145,
      squareObstacleSpacing:10,
    },
    piramidModeChance:80,
    
      chances:{
        upperFloorChance:100,
        lowerFloorChance:70,
    
        floorObstacleChance:30,
            flyingFloorChance:40,
            shortFloorWithBallChance:25,
            spikeMouthChance:25,
            tunnelChance:15,
            magicRodChance:40,
        
        spikeBlockObstacleChance:80,
        sawObstacleChance:10,
    
    spikeBarAboveChance:37, 
    spikeShowChance:54,

    oneSpikeChance:55,
    doubleSpikeChance:30,
    obstacleBlockChance:10,
    higherObstacleChance:35,
    
    randomWallSpecialEffectChance:50,
    additionalBottomShurikenChance:70,
    additionalBottomWallSawChance:70,
    bottomTextureChance:65,
    
      },
     tints:{
      backgroundTint:levelsTints.level36,  
    
        obstacleTint:levelsTints.level36,   
        blockObstacleTint:levelsTints.level36,  
    
        spikeBarTint:levelsTints.level36,  
        blackBarTint:levelsTints.level36,  
    
        shortBallFloorTint:levelsTints.level36,  
    
        floorTint:levelsTints.level36,   
        floorAuraUpTint:"0x04061F",  
        floorAuraTint:"0x04061F",  
    
        lavaTint:levelsTints.level36, 
        sawTint:levelsTints.level36,
       
        shortFlyingFloorTint:levelsTints.level36,   
    
        shurikenWallTint:levelsTints.level36, 
        wallSawTint:levelsTints.level36, 
        bottomSpikeTint:levelsTints.level36,
    
        gearTint:levelsTints.level36,    
        
        laserTint:levelsTints.level36,  
        pulseTint:levelsTints.level36,  
      },
    
      specialEvents:{
        triangleBackMode:{
          available:false,
          createMeters:50,
        },
          thunder:{
            available:false,
            firstStrikeMeters:70,
            secondStrikeMeters:30,
          },
            flipHands:{
              available:false,
              firstHandMeters:70,
              secondHandMeters:30,
            },
            cave:{
              available:false,
              createCaveMeters:80,
              closeCaveMeters:50,
            },
            rotateMode:{
              available:true,
              firstLineMeters:100,
              secondLineMeters:80,
            },
            bigMonster:{
              available:false,
                  monsterShowsMeters:90,
                  monsterBackMeters:70,
            }
      },
    
    },

    level37:{
      meters:216,
      createMetaMeters:6,
      floorSpeed: -5.9,
      dimness:false,
      correctLine:"0xAE00FF",
      music:"music_2",
    skins:{
      map:"pinkForest",
      floorSkins:"cake",
      obstacleSkin:"obstacle_11",
    
    },
    
    spacing:{
      floorToFloorSpacing:100,
      additionalObstacleSpacing:15,
      doubleHeightObstacleSpacing:25,
      floorToFlyingFloorSpacing:145,
      squareObstacleSpacing:5,
    },
    piramidModeChance:80,
    
      chances:{
        upperFloorChance:100,
        lowerFloorChance:70,
    
        floorObstacleChance:30,
            flyingFloorChance:40,
            shortFloorWithBallChance:25,
            spikeMouthChance:25,
            tunnelChance:25,
            magicRodChance:40,
        
        spikeBlockObstacleChance:80,
        sawObstacleChance:20,
    
    spikeBarAboveChance:40, 
    spikeShowChance:57,

    oneSpikeChance:75,
    doubleSpikeChance:30,
    obstacleBlockChance:10,
    higherObstacleChance:30,
    
    randomWallSpecialEffectChance:50,
    additionalBottomShurikenChance:70,
    additionalBottomWallSawChance:70,
    bottomTextureChance:65,
    
      },
     tints:{
      backgroundTint:levelsTints.level37,  
    
        obstacleTint:levelsTints.level37,   
        blockObstacleTint:levelsTints.level37,  
    
        spikeBarTint:levelsTints.level37,  
        blackBarTint:levelsTints.level37,  
    
        shortBallFloorTint:levelsTints.level37,  
    
        floorTint:levelsTints.level37,   
        floorAuraUpTint:levelsTints.level37,  
        floorAuraTint:levelsTints.level37,  
    
        lavaTint:levelsTints.level37, 
        sawTint:levelsTints.level37,
       
        shortFlyingFloorTint:"0xffffff", 
    
        shurikenWallTint:levelsTints.level37, 
        wallSawTint:levelsTints.level37, 
        bottomSpikeTint:levelsTints.level37,
    
        gearTint:levelsTints.level37,    
        
        laserTint:levelsTints.level37,  
        pulseTint:levelsTints.level37,  
      },
    
      specialEvents:{
        triangleBackMode:{
          available:false,
          createMeters:50,
        },
          thunder:{
            available:false,
            firstStrikeMeters:70,
            secondStrikeMeters:30,
          },
            flipHands:{
              available:true,
              firstHandMeters:70,
              secondHandMeters:30,
            },
            cave:{
              available:false,
              createCaveMeters:80,
              closeCaveMeters:50,
            },
            rotateMode:{
              available:false,
              firstLineMeters:90,
              secondLineMeters:80,
            },
            bigMonster:{
              available:false,
                  monsterShowsMeters:90,
                  monsterBackMeters:70,
            }
      },
    
    },
    level38:{
      meters:217,
      createMetaMeters:6,
      floorSpeed: -5.925,
      dimness:false,
      music:"music_3",
    skins:{
      map:"city",
      floorSkins:"grid",
      obstacleSkin:"obstacle_11",
   
    },
    
    spacing:{
      floorToFloorSpacing:100,
      additionalObstacleSpacing:13,
      doubleHeightObstacleSpacing:25,
      floorToFlyingFloorSpacing:145,
      squareObstacleSpacing:5,
    },
    piramidModeChance:80,
    
      chances:{
        upperFloorChance:50,
        lowerFloorChance:50,
    
        floorObstacleChance:0,
            flyingFloorChance:40,
            shortFloorWithBallChance:25,
            spikeMouthChance:25,
            tunnelChance:195,
            magicRodChance:40,
        
        spikeBlockObstacleChance:80,
        sawObstacleChance:20,
    
    spikeBarAboveChance:40, 
    spikeShowChance:57,

    oneSpikeChance:75,
    doubleSpikeChance:30,
    obstacleBlockChance:10,
    higherObstacleChance:31,
    
    randomWallSpecialEffectChance:50,
    additionalBottomShurikenChance:30,
    additionalBottomWallSawChance:30,
    bottomTextureChance:65,
    
      },
     tints:{
      backgroundTint:levelsTints.level38,
    
        obstacleTint:"0x00FF24", 
        blockObstacleTint:"0x00B824",
    
        spikeBarTint:levelsTints.level38,
        blackBarTint:levelsTints.level38,
    
        shortBallFloorTint:levelsTints.level38,  
    
        floorTint:"0x00FFFF", 
        floorAuraUpTint:levelsTints.level38,
        floorAuraTint:levelsTints.level38,
    
        lavaTint:"0x7C26FF", 
        sawTint:levelsTints.level38,
       
        shortFlyingFloorTint:levelsTints.level38, 
    
        shurikenWallTint:levelsTints.level38, 
        wallSawTint:levelsTints.level38, 
        bottomSpikeTint:levelsTints.level38,
    
        gearTint:levelsTints.level38,    
        
        laserTint:levelsTints.level38,
        pulseTint:levelsTints.level38,
      },
    
      specialEvents:{
        triangleBackMode:{
          available:false,
          createMeters:50,
        },
          thunder:{
            available:false,
            firstStrikeMeters:70,
            secondStrikeMeters:30,
          },
            flipHands:{
              available:false,
              firstHandMeters:70,
              secondHandMeters:30,
            },
            cave:{
              available:false,
              createCaveMeters:80,
              closeCaveMeters:50,
            },
            rotateMode:{
              available:false,
              firstLineMeters:90,
              secondLineMeters:80,
            },
            bigMonster:{
              available:true,
                  monsterShowsMeters:130,
                  monsterBackMeters:100,
            }
      },
    
    },
    level39:{
      meters:218,
      createMetaMeters:6,
      floorSpeed: -5.95,
      dimness:false,
      music:"music_4",
      correctLine:"0xffffff",
    skins:{
      map:"pinkMountain",
      floorSkins:"castle",
      obstacleSkin:"obstacle_11",
      
    },
    
    spacing:{
      floorToFloorSpacing:100,
      additionalObstacleSpacing:10,
      doubleHeightObstacleSpacing:25,
      floorToFlyingFloorSpacing:145,
      squareObstacleSpacing:5,
    },
    piramidModeChance:80,
    chances:{
      upperFloorChance:50,
      lowerFloorChance:50,
  
      floorObstacleChance:100,
          flyingFloorChance:15,
          shortFloorWithBallChance:5,
          spikeMouthChance:5,
          tunnelChance:195,
          magicRodChance:5,
      
      spikeBlockObstacleChance:100,
      sawObstacleChance:0,
  
  spikeBarAboveChance:35, 
  spikeShowChance:0,

  oneSpikeChance:75,
  doubleSpikeChance:30,
  obstacleBlockChance:10,
  higherObstacleChance:25,
  
  randomWallSpecialEffectChance:50,
  additionalBottomShurikenChance:30,
  additionalBottomWallSawChance:30,
  bottomTextureChance:65,
  
    },
     tints:{
      backgroundTint:levelsTints.level39,
    
        obstacleTint:levelsTints.level39, 
        blockObstacleTint:levelsTints.level39,
    
        spikeBarTint:levelsTints.level39,
        blackBarTint:levelsTints.level39,
    
        shortBallFloorTint:levelsTints.level39,  
    
        floorTint:levelsTints.level39, 
        floorAuraUpTint:"0x0000FF",
        floorAuraTint:"0x23007B",
    
        lavaTint:levelsTints.level39, 
        sawTint:levelsTints.level39,
       
        shortFlyingFloorTint:levelsTints.level39, 
    
        shurikenWallTint:levelsTints.level39, 
        wallSawTint:levelsTints.level39, 
        bottomSpikeTint:levelsTints.level39,
    
        gearTint:levelsTints.level39,    
        
        laserTint:levelsTints.level39,
        pulseTint:levelsTints.level39,
      },
    
      specialEvents:{
        triangleBackMode:{
          available:false,
          createMeters:50,
        },
          thunder:{
            available:false,
            firstStrikeMeters:70,
            secondStrikeMeters:30,
          },
            flipHands:{
              available:false,
              firstHandMeters:70,
              secondHandMeters:30,
            },
            cave:{
              available:false,
              createCaveMeters:80,
              closeCaveMeters:50,
            },
            rotateMode:{
              available:false,
              firstLineMeters:90,
              secondLineMeters:80,
            },
            bigMonster:{
              available:false,
                  monsterShowsMeters:90,
                  monsterBackMeters:70,
            }
      },
    
    },
    level40:{
      meters:219,
      createMetaMeters:6,
      floorSpeed: -5.975,
      dimness:false,
      music:"music_5",
      correctLine:"0xffffff",
    skins:{
      map:"green",
      floorSkins:"triangles",
      obstacleSkin:"obstacle_11",
   
    },
    
    spacing:{
      floorToFloorSpacing:120,
      additionalObstacleSpacing:8,
      doubleHeightObstacleSpacing:28,
      floorToFlyingFloorSpacing:145,
      squareObstacleSpacing:10,
    },
    piramidModeChance:80,
    
      chances:{
        upperFloorChance:50,
        lowerFloorChance:50,
    
        floorObstacleChance:35,
            flyingFloorChance:30,
            shortFloorWithBallChance:25,
            spikeMouthChance:20,
            tunnelChance:15,
            magicRodChance:30,
        
        spikeBlockObstacleChance:80,
        sawObstacleChance:20,
    
    spikeBarAboveChance:40, 
    spikeShowChance:57,

    oneSpikeChance:75,
    doubleSpikeChance:30,
    obstacleBlockChance:10,
    higherObstacleChance:32,
    
    randomWallSpecialEffectChance:70,
    additionalBottomShurikenChance:30,
    additionalBottomWallSawChance:30,
    bottomTextureChance:75,
    
      },
     tints:{
      backgroundTint:levelsTints.level40,
    
        obstacleTint:levelsTints.level40, 
        blockObstacleTint:levelsTints.level40,
    
        spikeBarTint:levelsTints.level40,
        blackBarTint:levelsTints.level40,
    
        shortBallFloorTint:levelsTints.level40,  
    
        floorTint:levelsTints.level40, 
        floorAuraUpTint:levelsTints.level40,
        floorAuraTint:levelsTints.level40,
    
        lavaTint:levelsTints.level40, 
        sawTint:"0xFFD800",
       
        shortFlyingFloorTint:levelsTints.level40, 
    
        shurikenWallTint:levelsTints.level40, 
        wallSawTint:levelsTints.level40, 
        bottomSpikeTint:levelsTints.level40,
    
        gearTint:levelsTints.level40,    
        
        laserTint:"0x007D00",
        pulseTint:"0x007D00",
      },
    
      specialEvents:{
        triangleBackMode:{
          available:false,
          createMeters:50,
        },
          thunder:{
            available:false,
            firstStrikeMeters:70,
            secondStrikeMeters:30,
          },
            flipHands:{
              available:false,
              firstHandMeters:70,
              secondHandMeters:30,
            },
            cave:{
              available:true,
              createCaveMeters:190,
              closeCaveMeters:100,
            },
            rotateMode:{
              available:true,
              firstLineMeters:80,
              secondLineMeters:50,
            },
            bigMonster:{
              available:false,
                  monsterShowsMeters:80,
                  monsterBackMeters:50,
            }
      },
    
    },
    level41:{
      meters:220,
      createMetaMeters:6,
      floorSpeed: -6,
      dimness:false,
      music:"music_6",
    skins:{
      map:"circles",
        floorSkins:"grid",
      obstacleSkin:"obstacle_11",

    },
    
    spacing:{
      floorToFloorSpacing:110,
      additionalObstacleSpacing:8,
      doubleHeightObstacleSpacing:30,
      floorToFlyingFloorSpacing:145,
      squareObstacleSpacing:10,
    },
    piramidModeChance:80,
    
      chances:{
        upperFloorChance:50,
        lowerFloorChance:50,
    
        floorObstacleChance:50,
            flyingFloorChance:100,
            shortFloorWithBallChance:0,
            spikeMouthChance:0,
            tunnelChance:0,
            magicRodChance:0,
        
        spikeBlockObstacleChance:100,
        sawObstacleChance:0,
    
    spikeBarAboveChance:40, 
    spikeShowChance:70,

    oneSpikeChance:75,
    doubleSpikeChance:35,
    obstacleBlockChance:10,
    higherObstacleChance:50,
    
    randomWallSpecialEffectChance:70,
    additionalBottomShurikenChance:60,
    additionalBottomWallSawChance:60,
    bottomTextureChance:75,
    
      },
      tints:{
        backgroundTint:levelsTints.level1,
        lavaTint:"0x007FFF", 
        pulseTint:"0x0000FF",

          obstacleTint:"0x0000FF", 
          blockObstacleTint:"0x0000FF",
          sawTint:"0xffffff",

          spikeBarTint:levelsTints.level1,
          blackBarTint:levelsTints.level1,

          shortBallFloorTint:levelsTints.level1,  

          floorTint:"0xffffff", 
          floorAuraUpTint:"0xffffff",
          floorAuraTint:"0xffff00",
          shortFlyingFloorTint:"0x00C4FF", 
 
          shurikenWallTint:levelsTints.level1, 
          wallSawTint:levelsTints.level1, 
          bottomSpikeTint:levelsTints.level1,

          gearTint:levelsTints.level1,    
          
          laserTint:"0xC600FF",
         
        },
    
      specialEvents:{
        triangleBackMode:{
          available:false,
          createMeters:50,
        },
          thunder:{
            available:false,
            firstStrikeMeters:70,
            secondStrikeMeters:30,
          },
            flipHands:{
              available:false,
              firstHandMeters:70,
              secondHandMeters:30,
            },
            cave:{
              available:false,
              createCaveMeters:80,
              closeCaveMeters:50,
            },
            rotateMode:{
              available:false,
              firstLineMeters:90,
              secondLineMeters:80,
            },
            bigMonster:{
              available:false,
                  monsterShowsMeters:90,
                  monsterBackMeters:70,
            }
      },
    
    },
    level42:{
      meters:221,
      createMetaMeters:6,
      floorSpeed: -6.025,
      dimness:false,
      music:"music_7",
      correctLine:"0xffffff",
    skins:{
      map:"sunny",
      floorSkins:"triangles",
      obstacleSkin:"obstacle_11",

    },
    
    spacing:{
      floorToFloorSpacing:110,
      additionalObstacleSpacing:8,
      doubleHeightObstacleSpacing:25,
      floorToFlyingFloorSpacing:145,
      squareObstacleSpacing:5,
    },
    piramidModeChance:50,
    
      chances:{
        upperFloorChance:100,
        lowerFloorChance:50,
    
        floorObstacleChance:35,
            flyingFloorChance:30,
            shortFloorWithBallChance:25,
            spikeMouthChance:25,
            tunnelChance:35,
            magicRodChance:30,
        
        spikeBlockObstacleChance:80,
        sawObstacleChance:20,
    
    spikeBarAboveChance:40, 
    spikeShowChance:60,

    oneSpikeChance:75,
    doubleSpikeChance:35,
    obstacleBlockChance:10,
    higherObstacleChance:35,
    
    randomWallSpecialEffectChance:70,
    additionalBottomShurikenChance:70,
    additionalBottomWallSawChance:70,
    bottomTextureChance:75,
    
      },
      tints:{
        backgroundTint:"0xffffff",
        floorAuraUpTint:"0x000000",
        floorAuraTint:"0x000000",
    
        lavaTint:"0xffffff", 
    shortFlyingFloorTint:"0xE8CD00", 
     laserTint:"0xC600FF",
       

          obstacleTint:levelsTints.level2, 
          blockObstacleTint:levelsTints.level2,

          spikeBarTint:levelsTints.level2,
          blackBarTint:levelsTints.level2,

          shortBallFloorTint:levelsTints.level2,  

         

        
          sawTint:levelsTints.level2,
         
         

          shurikenWallTint:levelsTints.level2, 
          wallSawTint:levelsTints.level2, 
          bottomSpikeTint:levelsTints.level2,

          gearTint:levelsTints.level2,    
          
          laserTint:"0xffffff",
          pulseTint:"0xFF9F00",
        },
    
      specialEvents:{
        triangleBackMode:{
          available:false,
          createMeters:50,
        },
          thunder:{
            available:false,
            firstStrikeMeters:70,
            secondStrikeMeters:30,
          },
            flipHands:{
              available:true,
              firstHandMeters:150,
              secondHandMeters:50,
            },
            cave:{
              available:false,
              createCaveMeters:80,
              closeCaveMeters:50,
            },
            rotateMode:{
              available:false,
              firstLineMeters:90,
              secondLineMeters:80,
            },
            bigMonster:{
              available:false,
                  monsterShowsMeters:90,
                  monsterBackMeters:70,
            }
      },
    
    },
    level43:{
      meters:222,
      createMetaMeters:6,
      floorSpeed: -6.05,
      dimness:false,
      music:"music_1",
    skins:{
      map:"city",
      floorSkins:"black",
      obstacleSkin:"obstacle_11",
   
    },
    
    spacing:{
      floorToFloorSpacing:110,
      additionalObstacleSpacing:8,
      doubleHeightObstacleSpacing:25,
      floorToFlyingFloorSpacing:145,
      squareObstacleSpacing:5,
    },
    piramidModeChance:50,
    
      chances:{
        upperFloorChance:100,
        lowerFloorChance:50,
    
        floorObstacleChance:35,
            flyingFloorChance:20,
            shortFloorWithBallChance:30,
            spikeMouthChance:20,
            tunnelChance:45,
            magicRodChance:30,
        
        spikeBlockObstacleChance:80,
        sawObstacleChance:20,
    
    spikeBarAboveChance:45, 
    spikeShowChance:60,

    oneSpikeChance:75,
    doubleSpikeChance:35,
    obstacleBlockChance:20,
    higherObstacleChance:35,
    
    randomWallSpecialEffectChance:70,
    additionalBottomShurikenChance:70,
    additionalBottomWallSawChance:70,
    bottomTextureChance:75,
    
      },
      tints:{
        backgroundTint:"0xffc0cb",
      
        floorTint:"0x000600",
        floorAuraUpTint:"0x0000FF",
        floorAuraTint:"0x0000FF",
      
        lavaTint:"0x007DFF", 
      shortFlyingFloorTint:"0x0094FF", 
      laserTint:"0xffffff",
        pulseTint:"0x004EFF",
        
      
          obstacleTint:levelsTints.level3, 
          blockObstacleTint:levelsTints.level3,
      
          spikeBarTint:levelsTints.level3,
          blackBarTint:levelsTints.level3,
      
          shortBallFloorTint:levelsTints.level3,  
      
          floorTint:levelsTints.level3, 
      
          sawTint:levelsTints.level3,
         
          
      
          shurikenWallTint:levelsTints.level3, 
          wallSawTint:levelsTints.level3, 
          bottomSpikeTint:levelsTints.level3,
      
          gearTint:levelsTints.level3,    
          
         
          pulseTint:levelsTints.level3,
        },
    
      specialEvents:{
        triangleBackMode:{
          available:false,
          createMeters:50,
        },
          thunder:{
            available:true,
            firstStrikeMeters:200,
            secondStrikeMeters:130,
          },
            flipHands:{
              available:false,
              firstHandMeters:70,
              secondHandMeters:30,
            },
            cave:{
              available:false,
              createCaveMeters:80,
              closeCaveMeters:50,
            },
            rotateMode:{
              available:false,
              firstLineMeters:90,
              secondLineMeters:80,
            },
            bigMonster:{
              available:false,
                  monsterShowsMeters:90,
                  monsterBackMeters:70,
            }
      },
    
    },
    level44:{
      meters:70,
      createMetaMeters:5,
      floorSpeed: -6.075,
      dimness:false,
      music:"music_2",
      correctLine:"0xffffff",
      skins:{
        map:"green",
        floorSkins:"basic",
        obstacleSkin:"obstacle_11",
      
      },
    
    spacing:{
      floorToFloorSpacing:110,
      additionalObstacleSpacing:8,
      doubleHeightObstacleSpacing:25,
      floorToFlyingFloorSpacing:145,
      squareObstacleSpacing:5,
    },
    piramidModeChance:50,
    
      chances:{
        upperFloorChance:0,
        lowerFloorChance:100,
    
        floorObstacleChance:100,
            flyingFloorChance:0,
            shortFloorWithBallChance:100,
            spikeMouthChance:0,
            tunnelChance:0,
            magicRodChance:0,
        
        spikeBlockObstacleChance:100,
        sawObstacleChance:0,
    
    spikeBarAboveChance:40, 
    spikeShowChance:0,

    oneSpikeChance:35,
    doubleSpikeChance:35,
    obstacleBlockChance:10,
    higherObstacleChance:30,
    
    randomWallSpecialEffectChance:75,
    additionalBottomShurikenChance:75,
    additionalBottomWallSawChance:70,
    bottomTextureChance:75,
    
      },
      tints:{
        backgroundTint:"0xffffff",
      
          obstacleTint:levelsTints.level4, 
          blockObstacleTint:levelsTints.level4,
      
          spikeBarTint:levelsTints.level4,
          blackBarTint:levelsTints.level4,
      
          shortBallFloorTint:levelsTints.level4,  
      
          floorTint:"0xffffff", 
          floorAuraUpTint:"0x9000FF",
          floorAuraTint:"0xFF00FF",
      
          lavaTint:"0x2EF200", 
          sawTint:levelsTints.level4,
         
          shortFlyingFloorTint:"0x2EF200", 
      
          shurikenWallTint:levelsTints.level4, 
          wallSawTint:levelsTints.level4, 
          bottomSpikeTint:levelsTints.level4,
      
          gearTint:levelsTints.level4,    
          
          laserTint:"0xC600FF",
          pulseTint:"0x00A900",
        },
      
    
      specialEvents:{
        triangleBackMode:{
          available:false,
          createMeters:50,
        },
          thunder:{
            available:false,
            firstStrikeMeters:70,
            secondStrikeMeters:30,
          },
            flipHands:{
              available:false,
              firstHandMeters:70,
              secondHandMeters:30,
            },
            cave:{
              available:false,
              createCaveMeters:80,
              closeCaveMeters:50,
            },
            rotateMode:{
              available:false,
              firstLineMeters:90,
              secondLineMeters:80,
            },
            bigMonster:{
              available:false,
                  monsterShowsMeters:220,
                  monsterBackMeters:120,
            }
      },
    
    },
    level45:{
      meters:224,
      createMetaMeters:5,
      floorSpeed: -6.1,
      dimness:false,
      music:"music_3",
      correctLine:"0xffffff",
      skins:{
        map:"cake",
        floorSkins:"cake",
        obstacleSkin:"obstacle_11",
      
      },
    
    spacing:{
      floorToFloorSpacing:110,
      additionalObstacleSpacing:8,
      doubleHeightObstacleSpacing:25,
      floorToFlyingFloorSpacing:145,
      squareObstacleSpacing:5,
    },
    piramidModeChance:50,
    
      chances:{
        upperFloorChance:50,
        lowerFloorChance:50,
    
        floorObstacleChance:35,
            flyingFloorChance:20,
            shortFloorWithBallChance:25,
            spikeMouthChance:15,
            tunnelChance:25,
            magicRodChance:25,
        
        spikeBlockObstacleChance:80,
        sawObstacleChance:20,
    
    spikeBarAboveChance:40, 
    spikeShowChance:63,

    oneSpikeChance:35,
    doubleSpikeChance:35,
    obstacleBlockChance:10,
    higherObstacleChance:35,
    
    randomWallSpecialEffectChance:75,
    additionalBottomShurikenChance:75,
    additionalBottomWallSawChance:70,
    bottomTextureChance:75,
    
      },
      tints:{
        backgroundTint:levelsTints.level5,
      
          obstacleTint:"0xC600FF", 
          blockObstacleTint:"0xC600FF",
      
          spikeBarTint:"0xC600FF",
          blackBarTint:levelsTints.level5,
      
          shortBallFloorTint:levelsTints.level5,  
      
          floorTint:"0xffffff", 
          floorAuraUpTint:"0xFF00FF",
          floorAuraTint:"0xFF00FF",
      
          lavaTint:"0xFFFF44", 
          sawTint:levelsTints.level5,
         
          shortFlyingFloorTint:"0xFFFF44", 
      
          shurikenWallTint:levelsTints.level5, 
          wallSawTint:levelsTints.level5, 
          bottomSpikeTint:levelsTints.level5,
      
          gearTint:levelsTints.level5,    
          
          laserTint:"0xC600FF",
          pulseTint:"0xFFFF00",
        },
      specialEvents:{
        triangleBackMode:{
          available:false,
          createMeters:50,
        },
          thunder:{
            available:false,
            firstStrikeMeters:70,
            secondStrikeMeters:30,
          },
            flipHands:{
              available:false,
              firstHandMeters:70,
              secondHandMeters:30,
            },
            cave:{
              available:false,
              createCaveMeters:80,
              closeCaveMeters:50,
            },
            rotateMode:{
              available:false,
              firstLineMeters:90,
              secondLineMeters:80,
            },
            bigMonster:{
              available:true,
                  monsterShowsMeters:220,
                  monsterBackMeters:160,
            }
      },
    
    },
    level46:{
      meters:225,
      createMetaMeters:5,
      floorSpeed: -6.125,
      dimness:false,
      music:"music_4",
      skins:{
        map:"polygon",
        floorSkins:"basic",
        obstacleSkin:"obstacle_11",
      },
    
    spacing:{
      floorToFloorSpacing:110,
      additionalObstacleSpacing:8,
      doubleHeightObstacleSpacing:25,
      floorToFlyingFloorSpacing:145,
      squareObstacleSpacing:5,
    },
    piramidModeChance:0,
    
      chances:{
        upperFloorChance:50,
        lowerFloorChance:50,
    
        floorObstacleChance:100,
            flyingFloorChance:0,
            shortFloorWithBallChance:0,
            spikeMouthChance:100,
            tunnelChance:0,
            magicRodChance:0,
        
        spikeBlockObstacleChance:100,
        sawObstacleChance:0,
    
    spikeBarAboveChance:40, 
    spikeShowChance:0,

    oneSpikeChance:0,
    doubleSpikeChance:100,
    obstacleBlockChance:10,
    higherObstacleChance:35,
    
    randomWallSpecialEffectChance:65,
    additionalBottomShurikenChance:65,
    additionalBottomWallSawChance:60,
    bottomTextureChance:60,
    
      },
      tints:{
        backgroundTint:levelsTints.level6,
      
          obstacleTint:levelsTints.level6, 
          blockObstacleTint:levelsTints.level6,
      
          spikeBarTint:levelsTints.level6,
          blackBarTint:levelsTints.level6,
      
          shortBallFloorTint:levelsTints.level6,  
      
          floorTint:levelsTints.level6, 
          floorAuraUpTint:"0xFF0000",
          floorAuraTint:"0xFFFFFF",
      
          lavaTint:"0x00FBFF", 
          sawTint:levelsTints.level6,
         
          shortFlyingFloorTint:"0x00FBFF", 
      
          shurikenWallTint:levelsTints.level6, 
          wallSawTint:levelsTints.level6, 
          bottomSpikeTint:levelsTints.level6,
      
          gearTint:levelsTints.level6,    
          
          laserTint:"0xffffff",
          pulseTint:"0x00BE7C",
        },
      
    
      specialEvents:{
        triangleBackMode:{
          available:false,
          createMeters:50,
        },
          thunder:{
            available:false,
            firstStrikeMeters:70,
            secondStrikeMeters:30,
          },
            flipHands:{
              available:false,
              firstHandMeters:70,
              secondHandMeters:30,
            },
            cave:{
              available:false,
              createCaveMeters:80,
              closeCaveMeters:50,
            },
            rotateMode:{
              available:false,
              firstLineMeters:90,
              secondLineMeters:80,
            },
            bigMonster:{
              available:false,
                  monsterShowsMeters:90,
                  monsterBackMeters:70,
            }
      },
    
    },
    level47:{
      meters:226,
      createMetaMeters:5,
      floorSpeed: -6.15,
      dimness:false,
      music:"music_5",
      correctLine:"0xffffff",
      skins:{
        map:"pinkMountain",
        floorSkins:"grid",
        obstacleSkin:"obstacle_11",
   
      },
    spacing:{
      floorToFloorSpacing:110,
      additionalObstacleSpacing:5,
      doubleHeightObstacleSpacing:25,
      floorToFlyingFloorSpacing:145,
      squareObstacleSpacing:5,
    },
    piramidModeChance:50,
    
      chances:{
        upperFloorChance:50,
        lowerFloorChance:50,
    
        floorObstacleChance:100,
            flyingFloorChance:20,
            shortFloorWithBallChance:0,
            spikeMouthChance:0,
            tunnelChance:0,
            magicRodChance:100,
        
        spikeBlockObstacleChance:100,
        sawObstacleChance:0,
    
    spikeBarAboveChance:45, 
    spikeShowChance:63,

    oneSpikeChance:35,
    doubleSpikeChance:30,
    obstacleBlockChance:10,
    higherObstacleChance:35,
    
    randomWallSpecialEffectChance:65,
    additionalBottomShurikenChance:65,
    additionalBottomWallSawChance:60,
    bottomTextureChance:60,
    
      },
      tints:{
        backgroundTint:"0xffffff",
      
          obstacleTint:levelsTints.level7, 
          blockObstacleTint:levelsTints.level7,
      
          spikeBarTint:levelsTints.level7,
          blackBarTint:levelsTints.level7,
      
          shortBallFloorTint:levelsTints.level7,  
      
          floorTint:"0xFF7E03", 
          floorAuraUpTint:"0x0000E3",
          floorAuraTint:"0x780087",
      
          lavaTint:"0xFF7933", 
          sawTint:levelsTints.level7,
         
          shortFlyingFloorTint:"0xFF7933", 
      
          shurikenWallTint:levelsTints.level7, 
          wallSawTint:levelsTints.level7, 
          bottomSpikeTint:levelsTints.level7,
      
          gearTint:levelsTints.level7,    
          
          laserTint:"0xC600FF",
          pulseTint:"0xFF0000",
        },
    
      specialEvents:{
        triangleBackMode:{
          available:false,
          createMeters:50,
        },
          thunder:{
            available:false,
            firstStrikeMeters:70,
            secondStrikeMeters:30,
          },
            flipHands:{
              available:false,
              firstHandMeters:70,
              secondHandMeters:30,
            },
            cave:{
              available:false,
              createCaveMeters:80,
              closeCaveMeters:50,
            },
            rotateMode:{
              available:true,
              firstLineMeters:110,
              secondLineMeters:95,
            },
            bigMonster:{
              available:false,
                  monsterShowsMeters:90,
                  monsterBackMeters:70,
            }
      },
    
    },
    level48:{
      meters:227,
      createMetaMeters:5,
      floorSpeed: -6.175,
      dimness:false,
      music:"music_6",
      skins:{
        map:"cave",
        floorSkins:"triangles",
        obstacleSkin:"obstacle_11",
       
      },
    
    spacing:{
      floorToFloorSpacing:110,
      additionalObstacleSpacing:5,
      doubleHeightObstacleSpacing:25,
      floorToFlyingFloorSpacing:145,
      squareObstacleSpacing:5,
    },
    piramidModeChance:50,
    
      chances:{
        upperFloorChance:50,
        lowerFloorChance:50,
    
        floorObstacleChance:35,
            flyingFloorChance:20,
            shortFloorWithBallChance:45,
            spikeMouthChance:15,
            tunnelChance:45,
            magicRodChance:20,
        
        spikeBlockObstacleChance:70,
        sawObstacleChance:20,
    
    spikeBarAboveChance:35, 
    spikeShowChance:55,

    oneSpikeChance:45,
    doubleSpikeChance:30,
    obstacleBlockChance:10,
    higherObstacleChance:30,
    
    randomWallSpecialEffectChance:65,
    additionalBottomShurikenChance:65,
    additionalBottomWallSawChance:60,
    bottomTextureChance:70,
    
      },
      tints:{
        backgroundTint:"0xffffff",
      
          obstacleTint:levelsTints.level8, 
          blockObstacleTint:levelsTints.level8,
      
          spikeBarTint:levelsTints.level8,
          blackBarTint:levelsTints.level8,
      
          shortBallFloorTint:levelsTints.level8,  
      
          floorTint:"0x000600", 
          floorAuraUpTint:"0xFEEE15",
          floorAuraTint:"0xFEEE15",
      
          lavaTint:"0xFFFF00", 
          sawTint:"0xFEEE15",
         
          shortFlyingFloorTint:"0xFFFF00", 
      
          shurikenWallTint:levelsTints.level8, 
          wallSawTint:levelsTints.level8, 
          bottomSpikeTint:levelsTints.level8,
      
          gearTint:levelsTints.level8,    
          
          laserTint:"0xC600FF",
          pulseTint:"0x6F0000",
        },
      specialEvents:{
        triangleBackMode:{
          available:true,
          createMeters:180,
        },
          thunder:{
            available:true,
            firstStrikeMeters:190,
            secondStrikeMeters:140,
          },
            flipHands:{
              available:false,
              firstHandMeters:70,
              secondHandMeters:30,
            },
            cave:{
              available:false,
              createCaveMeters:80,
              closeCaveMeters:50,
            },
            rotateMode:{
              available:false,
              firstLineMeters:90,
              secondLineMeters:80,
            },
            bigMonster:{
              available:false,
                  monsterShowsMeters:90,
                  monsterBackMeters:70,
            }
      },
    
    },
    level49:{
      meters:228,
      createMetaMeters:5,
      floorSpeed: -6.2,
      dimness:false,
      music:"music_7",
      skins:{
        map:"tiles",
        floorSkins:"cake",
        obstacleSkin:"obstacle_11",
    
      },
    
    spacing:{
      floorToFloorSpacing:110,
      additionalObstacleSpacing:5,
      doubleHeightObstacleSpacing:25,
      floorToFlyingFloorSpacing:145,
      squareObstacleSpacing:5,
    },
    piramidModeChance:50,
    
      chances:{
        upperFloorChance:50,
        lowerFloorChance:50,
    
        floorObstacleChance:35,
            flyingFloorChance:10,
            shortFloorWithBallChance:30,
            spikeMouthChance:20,
            tunnelChance:30,
            magicRodChance:30,
        
        spikeBlockObstacleChance:70,
        sawObstacleChance:20,
    
    spikeBarAboveChance:45, 
    spikeShowChance:66,

    oneSpikeChance:35,
    doubleSpikeChance:30,
    obstacleBlockChance:10,
    higherObstacleChance:40,
    
    randomWallSpecialEffectChance:65,
    additionalBottomShurikenChance:65,
    additionalBottomWallSawChance:60,
    bottomTextureChance:70,
    
      },
      tints:{
        backgroundTint:"0xFFA0B8",
      
          obstacleTint:levelsTints.level9, 
          blockObstacleTint:levelsTints.level9,
      
          spikeBarTint:levelsTints.level9,
          blackBarTint:levelsTints.level9,
      
          shortBallFloorTint:levelsTints.level9,  
      
          floorTint:"0xffffff", 
          floorAuraUpTint:"0x000000",
          floorAuraTint:"0x000000",
      
          lavaTint:"0xFF1FFF", 
          sawTint:levelsTints.level9,
         
          shortFlyingFloorTint:"0xFF1FFF", 
      
          shurikenWallTint:levelsTints.level9, 
          wallSawTint:levelsTints.level9, 
          bottomSpikeTint:levelsTints.level9,
      
          gearTint:levelsTints.level9,    
          
          laserTint:"0xC600FF",
          pulseTint:"0xFF8F5E",
        },
      
      specialEvents:{
        triangleBackMode:{
          available:false,
          createMeters:50,
        },
          thunder:{
            available:false,
            firstStrikeMeters:70,
            secondStrikeMeters:30,
          },
            flipHands:{
              available:false,
              firstHandMeters:70,
              secondHandMeters:30,
            },
            cave:{
              available:false,
              createCaveMeters:80,
              closeCaveMeters:50,
            },
            rotateMode:{
              available:true,
              firstLineMeters:150,
              secondLineMeters:80,
            },
            bigMonster:{
              available:false,
                  monsterShowsMeters:90,
                  monsterBackMeters:70,
            }
      },
    
    },
    level50:{
      meters:229,
      createMetaMeters:5,
      floorSpeed: -6.225,
      dimness:false,
    music:"music_1",
    skins:{
      map:"bricks",
      floorSkins:"castle",
      obstacleSkin:"obstacle_11",
      
    },
    
    spacing:{
      floorToFloorSpacing:110,
      additionalObstacleSpacing:5,
      doubleHeightObstacleSpacing:25,
      floorToFlyingFloorSpacing:145,
      squareObstacleSpacing:5,
    },
    piramidModeChance:50,
    
      chances:{
        upperFloorChance:50,
        lowerFloorChance:50,
    
        floorObstacleChance:25,
            flyingFloorChance:30,
            shortFloorWithBallChance:25,
            spikeMouthChance:15,
            tunnelChance:45,
            magicRodChance:25,
        
        spikeBlockObstacleChance:70,
        sawObstacleChance:30,
    
    spikeBarAboveChance:45, 
    spikeShowChance:66,

    oneSpikeChance:35,
    doubleSpikeChance:35,
    obstacleBlockChance:10,
    higherObstacleChance:40,
    
    randomWallSpecialEffectChance:65,
    additionalBottomShurikenChance:65,
    additionalBottomWallSawChance:60,
    bottomTextureChance:70,
    
      },
      tints:{
        backgroundTint:levelsTints.level10,
      
          obstacleTint:levelsTints.level10, 
          blockObstacleTint:levelsTints.level10,
      
          spikeBarTint:levelsTints.level10,
          blackBarTint:levelsTints.level10,
      
          shortBallFloorTint:levelsTints.level10,  
      
          floorTint:"0xffc0cb", 
          floorAuraUpTint:"0x00B800",
          floorAuraTint:"0xb632d7",
      
          lavaTint:"0x4EB252", 
          sawTint:levelsTints.level10,
         
          shortFlyingFloorTint:"0x4D426D", 
      
          shurikenWallTint:levelsTints.level10, 
          wallSawTint:levelsTints.level10, 
          bottomSpikeTint:levelsTints.level10,
      
          gearTint:levelsTints.level10,    
          
          laserTint:"0xC600FF",
          pulseTint:"0xBFB6BE",
        },
    
      specialEvents:{
        triangleBackMode:{
          available:false,
          createMeters:50,
        },
          thunder:{
            available:false,
            firstStrikeMeters:70,
            secondStrikeMeters:30,
          },
            flipHands:{
              available:true,
              firstHandMeters:200,
              secondHandMeters:120,
            },
            cave:{
              available:true,
              createCaveMeters:180,
              closeCaveMeters:100,
            },
            rotateMode:{
              available:false,
              firstLineMeters:90,
              secondLineMeters:80,
            },
            bigMonster:{
              available:false,
                  monsterShowsMeters:90,
                  monsterBackMeters:70,
            }
      },
    
    },
    level51:{
      meters:230,
      createMetaMeters:5,
      floorSpeed: -6.25,
      dimness:false,
      music:"music_2",
      correctLine:"0xffffff",
      skins:{
        map:"mountain",
        floorSkins:"basic",
        obstacleSkin:"obstacle_11",
    
      },
    
    spacing:{
      floorToFloorSpacing:110,
      additionalObstacleSpacing:0,
      doubleHeightObstacleSpacing:21.5,
      floorToFlyingFloorSpacing:145,
      squareObstacleSpacing:5,
    },
    piramidModeChance:50,
    
      chances:{
        upperFloorChance:50,
        lowerFloorChance:50,
    
        floorObstacleChance:20,
            flyingFloorChance:50,
            shortFloorWithBallChance:35,
            spikeMouthChance:25,
            tunnelChance:35,
            magicRodChance:35,
        
        spikeBlockObstacleChance:80,
        sawObstacleChance:20,
    
    spikeBarAboveChance:45, 
    spikeShowChance:66,

    oneSpikeChance:35,
    doubleSpikeChance:35,
    obstacleBlockChance:10,
    higherObstacleChance:40,
    
    randomWallSpecialEffectChance:65,
    additionalBottomShurikenChance:100,
    additionalBottomWallSawChance:100,
    bottomTextureChance:70,
    
      },
      tints:{
        backgroundTint:"0xffffff",
      
          obstacleTint:levelsTints.level11, 
          blockObstacleTint:levelsTints.level11,
      
          spikeBarTint:levelsTints.level11,
          blackBarTint:levelsTints.level11,
      
          shortBallFloorTint:levelsTints.level11,  
      
          floorTint:levelsTints.level11, 
          floorAuraUpTint:"0xfdff00",
          floorAuraTint:"0xb632d7",
      
          lavaTint:"0xFFC76D", 
          sawTint:levelsTints.level11,
         
          shortFlyingFloorTint:"0xFFC76D", 
      
          shurikenWallTint:levelsTints.level11, 
          wallSawTint:levelsTints.level11, 
          bottomSpikeTint:levelsTints.level11,
      
          gearTint:levelsTints.level11,    
          
          laserTint:"0xC600FF",
          pulseTint:"0xFF8900",
        },
    
      specialEvents:{
        triangleBackMode:{
          available:true,
          createMeters:130,
        },
          thunder:{
            available:false,
            firstStrikeMeters:70,
            secondStrikeMeters:30,
          },
            flipHands:{
              available:false,
              firstHandMeters:70,
              secondHandMeters:30,
            },
            cave:{
              available:false,
              createCaveMeters:80,
              closeCaveMeters:50,
            },
            rotateMode:{
              available:false,
              firstLineMeters:90,
              secondLineMeters:80,
            },
            bigMonster:{
              available:false,
                  monsterShowsMeters:90,
                  monsterBackMeters:70,
            }
      },
    
    },
    level52:{
      meters:231,
      createMetaMeters:5,
      floorSpeed: -6.275,
      dimness:true,
      music:"music_3",
      skins:{
        map:"graveyard",
        floorSkins:"black",
        obstacleSkin:"obstacle_11",
       
      },
    
    spacing:{
      floorToFloorSpacing:110,
      additionalObstacleSpacing:0,
      doubleHeightObstacleSpacing:22,
      floorToFlyingFloorSpacing:145,
      squareObstacleSpacing:5,
    },
    piramidModeChance:50,
    
      chances:{
        upperFloorChance:50,
        lowerFloorChance:50,
    
        floorObstacleChance:20,
            flyingFloorChance:30,
            shortFloorWithBallChance:35,
            spikeMouthChance:35,
            tunnelChance:35,
            magicRodChance:35,
        
        spikeBlockObstacleChance:90,
        sawObstacleChance:10,
    
    spikeBarAboveChance:45, 
    spikeShowChance:66,

    oneSpikeChance:0,
    doubleSpikeChance:100,
    obstacleBlockChance:0,
    higherObstacleChance:0,
    
    randomWallSpecialEffectChance:65,
    additionalBottomShurikenChance:100,
    additionalBottomWallSawChance:100,
    bottomTextureChance:70,
    
      },
      tints:{
        backgroundTint:"0xffffff",
      
          obstacleTint:levelsTints.level12, 
          blockObstacleTint:levelsTints.level12,
      
          spikeBarTint:levelsTints.level12,
          blackBarTint:levelsTints.level12,
      
          shortBallFloorTint:"0x000000",  
      
          floorTint:"0x000600", 
          floorAuraUpTint:levelsTints.level12,
          floorAuraTint:levelsTints.level12,
      
          lavaTint:"0xFF2510", 
          sawTint:"0xFF0500",
         
          shortFlyingFloorTint:"0x1B2242", 
      
          shurikenWallTint:levelsTints.level12, 
          wallSawTint:levelsTints.level12, 
          bottomSpikeTint:"0xFF0500",
      
          gearTint:levelsTints.level12,    
          
          laserTint:"0xC600FF",
          pulseTint:levelsTints.level12,
        },
    
      specialEvents:{
        triangleBackMode:{
          available:false,
          createMeters:50,
        },
          thunder:{
            available:false,
            firstStrikeMeters:70,
            secondStrikeMeters:30,
          },
            flipHands:{
              available:false,
              firstHandMeters:70,
              secondHandMeters:30,
            },
            cave:{
              available:false,
              createCaveMeters:80,
              closeCaveMeters:50,
            },
            rotateMode:{
              available:false,
              firstLineMeters:90,
              secondLineMeters:80,
            },
            bigMonster:{
              available:false,
                  monsterShowsMeters:90,
                  monsterBackMeters:70,
            }
      },
    
    },
    level53:{
      meters:232,
      createMetaMeters:5,
      floorSpeed: -6.3,
      dimness:false,
      music:"music_4",
      correctLine:"0xffffff",
      skins:{
        map:"snow",
        floorSkins:"black",
        obstacleSkin:"obstacle_11",
       
      },
    
    spacing:{
      floorToFloorSpacing:110,
      additionalObstacleSpacing:0,
      doubleHeightObstacleSpacing:22,
      floorToFlyingFloorSpacing:145,
      squareObstacleSpacing:0,
    },
    piramidModeChance:50,
    
      chances:{
        upperFloorChance:65,
        lowerFloorChance:50,
    
        floorObstacleChance:20,
            flyingFloorChance:50,
            shortFloorWithBallChance:35,
            spikeMouthChance:20,
            tunnelChance:35,
            magicRodChance:35,
        
        spikeBlockObstacleChance:90,
        sawObstacleChance:15,
    
    spikeBarAboveChance:55, 
    spikeShowChance:69,

    oneSpikeChance:35,
    doubleSpikeChance:20,
    obstacleBlockChance:10,
    higherObstacleChance:40,
    
    randomWallSpecialEffectChance:75,
    additionalBottomShurikenChance:100,
    additionalBottomWallSawChance:100,
    bottomTextureChance:60,
    
      },
      tints:{
        backgroundTint:"0xffffff",
      
          obstacleTint:levelsTints.level13, 
          blockObstacleTint:levelsTints.level13, 
      
          spikeBarTint:levelsTints.level13, 
          blackBarTint:levelsTints.level13, 
      
          shortBallFloorTint:levelsTints.level13,  
      
          floorTint:"0xFFFFFF", 
          floorAuraUpTint:"0x4B00FF",
          floorAuraTint:"0x4B00FF",
      
          lavaTint:levelsTints.level13, 
          sawTint:levelsTints.level13,
         
          shortFlyingFloorTint:levelsTints.level13, 
      
          shurikenWallTint:levelsTints.level13, 
          wallSawTint:levelsTints.level13, 
          bottomSpikeTint:levelsTints.level13,
      
          gearTint:levelsTints.level13,    
          
          laserTint:"0xC600FF",
          pulseTint:"0x009CFF",
        },
      
    
      specialEvents:{
        triangleBackMode:{
          available:true,
          createMeters:180,
        },
          thunder:{
            available:false,
            firstStrikeMeters:70,
            secondStrikeMeters:30,
          },
            flipHands:{
              available:false,
              firstHandMeters:70,
              secondHandMeters:30,
            },
            cave:{
              available:false,
              createCaveMeters:80,
              closeCaveMeters:50,
            },
            rotateMode:{
              available:false,
              firstLineMeters:90,
              secondLineMeters:80,
            },
            bigMonster:{
              available:true,
                  monsterShowsMeters:190,
                  monsterBackMeters:150,
            }
      },
     
    },
    level54:{
      meters:233,
      createMetaMeters:5,
      floorSpeed: -6.35,
      dimness:false,
      music:"music_5",
      skins:{
        map:"simple",
        floorSkins:"triangles",
        obstacleSkin:"obstacle_11",
     
      },
    
    spacing:{
      floorToFloorSpacing:110,
      additionalObstacleSpacing:0,
      doubleHeightObstacleSpacing:22,
      floorToFlyingFloorSpacing:145,
      squareObstacleSpacing:0,
    },
    piramidModeChance:50,
    
      chances:{
        upperFloorChance:50,
        lowerFloorChance:50,
    
        floorObstacleChance:20,
            flyingFloorChance:50,
            shortFloorWithBallChance:35,
            spikeMouthChance:20,
            tunnelChance:35,
            magicRodChance:35,
        
        spikeBlockObstacleChance:90,
        sawObstacleChance:20,
    
    spikeBarAboveChance:45, 
    spikeShowChance:69,

    oneSpikeChance:35,
    doubleSpikeChance:20,
    obstacleBlockChance:10,
    higherObstacleChance:40,
    
    randomWallSpecialEffectChance:75,
    additionalBottomShurikenChance:100,
    additionalBottomWallSawChance:100,
    bottomTextureChance:60,
    
      },
      tints:{
        backgroundTint:"0xffffff",
      
          obstacleTint:"0x060094", 
          blockObstacleTint:"0x060094",
      
          spikeBarTint:"0x060094",
          blackBarTint:"0x060094",
      
          shortBallFloorTint:levelsTints.level14,  
      
          floorTint:"0xFFFF00", 
          floorAuraUpTint:"0x80D5FF",
          floorAuraTint:"0xffffff",
      
          lavaTint:"0xffffff", 
          sawTint:"0x0000FF",
         
          shortFlyingFloorTint:"0xffffff", 
      
          shurikenWallTint:levelsTints.level14, 
          wallSawTint:levelsTints.level14, 
          bottomSpikeTint:levelsTints.level14,
      
          gearTint:levelsTints.level14,    
          
          laserTint:"0xC600FF",
          pulseTint:"0x060094",
        },
    
      specialEvents:{
        triangleBackMode:{
          available:false,
          createMeters:50,
        },
          thunder:{
            available:false,
            firstStrikeMeters:70,
            secondStrikeMeters:30,
          },
            flipHands:{
              available:true,
              firstHandMeters:100,
              secondHandMeters:20,
            },
            cave:{
              available:false,
              createCaveMeters:80,
              closeCaveMeters:50,
            },
            rotateMode:{
              available:false,
              firstLineMeters:90,
              secondLineMeters:80,
            },
            bigMonster:{
              available:false,
                  monsterShowsMeters:90,
                  monsterBackMeters:70,
            }
      },
    
    },
    level55:{
      meters:234,
      createMetaMeters:5,
      floorSpeed: -6.375,
      dimness:false,
      music:"music_6",
      correctLine:"0xAE00FF",
      skins:{
        map:"pinkForest",
        floorSkins:"triangles",
        obstacleSkin:"obstacle_11",
  
      },
      
    
    spacing:{
      floorToFloorSpacing:110,
      additionalObstacleSpacing:0,
      doubleHeightObstacleSpacing:22,
      floorToFlyingFloorSpacing:145,
      squareObstacleSpacing:0,
    },
    piramidModeChance:50,
    
      chances:{
        upperFloorChance:50,
        lowerFloorChance:50,
    
        floorObstacleChance:20,
            flyingFloorChance:50,
            shortFloorWithBallChance:35,
            spikeMouthChance:35,
            tunnelChance:35,
            magicRodChance:35,
        
        spikeBlockObstacleChance:90,
        sawObstacleChance:20,
    
    spikeBarAboveChance:45, 
    spikeShowChance:69,

    oneSpikeChance:35,
    doubleSpikeChance:20,
    obstacleBlockChance:10,
    higherObstacleChance:40,
    
    randomWallSpecialEffectChance:75,
    additionalBottomShurikenChance:100,
    additionalBottomWallSawChance:100,
    bottomTextureChance:70,
    
      },
      tints:{
        backgroundTint:levelsTints.level15,
      
          obstacleTint:"0xFF63FB", 
          blockObstacleTint:"0xFF63FB",
      
          spikeBarTint:levelsTints.level15,
          blackBarTint:levelsTints.level15,
      
          shortBallFloorTint:levelsTints.level15,  
      
          floorTint:"0xFF00FF", 
          floorAuraUpTint:"0xFF0000",
          floorAuraTint:"0xFF0000",
      
          lavaTint:"0xFF03FF", 
          sawTint:levelsTints.level15,
         
          shortFlyingFloorTint:"0xFF034A", 
      
          shurikenWallTint:levelsTints.level15, 
          wallSawTint:levelsTints.level15, 
          bottomSpikeTint:levelsTints.level15,
      
          gearTint:levelsTints.level15,    
          
          laserTint:"0xC600FF",
          pulseTint:"0xFF2831",
        },
    
      specialEvents:{
        triangleBackMode:{
          available:false,
          createMeters:50,
        },
          thunder:{
            available:false,
            firstStrikeMeters:70,
            secondStrikeMeters:30,
          },
            flipHands:{
              available:false,
              firstHandMeters:70,
              secondHandMeters:30,
            },
            cave:{
              available:false,
              createCaveMeters:80,
              closeCaveMeters:50,
            },
            rotateMode:{
              available:false,
              firstLineMeters:90,
              secondLineMeters:80,
            },
            bigMonster:{
              available:false,
                  monsterShowsMeters:90,
                  monsterBackMeters:70,
            }
      },
    
    },
    level56:{
      meters:235,
      createMetaMeters:5,
      floorSpeed: -6.4,
      dimness:false,
      music:"music_7",
      skins:{
        map:"city",
        floorSkins:"castle",
        obstacleSkin:"obstacle_11",
   
      },
    
    spacing:{
      floorToFloorSpacing:110,
      additionalObstacleSpacing:0,
      doubleHeightObstacleSpacing:23,
      floorToFlyingFloorSpacing:145,
      squareObstacleSpacing:0,
    },
    piramidModeChance:50,
    
      chances:{
        upperFloorChance:50,
        lowerFloorChance:50,
    
        floorObstacleChance:30,
            flyingFloorChance:50,
            shortFloorWithBallChance:35,
            spikeMouthChance:25,
            tunnelChance:35,
            magicRodChance:35,
        
        spikeBlockObstacleChance:90,
        sawObstacleChance:20,
    
    spikeBarAboveChance:45, 
    spikeShowChance:72,

    oneSpikeChance:45,
    doubleSpikeChance:20,
    obstacleBlockChance:10,
    higherObstacleChance:40,
    
    randomWallSpecialEffectChance:75,
    additionalBottomShurikenChance:100,
    additionalBottomWallSawChance:100,
    bottomTextureChance:78,
    
      },
      tints:{
        backgroundTint:levelsTints.level16,
      
          obstacleTint:levelsTints.level16, 
          blockObstacleTint:levelsTints.level16,
      
          spikeBarTint:levelsTints.level16,
          blackBarTint:levelsTints.level16,
      
          shortBallFloorTint:levelsTints.level16,  
      
          floorTint:levelsTints.level16, 
          floorAuraUpTint:"0xFFFF00",
          floorAuraTint:"0x89FF00",
      
          lavaTint:"0xffffff", 
          sawTint:levelsTints.level16,
         
          shortFlyingFloorTint:"0x0071FF", 
      
          shurikenWallTint:levelsTints.level16, 
          wallSawTint:levelsTints.level16, 
          bottomSpikeTint:levelsTints.level16,
      
          gearTint:levelsTints.level16,    
          
          laserTint:"0xC600FF",
          pulseTint:"0x00FEFF",
        },
      
      specialEvents:{
        triangleBackMode:{
          available:false,
          createMeters:50,
        },
          thunder:{
            available:false,
            firstStrikeMeters:70,
            secondStrikeMeters:30,
          },
            flipHands:{
              available:false,
              firstHandMeters:70,
              secondHandMeters:30,
            },
            cave:{
              available:true,
              createCaveMeters:100,
              closeCaveMeters:30,
            },
            rotateMode:{
              available:true,
              firstLineMeters:200,
              secondLineMeters:150,
            },
            bigMonster:{
              available:false,
                  monsterShowsMeters:90,
                  monsterBackMeters:70,
            }
      },
    
    },
    level57:{
      meters:236,
      createMetaMeters:5,
      floorSpeed: -6.425,
      dimness:false,
      music:"music_1",
      correctLine:"0xffffff",
      skins:{
        map:"sunny",
        floorSkins:"triangles",
        obstacleSkin:"obstacle_11",
       
      },
    
    spacing:{
      floorToFloorSpacing:110,
      additionalObstacleSpacing:0,
      doubleHeightObstacleSpacing:22,
      floorToFlyingFloorSpacing:145,
      squareObstacleSpacing:5,
    },
    piramidModeChance:50,
    
      chances:{
        upperFloorChance:50,
        lowerFloorChance:50,
    
        floorObstacleChance:20,
            flyingFloorChance:30,
            shortFloorWithBallChance:35,
            spikeMouthChance:25,
            tunnelChance:35,
            magicRodChance:35,
        
        spikeBlockObstacleChance:90,
        sawObstacleChance:20,
    
    spikeBarAboveChance:45, 
    spikeShowChance:72,

    oneSpikeChance:35,
    doubleSpikeChance:20,
    obstacleBlockChance:0,
    higherObstacleChance:40,
    
    randomWallSpecialEffectChance:75,
    additionalBottomShurikenChance:100,
    additionalBottomWallSawChance:100,
    bottomTextureChance:70,
    
      },
      tints:{
        backgroundTint:levelsTints.level17,
      
          obstacleTint:levelsTints.level17, 
          blockObstacleTint:levelsTints.level17,
      
          spikeBarTint:levelsTints.level17,
          blackBarTint:levelsTints.level17,
      
          shortBallFloorTint:levelsTints.level17,  
      
          floorTint:"0xFF7999", 
          floorAuraUpTint:"0xFF7999",
          floorAuraTint:"0xFF7999",
      
          lavaTint:"0xffffff", 
          sawTint:levelsTints.level17,
         
          shortFlyingFloorTint:"0xBF034A", 
      
          shurikenWallTint:levelsTints.level17, 
          wallSawTint:levelsTints.level17, 
          bottomSpikeTint:levelsTints.level17,
      
          gearTint:levelsTints.level17,    
          
          laserTint:"0xC600FF",
          pulseTint:"0xD43D86",
        },
      specialEvents:{
        triangleBackMode:{
          available:false,
          createMeters:50,
        },
          thunder:{
            available:true,
            firstStrikeMeters:150,
            secondStrikeMeters:80,
          },
            flipHands:{
              available:false,
              firstHandMeters:70,
              secondHandMeters:30,
            },
            cave:{
              available:false,
              createCaveMeters:80,
              closeCaveMeters:50,
            },
            rotateMode:{
              available:false,
              firstLineMeters:90,
              secondLineMeters:80,
            },
            bigMonster:{
              available:false,
                  monsterShowsMeters:90,
                  monsterBackMeters:70,
            }
      },
    
    },
    level58:{
      meters:237,
      createMetaMeters:4,
      floorSpeed: -6.45,
      dimness:false,
      music:"music_2",
      correctLine:"0xffffff",
      skins:{
        map:"green",
        floorSkins:"black",
        obstacleSkin:"obstacle_11",
       
      },
    
    spacing:{
      floorToFloorSpacing:110,
      additionalObstacleSpacing:0,
      doubleHeightObstacleSpacing:22,
      floorToFlyingFloorSpacing:145,
      squareObstacleSpacing:5,
    },
    piramidModeChance:50,
    
      chances:{
        upperFloorChance:50,
        lowerFloorChance:50,
    
        floorObstacleChance:20,
            flyingFloorChance:35,
            shortFloorWithBallChance:35,
            spikeMouthChance:35,
            tunnelChance:35,
            magicRodChance:35,
        
        spikeBlockObstacleChance:90,
        sawObstacleChance:20,
    
    spikeBarAboveChance:45, 
    spikeShowChance:72,

    oneSpikeChance:55,
    doubleSpikeChance:25,
    obstacleBlockChance:10,
    higherObstacleChance:40,
    
    randomWallSpecialEffectChance:75,
    additionalBottomShurikenChance:100,
    additionalBottomWallSawChance:100,
    bottomTextureChance:70,
    
      },
      tints:{
        backgroundTint:levelsTints.level18, 
      
          obstacleTint:"0x77C876", 
          blockObstacleTint:"0xC77C876",
      
          spikeBarTint:"0x77C876",
          blackBarTint:"0x77C876",
      
          shortBallFloorTint:levelsTints.level18,  
      
          floorTint:levelsTints.level18, 
          floorAuraUpTint:"0x002400",
          floorAuraTint:"0x002400",
      
          lavaTint:levelsTints.level18, 
          sawTint:levelsTints.level18,
         
          shortFlyingFloorTint:"0x00FFAC", 
      
          shurikenWallTint:levelsTints.level18, 
          wallSawTint:levelsTints.level18, 
          bottomSpikeTint:levelsTints.level18,
      
          gearTint:levelsTints.level18,    
          
          laserTint:"0xC600FF",
          pulseTint:"0x00FF00",
        },
    
      specialEvents:{
        triangleBackMode:{
          available:true,
          createMeters:110,
        },
          thunder:{
            available:false,
            firstStrikeMeters:70,
            secondStrikeMeters:30,
          },
            flipHands:{
              available:false,
              firstHandMeters:220,
              secondHandMeters:50,
            },
            cave:{
              available:true,
              createCaveMeters:130,
              closeCaveMeters:70,
            },
            rotateMode:{
              available:false,
              firstLineMeters:90,
              secondLineMeters:80,
            },
            bigMonster:{
              available:false,
                  monsterShowsMeters:90,
                  monsterBackMeters:70,
            }
      },
    
    },
    level59:{
      meters:238,
      createMetaMeters:4,
      floorSpeed: -6.475,
      dimness:false,
      music:"music_3",
      correctLine:"0xffffff",
      skins:{
        map:"cake",
        floorSkins:"grid",
        obstacleSkin:"obstacle_11",
        
      },
    spacing:{
      floorToFloorSpacing:110,
      additionalObstacleSpacing:0,
      doubleHeightObstacleSpacing:22.5,
      floorToFlyingFloorSpacing:155,
      squareObstacleSpacing:0,
    },
    piramidModeChance:50,
    
      chances:{
        upperFloorChance:50,
        lowerFloorChance:50,
    
        floorObstacleChance:20,
            flyingFloorChance:35,
            shortFloorWithBallChance:35,
            spikeMouthChance:25,
            tunnelChance:35,
            magicRodChance:35,
        
        spikeBlockObstacleChance:90,
        sawObstacleChance:20,
    
    spikeBarAboveChance:50, 
    spikeShowChance:72,

    oneSpikeChance:55,
    doubleSpikeChance:30,
    obstacleBlockChance:10,
    higherObstacleChance:40,
    
    randomWallSpecialEffectChance:75,
    additionalBottomShurikenChance:100,
    additionalBottomWallSawChance:100,
    bottomTextureChance:80,
    
      },
      tints:{
        backgroundTint:levelsTints.level19, 
      
          obstacleTint:"0xFF9400", 
          blockObstacleTint:"0xFF9400", 
      
          spikeBarTint:levelsTints.level19, 
          blackBarTint:levelsTints.level19, 
      
          shortBallFloorTint:levelsTints.level19,  
      
          floorTint:levelsTints.level19, 
          floorAuraUpTint:"0xFF0000", 
          floorAuraTint:levelsTints.level19, 
      
          lavaTint:levelsTints.level19, 
          sawTint:levelsTints.level19,
         
          shortFlyingFloorTint:levelsTints.level19, 
      
          shurikenWallTint:levelsTints.level19, 
          wallSawTint:levelsTints.level19, 
          bottomSpikeTint:levelsTints.level19,
      
          gearTint:levelsTints.level19,    
          
          laserTint:levelsTints.level19, 
          pulseTint:"0x11FF00", 
        },
      
    
      specialEvents:{
        triangleBackMode:{
          available:false,
          createMeters:50,
        },
          thunder:{
            available:false,
            firstStrikeMeters:70,
            secondStrikeMeters:30,
          },
            flipHands:{
              available:false,
              firstHandMeters:70,
              secondHandMeters:30,
            },
            cave:{
              available:false,
              createCaveMeters:80,
              closeCaveMeters:50,
            },
            rotateMode:{
              available:false,
              firstLineMeters:90,
              secondLineMeters:80,
            },
            bigMonster:{
              available:true,
                  monsterShowsMeters:230,
                  monsterBackMeters:160,
            }
      },
    
    },
      level60:{
      meters:239,
      createMetaMeters:4,
      floorSpeed: -6.5,
      dimness:false,
      music:"music_4",
      skins:{
        map:"polygon",
        floorSkins:"cake",
        obstacleSkin:"obstacle_11",
        
      },
    
    spacing:{
      floorToFloorSpacing:120,
      additionalObstacleSpacing:10,
      doubleHeightObstacleSpacing:30,
      floorToFlyingFloorSpacing:145,
      squareObstacleSpacing:10,
    },
    piramidModeChance:50,
    
      chances:{
        upperFloorChance:50,
        lowerFloorChance:50,
    
        floorObstacleChance:0,
            flyingFloorChance:50,
            shortFloorWithBallChance:35,
            spikeMouthChance:35,
            tunnelChance:35,
            magicRodChance:35,
        
        spikeBlockObstacleChance:100,
        sawObstacleChance:0,
    
    spikeBarAboveChance:100, 
    spikeShowChance:72,

    oneSpikeChance:20,
    doubleSpikeChance:0,
    obstacleBlockChance:100,
    higherObstacleChance:100,
    
    randomWallSpecialEffectChance:75,
    additionalBottomShurikenChance:100,
    additionalBottomWallSawChance:100,
    bottomTextureChance:70,
    
      },
      tints:{
        backgroundTint:"0x861A00",  
      
          obstacleTint:levelsTints.level20,  
          blockObstacleTint:levelsTints.level20,  
      
          spikeBarTint:levelsTints.level20,  
          blackBarTint:levelsTints.level20,  
      
          shortBallFloorTint:levelsTints.level20,  
      
          floorTint:"0x54C256",   
          floorAuraUpTint:"0xEFA317",  
          floorAuraTint:"0xEFA317"  ,
      
          lavaTint:levelsTints.level20, 
          sawTint:levelsTints.level20,
         
          shortFlyingFloorTint:levelsTints.level20,  
      
          shurikenWallTint:levelsTints.level20, 
          wallSawTint:levelsTints.level20, 
          bottomSpikeTint:levelsTints.level20,
      
          gearTint:levelsTints.level20,    
          
          laserTint:levelsTints.level20,  
          pulseTint:"0x1FBEA3",  
        },
    
      specialEvents:{
        triangleBackMode:{
          available:false,
          createMeters:50,
        },
          thunder:{
            available:false,
            firstStrikeMeters:70,
            secondStrikeMeters:30,
          },
            flipHands:{
              available:false,
              firstHandMeters:70,
              secondHandMeters:30,
            },
            cave:{
              available:false,
              createCaveMeters:80,
              closeCaveMeters:50,
            },
            rotateMode:{
              available:false,
              firstLineMeters:90,
              secondLineMeters:80,
            },
            bigMonster:{
              available:false,
                  monsterShowsMeters:90,
                  monsterBackMeters:70,
            }
      },
    
    },
    level61:{
      meters:240,
      createMetaMeters:4,
      floorSpeed: -6.525,
      dimness:false,
      music:"music_5",
      skins:{
        map:"graveyard",
        floorSkins:"castle",
        obstacleSkin:"obstacle_11",
  
      },
    
    spacing:{
      floorToFloorSpacing:120,
      additionalObstacleSpacing:0,
      doubleHeightObstacleSpacing:22,
      floorToFlyingFloorSpacing:145,
      squareObstacleSpacing:0,
    },
    piramidModeChance:50,
    
      chances:{
        upperFloorChance:50,
        lowerFloorChance:50,
    
        floorObstacleChance:40,
            flyingFloorChance:20,
            shortFloorWithBallChance:25,
            spikeMouthChance:15,
            tunnelChance:25,
            magicRodChance:25,
        
        spikeBlockObstacleChance:90,
        sawObstacleChance:20,
    
    spikeBarAboveChance:50, 
    spikeShowChance:0,

    oneSpikeChance:55,
    doubleSpikeChance:30,
    obstacleBlockChance:0,
    higherObstacleChance:35,
    
    randomWallSpecialEffectChance:75,
    additionalBottomShurikenChance:100,
    additionalBottomWallSawChance:100,
    bottomTextureChance:80,
    
      },
      tints:{
        backgroundTint:levelsTints.level21, 
      
          obstacleTint:levelsTints.level21, 
          blockObstacleTint:levelsTints.level21, 
      
          spikeBarTint:levelsTints.level21, 
          blackBarTint:levelsTints.level21, 
      
          shortBallFloorTint:levelsTints.level21,  
      
          floorTint:levelsTints.level21,  
          floorAuraUpTint:levelsTints.level21, 
          floorAuraTint:levelsTints.level21, 
      
          lavaTint:levelsTints.level21, 
          sawTint:levelsTints.level21,
         
          shortFlyingFloorTint:"0xffffff", 
      
          shurikenWallTint:levelsTints.level21, 
          wallSawTint:levelsTints.level21, 
          bottomSpikeTint:levelsTints.level21,
      
          gearTint:levelsTints.level21,    
          
          laserTint:levelsTints.level21, 
          pulseTint:levelsTints.level21, 
        },
    
      specialEvents:{
        triangleBackMode:{
          available:true,
          createMeters:240,
        },
          thunder:{
            available:true,
            firstStrikeMeters:230,
            secondStrikeMeters:210,
          },
            flipHands:{
              available:true,
              firstHandMeters:190,
              secondHandMeters:170,
            },
            cave:{
              available:true,
              createCaveMeters:160,
              closeCaveMeters:140,
            },
            rotateMode:{
              available:true,
              firstLineMeters:130,
              secondLineMeters:110,
            },
            bigMonster:{
              available:true,
                  monsterShowsMeters:90,
                  monsterBackMeters:70,
            }
      },
    
    },
    level62:{
      meters:241,
      createMetaMeters:4,
      floorSpeed: -6.55,
      dimness:false,
      music:"music_6",
      correctLine:"0xffffff",
      skins:{
        map:"pinkMountain",
        floorSkins:"cake",
        obstacleSkin:"obstacle_11",
  
      },
    
    spacing:{
      floorToFloorSpacing:120,
      additionalObstacleSpacing:0,
      doubleHeightObstacleSpacing:22,
      floorToFlyingFloorSpacing:145,
      squareObstacleSpacing:0,
    },
    piramidModeChance:100,
    
      chances:{
        upperFloorChance:0,
        lowerFloorChance:100,
    
        floorObstacleChance:30,
            flyingFloorChance:50,
            shortFloorWithBallChance:35,
            spikeMouthChance:25,
            tunnelChance:35,
            magicRodChance:35,
        
        spikeBlockObstacleChance:90,
        sawObstacleChance:20,
    
    spikeBarAboveChance:55, 
    spikeShowChance:75,

    oneSpikeChance:35,
    doubleSpikeChance:30,
    obstacleBlockChance:10,
    higherObstacleChance:45,
    
    randomWallSpecialEffectChance:75,
    additionalBottomShurikenChance:100,
    additionalBottomWallSawChance:100,
    bottomTextureChance:80,
    
      },
      tints:{
        backgroundTint:levelsTints.level22, 
      
          obstacleTint:"0x00F639", 
          blockObstacleTint:"0x00F639", 
      
          spikeBarTint:levelsTints.level22, 
          blackBarTint:levelsTints.level22, 
      
          shortBallFloorTint:levelsTints.level22,  
      
          floorTint:levelsTints.level22, 
          floorAuraUpTint:"0x004800", 
          floorAuraTint:"0xBB00FF", 
      
          lavaTint:"0xffffff",
          sawTint:levelsTints.level22,
         
          shortFlyingFloorTint:"0xA9D41B", 
      
          shurikenWallTint:levelsTints.level22, 
          wallSawTint:levelsTints.level22, 
          bottomSpikeTint:levelsTints.level22,
      
          gearTint:levelsTints.level22,    
          
          laserTint:"0xE60000", 
          pulseTint:"0x00FFBB", 
        },
      
    
      specialEvents:{
        triangleBackMode:{
          available:false,
          createMeters:50,
        },
          thunder:{
            available:false,
            firstStrikeMeters:70,
            secondStrikeMeters:30,
          },
            flipHands:{
              available:false,
              firstHandMeters:70,
              secondHandMeters:30,
            },
            cave:{
              available:false,
              createCaveMeters:80,
              closeCaveMeters:50,
            },
            rotateMode:{
              available:false,
              firstLineMeters:90,
              secondLineMeters:80,
            },
            bigMonster:{
              available:false,
                  monsterShowsMeters:90,
                  monsterBackMeters:70,
            }
      },
    
    },
    level63:{
      meters:242,
      createMetaMeters:4,
      floorSpeed: -6.575,
      dimness:false,
      music:"music_7",
      skins:{
      
        map:"cave",
        floorSkins:"grid",
        obstacleSkin:"obstacle_11",
       
      },
    spacing:{
      floorToFloorSpacing:120,
      additionalObstacleSpacing:0,
      doubleHeightObstacleSpacing:23,
      floorToFlyingFloorSpacing:145,
      squareObstacleSpacing:0,
    },
    piramidModeChance:50,
    
      chances:{
        upperFloorChance:100,
        lowerFloorChance:0,
    
        floorObstacleChance:35,
            flyingFloorChance:40,
            shortFloorWithBallChance:35,
            spikeMouthChance:20,
            tunnelChance:35,
            magicRodChance:35,
        
        spikeBlockObstacleChance:90,
        sawObstacleChance:20,
    
    spikeBarAboveChance:55, 
    spikeShowChance:75,

    oneSpikeChance:35,
    doubleSpikeChance:25,
    obstacleBlockChance:10,
    higherObstacleChance:45,
    
    randomWallSpecialEffectChance:75,
    additionalBottomShurikenChance:100,
    additionalBottomWallSawChance:100,
    bottomTextureChance:70,
    
      },
      tints:{
        backgroundTint:levelsTints.level23,  
      
          obstacleTint:levelsTints.level23,   
          blockObstacleTint:levelsTints.level23,  
      
          spikeBarTint:levelsTints.level23,  
          blackBarTint:levelsTints.level23,  
      
          shortBallFloorTint:levelsTints.level23,  
      
          floorTint:levelsTints.level23,   
          floorAuraUpTint:levelsTints.level23,  
          floorAuraTint:levelsTints.level23,  
      
          lavaTint:levelsTints.level23, 
          sawTint:levelsTints.level23,
         
          shortFlyingFloorTint:levelsTints.level23,   
      
          shurikenWallTint:levelsTints.level23, 
          wallSawTint:levelsTints.level23, 
          bottomSpikeTint:levelsTints.level23,
      
          gearTint:levelsTints.level23,    
          
          laserTint:"0xFF6E00",  
          pulseTint:levelsTints.level23,  
        },
      specialEvents:{
        triangleBackMode:{
          available:false,
          createMeters:50,
        },
          thunder:{
            available:false,
            firstStrikeMeters:70,
            secondStrikeMeters:30,
          },
            flipHands:{
              available:false,
              firstHandMeters:70,
              secondHandMeters:30,
            },
            cave:{
              available:false,
              createCaveMeters:80,
              closeCaveMeters:50,
            },
            rotateMode:{
              available:false,
              firstLineMeters:90,
              secondLineMeters:80,
            },
            bigMonster:{
              available:false,
                  monsterShowsMeters:90,
                  monsterBackMeters:70,
            }
      },
    
    },
    level64:{
      meters:243,
      createMetaMeters:4,
      floorSpeed: -6.6,
      dimness:false,
      music:"music_1",
      skins:{
      
        map:"tiles",
        floorSkins:"basic",
        obstacleSkin:"obstacle_11",
   
      },
    
    spacing:{
      floorToFloorSpacing:120,
      additionalObstacleSpacing:0,
      doubleHeightObstacleSpacing:25,
      floorToFlyingFloorSpacing:185,
      squareObstacleSpacing:0,
    },
    piramidModeChance:50,
    
      chances:{
        upperFloorChance:50,
        lowerFloorChance:50,
    
        floorObstacleChance:100,
            flyingFloorChance:100,
            shortFloorWithBallChance:0,
            spikeMouthChance:0,
            tunnelChance:0,
            magicRodChance:0,
        
        spikeBlockObstacleChance:90,
        sawObstacleChance:20,
    
    spikeBarAboveChance:55, 
    spikeShowChance:75,

    oneSpikeChance:35,
    doubleSpikeChance:20,
    obstacleBlockChance:10,
    higherObstacleChance:20,
    
    randomWallSpecialEffectChance:85,
    additionalBottomShurikenChance:100,
    additionalBottomWallSawChance:100,
    bottomTextureChance:80,
    
      },
      tints:{
        backgroundTint:levelsTints.level24, 
      
          obstacleTint:levelsTints.level24,  
          blockObstacleTint:levelsTints.level24, 
      
          spikeBarTint:levelsTints.level24, 
          blackBarTint:levelsTints.level24, 
      
          shortBallFloorTint:levelsTints.level24,  
      
          floorTint:levelsTints.level24,  
          floorAuraUpTint:"0xFFFF00", 
          floorAuraTint:"0xFFFF00", 
      
          lavaTint:levelsTints.level24, 
          sawTint:levelsTints.level24,
         
          shortFlyingFloorTint:levelsTints.level24,  
      
          shurikenWallTint:levelsTints.level24, 
          wallSawTint:levelsTints.level24, 
          bottomSpikeTint:levelsTints.level24,
      
          gearTint:levelsTints.level24,    
          
          laserTint:"0x600000", 
          pulseTint:levelsTints.level24, 
        },
      specialEvents:{
        triangleBackMode:{
          available:false,
          createMeters:50,
        },
          thunder:{
            available:false,
            firstStrikeMeters:70,
            secondStrikeMeters:30,
          },
            flipHands:{
              available:false,
              firstHandMeters:70,
              secondHandMeters:30,
            },
            cave:{
              available:false,
              createCaveMeters:80,
              closeCaveMeters:50,
            },
            rotateMode:{
              available:false,
              firstLineMeters:90,
              secondLineMeters:80,
            },
            bigMonster:{
              available:false,
                  monsterShowsMeters:90,
                  monsterBackMeters:70,
            }
      },
    
    },
    level65:{
      meters:244,
      createMetaMeters:4,
      floorSpeed: -6.625,
      dimness:false,
      music:"music_2",
      skins:{
        map:"bricks",
        floorSkins:"cake",
        obstacleSkin:"obstacle_11",
    
      },
    
    spacing:{
      floorToFloorSpacing:120,
      additionalObstacleSpacing:0,
      doubleHeightObstacleSpacing:23,
      floorToFlyingFloorSpacing:145,
      squareObstacleSpacing:0,
    },
    piramidModeChance:50,
    
      chances:{
        upperFloorChance:50,
        lowerFloorChance:50,
    
        floorObstacleChance:35,
            flyingFloorChance:50,
            shortFloorWithBallChance:35,
            spikeMouthChance:20,
            tunnelChance:35,
            magicRodChance:0,
        
        spikeBlockObstacleChance:90,
        sawObstacleChance:20,
    
    spikeBarAboveChance:55, 
    spikeShowChance:75,

    oneSpikeChance:55,
    doubleSpikeChance:30,
    obstacleBlockChance:10,
    higherObstacleChance:45,
    
    randomWallSpecialEffectChance:75,
    additionalBottomShurikenChance:100,
    additionalBottomWallSawChance:100,
    bottomTextureChance:80,
    
      },
      tints:{
        backgroundTint:levelsTints.level25, 
      
          obstacleTint:"0x000000", 
          blockObstacleTint:"0x000000", 
      
          spikeBarTint:levelsTints.level25, 
          blackBarTint:levelsTints.level25, 
      
          shortBallFloorTint:levelsTints.level25,  
      
          floorTint:levelsTints.level25,  
          floorAuraUpTint:"0x000F34", 
          floorAuraTint:levelsTints.level25, 
      
          lavaTint:levelsTints.level25, 
          sawTint:levelsTints.level25,
         
          shortFlyingFloorTint:levelsTints.level25,  
      
          shurikenWallTint:levelsTints.level25, 
          wallSawTint:levelsTints.level25, 
          bottomSpikeTint:levelsTints.level25,
      
          gearTint:levelsTints.level25,    
          
          laserTint:"0x0000FF", 
          pulseTint:"0x000000", 
        },
      specialEvents:{
        triangleBackMode:{
          available:false,
          createMeters:50,
        },
          thunder:{
            available:true,
            firstStrikeMeters:70,
            secondStrikeMeters:50,
          },
            flipHands:{
              available:false,
              firstHandMeters:70,
              secondHandMeters:30,
            },
            cave:{
              available:false,
              createCaveMeters:80,
              closeCaveMeters:50,
            },
            rotateMode:{
              available:false,
              firstLineMeters:90,
              secondLineMeters:80,
            },
            bigMonster:{
              available:false,
                  monsterShowsMeters:90,
                  monsterBackMeters:70,
            }
      },
    
    },
    level66:{
      meters:245,
      createMetaMeters:4,
      floorSpeed: -6.65,
      dimness:false,
      music:"music_3",
      correctLine:"0xffffff",
      skins:{
        map:"mountain",
        floorSkins:"cake",
        obstacleSkin:"obstacle_11",
      
      },
    
    spacing:{
      floorToFloorSpacing:120,
      additionalObstacleSpacing:0,
      doubleHeightObstacleSpacing:23,
      floorToFlyingFloorSpacing:145,
      squareObstacleSpacing:0,
    },
    piramidModeChance:50,
    
      chances:{
        upperFloorChance:50,
        lowerFloorChance:50,
    
        floorObstacleChance:40,
            flyingFloorChance:20,
            shortFloorWithBallChance:35,
            spikeMouthChance:20,
            tunnelChance:45,
            magicRodChance:0,
        
        spikeBlockObstacleChance:90,
        sawObstacleChance:30,
    
    spikeBarAboveChance:60, 
    spikeShowChance:78,

    oneSpikeChance:65,
    doubleSpikeChance:30,
    obstacleBlockChance:10,
    higherObstacleChance:45,
    
    randomWallSpecialEffectChance:75,
    additionalBottomShurikenChance:100,
    additionalBottomWallSawChance:100,
    bottomTextureChance:80,
    
      },
      tints:{
        backgroundTint:levelsTints.level26,
      
          obstacleTint:levelsTints.level26, 
          blockObstacleTint:levelsTints.level26,
      
          spikeBarTint:levelsTints.level26,
          blackBarTint:levelsTints.level26,
      
          shortBallFloorTint:levelsTints.level26,  
      
          floorTint:levelsTints.level26, 
          floorAuraUpTint:levelsTints.level26,
          floorAuraTint:levelsTints.level26,
      
          lavaTint:levelsTints.level26, 
          sawTint:levelsTints.level26,
         
          shortFlyingFloorTint:levelsTints.level26, 
      
          shurikenWallTint:levelsTints.level26, 
          wallSawTint:levelsTints.level26, 
          bottomSpikeTint:levelsTints.level26,
      
          gearTint:levelsTints.level26,    
          
          laserTint:levelsTints.level26,
          pulseTint:levelsTints.level26,
        },
      specialEvents:{
        triangleBackMode:{
          available:true,
          createMeters:50,
        },
          thunder:{
            available:false,
            firstStrikeMeters:70,
            secondStrikeMeters:30,
          },
            flipHands:{
              available:false,
              firstHandMeters:70,
              secondHandMeters:30,
            },
            cave:{
              available:false,
              createCaveMeters:80,
              closeCaveMeters:50,
            },
            rotateMode:{
              available:false,
              firstLineMeters:90,
              secondLineMeters:80,
            },
            bigMonster:{
              available:false,
                  monsterShowsMeters:90,
                  monsterBackMeters:70,
            }
      },
    
    },
    level67:{
      meters:246,
      createMetaMeters:4,
      floorSpeed: -6.675,
      dimness:false,
      music:"music_4",
      correctLine:"0xffffff",
      skins:{
        map:"snow",
        floorSkins:"grid",
        obstacleSkin:"obstacle_11",
      
      },
    
    spacing:{
      floorToFloorSpacing:120,
      additionalObstacleSpacing:0,
      doubleHeightObstacleSpacing:23,
      floorToFlyingFloorSpacing:145,
      squareObstacleSpacing:0,
    },
    piramidModeChance:50,
    
      chances:{
        upperFloorChance:50,
        lowerFloorChance:50,
    
        floorObstacleChance:40,
            flyingFloorChance:15,
            shortFloorWithBallChance:35,
            spikeMouthChance:15,
            tunnelChance:35,
            magicRodChance:0,
        
        spikeBlockObstacleChance:90,
        sawObstacleChance:20,
    
    spikeBarAboveChance:60, 
    spikeShowChance:78,

    oneSpikeChance:45,
    doubleSpikeChance:40,
    obstacleBlockChance:20,
    higherObstacleChance:45,
    
    randomWallSpecialEffectChance:75,
    additionalBottomShurikenChance:100,
    additionalBottomWallSawChance:100,
    bottomTextureChance:89,
    
      },
      tints:{
        backgroundTint:levelsTints.level27, 
      
          obstacleTint:levelsTints.level27,  
          blockObstacleTint:levelsTints.level27, 
      
          spikeBarTint:levelsTints.level27, 
          blackBarTint:levelsTints.level27, 
      
          shortBallFloorTint:levelsTints.level27,  
      
          floorTint:levelsTints.level27,  
          floorAuraUpTint:"0xF8B522", 
          floorAuraTint:"0xF8B522", 
      
          lavaTint:levelsTints.level27, 
          sawTint:levelsTints.level27,
         
          shortFlyingFloorTint:levelsTints.level27, 
      
          shurikenWallTint:levelsTints.level27, 
          wallSawTint:levelsTints.level27, 
          bottomSpikeTint:levelsTints.level27,
      
          gearTint:levelsTints.level27,    
          
          laserTint:levelsTints.level27, 
          pulseTint:levelsTints.level27, 
        },
      
    
      specialEvents:{
        triangleBackMode:{
          available:false,
          createMeters:50,
        },
          thunder:{
            available:false,
            firstStrikeMeters:70,
            secondStrikeMeters:30,
          },
            flipHands:{
              available:false,
              firstHandMeters:70,
              secondHandMeters:30,
            },
            cave:{
              available:false,
              createCaveMeters:80,
              closeCaveMeters:50,
            },
            rotateMode:{
              available:false,
              firstLineMeters:90,
              secondLineMeters:80,
            },
            bigMonster:{
              available:true,
                  monsterShowsMeters:80,
                  monsterBackMeters:50,
            }
      },
    
    },
    level68:{
      meters:247,
      createMetaMeters:4,
      floorSpeed: -6.7,
      dimness:false,
      music:"music_5",
      skins:{
        map:"simple",
        floorSkins:"basic",
        obstacleSkin:"obstacle_11",
   
      },
    
    spacing:{
      floorToFloorSpacing:120,
      additionalObstacleSpacing:0,
      doubleHeightObstacleSpacing:23,
      floorToFlyingFloorSpacing:145,
      squareObstacleSpacing:0,
    },
    piramidModeChance:50,
    
      chances:{
        upperFloorChance:50,
        lowerFloorChance:50,
    
        floorObstacleChance:30,
            flyingFloorChance:50,
            shortFloorWithBallChance:35,
            spikeMouthChance:35,
            tunnelChance:35,
            magicRodChance:0,
        
        spikeBlockObstacleChance:90,
        sawObstacleChance:20,
    
    spikeBarAboveChance:55, 
    spikeShowChance:78,

    oneSpikeChance:45,
    doubleSpikeChance:20,
    obstacleBlockChance:10,
    higherObstacleChance:50,
    
    randomWallSpecialEffectChance:75,
    additionalBottomShurikenChance:100,
    additionalBottomWallSawChance:100,
    bottomTextureChance:80,
    
      },
      tints:{
        backgroundTint:levelsTints.level28,  
      
          obstacleTint:levelsTints.level28,   
          blockObstacleTint:levelsTints.level28,  
      
          spikeBarTint:levelsTints.level28,  
          blackBarTint:levelsTints.level28,  
      
          shortBallFloorTint:levelsTints.level28,  
      
          floorTint:levelsTints.level28,   
          floorAuraUpTint:levelsTints.level28,  
          floorAuraTint:levelsTints.level28,  
      
          lavaTint:levelsTints.level28, 
          sawTint:levelsTints.level28,
         
          shortFlyingFloorTint:levelsTints.level28,   
      
          shurikenWallTint:levelsTints.level28, 
          wallSawTint:levelsTints.level28, 
          bottomSpikeTint:levelsTints.level28,
      
          gearTint:levelsTints.level28,    
          
          laserTint:levelsTints.level28,  
          pulseTint:levelsTints.level28,  
        },
    
      specialEvents:{
        triangleBackMode:{
          available:false,
          createMeters:50,
        },
          thunder:{
            available:false,
            firstStrikeMeters:70,
            secondStrikeMeters:30,
          },
            flipHands:{
              available:false,
              firstHandMeters:70,
              secondHandMeters:30,
            },
            cave:{
              available:false,
              createCaveMeters:80,
              closeCaveMeters:50,
            },
            rotateMode:{
              available:true,
              firstLineMeters:80,
              secondLineMeters:50,
            },
            bigMonster:{
              available:false,
                  monsterShowsMeters:90,
                  monsterBackMeters:70,
            }
      },
    
    },
    level69:{
      meters:248,
      createMetaMeters:4,
      floorSpeed: -6.725,
      dimness:false,
      music:"music_6",
      skins:{
        map:"perspective",
        floorSkins:"triangles",
        obstacleSkin:"obstacle_11",
  
      },
    
    spacing:{
      floorToFloorSpacing:120,
      additionalObstacleSpacing:-1,
      doubleHeightObstacleSpacing:23.5,
      floorToFlyingFloorSpacing:145,
      squareObstacleSpacing:0,
    },
    piramidModeChance:50,
    
      chances:{
        upperFloorChance:50,
        lowerFloorChance:50,
    
        floorObstacleChance:35,
            flyingFloorChance:30,
            shortFloorWithBallChance:35,
            spikeMouthChance:20,
            tunnelChance:35,
            magicRodChance:0,
        
        spikeBlockObstacleChance:90,
        sawObstacleChance:30,
    
    spikeBarAboveChance:60, 
    spikeShowChance:78,

    oneSpikeChance:35,
    doubleSpikeChance:30,
    obstacleBlockChance:20,
    higherObstacleChance:50,
    
    randomWallSpecialEffectChance:85,
    additionalBottomShurikenChance:100,
    additionalBottomWallSawChance:100,
    bottomTextureChance:80,
    
      },
      tints:{
        backgroundTint:levelsTints.level29,
      
          obstacleTint:levelsTints.level29, 
          blockObstacleTint:levelsTints.level29,
      
          spikeBarTint:levelsTints.level29,
          blackBarTint:levelsTints.level29,
      
          shortBallFloorTint:levelsTints.level29,  
      
          floorTint:levelsTints.level29, 
          floorAuraUpTint:"0xF80000",
          floorAuraTint:"0xF80000",
      
          lavaTint:levelsTints.level29, 
          sawTint:levelsTints.level29,
         
          shortFlyingFloorTint:levelsTints.level29, 
      
          shurikenWallTint:levelsTints.level29, 
          wallSawTint:levelsTints.level29, 
          bottomSpikeTint:levelsTints.level29,
      
          gearTint:levelsTints.level29,    
          
          laserTint:"0x0000FF",
          pulseTint:"0x00FF00",
        },
    
      specialEvents:{
        triangleBackMode:{
          available:false,
          createMeters:50,
        },
          thunder:{
            available:false,
            firstStrikeMeters:70,
            secondStrikeMeters:30,
          },
            flipHands:{
              available:false,
              firstHandMeters:70,
              secondHandMeters:30,
            },
            cave:{
              available:true,
              createCaveMeters:80,
              closeCaveMeters:30,
            },
            rotateMode:{
              available:false,
              firstLineMeters:90,
              secondLineMeters:80,
            },
            bigMonster:{
              available:false,
                  monsterShowsMeters:90,
                  monsterBackMeters:70,
            }
      },
    
    },
    level70:{
      meters:249,
      createMetaMeters:4,
      floorSpeed: -6.75,
      dimness:false,
      music:"music_7",
      skins:{
        map:"circles",
        floorSkins:"castle",
        obstacleSkin:"obstacle_11",
  
      },
    
    spacing:{
      floorToFloorSpacing:120,
      additionalObstacleSpacing:-1,
      doubleHeightObstacleSpacing:23.5,
      floorToFlyingFloorSpacing:145,
      squareObstacleSpacing:0,
    },
    piramidModeChance:50,
    
      chances:{
        upperFloorChance:50,
        lowerFloorChance:50,
    
        floorObstacleChance:20,
            flyingFloorChance:50,
            shortFloorWithBallChance:35,
            spikeMouthChance:15,
            tunnelChance:35,
            magicRodChance:0,
        
        spikeBlockObstacleChance:90,
        sawObstacleChance:30,
    
    spikeBarAboveChance:60, 
    spikeShowChance:81,

    oneSpikeChance:45,
    doubleSpikeChance:30,
    obstacleBlockChance:10,
    higherObstacleChance:50,
    
    randomWallSpecialEffectChance:85,
    additionalBottomShurikenChance:100,
    additionalBottomWallSawChance:100,
    bottomTextureChance:80,
    
      },
      tints:{
        backgroundTint:levelsTints.level30, 
      
          obstacleTint:levelsTints.level30, 
          blockObstacleTint:levelsTints.level30, 
      
          spikeBarTint:levelsTints.level30, 
          blackBarTint:levelsTints.level30, 
      
          shortBallFloorTint:levelsTints.level30,  
      
          floorTint:levelsTints.level30, 
          floorAuraUpTint:"0xFF3E0F", 
          floorAuraTint:"0xFF3E0F", 
      
          lavaTint:"0xF33DC3",
          sawTint:levelsTints.level30, 
         
          shortFlyingFloorTint:"0xF33DC3", 
      
          shurikenWallTint:levelsTints.level30, 
          wallSawTint:levelsTints.level30, 
          bottomSpikeTint:levelsTints.level30, 
      
          gearTint:levelsTints.level30,  
          
          laserTint:"0xFF0000", 
          pulseTint:levelsTints.level30, 
        },
    
      specialEvents:{
        triangleBackMode:{
          available:false,
          createMeters:50,
        },
          thunder:{
            available:false,
            firstStrikeMeters:70,
            secondStrikeMeters:30,
          },
            flipHands:{
              available:true,
              firstHandMeters:80,
              secondHandMeters:20,
            },
            cave:{
              available:false,
              createCaveMeters:80,
              closeCaveMeters:50,
            },
            rotateMode:{
              available:false,
              firstLineMeters:90,
              secondLineMeters:80,
            },
            bigMonster:{
              available:false,
                  monsterShowsMeters:90,
                  monsterBackMeters:70,
            }
      },
    
    },
    level71:{
      meters:250,
      createMetaMeters:4,
      floorSpeed: -6.775,
      dimness:false,
      music:"music_1",
      correctLine:"0xffffff",
      skins:{
        map:"sunny",
        floorSkins:"black",
        obstacleSkin:"obstacle_11",
      
      },
      
    
    spacing:{
      floorToFloorSpacing:120,
      additionalObstacleSpacing:-1,
      doubleHeightObstacleSpacing:23.5,
      floorToFlyingFloorSpacing:145,
      squareObstacleSpacing:0,
    },
    piramidModeChance:50,
    
      chances:{
        upperFloorChance:50,
        lowerFloorChance:50,
    
        floorObstacleChance:20,
            flyingFloorChance:50,
            shortFloorWithBallChance:35,
            spikeMouthChance:35,
            tunnelChance:35,
            magicRodChance:0,
        
        spikeBlockObstacleChance:90,
        sawObstacleChance:10,
    
    spikeBarAboveChance:60, 
    spikeShowChance:81,

    oneSpikeChance:55,
    doubleSpikeChance:20,
    obstacleBlockChance:21,
    higherObstacleChance:50,
    
    randomWallSpecialEffectChance:85,
    additionalBottomShurikenChance:100,
    additionalBottomWallSawChance:100,
    bottomTextureChance:80,
    
      },
      tints:{
        backgroundTint:levelsTints.level31,    
      
          obstacleTint:levelsTints.level31,     
          blockObstacleTint:levelsTints.level31,    
      
          spikeBarTint:levelsTints.level31,    
          blackBarTint:levelsTints.level31,    
      
          shortBallFloorTint:levelsTints.level31,  
      
          floorTint:levelsTints.level31,     
          floorAuraUpTint:"0x3CC1D5",    
          floorAuraTint:"0x3CC1D5",    
      
          lavaTint:levelsTints.level31, 
          sawTint:levelsTints.level31,
         
          shortFlyingFloorTint:levelsTints.level31,     
      
          shurikenWallTint:levelsTints.level31, 
          wallSawTint:levelsTints.level31, 
          bottomSpikeTint:levelsTints.level31,
      
          gearTint:levelsTints.level31,    
          
          laserTint:"0xFFFF00",    
          pulseTint:"0xFFFF00",    
        },
    
      specialEvents:{
        triangleBackMode:{
          available:false,
          createMeters:50,
        },
          thunder:{
            available:false,
            firstStrikeMeters:70,
            secondStrikeMeters:30,
          },
            flipHands:{
              available:false,
              firstHandMeters:70,
              secondHandMeters:30,
            },
            cave:{
              available:false,
              createCaveMeters:80,
              closeCaveMeters:50,
            },
            rotateMode:{
              available:true,
              firstLineMeters:150,
              secondLineMeters:100,
            },
            bigMonster:{
              available:true,
                  monsterShowsMeters:220,
                  monsterBackMeters:150,
            }
      },
    
    },
    level72:{
      meters:251,
      createMetaMeters:4,
      floorSpeed: -6.8,
      dimness:false,
      music:"music_2",
      skins:{
        map:"graveyard",
        floorSkins:"basic",
        obstacleSkin:"obstacle_11",
      
      },
    
    spacing:{
      floorToFloorSpacing:120,
      additionalObstacleSpacing:-1,
      doubleHeightObstacleSpacing:23.5,
      floorToFlyingFloorSpacing:145,
      squareObstacleSpacing:0,
    },
    piramidModeChance:50,
    
      chances:{
        upperFloorChance:50,
        lowerFloorChance:50,
    
        floorObstacleChance:30,
            flyingFloorChance:40,
            shortFloorWithBallChance:35,
            spikeMouthChance:25,
            tunnelChance:35,
            magicRodChance:0,
        
        spikeBlockObstacleChance:90,
        sawObstacleChance:20,
    
    spikeBarAboveChance:60, 
    spikeShowChance:81,

    oneSpikeChance:75,
    doubleSpikeChance:30,
    obstacleBlockChance:10,
    higherObstacleChance:55,
    
    randomWallSpecialEffectChance:85,
    additionalBottomShurikenChance:100,
    additionalBottomWallSawChance:100,
    bottomTextureChance:85,
    
      },
      tints:{
        backgroundTint:levelsTints.level32, 
      
          obstacleTint:levelsTints.level32,  
          blockObstacleTint:"0xBEC200", 
      
          spikeBarTint:levelsTints.level32, 
          blackBarTint:levelsTints.level32, 
      
          shortBallFloorTint:levelsTints.level32,  
      
          floorTint:levelsTints.level32,  
          floorAuraUpTint:levelsTints.level32, 
          floorAuraTint:"0x057AFF", 
      
          lavaTint:"0xffffff",
          sawTint:levelsTints.level32,
         
          shortFlyingFloorTint:"0xF33D44", 
      
          shurikenWallTint:"0xF5FF44", 
          wallSawTint:levelsTints.level32, 
          bottomSpikeTint:levelsTints.level32,
      
          gearTint:"0x057AFF",    
          
          laserTint:"0xF33D44", 
          pulseTint:"0xFFFFFF", 
        },
      
    
      specialEvents:{
        triangleBackMode:{
          available:false,
          createMeters:50,
        },
          thunder:{
            available:false,
            firstStrikeMeters:70,
            secondStrikeMeters:30,
          },
            flipHands:{
              available:false,
              firstHandMeters:70,
              secondHandMeters:30,
            },
            cave:{
              available:false,
              createCaveMeters:80,
              closeCaveMeters:50,
            },
            rotateMode:{
              available:false,
              firstLineMeters:90,
              secondLineMeters:80,
            },
            bigMonster:{
              available:false,
                  monsterShowsMeters:90,
                  monsterBackMeters:70,
            }
      },
    
    },
    level73:{
      meters:90,
      createMetaMeters:7,
      floorSpeed: -6.825,
      dimness:false,
      music:"music_3",
      skins:{
        map:"polygon",
        floorSkins:"triangles",
        obstacleSkin:"obstacle_11",
     
      },
    
    spacing:{
      floorToFloorSpacing:120,
      additionalObstacleSpacing:10,
      doubleHeightObstacleSpacing:25,
      floorToFlyingFloorSpacing:145,
      squareObstacleSpacing:5,
    },
    piramidModeChance:50,
    
      chances:{
        upperFloorChance:50,
        lowerFloorChance:50,
    
        floorObstacleChance:20,
            flyingFloorChance:50,
            shortFloorWithBallChance:35,
            spikeMouthChance:35,
            tunnelChance:35,
            magicRodChance:35,
        
        spikeBlockObstacleChance:90,
        sawObstacleChance:20,
    
    spikeBarAboveChance:55, 
    spikeShowChance:81,

    oneSpikeChance:35,
    doubleSpikeChance:20,
    obstacleBlockChance:20,
    higherObstacleChance:20,
    
    randomWallSpecialEffectChance:85,
    additionalBottomShurikenChance:100,
    additionalBottomWallSawChance:100,
    bottomTextureChance:90,
    
      },
      tints:{
        backgroundTint:levelsTints.level33,  
      
          obstacleTint:levelsTints.level33,   
          blockObstacleTint:levelsTints.level33,  
      
          spikeBarTint:levelsTints.level33,  
          blackBarTint:levelsTints.level33,  
      
          shortBallFloorTint:levelsTints.level33,  
      
          floorTint:levelsTints.level33,   
          floorAuraUpTint:"0xffffff",  
          floorAuraTint:levelsTints.level33,  
      
          lavaTint:levelsTints.level33, 
          sawTint:levelsTints.level33,
         
          shortFlyingFloorTint:levelsTints.level33,   
      
          shurikenWallTint:levelsTints.level33, 
          wallSawTint:levelsTints.level33, 
          bottomSpikeTint:levelsTints.level33,
      
          gearTint:levelsTints.level33,    
          
          laserTint:"0x730000",  
          pulseTint:levelsTints.level33,  
        },
      specialEvents:{
        triangleBackMode:{
          available:false,
          createMeters:50,
        },
          thunder:{
            available:false,
            firstStrikeMeters:70,
            secondStrikeMeters:30,
          },
            flipHands:{
              available:false,
              firstHandMeters:70,
              secondHandMeters:30,
            },
            cave:{
              available:false,
              createCaveMeters:80,
              closeCaveMeters:50,
            },
            rotateMode:{
              available:false,
              firstLineMeters:90,
              secondLineMeters:80,
            },
            bigMonster:{
              available:false,
                  monsterShowsMeters:90,
                  monsterBackMeters:70,
            }
      },
    
    },
    level74:{
      meters:90,
      createMetaMeters:7,
      floorSpeed: -6.85,
      dimness:false,
      music:"music_4",
      skins:{
        map:"simple",
        floorSkins:"castle",
        obstacleSkin:"obstacle_11",
      
      },
    spacing:{
      floorToFloorSpacing:120,
      additionalObstacleSpacing:10,
      doubleHeightObstacleSpacing:25,
      floorToFlyingFloorSpacing:145,
      squareObstacleSpacing:5,
    },
    piramidModeChance:50,
    
      chances:{
        upperFloorChance:50,
        lowerFloorChance:50,
    
        floorObstacleChance:20,
            flyingFloorChance:50,
            shortFloorWithBallChance:35,
            spikeMouthChance:35,
            tunnelChance:35,
            magicRodChance:35,
        
        spikeBlockObstacleChance:90,
        sawObstacleChance:20,
    
    spikeBarAboveChance:55, 
    spikeShowChance:84,

    oneSpikeChance:35,
    doubleSpikeChance:20,
    obstacleBlockChance:20,
    higherObstacleChance:20,
    
    randomWallSpecialEffectChance:85,
    additionalBottomShurikenChance:100,
    additionalBottomWallSawChance:100,
    bottomTextureChance:90,
    
      },
      tints:{
        backgroundTint:levelsTints.level34, 
      
          obstacleTint:levelsTints.level34,  
          blockObstacleTint:levelsTints.level34, 
      
          spikeBarTint:levelsTints.level34, 
          blackBarTint:levelsTints.level34, 
      
          shortBallFloorTint:levelsTints.level34,  
      
          floorTint:levelsTints.level34,  
          floorAuraUpTint:levelsTints.level34, 
          floorAuraTint:levelsTints.level34, 
      
          lavaTint:levelsTints.level34, 
          sawTint:levelsTints.level34,
         
          shortFlyingFloorTint:levelsTints.level34,  
      
          shurikenWallTint:levelsTints.level34, 
          wallSawTint:levelsTints.level34, 
          bottomSpikeTint:levelsTints.level34,
      
          gearTint:levelsTints.level34,    
          
          laserTint:"0x0000FF", 
          pulseTint:levelsTints.level34, 
        },
    
      specialEvents:{
        triangleBackMode:{
          available:false,
          createMeters:50,
        },
          thunder:{
            available:false,
            firstStrikeMeters:70,
            secondStrikeMeters:30,
          },
            flipHands:{
              available:false,
              firstHandMeters:70,
              secondHandMeters:30,
            },
            cave:{
              available:false,
              createCaveMeters:80,
              closeCaveMeters:50,
            },
            rotateMode:{
              available:false,
              firstLineMeters:90,
              secondLineMeters:80,
            },
            bigMonster:{
              available:false,
                  monsterShowsMeters:90,
                  monsterBackMeters:70,
            }
      },
    
    },
    level75:{
      meters:90,
      createMetaMeters:7,
      floorSpeed: -6.875,
      dimness:false,
      music:"music_5",
      correctLine:"0xffffff",
      skins:{
        map:"mountain",
        floorSkins:"black",
        obstacleSkin:"obstacle_11",
        
      },
    spacing:{
      floorToFloorSpacing:120,
      additionalObstacleSpacing:10,
      doubleHeightObstacleSpacing:25,
      floorToFlyingFloorSpacing:145,
      squareObstacleSpacing:5,
    },
    piramidModeChance:50,
    
      chances:{
        upperFloorChance:50,
        lowerFloorChance:50,
    
        floorObstacleChance:20,
            flyingFloorChance:50,
            shortFloorWithBallChance:35,
            spikeMouthChance:35,
            tunnelChance:35,
            magicRodChance:35,
        
        spikeBlockObstacleChance:90,
        sawObstacleChance:20,
    
    spikeBarAboveChance:55, 
    spikeShowChance:84,

    oneSpikeChance:35,
    doubleSpikeChance:20,
    obstacleBlockChance:20,
    higherObstacleChance:20,
    
    randomWallSpecialEffectChance:85,
    additionalBottomShurikenChance:100,
    additionalBottomWallSawChance:100,
    bottomTextureChance:90,
    
      },
      tints:{
        backgroundTint:levelsTints.level35,
      
          obstacleTint:"0xEEA500", 
          blockObstacleTint:"0xEEA500",
      
          spikeBarTint:levelsTints.level35,
          blackBarTint:levelsTints.level35,
      
          shortBallFloorTint:levelsTints.level35,  
      
          floorTint:levelsTints.level35, 
          floorAuraUpTint:"0xFF0000",
          floorAuraTint:"0xFF0000",
      
          lavaTint:levelsTints.level35, 
          sawTint:levelsTints.level35,
         
          shortFlyingFloorTint:levelsTints.level35, 
      
          shurikenWallTint:levelsTints.level35, 
          wallSawTint:levelsTints.level35, 
          bottomSpikeTint:levelsTints.level35,
      
          gearTint:levelsTints.level35,    
          
          laserTint:"0xEEA500",
          pulseTint:levelsTints.level35,
        },
    
      specialEvents:{
        triangleBackMode:{
          available:false,
          createMeters:50,
        },
          thunder:{
            available:false,
            firstStrikeMeters:70,
            secondStrikeMeters:30,
          },
            flipHands:{
              available:false,
              firstHandMeters:70,
              secondHandMeters:30,
            },
            cave:{
              available:false,
              createCaveMeters:80,
              closeCaveMeters:50,
            },
            rotateMode:{
              available:false,
              firstLineMeters:90,
              secondLineMeters:80,
            },
            bigMonster:{
              available:false,
                  monsterShowsMeters:90,
                  monsterBackMeters:70,
            }
      },
    
    },
    level76:{
      meters:90,
      createMetaMeters:7,
      floorSpeed: -6.9,
      dimness:false,
      music:"music_6",
      correctLine:"0xffffff",
      skins:{
        map:"snow",
        floorSkins:"grid",
        obstacleSkin:"obstacle_11",
        
      },
    
    spacing:{
      floorToFloorSpacing:120,
      additionalObstacleSpacing:10,
      doubleHeightObstacleSpacing:25,
      floorToFlyingFloorSpacing:145,
      squareObstacleSpacing:5,
    },
    piramidModeChance:50,
    
      chances:{
        upperFloorChance:50,
        lowerFloorChance:50,
    
        floorObstacleChance:20,
            flyingFloorChance:50,
            shortFloorWithBallChance:35,
            spikeMouthChance:35,
            tunnelChance:35,
            magicRodChance:35,
        
        spikeBlockObstacleChance:90,
        sawObstacleChance:20,
    
    spikeBarAboveChance:55, 
    spikeShowChance:84,

    oneSpikeChance:35,
    doubleSpikeChance:20,
    obstacleBlockChance:20,
    higherObstacleChance:20,
    
    randomWallSpecialEffectChance:85,
    additionalBottomShurikenChance:100,
    additionalBottomWallSawChance:100,
    bottomTextureChance:90,
    
      },
      tints:{
        backgroundTint:levelsTints.level36,  
      
          obstacleTint:levelsTints.level36,   
          blockObstacleTint:levelsTints.level36,  
      
          spikeBarTint:levelsTints.level36,  
          blackBarTint:levelsTints.level36,  
      
          shortBallFloorTint:levelsTints.level36,  
      
          floorTint:levelsTints.level36,   
          floorAuraUpTint:"0x04061F",  
          floorAuraTint:"0x04061F",  
      
          lavaTint:levelsTints.level36, 
          sawTint:levelsTints.level36,
         
          shortFlyingFloorTint:levelsTints.level36,   
      
          shurikenWallTint:levelsTints.level36, 
          wallSawTint:levelsTints.level36, 
          bottomSpikeTint:levelsTints.level36,
      
          gearTint:levelsTints.level36,    
          
          laserTint:levelsTints.level36,  
          pulseTint:levelsTints.level36,  
        },
    
      specialEvents:{
        triangleBackMode:{
          available:false,
          createMeters:50,
        },
          thunder:{
            available:false,
            firstStrikeMeters:70,
            secondStrikeMeters:30,
          },
            flipHands:{
              available:false,
              firstHandMeters:70,
              secondHandMeters:30,
            },
            cave:{
              available:false,
              createCaveMeters:80,
              closeCaveMeters:50,
            },
            rotateMode:{
              available:false,
              firstLineMeters:90,
              secondLineMeters:80,
            },
            bigMonster:{
              available:false,
                  monsterShowsMeters:90,
                  monsterBackMeters:70,
            }
      },
    
    },
    level77:{
      meters:90,
      createMetaMeters:7,
      floorSpeed: -6.925,
      dimness:false,
      music:"music_7",
      correctLine:"0xAE00FF",
      skins:{
        map:"pinkForest",
        floorSkins:"cake",
        obstacleSkin:"obstacle_11",
      
      },
    spacing:{
      floorToFloorSpacing:120,
      additionalObstacleSpacing:10,
      doubleHeightObstacleSpacing:25,
      floorToFlyingFloorSpacing:145,
      squareObstacleSpacing:5,
    },
    piramidModeChance:50,
    
      chances:{
        upperFloorChance:50,
        lowerFloorChance:50,
    
        floorObstacleChance:20,
            flyingFloorChance:50,
            shortFloorWithBallChance:35,
            spikeMouthChance:35,
            tunnelChance:35,
            magicRodChance:35,
        
        spikeBlockObstacleChance:90,
        sawObstacleChance:20,
    
    spikeBarAboveChance:55, 
    spikeShowChance:84,

    oneSpikeChance:35,
    doubleSpikeChance:20,
    obstacleBlockChance:20,
    higherObstacleChance:20,
    
    randomWallSpecialEffectChance:85,
    additionalBottomShurikenChance:100,
    additionalBottomWallSawChance:100,
    bottomTextureChance:90,
    
      },
      tints:{
        backgroundTint:levelsTints.level37,  
      
          obstacleTint:levelsTints.level37,   
          blockObstacleTint:levelsTints.level37,  
      
          spikeBarTint:levelsTints.level37,  
          blackBarTint:levelsTints.level37,  
      
          shortBallFloorTint:levelsTints.level37,  
      
          floorTint:levelsTints.level37,   
          floorAuraUpTint:levelsTints.level37,  
          floorAuraTint:levelsTints.level37,  
      
          lavaTint:levelsTints.level37, 
          sawTint:levelsTints.level37,
         
          shortFlyingFloorTint:"0xffffff", 
      
          shurikenWallTint:levelsTints.level37, 
          wallSawTint:levelsTints.level37, 
          bottomSpikeTint:levelsTints.level37,
      
          gearTint:levelsTints.level37,    
          
          laserTint:levelsTints.level37,  
          pulseTint:levelsTints.level37,  
        },
    
      specialEvents:{
        triangleBackMode:{
          available:false,
          createMeters:50,
        },
          thunder:{
            available:false,
            firstStrikeMeters:70,
            secondStrikeMeters:30,
          },
            flipHands:{
              available:false,
              firstHandMeters:70,
              secondHandMeters:30,
            },
            cave:{
              available:false,
              createCaveMeters:80,
              closeCaveMeters:50,
            },
            rotateMode:{
              available:false,
              firstLineMeters:90,
              secondLineMeters:80,
            },
            bigMonster:{
              available:false,
                  monsterShowsMeters:90,
                  monsterBackMeters:70,
            }
      },
    
    },
    level78:{
      meters:90,
      createMetaMeters:7,
      floorSpeed: -6.95,
      dimness:false,
      music:"music_1",
      skins:{
        map:"city",
        floorSkins:"grid",
        obstacleSkin:"obstacle_11",
     
      },
    
    spacing:{
      floorToFloorSpacing:120,
      additionalObstacleSpacing:10,
      doubleHeightObstacleSpacing:25,
      floorToFlyingFloorSpacing:145,
      squareObstacleSpacing:5,
    },
    piramidModeChance:50,
    
      chances:{
        upperFloorChance:50,
        lowerFloorChance:50,
    
        floorObstacleChance:20,
            flyingFloorChance:50,
            shortFloorWithBallChance:35,
            spikeMouthChance:35,
            tunnelChance:35,
            magicRodChance:35,
        
        spikeBlockObstacleChance:90,
        sawObstacleChance:20,
    
    spikeBarAboveChance:55, 
    spikeShowChance:87,

    oneSpikeChance:35,
    doubleSpikeChance:20,
    obstacleBlockChance:20,
    higherObstacleChance:20,
    
    randomWallSpecialEffectChance:95,
    additionalBottomShurikenChance:100,
    additionalBottomWallSawChance:100,
    bottomTextureChance:80,
    
      },
      tints:{
        backgroundTint:levelsTints.level38,
      
          obstacleTint:"0x00FF24", 
          blockObstacleTint:"0x00B824",
      
          spikeBarTint:levelsTints.level38,
          blackBarTint:levelsTints.level38,
      
          shortBallFloorTint:levelsTints.level38,  
      
          floorTint:"0x00FFFF", 
          floorAuraUpTint:levelsTints.level38,
          floorAuraTint:levelsTints.level38,
      
          lavaTint:"0x7C26FF", 
          sawTint:levelsTints.level38,
         
          shortFlyingFloorTint:levelsTints.level38, 
      
          shurikenWallTint:levelsTints.level38, 
          wallSawTint:levelsTints.level38, 
          bottomSpikeTint:levelsTints.level38,
      
          gearTint:levelsTints.level38,    
          
          laserTint:levelsTints.level38,
          pulseTint:levelsTints.level38,
        },
    
      specialEvents:{
        triangleBackMode:{
          available:false,
          createMeters:50,
        },
          thunder:{
            available:false,
            firstStrikeMeters:70,
            secondStrikeMeters:30,
          },
            flipHands:{
              available:false,
              firstHandMeters:70,
              secondHandMeters:30,
            },
            cave:{
              available:false,
              createCaveMeters:80,
              closeCaveMeters:50,
            },
            rotateMode:{
              available:false,
              firstLineMeters:90,
              secondLineMeters:80,
            },
            bigMonster:{
              available:false,
                  monsterShowsMeters:90,
                  monsterBackMeters:70,
            }
      },
    
    },
    level79:{
      meters:90,
      createMetaMeters:7,
      floorSpeed: -6.975,
      dimness:false,
      music:"music_2",
      correctLine:"0xffffff",
      skins:{
        map:"pinkMountain",
        floorSkins:"castle",
        obstacleSkin:"obstacle_11",
        
      },
    
    spacing:{
      floorToFloorSpacing:120,
      additionalObstacleSpacing:10,
      doubleHeightObstacleSpacing:25,
      floorToFlyingFloorSpacing:145,
      squareObstacleSpacing:5,
    },
    piramidModeChance:50,
    
      chances:{
        upperFloorChance:50,
        lowerFloorChance:50,
    
        floorObstacleChance:20,
            flyingFloorChance:50,
            shortFloorWithBallChance:35,
            spikeMouthChance:35,
            tunnelChance:35,
            magicRodChance:35,
        
        spikeBlockObstacleChance:90,
        sawObstacleChance:20,
    
    spikeBarAboveChance:55, 
    spikeShowChance:87,

    oneSpikeChance:35,
    doubleSpikeChance:20,
    obstacleBlockChance:20,
    higherObstacleChance:20,
    
    randomWallSpecialEffectChance:100,
    additionalBottomShurikenChance:100,
    additionalBottomWallSawChance:100,
    bottomTextureChance:100,
    
      },
      tints:{
        backgroundTint:levelsTints.level39,
      
          obstacleTint:levelsTints.level39, 
          blockObstacleTint:levelsTints.level39,
      
          spikeBarTint:levelsTints.level39,
          blackBarTint:levelsTints.level39,
      
          shortBallFloorTint:levelsTints.level39,  
      
          floorTint:levelsTints.level39, 
          floorAuraUpTint:"0x0000FF",
          floorAuraTint:"0x23007B",
      
          lavaTint:levelsTints.level39, 
          sawTint:levelsTints.level39,
         
          shortFlyingFloorTint:levelsTints.level39, 
      
          shurikenWallTint:levelsTints.level39, 
          wallSawTint:levelsTints.level39, 
          bottomSpikeTint:levelsTints.level39,
      
          gearTint:levelsTints.level39,    
          
          laserTint:levelsTints.level39,
          pulseTint:levelsTints.level39,
        },
      specialEvents:{
        triangleBackMode:{
          available:false,
          createMeters:50,
        },
          thunder:{
            available:false,
            firstStrikeMeters:70,
            secondStrikeMeters:30,
          },
            flipHands:{
              available:false,
              firstHandMeters:70,
              secondHandMeters:30,
            },
            cave:{
              available:false,
              createCaveMeters:80,
              closeCaveMeters:50,
            },
            rotateMode:{
              available:false,
              firstLineMeters:90,
              secondLineMeters:80,
            },
            bigMonster:{
              available:false,
                  monsterShowsMeters:90,
                  monsterBackMeters:70,
            }
      },
    
    },
      level80:{
      meters:90,
      createMetaMeters:7,
      floorSpeed: -6,
      dimness:false,
      music:"music_3",
      correctLine:"0xffffff",
      skins:{
        map:"green",
        floorSkins:"triangles",
        obstacleSkin:"obstacle_11",
     
      },
    
    spacing:{
      floorToFloorSpacing:130,
      additionalObstacleSpacing:10,
      doubleHeightObstacleSpacing:25,
      floorToFlyingFloorSpacing:145,
      squareObstacleSpacing:5,
    },
    piramidModeChance:50,
    
      chances:{
        upperFloorChance:50,
        lowerFloorChance:50,
    
        floorObstacleChance:0,
            flyingFloorChance:50,
            shortFloorWithBallChance:35,
            spikeMouthChance:35,
            tunnelChance:35,
            magicRodChance:35,
        
        spikeBlockObstacleChance:90,
        sawObstacleChance:20,
    
    spikeBarAboveChance:0, 
    spikeShowChance:0,

    oneSpikeChance:100,
    doubleSpikeChance:100,
    obstacleBlockChance:100,
    higherObstacleChance:50,
    
    randomWallSpecialEffectChance:100,
    additionalBottomShurikenChance:100,
    additionalBottomWallSawChance:100,
    bottomTextureChance:100,
    
      },
      tints:{
        backgroundTint:levelsTints.level40,
      
          obstacleTint:levelsTints.level40, 
          blockObstacleTint:levelsTints.level40,
      
          spikeBarTint:levelsTints.level40,
          blackBarTint:levelsTints.level40,
      
          shortBallFloorTint:levelsTints.level40,  
      
          floorTint:levelsTints.level40, 
          floorAuraUpTint:levelsTints.level40,
          floorAuraTint:levelsTints.level40,
      
          lavaTint:levelsTints.level40, 
          sawTint:levelsTints.level40,
         
          shortFlyingFloorTint:levelsTints.level40, 
      
          shurikenWallTint:levelsTints.level40, 
          wallSawTint:levelsTints.level40, 
          bottomSpikeTint:levelsTints.level40,
      
          gearTint:levelsTints.level40,    
          
          laserTint:levelsTints.level40,
          pulseTint:levelsTints.level40,
        },
      
      specialEvents:{
        triangleBackMode:{
          available:true,
          createMeters:90,
        },
          thunder:{
            available:true,
            firstStrikeMeters:90,
            secondStrikeMeters:30,
          },
            flipHands:{
              available:false,
              firstHandMeters:90,
              secondHandMeters:30,
            },
            cave:{
              available:false,
              createCaveMeters:80,
              closeCaveMeters:50,
            },
            rotateMode:{
              available:false,
              firstLineMeters:90,
              secondLineMeters:80,
            },
            bigMonster:{
              available:false,
                  monsterShowsMeters:90,
                  monsterBackMeters:70,
            }
      },
    
    },
   

  };


  