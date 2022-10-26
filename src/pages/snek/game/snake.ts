import { getInputDirection } from './input';
import { Position } from './util';

export const SNAKE_SPEED = 5;

const snakeBody: Position[] = [{ x: 13, y: 13 }];
let newSegments = 0;

export function update() {

  addSegments();

  const inputDirection = getInputDirection();

  for (let i = snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i + 1] = { ...snakeBody[i] };
  }

  snakeBody[0].x += inputDirection.x;
  snakeBody[0].y += inputDirection.y;
}

export function render(gameBoard: HTMLElement) {

  snakeBody.forEach(segment => {
    const snakeElem = document.createElement('div');
    snakeElem.style.gridRowStart = segment.y.toString();
    snakeElem.style.gridColumnStart = segment.x.toString();
    snakeElem.classList.add('snake');
    gameBoard.appendChild(snakeElem);
  });
}

export function expandSnake(amount: number) {
  newSegments += amount;
}

export function onSnake(position: Position) {
  return snakeBody.some(segment => equalPositions(segment, position));
}

export function snakeIntersection() {
  let snakeHead = snakeBody[0];
  return snakeBody.slice(1).some(segment => equalPositions(segment, snakeHead));
}

function addSegments() {
  for (let i=0; i < newSegments; i++) {
    snakeBody.push({ ...snakeBody[snakeBody.length - 1] });
  }
  newSegments = 0;
}

function equalPositions(pos1: Position, pos2: Position) {
  return pos1.x === pos2.x && pos1.y === pos2.y;
}
