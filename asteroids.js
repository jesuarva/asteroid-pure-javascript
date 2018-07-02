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
const shapeList = {
  goodShip: [[20, 20], [20, 30], [30, 25]],
  badShip: [],
  bullet: [],
};

// const game = new Game(canvas);

console.log({ canvas });
console.log(Level);
// merge

const game = new Game(canvas);
const nave = new Sprite(50, 50, shapeList.goodShip);

game.setGameEntity(nave);
console.log({ game });
game.render();
