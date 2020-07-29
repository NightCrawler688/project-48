class Player{
    constructor() {
        this.sprite = createSprite(width - 50,height/2,40,30);
        this.sprite.addImage("player",playerImg);
        this.sprite.scale = 0.2;
        this.bulletGroup = new Group();
        this.touches = [];
    }
    controls() {
        if(this.touches.length > 0 || keyIsDown(UP_ARROW)) {
          this.sprite.y = this.sprite.y - 10;
          this.touches = [];
        }
        if(this.touches.length > 0 || keyIsDown(DOWN_ARROW))
        {
         this.sprite.y = this.sprite.y + 10;
         this.touches = [];
        }
        if(this.touches.length > 0 || keyIsDown(LEFT_ARROW)) {
          this.sprite.x = this.sprite.x - 10;
          this.touches = [];
        }
        if(this.touches.length > 0 || keyIsDown(RIGHT_ARROW)) {
          this.sprite.x = this.sprite.x +10;
          this.touches = [];
        }
        
    }
    collision() {
        this.sprite.collide(edges[0]);
        this.sprite.collide(edges[1]);
        this.sprite.collide(edges[2]);
        this.sprite.collide(edges[3]);
        this.sprite.collide(obstacles.stone1);
        this.sprite.collide(obstacles.stone2);
    }
    shoot() {
      var bullet = createSprite(this.sprite.x,this.sprite.y,40,30);
      bullet.addImage(playerBulletImg);
      bullet.scale = 0.05;
      this.bulletGroup.add(bullet);
      bullet.velocityX = -15;
      bullet.lifetime = floor(width/bullet.velocityX);
    
  }
    
}