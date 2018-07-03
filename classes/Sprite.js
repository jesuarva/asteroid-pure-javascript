class Sprite {
  constructor(x, y, shape) {
    this.x = x;
    this.y = y;
    this.centerX = 0;
    this.centery = 0;
    this.speedX = 0;
    this.speedY = 0;
    this.angle = 0;
    this.rotation = 0;
    this.shape = shape;
    this.darkSide = true;
    this.scale = 1;
  }
  draw(ctx) {
    const length = this.shape.length;

    const radians = this.angle * (Math.PI / 180);

    let dx = this.x - this.centerX ;
    let dy = this.y - this.centerY ;

    ctx.save();
    ctx.setTransform(1,0,0,1,400,300);
    ctx.rotate(radians);
    ctx.beginPath();
    ctx.moveTo(this.shape[0][0]/this.scale + dx, this.shape[0][1]/this.scale + dy);
    for (let i = 1; i < length; ++i) {
      ctx.lineTo(this.shape[i][0]/this.scale + dx, this.shape[i][1]/this.scale + dy);
    }
    ctx.closePath();
    ctx.stroke();
    ctx.restore();
  }
  move(maxX, maxY) {
    this.x += this.speedX;
    this.y += this.speedY;
    if( this.x > maxX )
      this.x = 0;
    if( this.y > maxY )
      this.y = 0;
    if( this.x < 0 )
      this.x = maxX;
    if( this.y < 0 )
      this.y = maxY;
    this.rotate();
  }
  rotate() {
    this.angle+=this.rotation;
    if(this.angle > 360) {
        this.angle = 0;
    }
  }
  setCenter(x, y) {
    this.centerX = x/this.scale;
    this.centerY = y/this.scale;
  }
  setSpeed(speedX, speedY) {
    this.speedX = speedX;
    this.speedY = speedY;
  }
  setAngle(angle){
    this.angle = angle;
  }
  setRotation(rotation){
    this.rotation = rotation;
  }}
