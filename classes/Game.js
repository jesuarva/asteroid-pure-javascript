class Game extends Canvas {
  constructor(canvas) {
    super(canvas);
    this.score = 0;
    this.currentLevel = null;
    this.lives = 3;
    this.highScore = 0;
    this.bullets = [[], []];
    this.asteroids = [];
    this.badShip = '';
    this.goodShip = '';
  }
  render() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.drawGoodShip();
    this.drawAsteroids();
    this.setNewState();
  }
  detectColisions() {
    console.log('Boom');
  }
  currentLevel(level) {
    this.currentLevel = level;
  }
  setAsteroid(sprite) {
    this.asteroids.push(sprite);
  }
  setGoodShip(sprite) {
    this.goodShip = sprite;
  }
  drawGoodShip() {
    this.goodShip.draw(this.ctx, 400, 300);
  }
  drawAsteroids() {
    this.asteroids.forEach(asteroid => {
      asteroid.draw(this.ctx, 10, 20);
    });
  }
  setNewState() {
    this.goodShip.move(this.width, this.height);
    this.asteroids.forEach(asteroid => asteroid.move(this.width, this.height));
  }
  setListeners(keyAndPropertiesToSet) {
    console.log('Events listeners');
    console.log(keyAndPropertiesToSet);
    document.addEventListener('keydown', e => this.handleKeyPress(e, keyAndPropertiesToSet));
  }
  handleKeyPress(e, keyAndPropertiesToSet) {
    const newValue = keyAndPropertiesToSet[e.keyCode];

    /**
     * KEY HANDLERS
     */
    const handleSpeed = newValue => {
      const currentSpeed = this.goodShip.speedY;
      console.log(this, 'handleSpeed', currentSpeed);
    };
    const hanldeAngle = newValue => {
      console.log(newValue);
      const currentAngle = this.goodShip.angle;
      this.goodShip.setAngle(currentAngle + newValue);
      console.log(this.goodShip.angle);
    };

    /**
     * EVENT LOGIC
     */
    switch (e.keyCode) {
      case 38:
        handleSpeed(newValue, this);
        break;
      case 37:
      case 39:
        hanldeAngle(newValue);
        hanldeAngle(newValue);
        break;
    }

    this.goodShip.setSpeed(0, 0);
    this.goodShip.setRotation(0);
    // this.goodShip.setAngle(10);
  }
}
