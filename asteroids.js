const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
// Ball variables
let x = canvas.width / 2;
let y = canvas.height - 30;
let dx = 4;
let dy = -4;
const ballRadius = 10;
// Score
let score = 0;
// LIves
let lives = 3;
// Paddle variables
const paddleHeight = 10;
const paddleWidth = 75;
var paddleX = (canvas.width - paddleWidth) / 2; // initila position -> centered.
const d_paddleX = 4;
// Bricks variables
const brickRowCount = 3;
const brickColumnCount = 5;
const brickWidth = 75;
const brickHeight = 20;
const birckPadding = 10;
const brickOffsetTop = 30;
const brickOffsetLeft = 30;
const bricks = [];
for (let r = 0; r < brickRowCount; r++) {
  bricks[r] = [];
  for (let c = 0; c < brickColumnCount; c++) {
    bricks[r][c] = { x: 0, y: 0, aLive: true };
  }
}

// Events variable
let rightPresed = false;
let leftPressed = false;

function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2, false);
  ctx.fillStyle = '#0095dd';
  ctx.fill();
  ctx.closePath();
}
function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
  ctx.fillStyle = '#0095dd';
  ctx.fill();
  ctx.closePath();
}
function drawBlocks() {
  bricks.forEach((r, indxR) => {
    r.forEach((block, indxC) => {
      if (block.aLive === true) {
        const initialX = brickOffsetLeft + indxC * (brickWidth + birckPadding);
        const initialY = brickOffsetTop + indxR * (brickHeight + birckPadding);
        block.x = initialX;
        block.y = initialY;
        ctx.beginPath();
        ctx.rect(initialX, initialY, brickWidth, brickHeight);
        ctx.fillStyle = '#0095DD';
        ctx.fill();
        ctx.closePath();
      }
    });
  });
}
function drawScore() {
  ctx.font = '16px Consolas';
  ctx.fillStyle = '#0095dd';
  ctx.fillText('Score: ' + score, 8, 20);
}
function drawLives() {
  ctx.font = '16px Consolas';
  ctx.fillStyle = '#0095dd';
  ctx.fillText('Lives: ' + lives, canvas.width - 65, 20);
}
// DRAW AND PLAY
setInterval(draw, 33);
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  drawPaddle();
  drawBlocks();
  drawScore();
  drawLives();

  // Ball is within the boundaries of the Canvas
  // Ball: bounce Left or Right walls.
  (x + dx < 0 + ballRadius || x + dx > canvas.width - ballRadius) && (dx = -dx);
  y - ballRadius + dy < 0 && (dy = -dy);
  // Ball bounce Top or Botton walls
  if (y + ballRadius + dy > canvas.height) {
    // If Ball is within the Paddle boundaries
    x > paddleX && x < paddleX + paddleWidth ? (dy = -dy) : hasLives();
  }
  // Ball: hit bricks
  ifBallHitBrick();

  x += dx;
  y += dy;

  // Move paddle
  leftPressed && paddleX > 0 && (paddleX -= d_paddleX);
  rightPresed && paddleX + paddleWidth < canvas.width && (paddleX += d_paddleX);
  console.log('re-drawing');
  // console.log({ leftPressed, rightPresed });
  // requestAnimationFrame(draw);
}
console.log({ bricks });

// Events
document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);
document.addEventListener('mousemove', mouseMoveHandler, false);
function keyDownHandler(e) {
  e.keyCode == 39 && (rightPresed = true);
  e.keyCode == 37 && (leftPressed = true);
}
function keyUpHandler(e) {
  e.keyCode == 39 && (rightPresed = false);
  e.keyCode == 37 && (leftPressed = false);
}
function mouseMoveHandler(e) {
  const relativeX = e.clientX - canvas.offsetLeft;
  relativeX > 0 && relativeX < canvas.width && (paddleX = relativeX - paddleWidth / 2);
}
// END Events

// OTHER HELPERS
function hasLives() {
  lives && --lives;
  !lives && gameOver();
  resetBallAndPaddle();
}
function gameOver() {
  alert('Come on! -> focus you and you will defeat the machine!');
  resetBallAndPaddle();
  document.location.reload();
}
function resetBallAndPaddle() {
  x = canvas.width / 2;
  y = canvas.height - 30;
  dx = 2;
  dy = -2;
  paddleX = (canvas.width - paddleWidth) / 2;
}

function ifBallHitBrick() {
  score == brickColumnCount * brickRowCount && youWin();
  bricks.forEach(r => {
    r.forEach(block => {
      if (block.aLive === true) {
        // if Ball within the bundaries of the block -> then
        x > block.x && x < block.x + brickWidth && (y > block.y && y < block.y + brickHeight) && destroyBrick(block);
      }
    });
  });
}
function destroyBrick(brick) {
  brick.aLive = false;
  dy = -dy;
  score += 1;
}
function youWin() {
  alert('Awesomeness! You defeat the machine!');
  document.location.reload();
}

console.log(ctx);
