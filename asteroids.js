/**
 * CANVAS
 */
class Canvas {
  constructor(canvas) {
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
  }
}

/**
 * GAME
 */

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

/**
 * LEVEL
 */
class Level {
  constructor(_levelNumber, _startingNumerAsteroids, _numberofEnemyShips, _asteroidBaseSpeed) {
    const levelNumber = _levelNumber;
    const startingNumerAsteroids = _startingNumerAsteroids;
    const numberofEnemyShips = _numberofEnemyShips;
    const asteroidBaseSpeed = _asteroidBaseSpeed;
  }
}

/**
 * VARIABLES
 */
const canvas = document.getElementById('asteroids');
const level = {
  1: new Level(1, 5, 3, 3),
  2: new Level(2, 8, 4, 4),
  3: new Level(3, 10, 5, 7),
  4: new Level(4, 13, 8, 9),
};

const game = new Game(canvas);

console.log({ canvas });
// console.log('score', game.score);
console.log('ctx', game.ctx);
game.render();

console.log(game);
game.currentLevel(level[3]);
console.log(game);

// merge
