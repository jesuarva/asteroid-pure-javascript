class Game extends Canvas {
  constructor(canvas) {
    super(canvas);
    this.score = 0;
    this.currentLevel = null;
    this.lives = 3;
    this.highScore = 0;
    this.gameBulletEntities = [[], []];
    this.gameAsteroidEntities = [];
    this.badShip = '';
    this.goodShip = '';
  }
  render() {
    // console.log(this.ctx);
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.drawEntity();
    this.setNewState();
  }
  detectColisions() {
    console.log('Boom');
  }
  currentLevel(level) {
    this.currentLevel = level;
  }
  gameAsteroidEntities(sprite) {
    console.log({ sprite });
    this.gameEntities.push(sprite);
  }
  drawEntity() {
    this.gameEntities.forEach(entity => {
      console.log(Object.keys(entity));
      console.log(entity.draw);
      entity.draw(this.ctx);
    });
  }
  setNewState() {
    const ship = this.gameEntities[0];
    const asteroid = this.gameEntities[1];
    ship.move();
    asteroid.move();
  }
}
