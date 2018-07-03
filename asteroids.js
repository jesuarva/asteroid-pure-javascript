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
  goodShip: [[0, -30], [20, -30], [10, 0]],
  // goodShip: [[0, 0], [20, 0], [10, -30], [0,-30]],
  badShip: [],
  bullet: [[0, 0], [10]],
  asteroid_1: [[30, 0], [130, 0], [120, 50], [140, 100], [100, 90], [110, 120], [30, 115], [30, 80], [0, 30]],
};

const asteroida = [[30, 0], [130, 0], [120, 50], [140, 100], [100, 90], [110, 120], [30, 115], [30, 80], [0, 30]];
const asteroidb = [[30, 0], [130, 0], [120, 50], [140, 100], [100, 90], [110, 120], [30, 115], [30, 80], [0, 30]];



const eventKeyDownPoperties = {
  32: null, // SpaceKey => ''
  37: -1, // ArrowLeft => rotateCounterClockwise
  38: 0.1, // ArrowUp => incrementspeed
  39: 1, // ArrowRight => rotateClockwise
  40: null, // ArrowDown => ''
};

// const game = new Game(canvas);

console.log({ canvas });
console.log(Level);

const game = new Game(canvas);
// EVENT LISTENERS
game.setListeners(eventKeyDownPoperties);
const goodShip = new Ship(0, 0, shapeList.goodShip);
goodShip.setCenter(0, 0);
goodShip.setSpeed(2,2);
goodShip.setAngle(0);
goodShip.setRotation(0);

const asteroid1 = new Asteroid(0, 0, asteroida, 1);
asteroid1.setSpeed(6, 2);
asteroid1.setCenter(0, 0);

const asteroid2 = new Asteroid(0, 0, asteroidb, 1);
asteroid2.setSpeed(5, 4);
asteroid2.setCenter(70, 60);
asteroid2.setAngle(0);
asteroid2.setRotation(0);

game.setGoodShip(goodShip);
game.setAsteroid(asteroid1);
game.setAsteroid(asteroid2);

console.log({ game });
const render = game.render;
setInterval(render.bind(game), 1000/60);
