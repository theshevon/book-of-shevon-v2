import { expandSnake, onSnake } from './snake';
import type { Position } from './util';

let food: Position = { x: Math.floor(Math.random() * 25), y: Math.floor(Math.random() * 25) };

const EXPANSION_RATE = 5;

export function update() {
  if (onSnake(food)) {
    expandSnake(EXPANSION_RATE);
    food = getNewFoodPosition();
  }
}

export function render(gameBoard: HTMLElement) {

  const foodElem = document.createElement('div');
  foodElem.style.gridRowStart = food.y.toString();
  foodElem.style.gridColumnStart = food.x.toString();
  foodElem.classList.add('food');
  gameBoard.appendChild(foodElem);
}

function getNewFoodPosition() {
  let newPos = null;
  while (newPos === null || onSnake(newPos)) {
    newPos = { x: Math.floor(Math.random() * 25), y: Math.floor(Math.random() * 25) };
  }
  return newPos;
}
