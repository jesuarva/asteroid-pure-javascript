class Game extends Canvas {
  constructor(canvas) {
    super(canvas);
    this.score = 0;
    this.currentLevel = null;
    this.lives = 3;
    this.highScore = 0;
    this.gameEntities = [];
  }
  render() {
    this.drawEntity();
  }
  detectColisions() {
    console.log('Boom');
  }
  currentLevel(level) {
    this.currentLevel = level;
  }
  setGameEntity(sprite) {
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
}
