class Sprite {
  constructor(x, y, shape) {
    this.x = x;
    this.y = y;
    this.centerX = 0;
    this.centerY = 0;
    this.speedX = 0;
    this.speedY = 0;
    this.angle = 0;
    this.incrementAngleBy = 0;
    this.rotation = 0;
    this.shape = shape;
    this.darkSide = true;
    this.scale = 1;
  }
  draw(ctx) {
    const length = this.shape.length;

    const radians = this.angle * (Math.PI / 180);

    ctx.save();
    ctx.beginPath();
    ctx.moveTo(0,300);
    ctx.lineTo(800,300);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(400,0);
    ctx.lineTo(400,600);
    ctx.stroke();
    ctx.setTransform(1, 0, 0, 1, 400, 300);
    ctx.rotate(radians);
    ctx.beginPath();
    ctx.moveTo(this.shape[0][0], this.shape[0][1]);
    for (let i = 1; i < length; ++i) {
      ctx.lineTo(this.shape[i][0], this.shape[i][1]);
    }
    ctx.closePath();
    ctx.stroke();
    ctx.restore();
  }
  move(maxX, maxY) {
    let counter = 1 ;
    this.shape.forEach(point => {
      console.log("centerX : ", this.shape.length);
      console.log("counter : ", counter);
      // this.centerX+=this.speedX;
      // this.centerY+=this.speedY;
      this.x = this.speedX;
      this.y = this.speedY;
      let dx = this.x - this.speedX;
      let dy = this.y - this.speedY;
      point[0] = point[0] + this.speedX;
      point[1] = point[1] + this.speedY;
      if (point[0] > maxX/2 ){
        counter++;
        if(counter > this.shape.length)
          this.shape.forEach(point => point[0]-=maxX);
      }
      if (point[1] > maxY/2 ){
        counter++;
        if(counter > this.shape.length)
          this.shape.forEach(point => point[1]-=(maxY+120));
      }
      // if (point[1] > maxY) point[1] = 0;
      // if (point[0] < 0) point[0] = maxX;
      // if (point[1] < 0) point[1] = maxY;
    });
    this.rotate();
  }
  rotate() {
    this.angle += this.rotation;
    if (this.angle > 360) {
      this.angle = 0;
    }
  }
  setCenter(x, y) {
    this.centerX = x / this.scale;
    this.centerY = y / this.scale;
    this.shape.forEach(point => {
      point[0] = point[0] - this.centerX;
      point[1] = point[1] - this.centerY;
      // if (this.centerX > maxX/2 ) point[0] = 0;
      // if (point[1] > maxY) point[1] = 0;
      // if (point[0] < 0) point[0] = maxX;
      // if (point[1] < 0) point[1] = maxY;
    });
  }
  setSpeed(speedX, speedY) {
    this.speedX = speedX;
    this.speedY = speedY;
  }
  setAngle(angle) {
    this.angle = angle;
  }
  setRotation(rotation) {
    this.rotation = rotation;
  }
}
