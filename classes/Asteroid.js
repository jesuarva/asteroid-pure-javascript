class Asteroid extends Sprite {
  constructor(x, y, shape, scale) {
    super(x, y, shape);
    this.scale = scale;
  }
  explode() {
    console.log('Asteroid explode');
  }
  divideInSeveral() {
    console.log('Divide in three');
  }
}
