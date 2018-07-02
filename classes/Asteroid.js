class Asteroid extends Sprite {
  constructor(x,y, scale) {
    super(x,y);
    this.scale = scale;
  }
  explode() {
    console.log("Asteroid explode");
  }
  divideInSeveral(){
    console.log("Divide in three");
  }
}