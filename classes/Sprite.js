class Sprite {
  constructor(_x, _y, shape) {
    this.x = _x;
    this.y = _y;
    this.speedX = 0;
    this.speedY = 0;
    this.angle = 0;
    this.shape = shape;
    this.darkSide = true;
  }
  draw(ctx) {
    console.log(ctx);
    const length = this.shape.length;
    ctx.beginPath();
    ctx.moveTo(this.shape[0][0], this.shape[0][1]);
    for (let i = 1; i < length; ++i) {
      ctx.lineTo(this.shape[i][0], this.shape[i][1]);
      console.log('lineTo');
    }
    ctx.lineTo(this.shape[0][0], this.shape[0][1]);
    ctx.stroke();
    ctx.closePath();
  }
  move() {
    x += speedX;
    x += speedX;
  }
}
