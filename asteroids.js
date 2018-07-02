/**
 * CANVAS
 */
const canvas = document.getElementById('ateroids');
const ctx = camvas.getContext('2d');

/**
 * GAME
 */

class Game {
  constructor() {
    this.score = 0;
    this.currentLevel = 1;
    this.lives = 3;
    this.highScore = 0;
    this.gameEntities = {};
  }
  render() {}
  detectColisions() {}
}
