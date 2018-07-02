class Sprite {
  constructor(_x, _y) {
    this.x = _x;
    this.y = _y;
    this.speedX = 0;
    this.speedY = 0;
    this.angle = 0;
    this.shape = [];
    this.darkSide = true;
  }
  draw(ctx) {
    //shape.forEach((point) => {})
    ctx.beginPath();
    ctx.arc(this.x, this.y, 10, 0, Math.PI * 2, false);
    ctx.fillStyle = '#0095dd';
    ctx.fill();
    ctx.closePath();
  }
  move() {
    x += speedX;
    x += speedX;
  }
}
