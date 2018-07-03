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
  goodShip: [[0, 0], [20, 0], [10, -30]],
  badShip: [],
  bullet: [[0, 0], [10]],
  asteroid_1: [[30, 0], [130, 0], [120, 50], [140, 100], [100, 90], [110, 120], [30, 115], [30, 80], [0, 30]],
};

// const game = new Game(canvas);

console.log({ canvas });
console.log(Level);
// merge

const game = new Game(canvas);
const goodShip = new Ship(0, 0, shapeList.goodShip);

goodShip.setCenter(10, -15);
goodShip.setAngle(20);
goodShip.setRotation(2);


const asteroid1 =  new Asteroid(20, 20, shapeList.asteroid_1, 1);
asteroid1.setSpeed(0, 1);
asteroid1.setCenter(70, 60);

const asteroid2 = new Asteroid(90, 40, shapeList.asteroid_1, 4);
asteroid2.setSpeed(0.25, 1.25);
asteroid2.setCenter(70, 60);
asteroid2.setAngle(45);
asteroid2.setRotation(0)

game.setGoodShip(goodShip);
game.setAsteroid(asteroid1);
game.setAsteroid(asteroid2);


console.log({ game });
const render = game.render;
setInterval(render.bind(game), 1000 / 30);
