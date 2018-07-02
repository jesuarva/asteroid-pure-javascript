class Game extends Canvas {
  constructor(canvas) {
    super(canvas);
    let score = 0;
    let currentLevel = null;
    let lives = 3;
    let highScore = 0;
    let gameEntities = [];
  }
  render() {
    console.log('Aloha');
  }
  detectColisions() {
    console.log('Boom');
  }
  currentLevel(level) {
    this.currentLevel = level;
  }
}
