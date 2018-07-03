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
    this.setNewState();
    this.drawGoodShip();
    this.drawAsteroids();
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
    const modifierValue = keyAndPropertiesToSet[e.keyCode];

    /**
     * KEY HANDLERS
     */
    const handleSpeed = modifierValue => {
      const currentSpeed = this.goodShip.speedY;
      const nextSpeed = currentSpeed + modifierValue;
      -this.goodShip.setSpeed(0, nextSpeed);
      console.log(this, 'handleSpeed', currentSpeed);
    };
    const hanldeAngle = modifierValue => {
      const currentAngle = this.goodShip.angle;

      (this.goodShip.incrementAngleBy >= 20 && modifierValue > 0) ||
      (this.goodShip.incrementAngleBy <= -20 && modifierValue < 0)
        ? this.goodShip.incrementAngleBy
        : (this.goodShip.incrementAngleBy = this.goodShip.incrementAngleBy + modifierValue * 2);

      console.log(modifierValue, this.goodShip.incrementAngleBy);
      this.goodShip.setAngle(currentAngle + this.goodShip.incrementAngleBy);
    };

    /**
     * EVENT LOGIC
     */
    switch (e.keyCode) {
      case 38: // ArrowUp
        handleSpeed(modifierValue);
        break;
      case 37: // ArrowLeft
      case 39: // ArrowRight
        hanldeAngle(modifierValue);
        break;
    }

    // this.goodShip.setSpeed(0, 0);
    this.goodShip.setRotation(0);
    // this.goodShip.setAngle(10);
  }
}
