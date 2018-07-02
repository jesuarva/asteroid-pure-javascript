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
    // this.drawEntity();
    console.log(this.lives);
    this.lives = 10;
    console.log(this.lives);
  }
  detectColisions() {
    console.log('Boom');
  }
  currentLevel(level) {
    this.currentLevel = level;
  }
  setGameEntity(sprite) {
    // console.log(gameEntities);
    // this.gameEntities.push(sprite);
  }
  drawEntity() {
    // this.gameEntities.forEach(entity => {
    //   entity.draw(this.ctx);
    // });
  }
}
