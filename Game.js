class Game {
    constructor() {
     this.playButton = createSprite(width/2,height/2 + 200,30,40);
     this.playButton.addImage(startImg);
     this.playButton.scale = 0.3;
     this.gameOverButton = createSprite(width/2,height/2,30,40);
     this.gameOverButton.addImage(gameOverImg);
     this.winButton = createSprite(width/2,height/2,30,40);
     this.winButton.addImage(winImg);
     this.winButton.visible = false;
     this.superWeapon = createSprite(91,532,30,40);
     this.superWeapon.addImage(superWeaponImg);
     this.superWeapon.scale = 0.3;
     this.superWeapon.visible = false;
    this.flag1 = 0;
    this.flag2 = 0;
    this.flag3 = 0;
    this.flag4 = 0;
    this.flag5 = 0;
    this.flag6 = 0;
    this.touches = [];
     this.gameOverButton.visible = false;
     this.level = 3;
     this.enemyCount = 0;
    }
    start() {
        textSize(60);
        textStyle(BOLD);
        fill("red");
        text("SUPER WEAPON",width/2 - 250,height/2);
        
        if( this.touches.length > 0 || mousePressedOver(this.playButton)) {
            gameState = 1;
            buttonSound.play();
            this.touches = [];
        }
        player.sprite.visible = false;
        obstacles.hide();
        enemy1.hide();
        enemy2.hide();
        enemy3.hide();
        enemy4.hide();
        enemy5.hide();
        textSize(25);
        text("Hi Soldier, Your Mission is to acquire the super weapon that has fallen into the hands of terrorists.",125,417);
    }
    play() {
      player.sprite.visible= true;
      this.playButton.visible = false;
      //this.superWeapon.visible = true;
      player.controls();
      player.collision();
      obstacles.reveal();
      enemy1.show();
      enemy2.show();
      enemy3.show();
      enemy4.show();
      enemy5.show();
      if(frameCount%50 === 0 && this.flag1===0) {
          enemy1.enemyBullet(458,281);

      }
      if(frameCount%75 === 0 && this.flag2===0) {
          enemy2.enemyBullet(414,502);
      }
      if(frameCount%100 === 0 && this.flag3 === 0) {
          enemy3.enemyBullet(184,377); 
      }
      if(frameCount%120 === 0 && this.flag4 === 0) {
        enemy4.enemyBullet(104,650); 
    }
    if(frameCount%150 === 0 && this.flag5 === 0) {
        enemy4.enemyBullet(79,439); 
    }
      if(enemy1.bulletGroup.isTouching(player.sprite) || enemy2.bulletGroup.isTouching(player.sprite) || enemy3.bulletGroup.isTouching(player.sprite) || enemy4.bulletGroup.isTouching(player.sprite) || enemy5.bulletGroup.isTouching(player.sprite)) {
          this.level = this.level - 1;
          player.sprite.x = width - 50;
          player.sprite.y = height/2;
      }
      if(this.level === 0) {
          gameState = 2;
          gameOverSound.play();
          this.level = 1;
      }
      if(player.sprite.isTouching(this.superWeapon)&& this.enemyCount === 5) {
          gameState = 3;
          winSound.play();
      }
      if(this.touches.length > 0 || keyWentDown(32) && this.flag6 === 0) {
          player.shoot();
          this.flag6 = 1;
          bulletSound.play();
      }
      if(this.flag6 === 1) {
          if(frameCount%125 === 0) {
              this.flag6 = 0;
          }
      }
      if(player.bulletGroup.isTouching(enemy1.sprite)) {
          enemy1.sprite.destroy();
          enemy1.bulletGroup.destroyEach();
          enemyDieSound.play();
          this.flag1 = 1;
          this.enemyCount += 1;
      }
      if(player.bulletGroup.isTouching(enemy2.sprite)) {
        enemy2.sprite.destroy();
        enemy2.bulletGroup.destroyEach();
        enemyDieSound.play();
        this.flag2 = 1;
        this.enemyCount += 1;
    }
    if(player.bulletGroup.isTouching(enemy3.sprite)) {
        enemy3.sprite.destroy();
        enemy3.bulletGroup.destroyEach();
        enemyDieSound.play();
        this.flag3 = 1;
        this.enemyCount += 1;
    }
    if(player.bulletGroup.isTouching(enemy4.sprite)) {
        enemy4.sprite.destroy();
        enemy4.bulletGroup.destroyEach();
        enemyDieSound.play();
        this.flag4 = 1;
        this.enemyCount += 1;
    }
    if(player.bulletGroup.isTouching(enemy5.sprite)) {
        enemy5.sprite.destroy();
        enemy5.bulletGroup.destroyEach();
        enemyDieSound.play();
        this.flag5 = 1;
        this.enemyCount += 1;
    }
    if(this.enemyCount === 5) {
        this.superWeapon.visible = true;
    }
    textSize(20);
  fill("blue");
      text("Number Of Lives: " + this.level,631,87);
      
    }
    end() {
        this.gameOverButton.visible = true;
        player.sprite.visible = false;
        this.superWeapon.visible = false;
        enemy1.bulletGroup.destroyEach();
        enemy2.bulletGroup.destroyEach();
        enemy3.bulletGroup.destroyEach();
        enemy4.bulletGroup.destroyEach();
        enemy5.bulletGroup.destroyEach();
        player.bulletGroup.destroyEach();
        obstacles.hide();
        enemy1.hide();
        enemy2.hide();
        enemy3.hide();
        enemy4.hide();
       enemy5.hide();

    }
    win() {
        this.winButton.visible = true;
        player.sprite.visible = false;
        this.superWeapon.visible = false;
        enemy1.bulletGroup.destroyEach();
        enemy2.bulletGroup.destroyEach();
        enemy3.bulletGroup.destroyEach();
        enemy4.bulletGroup.destroyEach();
        enemy5.bulletGroup.destroyEach();
        player.bulletGroup.destroyEach();
        obstacles.hide();
        enemy1.hide();
        enemy2.hide();
        enemy3.hide();
        enemy4.hide();
        enemy5.hide();
        
    }

}