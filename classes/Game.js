class Game extends Canvas {
  constructor(canvas) {
    super(canvas);
    this.score = 0;
    this.currentLevel = null;
    this.lives = 3;
    this.highScore = 0;
    this.bullets = [[], []];
    this.asteroids = [];
    this.badShip = '';
    this.goodShip = '';
  }
  render() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.drawGoodShip();
    this.drawAsteroids();
    this.setNewState();
  }
  detectColisions() {
    console.log('Boom');
  }
  currentLevel(level) {
    this.currentLevel = level;
  }
  setAsteroid(sprite) {
    this.asteroids.push(sprite);
  }
  setGoodShip(sprite) {
    this.goodShip = sprite;
  }
  drawGoodShip() {
    this.goodShip.draw(this.ctx, 400, 300);
  }
  drawAsteroids() {
    this.asteroids.forEach(asteroid => {
      asteroid.draw(this.ctx, 10, 20);
    });
  }
  setNewState() {
    this.goodShip.move(this.width, this.height);
    this.asteroids.forEach(asteroid => asteroid.move(this.width, this.height));
  }
}
