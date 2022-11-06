// shamelessly copied over from https://github.com/Defernus/favicon-snake/blob/master/main.js with some modifications

type Position = { x: number, y: number };
type Direction = { x: -1 | 0 | 1, y: -1 | 0 | 1 };

const CANVAS_WIDTH = 8;
const CANVAS_HEIGHT = 8;
const BG_COLOUR = 'transparent';
const SNAKE_COLOUR = 'lightgreen';
const FOOD_COLOUR = 'red';
const SNAKE_SPEED = 5;

const INIT_DIRECTION: Direction = { x: 0, y: -1 };
const INIT_HEAD_X = 0;
const INIT_HEAD_Y = CANVAS_HEIGHT / 2;
const INIT_SCORE = 0;

let score = INIT_SCORE;
let foodX = 0;
let foodY = 0;

const canvas = document.createElement('canvas');
canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

let headX = INIT_HEAD_X;
let headY = INIT_HEAD_Y;

let snakeBody: Position[] = [];
let direction: Direction = INIT_DIRECTION;
let lastDirection: Direction = direction;

let lastRenderTime = 0;
let gameOver = false;

const handleInput = (e: KeyboardEvent) => {
  switch (e.key) {
    case 'ArrowUp':
    case 'w':
      if (lastDirection.y !== 0) break;
      direction = { x: 0, y: -1 };
      break;
    case 'ArrowDown':
    case 's':
      if (lastDirection.y !== 0) break;
      direction = { x: 0, y: 1 };
      break;
    case 'ArrowLeft':
    case 'a':
      if (lastDirection.x !== 0) break;
      direction = { x: -1, y: 0 };
      break;
    case 'ArrowRight':
    case 'd':
      if (lastDirection.x !== 0) break;
      direction = { x: 1, y: 0 };
      break;
  }
  lastDirection = direction;
};

const colourCanvas = () => {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  ctx.fillStyle = BG_COLOUR;
  ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  ctx.fillStyle = FOOD_COLOUR;
  ctx.fillRect(foodX, foodY, 1, 1);

  ctx.fillStyle = SNAKE_COLOUR;
  ctx.fillRect(headX, headY, 1, 1);

  snakeBody.forEach(part => {
    ctx.fillRect(part.x, part.y, 1, 1);
  });

};

const onSnake = (position: Position) => {
  return snakeBody.some(part => part.x === position.x && part.y === position.y);
};

const getNewFoodPosition = () => {
  let newPos = null;
  while (newPos === null || onSnake(newPos)) {
    newPos = { x: Math.floor(Math.random() * CANVAS_WIDTH), y: Math.floor(Math.random() * CANVAS_HEIGHT) };
  }
  foodX = newPos.x;
  foodY = newPos.y;
};

const setDocumentTitle = (title: string) => {
  document.title = title;
};

const updateHeadPosition = () => {

  if (direction.x === 0 && direction.y === -1) {
    headY -= 1;
  } else if (direction.x === 0 && direction.y === 1) {
    headY += 1;
  } else if (direction.x === -1 && direction.y === 0) {
    headX -= 1;
  } else if (direction.x === 1 && direction.y === 0) {
    headX += 1;
  }

  headX = ((headX % CANVAS_WIDTH) + CANVAS_WIDTH) % CANVAS_WIDTH;
  headY = ((headY % CANVAS_HEIGHT) + CANVAS_HEIGHT) % CANVAS_HEIGHT;
};

const handleFrame = async (currentTime: number) => {

  if (!gameOver) {
    window.requestAnimationFrame(handleFrame);
  }

  const timeSinceLastRender = (currentTime - lastRenderTime) / 1000;
  if (timeSinceLastRender < 1 / SNAKE_SPEED) return;
  lastRenderTime = currentTime;

  colourCanvas();

  let ateFood = false;
  if (headX === foodX && headY === foodY) {
    getNewFoodPosition();
    ateFood = true;
    score += 1;

    setDocumentTitle(`${ score } 🍎`);
  }

  snakeBody.push({ x: headX, y: headY });

  if (!ateFood) {
    snakeBody.splice(0, 1);
  }

  updateHeadPosition();

  if (snakeBody.some(part => part.x === headX && part.y === headY)) {
    gameOver = true;
    setDocumentTitle(`💀: ${score} 🍎`);
    const playAgain = confirm(`💀💀💀💀💀\nFinal score: ${score} 🍎\nPlay again?`);
    if (playAgain) {
      restart();
    }
  }

  setFavicon(canvas);
};

const setFavicon = (canvas: HTMLCanvasElement) => {
  const src = canvas.toDataURL();
  const link = document.createElement('link');
  const oldLink = document.getElementById('dynamic-favicon');
  link.id = 'dynamic-favicon';
  link.rel = 'shortcut icon';
  link.href = src;
  if (oldLink) {
    document.head.removeChild(oldLink);
  }
  document.head.appendChild(link);
};

const restart = () => {
  headX = 0;
  headY = CANVAS_HEIGHT / 2;
  direction = INIT_DIRECTION;
  snakeBody = [];
  score = INIT_SCORE;
  getNewFoodPosition();
  gameOver = false;
  window.requestAnimationFrame(handleFrame);
};

export const runGame = () => {
  window.addEventListener('keydown', handleInput);
  const staticFavicon = document.getElementById('favIcon');
  if (staticFavicon) {
    document.head.removeChild(staticFavicon);
  }
  getNewFoodPosition();
  window.requestAnimationFrame(handleFrame);
};
