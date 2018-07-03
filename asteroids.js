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
  bullet: [[0, 0], [10]],
  asteroid_1: [[0, 0], [0.2], [10, 30], [40, 30], [40, 20], [42, 25], [50, 10]],
};

// const game = new Game(canvas);

console.log({ canvas });
console.log(Level);
// merge

const game = new Game(canvas);
const nave = new Sprite(50, 50, shapeList.goodShip);
nave.setSpeed(2, 3);
const asteroid = new Asteroid(100, 100, shapeList.asteroid_1, 1);
asteroid.setSpeed(-1, 5);

game.setGameEntity(nave);
game.setGameEntity(asteroid);
console.log({ game });
const render = game.render;
setInterval(render.bind(game), 1000 / 30);
