import { render as renderFood, update as updateFood } from './food';
import { SNAKE_SPEED, render as renderSnake, snakeIntersection, update as updateSnake } from './snake';
import './main.css';

let gameBoard: HTMLElement | null;
let lastRenderTime = 0;
let gameOver = false;

function main(currentTime: number) {

  if (gameOver) {
    if (confirm('You lose. Press ok to restart')) {
      window.location.reload();
    }
    return;
  }

  window.requestAnimationFrame(main);

  const timeSinceLastRender = (currentTime - lastRenderTime) / 1000;
  if (timeSinceLastRender < 1 / SNAKE_SPEED) return;
  lastRenderTime = currentTime;

  update();
  render();
}

function update() {
  updateSnake();
  updateFood();
}

function render() {
  if (!gameBoard) {
    return;
  }
  gameBoard.innerHTML = '';
  renderSnake(gameBoard);
  renderFood(gameBoard);
  checkGameOver();
}

function checkGameOver() {
  gameOver = snakeIntersection();
}

export const startGame = () => {
  gameBoard = document.getElementById('game-board');
  window.requestAnimationFrame(main);
};
